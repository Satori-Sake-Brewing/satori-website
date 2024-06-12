document.addEventListener('DOMContentLoaded', function() {
    fetch('../partials/header.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('header-container').innerHTML = data;
        updateActiveLink();
      });
  });
  
  function updateActiveLink() {
    const activeLink = document.body.getAttribute('data-active-link');
    const navLinks = document.querySelectorAll('.nav-link');
  
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === activeLink) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
}