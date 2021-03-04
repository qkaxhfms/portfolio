// variable
const header = document.querySelector('.header');
const headerLogo = document.querySelector('.header__logo');
const btnMore = document.querySelector('.button__more');
const btnTop = document.querySelector('.footer__button-top');

//function logoClick
const logoClick = () => {
    document.querySelector('body').classList.toggle('page__background--dark');
};
headerLogo.addEventListener('click', logoClick);

//function showList
const showList = () => {
    let listSlide = document.querySelector('.section__list-more');
    btnMore.classList.toggle('active');
    listSlide.classList.toggle('active');

    !btnMore.classList.contains('active')
        ? (btnMore.innerHTML = '더보기')
        : (btnMore.innerHTML = '간단히보기');
};
btnMore.addEventListener('click', showList);

//function gotoTop
const gotoTop = () => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
    });
};
btnTop.addEventListener('click', gotoTop);

//all scrolling
window.onscroll = () => {
    // scroll
    const scrollStart = 1;
    const scrollStandard = 100;

    let scroll = this.scrollY;
    let footer = document.querySelector('.footer');
    let footerTop = footer.offsetTop;

    // scrollStart
    scroll > scrollStart
        ? header.classList.add('scroll')
        : header.classList.remove('scroll');

    // scrollStandard
    if (scroll > scrollStandard) {
        btnTop.classList.add('on');
        headerLogo.classList.add('header__background--transparent');
    } else {
        btnTop.classList.remove('on');
        headerLogo.classList.remove('header__background--transparent');
    }

    // .footerTop
    if (scroll > footerTop / 2) {
        btnTop.classList.add('fixed');
    } else {
        btnTop.classList.remove('fixed');
    }
};
