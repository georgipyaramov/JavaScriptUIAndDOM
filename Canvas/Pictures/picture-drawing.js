var canvasElement = document.getElementById("canvas"),
    canvasContext = canvasElement.getContext("2d");


canvasContext.fillStyle = '#90CAD7';
canvasContext.strokeStyle = '#358194';
canvasContext.lineWidth = 3;

//first wheel
canvasContext.beginPath();
canvasContext.arc(110, 420, 50, 0, 2*Math.PI);
canvasContext.closePath();
canvasContext.fill();
canvasContext.stroke();

//second wheel
canvasContext.beginPath();
canvasContext.arc(310, 420, 50, 0, 2*Math.PI);
canvasContext.closePath();
canvasContext.fill();
canvasContext.stroke();

//frame back parts
canvasContext.beginPath();
canvasContext.moveTo(110, 420);
canvasContext.lineTo(200, 415);
canvasContext.lineTo(295, 340);
canvasContext.lineTo(170, 340);
canvasContext.closePath();
canvasContext.stroke();

//frame front parts
canvasContext.beginPath();
canvasContext.moveTo(310, 420);
canvasContext.lineTo(289, 310);
canvasContext.lineTo(255, 320);
canvasContext.moveTo(289, 310);
canvasContext.lineTo(315, 285);
canvasContext.stroke();

//pedals wheel
canvasContext.beginPath();
canvasContext.arc(200, 415, 17, 0, 2*Math.PI);
canvasContext.closePath();
canvasContext.stroke();

//pedals
canvasContext.beginPath();
canvasContext.moveTo(175, 375);
canvasContext.lineTo(190, 400);
canvasContext.moveTo(210, 430);
canvasContext.lineTo(225, 455);
canvasContext.moveTo(200, 415);
canvasContext.lineTo(160, 320);
canvasContext.moveTo(130, 320);
canvasContext.lineTo(190, 320);
canvasContext.stroke();

//head
canvasContext.beginPath();
canvasContext.arc(180, 220, 60, 0, 2*Math.PI);
canvasContext.closePath();
canvasContext.fill();
canvasContext.stroke();

//nose
canvasContext.strokeStyle = '#1F515C';
canvasContext.beginPath();
canvasContext.moveTo(175, 230);
canvasContext.lineTo(160, 230);
canvasContext.lineTo(175, 200);
canvasContext.stroke();

canvasContext.save();

//eyes
canvasContext.scale(1, 0.65);
canvasContext.beginPath();
canvasContext.arc(150, 310, 10, 0, Math.PI * 2);
canvasContext.stroke();

canvasContext.beginPath();
canvasContext.arc(200, 310, 10, 0, Math.PI * 2);
canvasContext.stroke();

canvasContext.restore();
canvasContext.save();

canvasContext.fillStyle = '#1F515C';
canvasContext.scale(0.5, 1);
canvasContext.beginPath();
canvasContext.arc(291, 202, 5, 0, Math.PI * 2);
canvasContext.fill();

canvasContext.beginPath();
canvasContext.arc(390, 202, 5, 0, Math.PI * 2);
canvasContext.fill();

canvasContext.restore();

canvasContext.strokeStyle = '#000000';
canvasContext.fillStyle = '#396693';

canvasContext.save();

//hat

canvasContext.scale(1, 0.20);
canvasContext.beginPath();
canvasContext.arc(180, 840, 70, 0, 2*Math.PI);
canvasContext.fill();
canvasContext.stroke();

canvasContext.restore();

canvasContext.beginPath();
canvasContext.moveTo(140, 72);
canvasContext.lineTo(140, 162);
canvasContext.bezierCurveTo(155, 175, 205, 175, 220, 162);
canvasContext.lineTo(220, 72);
canvasContext.fill();
canvasContext.stroke();

canvasContext.save();

canvasContext.scale(1, 0.3);
canvasContext.beginPath();
canvasContext.arc(180, 240, 40, 0, 2*Math.PI);
canvasContext.fill();
canvasContext.stroke();

canvasContext.restore();
canvasContext.save();

canvasContext.beginPath();
canvasContext.strokeStyle = '#358194';
canvasContext.lineWidth = 5;
canvasContext.rotate(10 * Math.PI / 180);
canvasContext.scale(1, 0.3);
canvasContext.arc(210, 740, 24, 0, 2*Math.PI);
canvasContext.stroke();

canvasContext.restore();

canvasContext.fillStyle = '#975B5B';

//house
canvasContext.fillRect(500, 180, 260, 200);
canvasContext.strokeRect(500, 180, 260, 200);

//windows
canvasContext.fillStyle = '#000';
canvasContext.fillRect(520, 210, 45, 25);
canvasContext.fillRect(568, 210, 45, 25);
canvasContext.fillRect(520, 238, 45, 25);
canvasContext.fillRect(568, 238, 45, 25);

canvasContext.fillRect(645, 210, 45, 25);
canvasContext.fillRect(693, 210, 45, 25);
canvasContext.fillRect(645, 238, 45, 25);
canvasContext.fillRect(693, 238, 45, 25);

canvasContext.fillRect(645, 285, 45, 25);
canvasContext.fillRect(693, 285, 45, 25);
canvasContext.fillRect(645, 313, 45, 25);
canvasContext.fillRect(693, 313, 45, 25);

//roof
canvasContext.fillStyle = '#975B5B';
canvasContext.beginPath();
canvasContext.moveTo(500, 180);
canvasContext.lineTo(630,40);
canvasContext.lineTo(760, 180);
canvasContext.closePath();
canvasContext.fill();
canvasContext.stroke();

//chimney
canvasContext.beginPath();
canvasContext.moveTo(690, 150);
canvasContext.lineTo(690, 80);
canvasContext.lineTo(710, 80);
canvasContext.lineTo(710, 150);
canvasContext.fill();
canvasContext.stroke();

canvasContext.save();

//chimney top
canvasContext.beginPath();
canvasContext.scale(1, 0.3);
canvasContext.arc(700, 265, 10, 0, Math.PI * 2);
canvasContext.fill();
canvasContext.stroke();

canvasContext.restore();

//door
canvasContext.beginPath();
canvasContext.moveTo(530, 380);
canvasContext.lineTo(530, 310);
canvasContext.bezierCurveTo(540, 290, 590, 290, 600, 310);
canvasContext.lineTo(600, 380);
canvasContext.moveTo(565, 295);
canvasContext.lineTo(565, 380);
canvasContext.stroke();

canvasContext.beginPath();
canvasContext.arc(555, 350, 4, 0, Math.PI * 2);
canvasContext.stroke();
canvasContext.beginPath();
canvasContext.arc(575, 350, 4, 0, Math.PI * 2);
canvasContext.stroke();







