//let size = prompt('How many squares?');

const container = document.querySelector('.gridbox');
const clearBtn = document.getElementById('clear');
const rgbBtn = document.getElementById('rgb').addEventListener('click', rgb);
const bwgBtn = document.getElementById('bwg').addEventListener('click', bwg);
const pinkBtn = document.getElementById('pink').addEventListener('click', pink);

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
        const gray = `rgb(${ran}, ${ran}, ${ran})`;
        block.style.backgroundColor = gray;
    }))
}

function rgb(e) {
    const blocks = container.querySelectorAll('.block');
    blocks.forEach(block => block.addEventListener('mouseover', () => {
        let R = Math.floor(Math.random() * 255);
        let G = Math.floor(Math.random() * 255);
        let B = Math.floor(Math.random() * 255);
        const RGB = `rgb(${R}, ${G}, ${B})`;
        block.style.backgroundColor = RGB;
    }))
}

function pink(e) {
    const blocks = container.querySelectorAll('.block');
    blocks.forEach(block => block.addEventListener('mouseover', () => {
        block.style.backgroundColor = 'rgb(243, 58, 106)';
    }))
}