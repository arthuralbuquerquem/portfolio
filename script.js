function menuSubir() {
    let headerMargin = document.querySelector('.headerContent')
    let headerBg = document.querySelector('#header');

    if(window.scrollY < 100) {
        headerMargin.style.margin = '20px 0';
        headerBg.style.background = 'rgba(0, 0, 0, 0.5)';
    } else {
        headerMargin.style.margin = '0';
        headerBg.style.background = 'rgba(0, 0, 0, 0.2)';
    }
}
setInterval(menuSubir, 100)
