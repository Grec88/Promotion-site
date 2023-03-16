import { Slider } from "./modules";

window.addEventListener('DOMContentLoaded', () => {
    const slider = new Slider('.page', ".next", ".sidecontrol > a");
    slider.render();

});