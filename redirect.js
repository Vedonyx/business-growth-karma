{
  const destination = new URL(document.getElementById("redirect-destination").href);
  destination.search = window.location.search;
  if (window.location.protocol !== "file:") {
    destination.pathname = destination.pathname.replace(/index\.html$/, "");
  }
  window.location.replace(destination.href);
}
