document.oncontextmenu = document.body.oncontextmenu = function() {return false;}

// SUBIR E DESCER MENU
function menuSubir() {
    let headerMargin = document.querySelector('.headerContent');
    let headerBg = document.querySelector('#header');
    let menuBackground = document.querySelector('nav ul');

    if(window.scrollY < 100) {
        headerMargin.style.margin = '20px 0';
        headerBg.style.background = 'rgba(0, 0, 0, 0.5)';
        menuBackground.style.top = '101px';
    } else {
        headerMargin.style.margin = '0';
        headerBg.style.background = 'rgba(13, 34, 53, 1)';
        menuBackground.style.top = '61px';
    }
}   setInterval(menuSubir, 100);

// MENU COM ACTIVE
/* function activeMenu(){
    let aboutMe = document.querySelector('#menuAboutMe');
    let projects = document.querySelector('#menuProjects');
    let know = document.querySelector('#menuKnow');
    let contact = document.querySelector('#menuContact');
    
    if (window.scrollY < 700) {
        aboutMe.classList.remove('active');
        projects.classList.remove('active');
        know.classList.remove('active');
        contact.classList.remove('active');
    } else if (window.scrollY > 700 && window.scrollY < 1400) {
        aboutMe.classList.add('active');
        projects.classList.remove('active');
        know.classList.remove('active');
        contact.classList.remove('active');
    } else if (window.scrollY > 1400 && window.scrollY < 2070) {
        aboutMe.classList.remove('active');
        projects.classList.add('active');
        know.classList.remove('active');
        contact.classList.remove('active');
    } else if (window.scrollY > 2070 && window.scrollY < 2400) {
        aboutMe.classList.remove('active');
        projects.classList.remove('active');
        know.classList.add('active');
        contact.classList.remove('active');
    } else {
        aboutMe.classList.remove('active');
        projects.classList.remove('active');
        know.classList.remove('active');
        contact.classList.add('active');
    }
}   setInterval(activeMenu, 100); */

const items = document.querySelectorAll('.headerContent a');
items.forEach((item) => {
    item.addEventListener('click', ()=> {
        document.querySelector('.headerContent a.active').classList.remove('active');
        item.classList.add('active')
    })
})


// MENU MOBILE
const menuMobile = ()=> {
    let menu = document.querySelector('#menu')

    if(menu.style.display == 'flex') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'flex'
    }
}
document.querySelector('.menuMobile').addEventListener('click', menuMobile)


document.querySelector('.')