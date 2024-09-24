function getInputValueByClassName(className) {
    const inputElement = document.getElementsByClassName(className)[0]; 
    const inputValue = inputElement.value; 
    const inputNumber = parseInt(inputValue); 
    return inputNumber;
}


function getTextValueByClassName(className) {
    const textElement = document.getElementsByClassName(className)[0]; 
    const textValue = textElement.innerText; 
    const textNumber = parseInt(textValue); 
    return textNumber;
}