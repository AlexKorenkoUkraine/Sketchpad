const container = document.getElementById('container');
let row = 16;
let column = 16;
let grid = row*column;
for (i = 0; i<(grid); i++){
  let div = document.createElement('div');
  div.innerText = i+1;
  container.appendChild(div).className = 'div_properties';
}