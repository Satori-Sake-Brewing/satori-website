document.addEventListener('DOMContentLoaded', function() {
    fetch('../partials/header.html')
      .then(response => response.text())
      .then(data => {
        document.querySelector('header').innerHTML = data;
        updateActiveLink();
      });
  });
  
  function updateActiveLink() {
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
  
    navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });
  }