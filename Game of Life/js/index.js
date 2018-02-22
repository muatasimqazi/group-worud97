let DIM = 200;
let PIX = 2;
let CAN = qs("canvas")
let CTX = CAN.getContext("2d");
let grid = [];
let timer = null;
let boundless = true;
let speed = 20;
CAN.setAttribute("width", DIM*PIX + "px");
CAN.setAttribute("height", DIM*PIX + "px");

for (let y = 0; y < DIM; y++) {
    let row = [];
    for (let x = 0; x < DIM; x++) {    
        row[x] = [x, y, 0]
    };
    grid[y] = row
}

function qs(q){
    return document.querySelector(q);
}

function makeGrid(type){
    let val = type;
    for (let y = 0; y < DIM; y++) {
        for (let x = 0; x < DIM; x++) {
            if (type === 2){
                val = (Math.floor(Math.random()*2))}
            setCell(x, y, val);
        }
    }
    render();
} makeGrid(2)


function mod(n, m) {
    return ((n % m) + m) % m;
} function getCell(x, y){
    if (boundless) {
        return (grid [mod (y, DIM-1)] [mod(x, DIM-1)] [2]);
    } else if (x >= 0 && x < DIM && y >= 0 && y < DIM) {
        return (grid [y] [x] [2]);
    } else {
        return 0;
    }
}

function setCell(x, y, state){ 
    grid [y] [x] [2] = state;
}

function render() { //draw the contents of the grid onto a canvas
    CTX.clearRect(0, 0, DIM*PIX, DIM*PIX); //this should clear the canvas ahead of each redraw
    for (var y = 0; y < DIM; y++) { //iterate through rows
        for (var x = 0; x < DIM; x++) { //iterate through columns
            if (getCell(x,y) === 1) {
                CTX.fillStyle = "#0342CC";
                CTX.fillRect(x*PIX, y*PIX, PIX, PIX);
            }
        }
    }
}

render();

function step(){
    grid = grid.map(row => row.map(cell => 
        [cell[0], cell[1], rule(cell)]))
    render();
}

function getNeighbors(x, y) {
    let n = 0
    for (let i = 0; i < neighbors.length; i++) {
        if (getCell(x + neighbors [i] [0], y + neighbors[i] [1]) === 1){
            n++;
        }
    }
    return n;
}

function rule (cell) {
    let state = cell [2];
    let n = getNeighbors(cell[0], cell[1]);
    if (state == 1){
        return (onRule [n]);
    } else {
        return (offRule [n]);
    }
}

//let offRule = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]//classic
//let onRule = [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//let offRule = [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]//boxy
//let onRule = [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]
//let offRule = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]//dotty
//let onRule = [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]
//let offRule = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]//retro
//let onRule = [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
//let offRule = [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]//woozily
//let onRule = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
//let offRule = [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]//maze
//let onRule = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
//let offRule = [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]//retro
//let onRule = [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
//let offRule = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]//cowy
//let onRule = [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
//let offRule = [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]//thick
//let onRule = [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
let offRule = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]//empty
let onRule = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

//let neighbors = [[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1],[0,1]]; //classic
//let neighbors = [[1,1],[1,-1],[-1,-1],[-1,1]]; //diagonals only
//let neighbors = [[1,1],[1,-1],[-1,-1],[-1,1],[2,2],[2,-2],[-2,-2],[-2,2]]; //diagonal star
//let neighbors = [[0,1],[0,-1],[0,2],[0,-2],[0,3],[0,-3]]; //line out
let neighbors = [[0,1],[0,-1],[-1,0],[1,0],[2,0],[0,2],[-2,0],[0,-2]];// straight star
//let neighbors = [[2,1],[2,0],[1,-3],[0,-1],[1,-1],[1,0],[4,4],[0,-2]]; //random
//let neighbors = [[1,1],[2,2],[-1,1],[-2,2],[0,1],[0,2],[0,1]]; //arrow
//let neighbors = [[1,1],[2,2],[-1,1],[-2,2],[0,1],[0,2],[0,2]]; //arrow 2
//let neighbors = [[1,1],[2,2],[-1,1],[-2,2],[0,1],[0,2],[0,3]]; //arrow 3
//let neighbors = [[1,1],[2,2],[-1,1],[-2,2],[0,10],[0,20],[0,40]]; //arrow 4
//let neighbors = [[0,2],[1,2],[-1,2],[0,-2],[1,-2],[-1,-2],[-2,0],[-2,-1],[-2,1],[2,0],[2,-1],[2,1]] //box
//combos- arrow + dotty, arrow+thick

function makeRuleButtons(rule) {
    for (let i = 0; i < 26; i++){
        let btn = document.createElement("button")
        btn.classList.add("rulebutton");
        btn.textContent = i;
        btn.addEventListener("click", function(){
            let on = (onRule [i] === 1);
            if (rule === 0){
                on = (offRule [i] === 1);
            }
            let newRule = 0;
            if (on) {         
                this.style.backgroundColor = "white";
            } else {
                this.style.backgroundColor = "red";
                newRule = 1;
            }
            if (rule === 0){
                offRule [i] = newRule;
            } else {
                onRule [i] = newRule;
            }
            console.log(newRule+ "   " + on)
        });
        if (rule === 0) {
            qs("#offrule").appendChild(btn)
        } else {
            qs("#onrule").appendChild(btn)
        }
    }  
}

makeRuleButtons(1);
makeRuleButtons(0)

document.onkeydown = function (e) {
    var keyCode = e.keyCode;
    if(e.keyCode == 50) {
        step();
    } else if (e.keyCode == 52){
        
    }
};

qs("#boundless").addEventListener("click", function (){
        boundless = this.checked;});

qs("#step").addEventListener("click", function () {
    if (timer === null) {    
        step();}});

qs("#start").addEventListener("click", function () {
        if (timer === null) {
            timer = setInterval(function() {
                step();}, speed)}});

qs("#stop").addEventListener("click", function (){
        clearInterval(timer);
        timer = null;});
        
qs("#random").addEventListener("click", function (){
    makeGrid(2);});
    
qs("#clear").addEventListener("click", function (){
    makeGrid(0);});

qs("#fill").addEventListener("click", function (){
    makeGrid(1);});