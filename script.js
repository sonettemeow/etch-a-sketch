//let howMany = prompt('How many squares?');

const container = document.querySelector('.gridbox');

const numbah = 5;

for (let i = 0; i < numbah; i++) {
  const div = document.createElement('div');
  div.style.border = '2px solid blue';
  div.style.margin = '1px';
  div.style.width = '100%';
  container.appendChild(div);
}

// for (let rows = 0; rows < howMany; rows++) {
//     for (let columns = 0; columns < howMany; columns++) {
//         let square = document.createElement('div');
//         square.innerHTML = "here's one";
//         container.appendChild(square);
//         square.style.backgroundColor = 'white';
//         square.style.display = 'inline-block';
//         //square.style.display = 'flex';
//         //square.style.flexWrap = 'wrap';
//     }
// }