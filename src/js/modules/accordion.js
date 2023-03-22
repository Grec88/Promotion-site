export class Accordion {
    constructor(textButton, downloadButton) {
        this.textButtons = document.querySelectorAll(textButton);
        this.downloadButtons = document.querySelectorAll(downloadButton);
    }

    bindTriggers() {
        if (this.textButtons && this.downloadButtons) {
            this.textButtons.forEach(textButton => {
                textButton.addEventListener('click', (e) => {
                    const textElem = e.target.closest(".module__info-show").nextElementSibling;
                    if (textElem.style.display === "none" || textElem.style.display === "") {
                        textElem.style.display = "flex";
                    } else {
                        textElem.style.display = "none";
                    }
                })
            })

            this.downloadButtons.forEach(downloadButton => {
                downloadButton.addEventListener('click', () => {
                    const url = "src/assets/sample.pdf";

                    fetch(url, {
                        method: 'GET',
                    })
                        .then((response) => response.blob())
                        .then((blob) => {
                            const url = URL.createObjectURL(new Blob([blob]));
                            const link = document.createElement('a');
                            link.href = url;
                            link.setAttribute('download', 'file.pdf');
                            document.body.appendChild(link);
                            link.click();
                            link.remove();
                        })
                })
            })
        }
    }

    init() {
        this.bindTriggers();
    }
}