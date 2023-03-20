import { Slider } from './slider'

export class MiniSlider extends Slider {
    constructor(obj) {
        super(obj);
    }

    decorateSlides() {
        Array.from(this.slides).forEach(slide => {
            slide.classList.remove(this.activeClass);
            if (this.animate) {
                slide.querySelector('.card__title').style.opacity = '0.4';
                slide.querySelector('.card__controls-arrow').style.opacity = '0';
            }
        })
        this.slides[0].classList.add(this.activeClass);
        if (this.animate) {
            this.slides[0].querySelector('.card__title').style.opacity = '1';
            this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
        }
    }

    nextSlide(){
        this.container.appendChild(this.slides[0]);
        this.decorateSlides();
    }

    bindTriggers() {
        this.next.addEventListener('click', () => this.nextSlide());

        this.prev.addEventListener('click', () => {
            const active = this.slides[this.slides.length - 1];
            this.container.insertBefore(active, this.slides[0]);
            this.decorateSlides();
        })
    }

    init() {
        this.container.style.cssText = `
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;
        align-items: flex-start;
        `;
        this.bindTriggers();
        this.decorateSlides();

        if(this.autoplay){
            setInterval(() => this.nextSlide(), 5000);
        }
    }
}