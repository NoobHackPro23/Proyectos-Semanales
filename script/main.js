function climaCity(){
    window.location.href = "ClimaCity/index.html";
}

let currentImageIndex = 0;

function changeImage(direction) {
    const images = document.querySelectorAll(".weather");
    images[currentImageIndex].classList.remove("visible");
    images[currentImageIndex].classList.add("invisible");

    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;

    images[currentImageIndex].classList.remove("invisible");
    images[currentImageIndex].classList.add("visible");
}

document.getElementsByClassName("weather").addEventListener("click", function () {
    let pende = document.getElementsByClassName('weather');
    pende.style.opacity = "0.5";
});