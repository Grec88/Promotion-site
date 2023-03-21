export class Form {
    constructor() {
        this.forms = document.querySelectorAll('form');
        this.inputs = document.querySelectorAll('input');
        this.phoneInputs = document.querySelectorAll('input[name="phone"]');
        this.emailInputs = document.querySelectorAll('input[type="email"]');
        this.dateInput = document.querySelector('input[name="date"]');
        this.message = {
            loading: 'Загрузка',
            success: 'Спасибо! Мы скоро свяжимся с вами.',
            failure: 'Что-то пошло не так...'
        };
    }
    changeDateInput(){
        this.dateInput.addEventListener('click', (e) => {
            e.target.placeholder = "";
        })
    }

    checkInputs(inputs, reg) {
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                input.value = input.value.replace(reg, '');
            })
        })
    }

    async postData(url, data) {
        document.querySelector('.status').textContent = this.message.loading;
        const res = await fetch(url, {
            method: "POST",
            body: data
        });
        return await res.text();
    };

    clearInputs() {
        this.inputs.forEach(input => {
            input.value = "";
        })
    }
    formPost() {
        this.forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();

                const statusMessage = document.createElement('div');
                statusMessage.classList.add('status');
                form.appendChild(statusMessage);

                const formData = new FormData(form);

                const url = 'https://randomuser.me/api';

                this.postData(url, formData)
                    .then(res => {
                        statusMessage.textContent = this.message.success;
                    })
                    .catch(() => statusMessage.textContent = this.message.failure)
                    .finally(() => {
                        this.clearInputs();
                        setTimeout(() => {
                            statusMessage.remove();
                        }, 5000);
                    });
            })
        })
    }
    init(){
        this.formPost();
        this.checkInputs(this.emailInputs, /[^a-z 0-9 @ .]/ig);
        this.checkInputs(this.phoneInputs, /\D/);
        this.changeDateInput();
    }
};