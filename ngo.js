// Script to handle dropdowns
document.querySelectorAll('nav ul li').forEach((item) => {
    item.addEventListener('mouseover', function() {
        const dropdown = this.querySelector('.dropdown');
        if (dropdown) {
            dropdown.style.display = 'block';
        }
    });

    item.addEventListener('mouseout', function() {
        const dropdown = this.querySelector('.dropdown');
        if (dropdown) {
            dropdown.style.display = 'none';
        }
    });
});
