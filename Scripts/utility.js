function hideElementById(elmetId){
    const element = document.getElementById(elmetId);
    element.classList.add('hidden');
}

function showElementById(elmetId){
    const element = document.getElementById(elmetId);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400')

}

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400')
}

function getElemtTextById(elementId){
     const element = document.getElementById(elementId);
     const text = element.innerText;
     return text.toLowerCase();
}

function getArandomAlphabet(){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetArray = alphabet.split('');

    const randomNum = Math.random()*25;
    const index = Math.round(randomNum);

    const alpha = alphabetArray[index]
    return alpha;
}

function getTextElementValueById(eventId){
    const element = document.getElementById(eventId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setTextValueElementById(elemntId,value){
    const element = document.getElementById(elemntId);
    element.innerText = value;

}