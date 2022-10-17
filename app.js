const menuIcon = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const closeBtn = document.querySelector('.close-btn-container').children[0];
const headerContent = document.querySelector('#header_content');

menuIcon.addEventListener('click', () => {
  navMenu.style.transform = 'translateX(0)';
  headerContent.style.height = '100%';
});

closeBtn.addEventListener('click', () => {
  navMenu.style.transform = 'translateX(-500%)';
  headerContent.style.height = '60px';
});

console.log(headerContent);
