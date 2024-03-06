const myButtonMobile = document.getElementById('myButtonMobile');
const myButtonDesktop = document.getElementById('myButtonDesktop');

myButtonMobile.addEventListener('click', () => {
  myButtonMobile.classList.add('clicked');
  window.location.href = "https://darksatella.github.io/8-3-Class12T1-2024-Mobile/";
});

myButtonDesktop.addEventListener('click', () => {
  myButtonDesktop.classList.add('clicked');
  window.location.href = "https://darksatella.github.io/8-3-Class12T1-2024/";
});