/** 
 * Handle Sliders
 */

$('.js-slider .swiper').each(function (index, slider) {
    const $this = $(this);

    const prevEl = $this.parent().find(".swiper-button-prev")[0];
    const nextEl = $this.parent().find(".swiper-button-next")[0];

    const swiper = new Swiper(slider, {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl,
            prevEl,
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1400: {
                slidesPerView: 3,
                spaceBetween: 26,
            },
            1500: {
                slidesPerView: 4,
            },
        },
    });

     // disable slider on 1 slide only

    let slidesCount = 0;
    const $slides = $this.find('.swiper-slide');

    $slides.each(function(){
        const slide = $(this);

        if (! slide.hasClass('swiper-slide-duplicate')) {

            slidesCount += 1;
        };
    });

    if (slidesCount === 1) {

        swiper.disable();
        $this.addClass('is-disabled');
    };
});