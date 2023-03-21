export class Slider {
    constructor({ container = null, buttons = null, logoButtons = null,
        next = null, prev = null, activeClass = "", animate, autoplay } = {}) {
        this.container = document.querySelector(container);
        if (this.container) {
            container === '.feed__slider' ? this.slides = document.getElementsByClassName('feed__item') :
            this.slides = this.container.children;
        }
        this.buttons = document.querySelectorAll(buttons);
        this.logoButtons = document.querySelectorAll(logoButtons);
        this.slideIndex = 1;
        prev === '.prevmodule' ? this.prev = document.querySelectorAll(prev) :
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.activeClass = activeClass;
        this.animate = animate;
        this.autoplay = autoplay;
    }

}