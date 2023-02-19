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
// Find area of Rectangle , Parallelogram
function getRecPara(input1,input2){
    const area = input1 * input2;
    return area;
    }

function displayCalculatedArea( shapeName, Area){

    document.getElementById(shapeName).style.display = 'flex';
    // document.getElementById(shapeName+'shape-name').innerHTML = shapeName;
    document.getElementById(shapeName+'area-value').innerHTML = Area;

}

// Triangle Functions
document.getElementById('tri-area-calculator').addEventListener("click",function(){
    
    const triBase = get_input('tri-base');
    const triHeight = get_input('tri-height');
    
    triArea = getTriRomPen(triBase,triHeight);
    console.log("Triangle area by Function = " + triArea);
    


    displayCalculatedArea('triangle',triArea);

});

 // Rectangle Functions

document.getElementById('rec-area-calculator').addEventListener("click",function(){
    
    const recWidth = get_input('rec-width');
    const recLength = get_input('rec-length');
    
    recArea = getRecPara(recWidth,recLength);
    console.log("Rectangle area by Function = " + recArea);
    
    displayCalculatedArea('rectangle',recArea);

});

// Rectangle Functions

document.getElementById('para-area-calculator').addEventListener("click",function(){
    
    const paraWidth = get_input('para-width');
    const paraLength = get_input('para-length');
    
    paraArea = getRecPara(paraWidth,paraLength);
    console.log("Parallelogram area by Function = " + paraArea);
    
    displayCalculatedArea('parallelogram',paraArea);

});

    
    