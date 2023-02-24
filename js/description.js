const fundamentally = document.querySelector('.fundamentally');
const cards = document.querySelectorAll('.cards');
const descriptionAll = document.querySelectorAll('.descriptionAll');
const returnText = document.querySelectorAll('.return-text');
console.log(cards);

const openClick = (event) =>{
    let length = descriptionAll.length;
    descriptionAll.forEach(services =>{
        for(let i= 0; i < length; i++ ){
            if(JSON.stringify(event.target.dataset) == JSON.stringify(services.dataset)){
                services.classList.toggle('descriptionNone');
                fundamentally.classList.toggle('descriptionNone');
                window.scrollTo(0,0);
                break;
            }
        }
       });
};

cards.forEach(a => {
    a.addEventListener('click', openClick);
});

////////////////////////////
const closeClick = () => {
    let length = returnText.length;
    descriptionAll.forEach(servicesExit =>{
        for(let i= 0; i < length; i++ ){
            if(servicesExit.classList.contains('descriptionNone')){
            servicesExit.classList.remove('descriptionNone');
            fundamentally.classList.toggle('descriptionNone');
            } else {
            servicesExit.classList.add('descriptionNone');
            fundamentally.classList.toggle('descriptionNone');
            break;
            }
        }
       });
};

returnText.forEach(b => {
    b.addEventListener('click', closeClick);
});

/////////////////////////
// const menuTextActive = document.querySelectorAll('.menu__item');

// const clickActive = (event) => {
//  event.target.classList.add('menu-active');
// };
// menuTextActive.forEach(click =>{
//     click.addEventListener('click', clickActive);
// });


const HeaderBurger = document.querySelector('.header__burger');
const menuList = document.querySelector('.menu-list');
const body = document.querySelector('body');

HeaderBurger.addEventListener('click', function() {
    HeaderBurger.classList.toggle('active');
    menuList.classList.toggle('active');
    body.classList.toggle('lock');
});