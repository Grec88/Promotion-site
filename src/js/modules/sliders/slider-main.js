import { Slider } from "./slider";

export class MainSlider extends Slider {
    constructor(buttons, logoButtons){
        super(buttons, logoButtons);
    }

    showSlides(n) {
        if (n > this.slides.length) {
            this.slideIndex = 1;
        }

        if (n < 1) {
            this.slideIndex = this.slides.length;
        }

        Array.from(this.slides).forEach(slide => {
            slide.style.display = "none";
        });

        this.slides[this.slideIndex - 1].style.display = "block";
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }
    

    render() {
        this.hanson = document.querySelector('.hanson');
        this.hanson.style.opacity = '0';
        this.buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                if (e.target.closest('.difference') != null) {
                    this.plusSlides(1);
                    const timerId = setInterval(() => { 
                        this.hanson.style.opacity = '1';
                        this.hanson.classList.add('animated', 'slideInUp');
                 }, 3000);
                    setTimeout(() => { clearInterval(timerId) }, 4000);
                } else {
                    this.plusSlides(1);
                }
            });
        });

        this.logoButtons.forEach(logoButton => {
            logoButton.addEventListener('click', (e) => {
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            });
        })

        this.showSlides(this.slideIndex);
    }
}
