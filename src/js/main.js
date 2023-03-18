import { Slider, VideoPlayer } from "./modules";

window.addEventListener('DOMContentLoaded', () => {
    const slider = new Slider('.page', ".next", ".sidecontrol > a");
    slider.render();

    const player = new VideoPlayer('.showup .play', '.overlay');
    player.init();
});