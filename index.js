"use strict";

const loader = document.querySelector(".loader");

window.addEventListener("load", () => {
    loader.classList.add("fondu-out");
})

const audio = new Audio("./music.mp3");
audio.loop = true;
const btn = document.querySelector("#play");
const imageBtn = document.querySelector("#playImg");

let clickStatus = false;
btn.addEventListener("click", () => {
    if (!clickStatus) {
        imageBtn.src = "./pause.png";
        audio.play();
        clickStatus = true;
    } else if (clickStatus) {
        imageBtn.src = "./play.png";
        audio.pause();
        clickStatus = false;
    }
})
