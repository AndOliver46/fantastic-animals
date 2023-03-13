function initNavMenu(){
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

function showContent(index){
  tabContent.forEach((item) => {
    item.classList.remove('ativo');
  });
  tabContent[index].classList.add('ativo');
}

tabMenu.forEach((item, index) => {
  item.addEventListener('click', function(){
    showContent(index);
  });
});
}

function initAccordion(){
  const accordionList = document.querySelectorAll('.js-accordion dt');

  function activeAccordion(){
    this.classList.toggle('ativo');
    this.nextElementSibling.classList.toggle('ativo');
  }
  
  accordionList.forEach((item) => {
    item.addEventListener('click', activeAccordion);
  })
}

function initScrollSuave(){
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

function scrollToSection(event){
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href)
  window.scrollTo({
    top: section.offsetTop,
    behavior: 'smooth'
  });
  
  //Ou
  // section.scrollIntoView({
  //   behavior: 'smooth',
  //   block: 'start'
  // });
}

linksInternos.forEach(item => {
  item.addEventListener('click', scrollToSection);
});
}

const sections = document.querySelectorAll('.js-scroll');

if(sections.length > 0) {
  const windowMetade = window.innerHeight * 0.7;

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - windowMetade;
      if(sectionTop <= 0){
        section.classList.add('ativo');
      }
    });
  }
  window.addEventListener('scroll', animaScroll);
  animaScroll();
}

initNavMenu();
initAccordion();
initScrollSuave();





