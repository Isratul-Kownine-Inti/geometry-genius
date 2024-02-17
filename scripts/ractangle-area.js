function calculateRactangleArea()
{   //get the width
    const ractangleWidthInput = document.getElementById('ractangle-width');
    const ractangleWidthtext = ractangleWidthInput.value;
    const width = parseFloat(ractangleWidthtext);
    console.log(width);

    //get the length

    const ractangleLengthInput = document.getElementById('ractangle-length');
    const ractangleLengthtext =ractangleLengthInput.value;
    const length = parseFloat(ractangleLengthtext);
    console.log(length);

    // calculate area
    const area = width * length;
    console.log(area);

    //display area 
    const ranctangleAreaSpan = document.getElementById('ractangle-area');
    ranctangleAreaSpan.innerText = area;

}