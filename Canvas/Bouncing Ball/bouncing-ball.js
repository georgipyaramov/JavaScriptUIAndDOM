var canvasElement = document.getElementById("canvas"),
    canvasContext = canvasElement.getContext("2d");

var x = 20,
    y = 40,
    speedX = 2,
    speedY = 2;

function animationFrame() {
    canvasContext.clearRect(0, 0, canvasElement.width, canvasElement.height);
    canvasContext.beginPath();
    canvasContext.arc(x, y, 20, 0, Math.PI * 2);
    canvasContext.fill();
    canvasContext.stroke();

    x+=speedX;
    y+=speedY;


    if (x <= 0 + 20 || x >= canvasElement.width - 20) {
        speedX *= -1;
        //speedY *= -1;
    }
    if (y <= 0 + 20 || y >= canvasElement.height - 20) {
        speedY *= -1;
    }
    requestAnimationFrame(animationFrame);
}

animationFrame();