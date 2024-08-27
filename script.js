const thumbs = document.querySelectorAll('.thumb li');
const infoSlider = document.querySelectorAll('.info-slider');
const imgSlider = document.querySelectorAll('.img-slider');
const items = document.querySelectorAll('.item');

let index = 0;

thumbs.forEach((thumb, ind) => {
    thumb.addEventListener('click', () => {

        document.querySelector('.thumb .selected').classList.remove('selected');
        thumb.classList.add('selected');
  

        index = ind;

        infoSlider.forEach(slide => {
            slide.style.transform = `translateY(${index * -100}%)`;
        });
        imgSlider.forEach(slide => {
            slide.style.transform = `translateX(${index * -100}%)`;
        });

        document.querySelector('.item.active').classList.remove('active');
        items[index].classList.add('active');

    });

    });

const sr = ScrollReveal ({
    distance: '80px',
    duration: 2700,
    reset: true
});

sr.reveal('.info-box', {delay:200, origin:'left'});
sr.reveal('.img-box', {delay:350, origin:'top'});

let menu = document.querySelector('#menu-icon');
let sidebar = document.querySelector('.thumb');
 
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    sidebar.classList.toggle('open');
};
const list = document.querySelectorAll('.list');
function activelink(){
    list.forEach((item) => 
        item.classList.remove('active'));
    this.classList.add('active');

}

list.forEach((item) => 
item.addEventListener('click',activelink));