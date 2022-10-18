
/* eslint-disable linebreak-style */
const menuIcon = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const closeBtn = document.querySelector('.close-btn-container').children[0];
const headerContent = document.querySelector('#header_content');
const linksItem1 = document.querySelector('.links-item1');
const linksItem2 = document.querySelector('.links-item2');
const linksItem3 = document.querySelector('.links-item3');

menuIcon.addEventListener('click', () => {
  navMenu.style.transform = 'translateX(0)';
  headerContent.style.height = '100%';
});

linksItem1.addEventListener('click', () => {
  navMenu.style.transform = 'translateX(-500%)';
  headerContent.style.height = '60px';
});
linksItem2.addEventListener('click', () => {
  navMenu.style.transform = 'translateX(-500%)';
  headerContent.style.height = '60px';
});
linksItem3.addEventListener('click', () => {
  navMenu.style.transform = 'translateX(-500%)';
  headerContent.style.height = '60px';
});


closeBtn.addEventListener('click', () => {
  navMenu.style.transform = 'translateX(-500%)';
  headerContent.style.height = '60px';
});

console.log(headerContent);
