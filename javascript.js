const resetButton = document.getElementById('reset');
resetButton.addEventListener('click',updateSketch);
function updateSketch(){
let inputNumber = prompt('Please, type the number of grid in your Sketchpad');
if (inputNumber>=100||inputNumber<=-100) { return updateSketch();}
else{
const container = document.getElementById('container');
let row = inputNumber;
let column = inputNumber;
let grid = row*column;
for (i = 0; i<(grid); i++){
  let div = document.createElement('div');
  div.innerText = i+1;
  container.appendChild(div).className = 'div_properties';
}
}}

