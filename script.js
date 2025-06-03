function convert(){
let inputField = document.querySelector('input')
let inputvalue = document.querySelector('input').value;
let convertion = document.querySelector('select').value;
let resultField = document.querySelector('#convertionResult')
let result;

resultField.value = "";

if (inputvalue === "" || isNaN(inputvalue)) {
  alert("please enter a valid temperature");
  inputField.focus();
  return;
}



if(convertion === ""){
    alert('Please select a convertion type')
    return;
}

let input = Number(inputvalue);

// if(isNaN(input)){
//     alert('Please enter a valid number')
//     return;
// }
if(convertion === "F to C"){
 result = (input-32) * 5/9; 
 resultField.value = `${result.toFixed(3)} °C`;
} else {
 result = input * 9/5 + 32;
 resultField.value = `${result.toFixed(3)} °F`;
}

// document.querySelector('#convertionResult').value = result.toFixed(3)
}
function resetform(){
    //Clear input field
    document.querySelector('input').value = "";

    //Resest select to default option
    document.querySelector('select').selectedIndex = 0;

    //Clear result field
    document.querySelector('#convertionResult').value = "";
}