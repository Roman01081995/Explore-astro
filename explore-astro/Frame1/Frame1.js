document.addEventListener("DOMContentLoaded", function() {
    var body = document.querySelector('body');
    var height = document.documentElement.scrollHeight;
    body.style.background = `linear-gradient(
      to bottom,
      #D9ACFF 0%,
      #AE89FF 5%,
      #D9ACFF 15%,
      #AE89FF 40%,
      #D9ACFF 65%,
      #AE89FF 100%
    )`;
    body.style.backgroundSize = `100% ${height}px`;
  });

  document.addEventListener('DOMContentLoaded', function () {
    const logos = document.querySelectorAll('.thumbnails .logo');
    const activeLine = document.querySelector('.active-line');
    const thumbnails = document.querySelector('.thumbnails');

    // Спочатку встановлюємо ширину активної лінії до першої іконки
    const firstLogoRect = logos[0].getBoundingClientRect();
    const thumbnailsRect = thumbnails.getBoundingClientRect();
    activeLine.style.left = `${firstLogoRect.left - thumbnailsRect.left}px`;
    activeLine.style.width = `${firstLogoRect.width}px`;

    logos.forEach((logo) => {
        logo.addEventListener('click', () => {
            logos.forEach(l => l.classList.remove('active'));
            logo.classList.add('active');
            
            // Вираховуємо нову ширину активної лінії
            const logoRect = logo.getBoundingClientRect();
            const width = logoRect.right - firstLogoRect.left;
            
            activeLine.style.width = `${width}px`; // Розширюємо лінію до нової іконки
        });
    });

      // Робота з бургер-меню
  const burgerMenu = document.querySelector('.burger-menu');
  const navButtons = document.querySelector('.nav-buttons');

  burgerMenu.addEventListener('click', () => {
      navButtons.classList.toggle('open');
  });
});
