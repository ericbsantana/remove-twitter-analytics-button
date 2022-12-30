const observer = new MutationObserver(() => {
  const analyticsLinks = document.querySelectorAll('a[href$="analytics"]');
  if (analyticsLinks.length > 0) {
    for (const analyticLink of analyticsLinks) {
      analyticLink.closest("div").style.display = "none";
    }
  }
});

observer.observe(document, {
  childList: true,
  subtree: true,
});
