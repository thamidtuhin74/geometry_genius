function get_input(idName){
    const inputElement = document.getElementById(idName);
    const input = parseFloat(inputElement.value);
    console.log(input);

    return input;
}
// Find area of Ractangle , Para
function getRecPara(input1,input2){
    const area = input1 * input2;
    return area;
    }

function displayCalculatedArea( shapeName, Area){

    document.getElementById(shapeName).style.display = 'flex';
    document.getElementById('shape-name').innerHTML = shapeName;
    document.getElementById('area-value').innerHTML = Area;

}


console.log('hello Rec------>');

// function getRecPara(input1,input2){
//     const area = input1 * input2;
//     return area;
// }

document.getElementById('rac-area-calculator').addEventListener("click",function(){
    console.log('hello Rec');
    
    const recWidth = get_input('rec-width');
    const recLength = get_input('rec-length');
    
    recArea = getTriRomPen(recWidth,recLength);
    console.log("Triangle area by Function = " + recArea);
    
    displayCalculatedArea('rectangle',recArea);

});