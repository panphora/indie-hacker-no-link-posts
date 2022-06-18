let searchInterval = setInterval(function () {
  if (!document.documentElement.classList.contains("nprogress-busy")) {
    document.querySelectorAll(".feed-item__url-domain").forEach(el => el.closest(".feed-item").style.display = "none");
    clearInterval(searchInterval);
  }
}, 200);