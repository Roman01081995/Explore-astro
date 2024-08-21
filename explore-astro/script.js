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

