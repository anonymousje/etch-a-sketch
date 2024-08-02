
const input = document.querySelector('#dim');
const button = document.querySelector('button');

const div = document.querySelector('.container');

button.addEventListener('click', () => {
    const Dim = input.value;
    //console.log(noOfDivs);
    div.innerHTML = " ";

    var mouseDown = false;
    document.body.onmousedown = () => {
        mouseDown = true;
    }

    document.body.onmouseup = () => {
        mouseDown = false;
    }

    var colCounter = 0;
    var rowCounter = 0;
    while (colCounter < Dim)
        {
            gridCol = document.createElement('div');
            gridCol.style.display = 'flex';
            gridCol.style.flex = '1';

            while(rowCounter < Dim)
                {
                    gridRow = document.createElement('div');
                    gridRow.style.border = "1px solid black";
                    gridRow.style.flex = '1';
                    gridCol.appendChild(gridRow);
                    gridRow.addEventListener('mouseover',(e)=> {
                        if(mouseDown)
                            {
                                e.target.style.backgroundColor  = 'black';
                            }
                    })
                    gridRow.addEventListener('click',(e)=> {
                        
                                e.target.style.backgroundColor  = 'black';
                            
                    })
                    rowCounter++;
                }
                div.appendChild(gridCol);
               colCounter++;
               rowCounter = 0;


        }








/*//Selecting input attributes
const input = document.querySelector('#dim');
const button = document.querySelector('button');

//Selecting output div
const div = document.querySelector('.container');

button.addEventListener('click', () => {
    const noOfDivs = input.value;
    //console.log(noOfDivs);
    div.innerHTML = " ";
    var mouseDown = false;
    document.body.onmousedown = () => {
        mouseDown = true;
    }

    document.body.onmouseup = () => {
        mouseDown = false;
    }
    var counter = 0;
    while (counter < noOfDivs * noOfDivs)
        {
            gridDiv = document.createElement('div');
            gridDiv.style.border = "1px solid black";
            gridDiv.style.flex = `0 0 ${(100/noOfDivs)-0.428304}%`;
            
            gridDiv.addEventListener('mouseover',(e)=> {
                if(mouseDown)
                    {
                        e.target.style.backgroundColor  = 'black';
                    }
            })
            
            div.appendChild(gridDiv);
            counter++;
            console.log(counter);
        }*/

        
        
        
})

