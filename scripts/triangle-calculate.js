function calculateTriangleArea(){
    // get the base
   const triangularBaseInput = document.getElementById('triangle-base');
   const triangularBaseText = triangularBaseInput.value; 
   const base = parseFloat(triangularBaseText);
   console.log( base);

   //get the height

   const triangularHeightinput = document.getElementById('triangle-height');
   const triangularHeightText =triangularHeightinput.value;
   const height = parseFloat(triangularHeightText);
   console.log(height);

//    calculate area
   const area = 0.5 * base * height;
   console.log(area);

   //display area
   const triangleAreaSpan = document.getElementById('triangle-area');
   triangleAreaSpan.innerText = area;
}