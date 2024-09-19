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

  const firstLogoRect = logos[0].getBoundingClientRect();
  const thumbnailsRect = thumbnails.getBoundingClientRect();
  activeLine.style.left = `${firstLogoRect.left - thumbnailsRect.left}px`;
  activeLine.style.width = `${Math.max(firstLogoRect.width, 160)}px`;

  logos.forEach((logo) => {
      logo.addEventListener('click', () => {
          logos.forEach(l => l.classList.remove('active'));
          logo.classList.add('active');
          
          const logoRect = logo.getBoundingClientRect();
          const width = logoRect.right - firstLogoRect.left;
          
          activeLine.style.width = `${Math.max(width, 160)}px`; 
      });
  });

  const burgerMenu = document.querySelector('.burger-menu');
  const navButtons = document.querySelector('.nav-buttons');

  burgerMenu.addEventListener('click', () => {
      navButtons.classList.toggle('open');
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const inputField = document.querySelector('.input-field');

  inputField.addEventListener('input', function() {
      let value = inputField.value;

      if (value.length === 2 || value.length === 5) {
          inputField.value += '.';
      }

      if (value.length > 10) {
          inputField.value = value.slice(0, 10);
      }
  });
});