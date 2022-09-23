'use strict';

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalBtt = document.querySelector(".close-modal");
//const outside = document.querySelector(".")
const openModalBtt = document.querySelectorAll(".show-modal");

console.log(openModalBtt);

closeModalBtt.addEventListener("click", closeModal)
overlay.addEventListener("click", closeModal)

function closeModal() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

function openModal() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

for (let i = 0; i < openModalBtt.length; i++) {
    openModalBtt[i].addEventListener("click", openModal);
}

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden"))
        closeModal();
});
