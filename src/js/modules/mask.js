export class Mask {

    constructor(selector) {
        this.inputs = document.querySelectorAll(selector);
    }

    setCursorPosition(pos, elem) {
        elem.focus();

        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos)
        } else if (elem.createTextRange) {
            const range = elem.createTextRange();

            range.collapse(true);
            range.moveEnd('charcater', pos);
            range.moveStart('charcater', pos);
            range.select()
        }
    };

    createMask(event) {
        const elem = event.target;
        const matrix = '+1 (___) ___ __ __';
        let i = 0;
        const def = matrix.replace(/\D/g, '');
        let val = elem.value.replace(/\D/g, '');

        if (def.length >= val.length) {
            val = def;
        }

        elem.value = matrix.replace(/./g, (a) => {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++)
                : i >= val.length ? '' : a;
        })

        if (event.type === 'blur') {
            if (elem.value.length == 2) {
                elem.value = '';
            } else {
                this.setCursorPosition(elem.value.length, elem)
            }
        }
    }
    init() {
        this.inputs.forEach(input => {
            input.addEventListener('input', this.createMask);
            input.addEventListener('blur', this.createMask);
            input.addEventListener('focus', this.createMask);
        })
    }
};