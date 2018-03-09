// https://codeincomplete.com/posts/javascript-tetris/

"use strict";

document.querySelector("#toggle-drawer").addEventListener("click", function() {
    document.body.classList.toggle("drawer-open");
});

document.querySelector("#content").addEventListener("click", function() {
    document.body.classList.remove("drawer-open");
});

const TIME_SPAN = document.querySelector("#time");
const CANVAS = document.getElementById("canvas");
const CTX = CANVAS.getContext("2d");
const DIR = {UP: 0, RIGHT: 1, DOWN: 2, LEFT: 3,  MIN: 0, MAX: 3};
const SPEED = {start: 0.6, decrement: 0.005, min: 0.1};
const INVALID = {};

let I = {size: 4, blocks: [0x0F00, 0x2222, 0x00F0, 0x4444], color: "#FAFAD2"};
let J = {size: 3, blocks: [0x44C0, 0x8E00, 0x6440, 0x0E20], color: "#00FFFF"};
let L = {size: 3, blocks: [0x4460, 0x0E80, 0xC440, 0x2E00], color: "#7FFFD4"};
let O = {size: 2, blocks: [0xCC00, 0xCC00, 0xCC00, 0xCC00], color: "#FFC0CB"};
let S = {size: 3, blocks: [0x06C0, 0x8C40, 0x6C00, 0x4620], color: "#E6E6FA"};
let T = {size: 3, blocks: [0x0E40, 0x4C40, 0x4E00, 0x4640], color: "#FFA07A"};
let Z = {size: 3, blocks: [0x0C60, 0x4C80, 0xC600, 0x2640], color: "#B0C4DE"};

let width = 10;
let height = 20;

let dx, dy,        
    blocks,        
    moves,       
    playing,       
    dt,            
    current,      
    next,          
    score,         
    vscore,        
    lines,         
    step;  

let timer; 
let min = 0;
let sec = 0; 
function showTime() {
    timer = setInterval(function () {
        TIME_SPAN.textContent = min + " min " + sec + " sec";
        sec++;
        if (sec === 60) {
            min++;
            sec = 0;
        }
    }, 1000);
}
  
function random(min, max) { 
    return (min + (Math.random() * (max - min)));            
}
  
function randomChoice(choices) { 
    return choices[Math.round(random(0, choices.length-1))]; 
}        

let tetros = [];
function renderTetro() {
    if (tetros.length == 0) {
        tetros = [I,I,I,J,J,J,L,L,L,O,O,O,S,S,S,T,T,T,Z,Z,Z];
    }    
    let type = tetros.splice(random(0, tetros.length-1), 1)[0];
    return {type: type, dir: DIR.UP, x: Math.round(random(0, width - type.size)), y: 0};
}

function eachblock(type, x, y, dir, fn) {
    let bit, result, lines = 0, col = 0, blocks = type.blocks[dir];
    for(bit = 0x8000; bit > 0; bit = bit >> 1) {
        if (blocks & bit) {
            fn(x + col, y + lines);
        }
        if (++col === 4) {
            col = 0;
            lines++;
        }
    }
}

function filled(type, x, y, dir) {
    let result = false
    eachblock(type, x, y, dir, function(x, y) {
        if ((x < 0) || (x >= width) || (y < 0) || (y >= height) || getBlock(x,y)) {
            result = true;
        }
    });
    return result;
}

function playGame() {
    document.addEventListener("keydown", keydown);
    window.addEventListener("resize", resize);
    let last = new Date().getTime();
    let now = new Date().getTime();
    function frame() {
        now = new Date().getTime();
        update(Math.min(1, (now - last) / 1000.0));
        draw();
        last = now;
        requestAnimationFrame(frame, CANVAS);
    }
    resize();
    reset();  
    frame();  
}

function resize() {
    CANVAS.width = CANVAS.clientWidth;  
    CANVAS.height = CANVAS.clientHeight; 
    dx = CANVAS.width / width; 
    dy = CANVAS.height / height; 
    INVALID.board = true; 
    INVALID.next = true; 
}

function keydown(evt) {
    evt.preventDefault();
    if (playing) {
        switch(evt.keyCode) {
            case 37:   
                moves.push(DIR.LEFT);   
                break;
            case 39: 
                moves.push(DIR.RIGHT);  
                break;
            case 38:     
                moves.push(DIR.UP);     
                break;
            case 40:   
                moves.push(DIR.DOWN);   
                break;
        }
    }
}

function play() { 
    document.getElementById("text").textContent = "Good luck!";
    showTime();
    reset();          
    playing = true;  
}

function end() { 
    setVisualScore(); 
    clearInterval(timer);
    playing = false; 
    alert("Game Over!");
    if (confirm("Would you like to play again?") === true) {
        location.reload();
    }
}

function setVisualScore(n) { 
    vscore = n || score; 
    INVALID.score  = true; 
}

function setScore(n) { 
    score = n; 
    setVisualScore(n);
}

function setLines(n) { 
    lines = n; 
    step = Math.max(SPEED.min, SPEED.start - (SPEED.decrement*lines)); 
    INVALID.lines  = true; 
}

function getBlock(x,y) { 
    return (blocks && blocks[x] ? blocks[x][y] : null); 
}

function setBlock(x,y,type) { 
    blocks[x] = blocks[x] || []; 
    blocks[x][y] = type; 
    INVALID.board  = true; 
}

function currentTetro(tetro) { 
    current = tetro || renderTetro(); 
    INVALID.board  = true;    
}

function nextTetro(tetro) { 
    next = tetro || renderTetro(); 
    INVALID.next   = true; 
}
    
function reset() {
    dt = 0;
    moves = [];
    blocks = [];
    INVALID.board  = true; 
    setLines(0);
    setScore(0);
    currentTetro(next);
    nextTetro();
}

function update(idt) {
    if (playing) {
        if (vscore < score) {
            setVisualScore(vscore + 1);
        }
        handle(moves.shift());
        dt = dt + idt;
        if (dt > step) {
            dt = dt - step;
            drop();
        }
    }
}

function handle(action) {
    switch(action) {
        case DIR.LEFT:  
            move(DIR.LEFT);  
            break;
        case DIR.RIGHT: 
            move(DIR.RIGHT); 
            break;
        case DIR.UP:    
            rotate();        
            break;
        case DIR.DOWN:  
            drop();          
            break;
    }
}

function move(dir) {
    let x = current.x, y = current.y;
    switch(dir) {
        case DIR.RIGHT: 
            x = x + 1; 
            break;
        case DIR.LEFT:  
            x = x - 1; 
            break;
        case DIR.DOWN:  
            y = y + 1; 
            break;
    }
    if (!filled(current.type, x, y, current.dir)) {
        current.x = x;
        current.y = y;
        INVALID.board  = true; 
        return true;
    } else {
        return false;
    }
}

function rotate() {
    let newdir = (current.dir == DIR.MAX ? DIR.MIN : current.dir + 1);
    if (!filled(current.type, current.x, current.y, newdir)) {
        current.dir = newdir;
        INVALID.board  = true; 
    }
}

function drop() {
    if (!move(DIR.DOWN)) {
        score += 10;
        eachblock(current.type, current.x, current.y, current.dir, function(x, y) {
            setBlock(x, y, current.type);
        });
        clearLines();
        currentTetro(next);
        nextTetro(renderTetro());
        moves = [];
        if (filled(current.type, current.x, current.y, current.dir)) {
            end();
        }
    }
}

function clearLines() {
    let x, y, complete, n = 0;
    for(y = height; y > 0 ; --y) {
        complete = true;
        for(x = 0 ; x < width ; ++x) {
            if (!getBlock(x, y)) {
                complete = false;
            }
        }
        if (complete) {
            clearLine(y);
            y = y + 1;
            n++;
        }
        if (n > 0) {
        setLines(lines + n); 
        score += (100 * Math.pow(2, n-1)); 
        }
    }
}

function clearLine(n) {
    let x, y;
    for(y = n ; y >= 0 ; --y) {
        for(x = 0 ; x < width ; ++x)
        setBlock(x, y, (y == 0) ? null : getBlock(x, y-1));
    }
}

function draw() {
    CTX.save();
    CTX.translate(0.5, 0.5); 
    drawBoard();
    if (INVALID.score) {
        document.getElementById("score").textContent = ("000" + score);
        INVALID.score = false;
    }
    CTX.restore();
}

function drawBoard() {
    if (INVALID.board) {
        CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
        if (playing) {
            drawTetro(CTX, current.type, current.x, current.y, current.dir);
        }
        let x, y, block;
        for(y = 0 ; y < height; y++) {
            for (x = 0 ; x < width ; x++) {
                if (block = getBlock(x,y)) {
                CTX.fillStyle = block.color;
                CTX.fillRect(x*dx, y*dy, dx, dy);
                CTX.strokeRect(x*dx, y*dy, dx, dy);
                }
            }
        }
        CTX.strokeRect(0, 0, width*dx - 1, height*dy - 1); 
        INVALID.board = false;
    }
}

function drawTetro(ctx, type, x, y, dir) {
    eachblock(type, x, y, dir, function(x, y) {
        ctx.fillStyle = type.color;
        ctx.fillRect(x*dx, y*dy, dx, dy);
        ctx.strokeRect(x*dx, y*dy, dx, dy);
    });
}

playGame();
document.getElementById("start").addEventListener("click", function() {
    if (!playing) {
        play();
    } 
});
