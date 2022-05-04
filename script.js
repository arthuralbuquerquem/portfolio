// SUBIR E DESCER MENU
function menuSubir() {
    let headerMargin = document.querySelector('.headerContent');
    let headerBg = document.querySelector('#header');

    if(window.scrollY < 100) {
        headerMargin.style.margin = '20px 0';
        headerBg.style.background = 'rgba(0, 0, 0, 0.5)';
    } else {
        headerMargin.style.margin = '0';
        headerBg.style.background = 'rgba(0, 0, 0, 0.2)';
    }
}   setInterval(menuSubir, 100);

// MENU COM ACTIVE
function aboutMe(){
    let aboutMe = document.querySelector('#menuAboutMe');
    let projects = document.querySelector('#menuProjects');
    let know = document.querySelector('#menuKnow');
    let contact = document.querySelector('#menuContact');
    aboutMe.classList.add('active')
    projects.classList.remove('active')
    know.classList.remove('active')
    contact.classList.remove('active')
}

function projects(){
    let aboutMe = document.querySelector('#menuAboutMe');
    let projects = document.querySelector('#menuProjects');
    let know = document.querySelector('#menuKnow');
    let contact = document.querySelector('#menuContact');
    aboutMe.classList.remove('active')
    projects.classList.add('active')
    know.classList.remove('active')
    contact.classList.remove('active')
}

function know(){
    let aboutMe = document.querySelector('#menuAboutMe');
    let projects = document.querySelector('#menuProjects');
    let know = document.querySelector('#menuKnow');
    let contact = document.querySelector('#menuContact');
    aboutMe.classList.remove('active')
    projects.classList.remove('active')
    know.classList.add('active')
    contact.classList.remove('active')
}

function contact(){
    let aboutMe = document.querySelector('#menuAboutMe');
    let projects = document.querySelector('#menuProjects');
    let know = document.querySelector('#menuKnow');
    let contact = document.querySelector('#menuContact');
    aboutMe.classList.remove('active')
    projects.classList.remove('active')
    know.classList.remove('active')
    contact.classList.add('active')
}

function home(){
    let aboutMe = document.querySelector('#menuAboutMe');
    let projects = document.querySelector('#menuProjects');
    let know = document.querySelector('#menuKnow');
    let contact = document.querySelector('#menuContact');
    aboutMe.classList.remove('active')
    projects.classList.remove('active')
    know.classList.remove('active')
    contact.classList.remove('active')
}