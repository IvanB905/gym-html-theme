document.addEventListener('DOMContentLoaded', function () {
    // Inicializa Swiper al cargar la página
    var mySwiper = new Swiper('.swiper-container', {
        // Configuraciones de Swiper
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});
