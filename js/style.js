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
function displayCalculatedArea( shapeName, Area){

    document.getElementById(shapeName).style.display = 'flex';
    document.getElementById('shape-name').innerHTML = shapeName;
    document.getElementById('area-value').innerHTML = Area;

}

console.log('hello js');
document.getElementById('tri-area-calculator').addEventListener("click",function(){
    console.log('hello cal');
    
    const triBase = get_input('tri-base');
    const triHeight = get_input('tri-height');
    
    triArea = getTriRomPen(triBase,triHeight);
    console.log("Triangle area by Function = " + triArea);
    


    displayCalculatedArea('triangle',triArea);

});

// function getRecPara(input1,input2){
//     const area = input1 * input2;
//     return area;
// }

// document.getElementById('rac-area-calculator').addEventListener("click",function(){
//     console.log('hello Rec');
    
//     const recWidth = get_input('rec-width');
//     const recLength = get_input('rec-length');
    
//     recArea = getTriRomPen(recWidth,recLength);
//     console.log("Triangle area by Function = " + recArea);
    
//     displayCalculatedArea('rectangle',recArea);

// });

    
    