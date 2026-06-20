const grid = document.getElementById("grid");
const gridValue = Number(prompt("How many square grid you want : (eg 16,20,32)"));


grid.style.gridTemplateColumns = `repeat(${gridValue},1fr)`
grid.style.gridTemplateRows = `repeat(${gridValue},1fr)`

for (let i = 0; i < gridValue*gridValue; i++) { 
    const cell = document.createElement("div"); 
    cell.classList.add("cell"); grid.appendChild(cell); 
}

const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
    cell.addEventListener("mouseenter", () => {
        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);
        //console.log("Mouse entered");
        cell.style.backgroundColor = `rgb(${r},${g},${b})`;
    });

    cell.addEventListener("mouseleave", () => {
        //console.log("Mouse left");
    });
});

const resetBtn = document.getElementById("reset");

function resetCanvas(){
    cells.forEach((cell) => {
        cell.style.backgroundColor = "white";
    })
}
   




