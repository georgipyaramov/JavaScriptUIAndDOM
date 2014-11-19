var currentSlide = 0;

function setSlide() {
    $('#slide-container')
        .html(slides[currentSlide]);
}

function nextSlide() {
    currentSlide++;
    if (currentSlide == 3) {
        currentSlide = 0;
    }
    setSlide();
}

function previousSlide() {
    currentSlide--;
    if (currentSlide == -1) {
        currentSlide = 2;
    }
    setSlide();
}

function slideShow() {
    console.log(currentSlide);
    nextSlide();
}

$('#next-slide-btn').on('click', nextSlide);

$('#prev-slide-btn').on('click', previousSlide);

$('#slide-show-btn').on('click',
    setInterval(slideShow, 5000));


setSlide();