const card = document.getElementById("card");
const modal = document.getElementById("valentineModal");
const closeBtn = document.getElementById("closeBtn");
const letterText = document.getElementById("letterText");
const heartsContainer = document.querySelector(".hearts");

const message = "Happy Valentines Day! Sending hugs, smiles, and love to the best family ever this Valentine’s Day! Maligayang Araw ng Puso mga walang bitaw HAHAHAHAHAH";

card.addEventListener("click", function () {
    modal.style.display = "flex";
    typeWriter();
});

closeBtn.addEventListener("click", closeModal);

// Close when clicking outside paper
modal.addEventListener("click", function (e) {
    if (e.target === modal) {
        closeModal();
    }
});

function closeModal() {
    modal.style.display = "none";
    letterText.innerHTML = "";
}

// Typewriter Effect
function typeWriter() {
    let i = 0;
    function typing() {
        if (i < message.length) {
            letterText.innerHTML += message.charAt(i);
            i++;
            setTimeout(typing, 40);
        }
    }
    typing();
}

// Floating Hearts Generator
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 500);



    const slides = document.getElementById("slides");
    const images = document.querySelectorAll(".slides img");
    let index = 0;

    function autoSlide() {
        index++;

        if (index >= images.length) {
            index = 0;
        }

        slides.style.transform = "translateX(-" + index * 100 + "%)";
    }

    setInterval(autoSlide, 3000);



document.addEventListener("DOMContentLoaded", function () {

    const slidesContainer = document.querySelector(".slides");
    const images = document.querySelectorAll(".slides img");

    let index = 0;

    function autoSlide() {
        index++;

        if (index >= images.length) {
            index = 0;
        }

        slidesContainer.style.transform =
            "translateX(-" + index * 100 + "%)";
    }

    setInterval(autoSlide, 3000);

});