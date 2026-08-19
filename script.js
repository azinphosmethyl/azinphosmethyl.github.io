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
function updateClock() {
    const dataElement = document.getElementById('data');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    dataElement.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call to display the clock immediately