const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider(){
    slider.forEach(item => item.classList.remove('on'));
}

function showSlider(){
    slider[currentSlide].classList.add('on');
}


setInterval(function nextSlider(){
    hideSlider();
    if(currentSlide === slider.length -1){
        currentSlide = 0
    } else{
        currentSlide ++
    }
    showSlider()
}, 7000);

function nextSlider(){
    hideSlider();
    if(currentSlide === slider.length -1){
        currentSlide = 0
    } else{
        currentSlide ++
    }
    showSlider()
}

function prevSlider(){
    hideSlider();
    if(currentSlide === 0){
        currentSlide = slider.length -1
    } else{
        currentSlide --
    }
    showSlider()
}

btnNext.addEventListener('click', nextSlider);
btnPrev.addEventListener('click', prevSlider);

/* script do nav para tela grande(pc), mudanças de estilo e navegação em si */

const itemOne = document.getElementById('item-one');
const itemTwo = document.getElementById('item-two');
const itemThree = document.getElementById('item-three');
const itemFour = document.getElementById('item-four');

itemOne.onclick = function itemOneAddStyle(){
    itemOne.classList.add('menu-item-select');
    itemTwo.classList.remove('menu-item-select');
    itemThree.classList.remove('menu-item-select');
    itemFour.classList.remove('menu-item-select');
}
itemTwo.onclick = function itemTwoAddStyle(){
    itemTwo.classList.add('menu-item-select');
    itemOne.classList.remove('menu-item-select');
    itemThree.classList.remove('menu-item-select');
    itemFour.classList.remove('menu-item-select');
}
itemThree.onclick = function itemThreeAddStyle(){
    itemThree.classList.add('menu-item-select');
    itemTwo.classList.remove('menu-item-select');
    itemOne.classList.remove('menu-item-select');
    itemFour.classList.remove('menu-item-select');
}
itemFour.onclick = function itemOneAddStyle(){
    itemFour.classList.add('menu-item-select');
    itemTwo.classList.remove('menu-item-select');
    itemThree.classList.remove('menu-item-select');
    itemOne.classList.remove('menu-item-select');
}

/* Mostrando o menu do mobile quando clicar no ícone de menu */

const btnMenuMobile = document.getElementById('btn-menu-mobile');

btnMenuMobile.onclick = function showMenu(){
    document.getElementById("nav-mobile").style.display = "flex";
    document.getElementById("content-pc").style.display = "none"
    // document.getElementById("body").style.overflow = "hidden"
}

const closeMenuMobile = document.getElementById('close-menu-mobile');

closeMenuMobile.onclick = function hiddenMenu(){
    document.getElementById("nav-mobile").style.display = "none";
    document.getElementById("content-pc").style.display = "block"
    document.getElementById("body").style.overflow = "auto"
}



