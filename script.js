window.onload = function() {
    var navItems = document.querySelectorAll('nav ul li a');

    navItems.forEach(function(item) {
        item.addEventListener('mouseover', function() {
            navItems.forEach(function(i) {
                if (i !== item) {
                    i.style.color = 'rgba(170, 170, 175, .88)';
                }
            });
        });

        item.addEventListener('mouseout', function() {
            navItems.forEach(function(i) {
                if (i !== item) {
                    i.style.backgroundColor = '';
                    i.style.color = '';
                }
            });
        });
    });
};
function aktualizujDate() {
    document.getElementById('data').innerText = new Date().toLocaleString();
  }
  setInterval(aktualizujDate, 1000);