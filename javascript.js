const gridContainer = document.createElement('div');
const body = document.querySelector('body');

gridContainer.style.display = 'flex';
gridContainer.style.gap = '5px';

body.appendChild(gridContainer);

function hoverOverBox(box) {
    box.style.backgroundColor = 'orangered';
    box.style.border = '5px solid orange';
}

const widthSlider = document.querySelector('#widthSlider')
const heightSlider = document.querySelector('#heightSlider')

widthSlider.style.width = '60%'
heightSlider.style.width = '60%'

const widthSliderOutput = document.querySelector('#width')
const heightSliderOutput = document.querySelector('#height')

function updateGrid() {
    for (let i = 1; i < +widthSliderOutput.innerHTML.replace(/^\D+/g, '')+1; i++) {
    
        this['col'+i] = document.createElement('div');

        this['col'+i].style.display = 'flex';
        this['col'+i].style.flexDirection = 'column';
        this['col'+i].style.gap = '5px';

        gridContainer.appendChild(this['col'+i]);
        
        for (let x = 1; x < +heightSliderOutput.innerHTML.replace(/^\D+/g, '')+1; x++) {
            this['row'+x] = document.createElement('div');

            this['row'+x].style.backgroundColor = 'blue';
            this['row'+x].style.width = '20px';
            this['row'+x].style.height = '20px';
            this['row'+x].style.border = '5px solid lightblue';

            this['col'+i].appendChild(this['row'+x]);

            this['row'+x].addEventListener('mouseenter', (e) => {hoverOverBox(e.target)})

        }
    };
}


widthSlider.oninput = function () {
    gridContainer.innerHTML = '';

    widthSliderOutput.innerHTML = widthSliderOutput.innerHTML.replace(/[0-9]/g, '');
    widthSliderOutput.append(this.value);

    updateGrid();
};

heightSlider.oninput = function () {
    gridContainer.innerHTML = '';

    heightSliderOutput.innerHTML = heightSliderOutput.innerHTML.replace(/[0-9]/g, '');
    heightSliderOutput.append(this.value);

    updateGrid();
}

updateGrid();
widthSlider.value = '10';
heightSlider.value = '10';









