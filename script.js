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


// MARCAR CADA MENU
const items = document.querySelectorAll('.headerContent a');
items.forEach((item) => {
    item.addEventListener('click', ()=> {
        document.querySelector('.headerContent a.active').classList.remove('active');
        item.classList.add('active')
    })
})


// MENU MOBILE
const menuMobile = () => {
    let menu = document.querySelector('#menu')

    if(menu.style.display == 'flex') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'flex'
    }
}

document.querySelector('.menuMobile').addEventListener('click', menuMobile)