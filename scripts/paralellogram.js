function calculateParalellogramArea()
{
     const base = getInputById('paralellogram-base');
     console.log(base);

     const height = getInputById('paralellogram-height');
     console.log(height);

     const area = base * height;
     console.log(area);

     setElementById('paralellogram-area',area);
} 

function getInputById(inputId){
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    const input = parseFloat(inputText);
    return input;
} 

function setElementById(elementId,area)
{
    const element = document.getElementById(elementId);
    element.innerText = area;
}