//Take input value from by the function
function get_input(idName){
    const inputElement = document.getElementById(idName);
    const input = parseFloat(inputElement.value);
    console.log(input);

    return input;
}
// Find area of Triangle , Rhombus , Pentagon
function getTriRomPen(input1,input2){
    const area = 0.5 * input1 * input2;
    return area;
}

console.log('hello js');
document.getElementById('tri-area-calculator').addEventListener("click",function(){
    console.log('hello cal');
    
    const triBase = get_input('tri-base');
    const triHeight = get_input('tri-height');
    
    triArea = getTriRomPen(triBase,triHeight);
    console.log("Triangle area by Function = " + triArea);

});