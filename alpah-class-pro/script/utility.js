function hideElementById(elementId){
  const element = document.getElementById(elementId);
  element.classList.add('hidden');  
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}


function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orenge-400');

}


function removeBaclgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getARandomAlphabet(){
    const AlpahabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alpahbets = AlpahabetString.split('');
    // console.log(alpahbets);

    // get arandom index between 0-25
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    const alpahbet = alpahbets[index];
    // console.log(index, alpahbet);
    return alpahbet;

}

