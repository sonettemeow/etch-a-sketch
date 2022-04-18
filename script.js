//let size = prompt('How many squares?');

const container = document.querySelector('.gridbox');
const clearBtn = document.getElementById('clear');
const rgbBtn = document.getElementById('rgb');
const bwgBtn = document.getElementById('bwg');

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        const divRow = document.createElement('div');
        divRow.style.display = 'flex';
        divRow.style.flexGrow = '1';
        divRow.style.backgroundColor = 'white';
        divRow.style.boxSizing = 'border-box';
        container.appendChild(divRow);

        for (let j = 0; j < size; j++) { 
            const cell = document.createElement('div');  
            cell.style.border = '1px solid black';
            cell.style.margin = '0px';
            cell.style.width = '100%';
            cell.style.boxSizing = 'border-box';
            divRow.appendChild(cell);
            }

        const brk = document.createElement('div');
        brk.style.border = '0px';
        brk.style.margin = '0px';
        brk.style.height = '0%';
        brk.style.width = '100%';
        brk.style.boxSizing = 'border-box';
        container.appendChild(brk);
    }
}
createGrid(20);