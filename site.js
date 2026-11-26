{
  const header = document.querySelector(".site-header");
  const sectionLinks = header.querySelectorAll('.nav-menu a[href^="#"]');

  function updateCurrentSection() {
    for (const link of sectionLinks) {
      if (link.hash === window.location.hash) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    }
  }

  function updateHeader() {
    header.classList.toggle("scrolled", window.scrollY > 50);
  }

  updateCurrentSection();
  updateHeader();
  window.addEventListener("hashchange", updateCurrentSection);
  window.addEventListener("scroll", updateHeader, { passive: true });

  const backToTop = document.querySelector(".scroll-top-btn");
  backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const footerYear = document.querySelector("[data-footer-year]");
  if (footerYear) footerYear.textContent = new Date().getFullYear();

  let wistiaPlayerRequested = false;
  for (const video of document.querySelectorAll("template[data-lazy-wistia]")) {
    const frame = video.parentElement;
    function loadVideo() {
      if (!wistiaPlayerRequested) {
        wistiaPlayerRequested = true;
        const script = document.createElement("script");
        script.src = "https://fast.wistia.com/player.js";
        script.async = true;
        document.head.append(script);
      }
      frame.replaceChildren(video.content.cloneNode(true));
    }

    if (!("IntersectionObserver" in window)) {
      loadVideo();
      continue;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      loadVideo();
    }, { rootMargin: video.dataset.lazyWistia });
    observer.observe(frame);
  }

  if (document.querySelector("base")) {
    const skipLink = document.querySelector(".clone-skip-link");
    skipLink.href = window.location.pathname + window.location.search + "#main-content";
  }

  const faq = document.getElementById("faq");
  faq?.addEventListener("click", (event) => {
    const pressed = event.target.closest(".faq-question");
    if (!pressed) return;

    const wasOpen = pressed.getAttribute("aria-expanded") === "true";
    for (const question of faq.querySelectorAll(".faq-question")) {
      const isOpen = question === pressed && !wasOpen;
      question.setAttribute("aria-expanded", String(isOpen));
      question.closest(".faq-item").classList.toggle("active", isOpen);
      question.querySelector("i").classList.toggle("fa-plus", !isOpen);
      question.querySelector("i").classList.toggle("fa-minus", isOpen);
      question.nextElementSibling.hidden = !isOpen;
    }
  });

  const milestones = document.getElementById("growth-numbers");
  const motionButton = milestones?.querySelector('button[aria-controls="growth-numbers-rails"]');
  motionButton?.addEventListener("click", () => {
    const paused = milestones.dataset.paused === "false";
    milestones.dataset.paused = String(paused);
    motionButton.setAttribute("aria-pressed", String(paused));
    const icon = motionButton.querySelector("i");
    icon.classList.toggle("fa-play", paused);
    icon.classList.toggle("fa-pause", !paused);
    motionButton.replaceChildren(icon, paused ? "Play animation" : "Pause animation");
  });

  const imageTemplate = document.getElementById("image-dialog-template");
  for (const trigger of document.querySelectorAll("[data-image-title]")) {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      const dialog = imageTemplate.content.firstElementChild.cloneNode(true);
      const title = trigger.dataset.imageTitle;
      const src = trigger.dataset.imageSrc || trigger.getAttribute("href");
      const image = dialog.querySelector("img");
      const download = dialog.querySelector("a");
      const originalOverflow = document.body.style.overflow;

      dialog.setAttribute("aria-label", title);
      dialog.querySelector(".clone-media-heading span").textContent = title;
      image.src = src;
      image.alt = title;
      download.href = src;

      function closeImage() {
        dialog.close();
        dialog.remove();
        document.body.style.overflow = originalOverflow;
      }

      dialog.querySelector("button").addEventListener("click", closeImage);
      dialog.addEventListener("cancel", (cancelEvent) => {
        cancelEvent.preventDefault();
        closeImage();
      });
      dialog.addEventListener("click", (clickEvent) => {
        if (clickEvent.target === dialog) closeImage();
      });

      document.body.append(dialog);
      document.body.style.overflow = "hidden";
      dialog.showModal();
    });
  }

  const enquiryTemplate = document.getElementById("enquiry-template");
  const initialPlan = new URLSearchParams(window.location.search).get("plan");
  if (enquiryTemplate && ["setup", "training", "done-for-you"].includes(initialPlan)) {
    const overlay = enquiryTemplate.content.firstElementChild.cloneNode(true);
    const form = overlay.querySelector("form");
    const select = form.elements.namedItem("plan");
    const originalOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;

    function closeEnquiry() {
      window.removeEventListener("keydown", handleEnquiryKeys);
      document.body.style.overflow = originalOverflow;
      overlay.remove();
      previousFocus?.focus();
    }

    function handleEnquiryKeys(event) {
      if (event.key === "Escape") {
        closeEnquiry();
      } else if (event.key === "Tab") {
        const controls = overlay.querySelectorAll("a[href], button, input, select, textarea");
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) closeEnquiry();
    });
    overlay.querySelector(".fobet-close-btn").addEventListener("click", closeEnquiry);
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const fields = new FormData(form);
      const name = fields.get("name");
      const subject = "Business growth enquiry: " + name;
      const message = [
        "Hi Shweta,",
        "",
        "I would like to discuss my annual sales goal.",
        "",
        "Name: " + name,
        "Email: " + fields.get("email"),
        "Phone: " + fields.get("phone"),
        "Website: " + (fields.get("socialLink") || "Not supplied"),
        "Service: " + select.selectedOptions[0].dataset.title,
        "Annual sales goal: " + (fields.get("goal") || "Let’s discuss"),
        "",
      ].join("\n");
      window.location.href =
        form.action + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(message);

      const success = document.getElementById("enquiry-success-template").content.cloneNode(true);
      success.querySelector("[data-enquiry-name]").textContent = name || "there";
      form.replaceWith(success);
    });

    select.value = initialPlan;
    window.addEventListener("keydown", handleEnquiryKeys);
    document.body.style.overflow = "hidden";
    document.querySelector(".fobet-page-root").append(overlay);
    form.querySelector("input").focus();
  }
}
