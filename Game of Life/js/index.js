let CELLS = document.querySelector("#cells");
let DIM = 60;

let neighbors = [[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1],[0,1]]; //classic
//let neighbors = [[1,1],[1,-1],[-1,-1],[-1,1]]; //diagonals only
//let neighbors = [[1,1],[1,-1],[-1,-1],[-1,1],[2,2],[2,-2],[-2,-2],[-2,2]]; //diagonal star
//let neighbors = [[0,1],[0,-1],[0,2],[0,-2],[0,3],[0,-3]]; //line out

let grid = []
for (let y = 0; y < DIM; y++) {
    let row = [];
    for (let x = 0; x < DIM; x++) {
        row[x] = [x, y, Math.floor(Math.random()*2)];
    }
    grid[y] = row;  
}

function getCell(x, y){ 
    if (x >= 0 && x < DIM && y >= 0 && y < DIM){
        return (grid [y] [x] [2])
    } else {return 0;}
}

function setCell(x, y, state){ 
    if (x >= 0 && x < DIM && y >= 0 && y < DIM){
        grid [y] [x] [2]= state;
    } else {alert("uh oh");}
}

for (let y = 0; y < DIM; y++){
    let row = document.createElement("div");
    for (let x = 0; x < DIM; x++){
        let cell = document.createElement("button");
        cell.classList.add("cell")
        cell.id=("x"+x+"y"+y)
        //cell.textContent = getNeighbors(x,y)
        cell.addEventListener("click", function(){
            if (this.classList.contains("c1")){
                cell.classList.add("c0");
                cell.classList.remove("c1");
                setCell(x, y, 0)
            } else {
                cell.classList.add("c1");
                cell.classList.remove("c0");
                setCell(x, y, 1)
            }
        })
        row.appendChild(cell);
    }
    CELLS.appendChild(row);
}

function render () {
    for (let y = 0; y < DIM; y++){
        for (let x = 0; x < DIM; x++){
            let cell = document.querySelector("#x"+x+"y"+y)
            if (getCell(x, y) === 1){
                cell.classList.add("c1");
                cell.classList.remove("c0");
            } else {
                cell.classList.add("c0");
                cell.classList.remove("c1");
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
    if (state === 1){
        if (n == 2 || n == 3){
            return 1
        } else {
            return 0
        }
    } else {
        if (n == 3) {
            return 1
        } else {
            return 0
        }
    }
}

document.onkeydown = function (e) {
    var keyCode = e.keyCode;
    if(e.keyCode == 50) {
        console.log("step");
        step();
    }
};