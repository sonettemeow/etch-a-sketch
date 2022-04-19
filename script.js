//let size = prompt('How many squares?');

const container = document.querySelector('.gridbox');
const clearBtn = document.getElementById('clear');
const rgbBtn = document.getElementById('rgb');
const bwgBtn = document.getElementById('bwg').addEventListener('click', bwg);
const pinkBtn = document.getElementById('pink');

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        const divRow = document.createElement('div');
        divRow.style.display = 'flex';
        divRow.style.flexGrow = '1';
        divRow.style.boxSizing = 'border-box';
        container.appendChild(divRow);

        for (let j = 0; j < size; j++) { 
            const cell = document.createElement('div');  
            cell.style.border = '1px solid #101010';
            cell.style.backgroundColor = 'white';
            cell.style.margin = '0px';
            cell.style.width = '100%';
            cell.style.boxSizing = 'border-box';
            divRow.appendChild(cell).classList.add('block');
            }

        const brk = document.createElement('div');
        brk.style.height = '0%';
        brk.style.width = '100%';
        brk.style.boxSizing = 'border-box';
        container.appendChild(brk);
    }
}
createGrid(30);

function clearGrid(e) {
    
}

function bwg(e) {
    const blocks = container.querySelectorAll('.block');
    blocks.forEach(block => block.addEventListener('mouseover', () => {
        let ran = Math.floor(Math.random() * 256);
        let gray = `rgb(${ran}, ${ran}, ${ran})`;
        block.style.backgroundColor = gray;
    }))
}

function rgb(e) {

}

function pink(e) {

}