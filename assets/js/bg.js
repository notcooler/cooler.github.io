// Initialising the canvas
var canvas = document.getElementById("bg");
ctx = canvas.getContext('2d');


// Setting the width and height of the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Setting up the letters
var letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
letters = letters.split('');

// Setting up sizes
var fontSize;
var columns;
var drops;

function setSizes(){
    // Setting up the columns
    fontSize = 10
    columns = canvas.width / fontSize;

// Setting up the drops
    drops = [];
    for (var i = 0; i < columns; i++) {
        drops[i] = 1;
    }
}
setSizes();


// Setting up the draw function
function draw() {
    ctx.fillStyle = 'rgba(49, 46, 46, 0.2)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < drops.length; i++) {
        var text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = '#0f0';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > canvas.height/2.5 && Math.random() > .95) {
            drops[i] = 0;
        }
    }
}

// OnResize
window.addEventListener('resize', function(event){
    setSizes();
});

// Loop the animation
setInterval(draw, 33);