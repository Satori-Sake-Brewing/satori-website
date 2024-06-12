document.addEventListener('DOMContentLoaded', function() {
    fetch('partials/footer.html')
      .then(response => response.text())
      .then(data => {
        document.querySelector('footer').innerHTML = data;
        updateCurrentYear();
      });
  });
  
  function updateCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
  }