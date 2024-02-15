// function play(){
//     const homeSection = document.getElementById('home-screen');
//     // console.log(homeSection)
//     homeSection.classList.add('hidden');

//     // show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
//     // console.log(playgroundSection)
// }

function handleKaybordButtonPress(event){
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);
    const currentAlpahabetElement = document.getElementById('current-alph');
    const currentAlpahabet = currentAlpahabetElement.innerText
    const expectedAlphabet = currentAlpahabet.toLocaleLowerCase();
    console.log(playerPressed, currentAlpahabet)

    if(playerPressed === expectedAlphabet){
        console.log('you get a point');
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        console.log(currentScore);
        const newScore = currentScore + 1;
        currentScoreElement.innerText = newScore;
        console.log('you have pressed correctly', expectedAlphabet);
        removeBaclgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        console.log('you missed.you lost a life')
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
        const newLife = currentLife - 1;
        currentLifeElement.innerText = newLife;

        if(newLife === 0){
            gameOver();
        }
    }

}
document.addEventListener('keyup', handleKaybordButtonPress)

function continueGame(){
    const alpahbet = getARandomAlphabet();
    console.log('your random alpahbet', alpahbet);

    const currentLifeElement = document.getElementById('current-alph');
   
    currentLifeElement.innerText = alpahbet;
    // set background color 
    setBackgroundColorById(alpahbet);
}

function play(){
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');
      
    // problem
    // getARandomAlphabet('current-life', 5);

    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    const gameScore = getElementById
}