const container = document.getElementById('grid-container');

let howMany = prompt('How many squares?');

for (let i = 0; i < howMany; i++) {
    let square = document.createElement('div');
    square.innerHTML = "here's one";
    container.appendChild(square);
    square.style.backgroundColor = 'white';
}