import { MainSlider, MiniSlider, VideoPlayer, Difference, Form, Mask } from "./modules";

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({ container: '.page', buttons: ".next", logoButtons: ".sidecontrol > a" });
    slider.render();

    const player = new VideoPlayer('.showup .play', '.overlay');
    player.init();

    const showUpSlider = new MiniSlider({
        container: '.showup__content-slider',
        prev: '.showup__prev',
        next: '.showup__next',
        activeClass: 'card-active',
        animate: true
    })
    showUpSlider.init();

    const modulesSlider = new MiniSlider({
        container: '.modules__content-slider',
        prev: '.modules__info-btns .slick-prev',
        next: '.modules__info-btns .slick-next',
        activeClass: 'card-active',
        animate: true,
        autoplay: true
    })
    modulesSlider.init();

    const feedSlider = new MiniSlider({
        container: '.feed__slider',
        prev: '.feed__slider .slick-prev',
        next: '.feed__slider .slick-next',
        activeClass: 'feed__item-active',
    })
    feedSlider.init();

    new Difference('.officerold', '.officernew', '.officer__card-item').init();

    new Form().init();

    new Mask('input[name="phone"]').init();
});