import { Slider } from "./slider";

export class MainSlider extends Slider {
    constructor(buttons, logoButtons, prev) {
        super(buttons, logoButtons, prev);
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

        if (document.querySelector('.hanson')) {
            this.hanson = document.querySelector('.hanson');
            this.hanson.style.opacity = '0';
            if (n == 3) {
                this.hanson.classList.add('animated');
                setTimeout(() => {
                    this.hanson.style.opacity = '1';
                    this.hanson.classList.add('slideInUp');
                }, 3000);
            } else {
                this.hanson.classList.remove('slideInUp');
            }
        }

        this.slides[this.slideIndex - 1].style.display = "block";
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }
    
    bindTriggers(){
        this.buttons.forEach(button => {
            button.addEventListener('click', () => {
                this.plusSlides(1);
            });
        });

        this.logoButtons.forEach(logoButton => {
            logoButton.addEventListener('click', (e) => {
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            });
        })

        if (this.prev) {
            this.prev.forEach(prev => {
                prev.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.plusSlides(-1);
                })
            })
        }

        if (this.next) {
            this.next.forEach(next => {
                prev.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.plusSlides(1);
                })
            })
        }
    }

    render() {
        if (this.slides) {
            this.showSlides(this.slideIndex);
            this.bindTriggers();
        }
    }
}
