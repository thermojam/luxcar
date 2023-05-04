document.getElementById('main-action').onclick = function () {
    document.getElementById('cars').scrollIntoView({behavior: 'smooth'});
}
document.getElementById('play').onclick = function () {
    document.getElementById('play-video').scrollIntoView({behavior: 'smooth'});
}


let productInput = document.getElementById('product-input');
let addToCardButtons = document.getElementsByClassName('btn-add-to-card');

for (let i = 0; i < addToCardButtons.length; i++) {
    addToCardButtons[i].onclick = function (e) {
        productInput.value = e.target.parentElement.previousElementSibling.previousElementSibling.innerText
        document.getElementsByClassName('order')[0].scrollIntoView({behavior: 'smooth'});
    }
}


document.getElementById('cars-action').onclick = function () {
    if (document.getElementById('name').value === '') {
        alert('Заполните поле "имя"!');
    } else if (document.getElementById('phone').value === '') {
        alert('Заполните поле "телефон"!');
    } else if (document.getElementsByClassName('order-input').value === '') {
        alert('Заполните поле "автомобиль"!');
    } else {
        alert('Спасибо за заявку, ожидайте звонка от нашего менеджера!');
    }
};


let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 40,
    freeMode: true,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 40,
        slideShadows: false,
    },
});