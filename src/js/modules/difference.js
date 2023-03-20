export class Difference {
    constructor(oldOfficer, newOfficer, items) {
        this.oldOfficer = document.querySelector(oldOfficer);
        this.newOfficer = document.querySelector(newOfficer);
        this.items = items;
        this.oldCounter = 0;
        this.newCounter = 0;
        this.oldCards = this.oldOfficer.querySelectorAll(items);
        this.newCards = this.newOfficer.querySelectorAll(items);
        this.officers = [this.oldOfficer, this.oldCounter, this.oldCards,
        this.newOfficer, this.newCounter, this.newCards];
    };

    bindTriggers(officer, counter, cards) {
        officer.querySelector('.plus').addEventListener('click', () => {
            if (counter !== cards.length - 2) {
                cards[counter].style.display = 'flex';
                counter++;
            } else {
                cards[counter].style.display = 'flex';
                cards[counter + 1].classList.add('animated', "fadeOut");
                cards[counter + 1].style.display = 'none';
            }
        })
    }

    hideItems(cards) {
        cards.forEach((card, i, arr) => {
            if (i !== arr.length - 1) {
                card.style.display = "none"
                card.classList.add('animated', "fadeIn");
            }
        });
    };

    init() {

        for (let i = 0; i < this.officers.length; i++) {
            if (i === 0 || i === 3) {
                this.hideItems(this.officers[i + 2]);
                this.bindTriggers(this.officers[i], this.officers[i + 1], this.officers[i + 2]);
            }
        }
    }
}