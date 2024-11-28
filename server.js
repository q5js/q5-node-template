require('q5');

new Q5();

createCanvas(200, 200);
background('silver');

for (let i = 0; i < 18; i++) {
	rect(i * 10, i * 10, 30, 30);
}

canvas.save('sketch.png');
log('saved sketch.png');

process.exit();
