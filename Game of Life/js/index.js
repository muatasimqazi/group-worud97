let DIM = 100;
let PIX = 5;
let NDIS = 5
let CAN = qs("canvas")
let CTX = CAN.getContext("2d");
let grid = [];
let timer = null;
let boundless = true;
let speed = 100;
let onColor = "blue";
let offColor = "white"

CAN.setAttribute("width", DIM*PIX + "px");
CAN.setAttribute("height", DIM*PIX + "px");

function qs(q){
    return document.querySelector(q);
}

function mod(n, m) {
    return ((n % m) + m) % m;
}

for (let y = 0; y < DIM; y++) {
    let row = [];
    for (let x = 0; x < DIM; x++) {    
        row[x] = [x, y, 0]
    };
    grid[y] = row
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


function getCell(x, y){
    if (boundless) {
        return (grid [mod (y, DIM-1)] [mod(x, DIM-1)] [2]);
    } else if (x >= 0 && x < DIM && y >= 0 && y < DIM) {
        return (grid [y] [x] [2]);
    } else {
        return 0;
    }
}

function setCell (x, y, state) {
    grid [y] [x] [2] = state;
}   

function render() { //draw the contents of the grid onto a canvas   
    qs("#cells").style.backgroundColor = offColor;
    CTX.clearRect(0, 0, DIM*PIX, DIM*PIX); //this should clear the canvas ahead of each redraw
    for (var y = 0; y < DIM; y++) { //iterate through rows
        for (var x = 0; x < DIM; x++) { //iterate through columns
            if (getCell(x,y) >= 1) {
                CTX.fillStyle = onColor;
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
    for (let i = 0; i < nbrs.length; i++) {
        if (getCell(x + nbrs [i] [0], y + nbrs[i] [1]) >= 1){
            n++;
        }
    }
    return n;
}

function rule (cell) {
    let state = cell [2];
    if (cell [2] === 1){
        return (onRule [getNeighbors(cell[0], cell[1])]);
    } else {
        return (offRule [getNeighbors(cell[0], cell[1])]);
    }
}

let offRule = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]//classic
let onRule = [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
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
//let offRule = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]//empty
//let onRule = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

let nbrs = [[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1],[0,1]]; //classic
//let nbrs = [[1,1],[1,-1],[-1,-1],[-1,1]]; //diagonals only
//let nbrs = [[1,1],[1,-1],[-1,-1],[-1,1],[2,2],[2,-2],[-2,-2],[-2,2]]; //diagonal star
//let nbrs = [[0,1],[0,-1],[0,2],[0,-2],[0,3],[0,-3]]; //line out
//let nbrs = [[0,1],[0,-1],[-1,0],[1,0],[2,0],[0,2],[-2,0],[0,-2]];// straight star
//let nbrs = [[2,1],[2,0],[1,-3],[0,-1],[1,-1],[1,0],[4,4],[0,-2]]; //random
//let nbrs = [[1,1],[2,2],[-1,1],[-2,2],[0,1],[0,2],[0,1]]; //arrow
//let nbrs = [[1,1],[2,2],[-1,1],[-2,2],[0,1],[0,2],[0,2]]; //arrow 2
//let nbrs = [[1,1],[2,2],[-1,1],[-2,2],[0,1],[0,2],[0,3]]; //arrow 3
//let nbrs = [[1,1],[2,2],[-1,1],[-2,2],[0,10],[0,20],[0,40]]; //arrow 4

//combos- arrow + dotty, arrow+thick

function makeRuleBtns(ruleArr) {
    for (let i = 0; i < ruleArr.length; i++){
        let btn = document.createElement("button")
        btn.classList.add("rulebutton");
        btn.textContent = i;
        btn.addEventListener("click", function(){
            let on = (ruleArr [i] === 1);
            let newRule = 0;
            if (on) {         
                this.style.backgroundColor = offColor;
                ruleArr [i] = 0
            } else {
                this.style.backgroundColor = onColor;
                ruleArr [i] = 1
            }
        });
        if (ruleArr == onRule) {
            btn.id =("onrb"+ i);
            qs("#onrule").appendChild(btn)
        } else {
            btn.id =("offrb"+ i);
            qs("#offrule").appendChild(btn)
        }
    }
}

function renderRuleBtns(rule) {
    for (let i = 0; i < rule.length; i++){
        let btn = qs("#offrb"+i)
        if (rule === onRule){
            btn = qs("#onrb"+i)
        }
        if (i > nbrs.length){
            btn.disabled = true;
            btn.style.display = "none";
        } else {
            btn.disabled = false;
            btn.style.display = "inline";
            if (rule [i] === 1){
                btn.style.backgroundColor = onColor
            } else {
                btn.style.backgroundColor = offColor
            }
        }
    }
}

makeRuleBtns(onRule);
makeRuleBtns(offRule);
renderRuleBtns(onRule);
renderRuleBtns(offRule);

let NBRDIM = 5;
function makeNbrBtns(){
    for (let y = -NBRDIM; y <= NBRDIM; y++){
        let row = document.createElement("div")
        row.classList.add("nbrRow")
        for (let x = -NBRDIM; x <= NBRDIM; x++){
            let btn = document.createElement("button")
            btn.id = "nbrx"+x+"y"+y;
            btn.classList.add("nbrBtn");
            if (x === 0 && y === 0){
                btn.textContent = "X";
            } else {
                btn.addEventListener("click", function (){
                    let nbrIndex = -1
                    for (let i = 0; i < nbrs.length; i++){
                        if (nbrs[i][0] === x && nbrs[i][1] === y){
                            nbrIndex = i;
                            break;
                        }
                    }
                    if (nbrIndex === -1){
                        if (nbrs.length === 16){
                            nbrs.splice(0, 1); 
                        }
                        nbrs.push([x,y]);
                    } else {
                        nbrs.splice(nbrIndex, 1);
                    }
                    renderNbrBtns();
                    renderRuleBtns(onRule);
                    renderRuleBtns(offRule);
                })
            }
            row.appendChild(btn);
        }
        qs("#nbrBtns").appendChild(row)
    }
}
makeNbrBtns();
let q = [1,2,3,4,5,6,7]
function renderNbrBtns(){
    let nbrBtns = document.getElementsByClassName("nbrBtn");
    for (let i = 0; i < nbrBtns.length; i++){
        nbrBtns[i].style.backgroundColor = "white";
    }
    for (let i = 0; i < nbrs.length; i++) {
        qs("#nbrx"+nbrs[i][0]+"y"+nbrs[i][1]).style.backgroundColor = "black";
    }
}

function removeNbrBtn(x,y){
    let tmpNbrs = nbrs.slice();

    
}

function getNbrBtn(x,y){
}

renderNbrBtns();
let nbrNext = 0;

document.onkeydown = function (e) {
    var keyCode = e.keyCode;
    if(e.keyCode == 50) {
        setCell(50, 50, 1)
    }
    if(e.keyCode == 52) {
        setCell(33, 76, 1)
    }
    render();
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

qs("#stop").addEventListener("click", stop);
function stop(){
    clearInterval(timer);
    timer = null;}

qs("#random").addEventListener("click", function (){
    makeGrid(2);});
    
qs("#clear").addEventListener("click", function (){
    stop();
    makeGrid(0);});

qs("#fill").addEventListener("click", function (){
    stop();
    makeGrid(1);});
