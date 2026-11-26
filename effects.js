{
  const heroCursor = document.querySelector("#home .cursor-light");
  if (heroCursor) {
    window.addEventListener("mousemove", (event) => {
      heroCursor.style.left = event.clientX + "px";
      heroCursor.style.top = event.clientY + "px";
    }, { passive: true });
  }

  const lessonCursor = document.querySelector(".pillar-access-cursor-glow");
  if (lessonCursor) {
    const lessonPage = lessonCursor.parentElement;
    lessonPage.addEventListener("pointermove", (event) => {
      if (event.pointerType !== "mouse") return;
      lessonCursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      lessonCursor.style.opacity = "1";
    }, { passive: true });
    lessonPage.addEventListener("pointerleave", () => {
      lessonCursor.style.opacity = "0";
    });
  }

  const confettiLayers = document.querySelectorAll(".gold-confetti");
  if (confettiLayers.length) {
    const colors = ["#ca9b4c", "#edbd55", "#fff8e8", "#fff"];
    const threshold = 0.3;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        const layer = entry.target.querySelector(".gold-confetti");
        if (entry.intersectionRatio < threshold) {
          layer.replaceChildren();
        } else if (!layer.childElementCount) {
          for (let index = 0; index < 24; index++) {
            const particle = document.createElement("span");
            const fromLeft = index % 2 === 0;
            const spread = (fromLeft ? 1 : -1) * (36 + (index * 29) % 112);
            particle.className = "gold-confetti-particle";
            particle.style.left = fromLeft ? "15%" : "85%";
            particle.style.backgroundColor = colors[index % colors.length];
            particle.style.borderRadius = index % 3 === 0 ? "50%" : "2px";
            particle.style.setProperty("--spread", spread + "px");
            particle.style.setProperty("--lift", -(104 + (index * 37) % 155) + "px");
            particle.style.setProperty("--spin", spread * 4 + "deg");
            particle.style.setProperty("--delay", (index * 71) % 660 + "ms");
            layer.append(particle);
          }
        }
      }
    }, { threshold });

    for (const layer of confettiLayers) observer.observe(layer.parentElement);
  }

  const summitSection = document.getElementById("fobet-peak-story");
  if (summitSection) {
    const stage = summitSection.querySelector(".fps-stage");
    const svg = stage.querySelector(".fps-svg");
    const burst = document.getElementById("fpsBurstParticles");
    const routes = [
      { path: "fpsOrganicPath", shadow: "fpsLeftShadow", runner: "fpsRunnerLeft" },
      { path: "fpsPaidPath", shadow: "fpsRightShadow", runner: "fpsRunnerRight" },
    ].map(({ path, shadow, runner }) => {
      const line = document.getElementById(path);
      const length = line.getTotalLength();
      line.style.strokeDasharray = String(length);
      line.style.strokeDashoffset = String(length);
      line.style.opacity = "1";
      return {
        line,
        length,
        shadow: document.getElementById(shadow),
        runner: document.getElementById(runner),
      };
    });

    const particleCount = window.innerWidth < 600 ? 26 : 56;
    for (let index = 0; index < particleCount; index++) {
      const dot = document.createElement("span");
      const angle = Math.random() * Math.PI * 2;
      const distance = 65 + Math.random() * 155;
      dot.className = "fps-burst-dot";
      dot.style.setProperty("--x", Math.cos(angle) * distance + "px");
      dot.style.setProperty("--y", Math.sin(angle) * distance + "px");
      dot.style.setProperty("--duration", 0.7 + Math.random() * 0.7 + "s");
      burst.append(dot);
    }

    const firstLabels = stage.querySelectorAll(".fps-step-1, .fps-step-3");
    const secondLabels = stage.querySelectorAll(".fps-step-2, .fps-step-4");

    function revealSummit() {
      document.getElementById("fpsExplosion").classList.add("boom");
      burst.classList.add("active");
      document.getElementById("fpsSummit").classList.add("is-boom");
      for (const ridge of stage.querySelectorAll(".fps-final-mountain, .fps-final-ridge")) {
        ridge.classList.add("reveal");
      }
      for (const route of routes) {
        route.shadow.style.opacity = "1";
        route.runner.style.opacity = "0";
      }
      stage.querySelector(".fps-atmosphere").animate(
        [
          { opacity: 0.15, transform: "translate(-50%, -50%) scale(0.8)" },
          { opacity: 0.75, transform: "translate(-50%, -50%) scale(1.18)" },
          { opacity: 0.25, transform: "translate(-50%, -50%) scale(1)" },
        ],
        { duration: 1100, easing: "cubic-bezier(0.16, 1, 0.3, 1)", fill: "forwards" },
      );
    }

    function animateSummit() {
      const start = performance.now();
      for (const route of routes) route.runner.style.opacity = "1";

      function frame(now) {
        const progress = Math.min((now - start) / 3800, 1);
        const eased = 1 - Math.pow(1 - progress, 2.15);
        const stageRect = stage.getBoundingClientRect();
        const matrix = svg.getScreenCTM();

        for (const route of routes) {
          route.line.style.strokeDashoffset = String(route.length * (1 - eased));
          const point = route.line.getPointAtLength(route.length * eased);
          const screen = matrix ? point.matrixTransform(matrix) : stageRect;
          route.runner.style.left = screen.x - stageRect.left + "px";
          route.runner.style.top = screen.y - stageRect.top + "px";
          route.runner.style.transform = "translate(-50%, -50%)";
        }
        if (eased >= 0.24) firstLabels.forEach((label) => label.classList.add("visible"));
        if (eased >= 0.62) secondLabels.forEach((label) => label.classList.add("visible"));

        if (progress < 1) {
          requestAnimationFrame(frame);
        } else {
          setTimeout(revealSummit, 90);
        }
      }

      requestAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect();
        animateSummit();
      }
    }, { threshold: 0.25 });
    observer.observe(summitSection);
  }
}
