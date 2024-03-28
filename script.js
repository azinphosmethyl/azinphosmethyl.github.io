document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector("body").classList.add("loaded");
    }, 10)
  });
  function aktualizujDate() {
    document.getElementById('data').innerText = new Date().toLocaleString();
  }
  setInterval(aktualizujDate, 1000);
  document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        document.title = ":(((";
    } else {
        document.title = ":)))";
    }
});