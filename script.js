const padding = 50;
let height = window.visualViewport.height - padding;
let width = window.visualViewport.width - padding;
const gameSize = document.querySelector('.game-size');
const panel = document.querySelector('.panel')
const seconds = 5;
const rounds = 3;
const bodyDOM = document.querySelector('body');


const rulesDOM = document.querySelector('.game-rules');
rulesDOM.innerHTML = `${rounds} Rounds, ${seconds} Clicks in each round`


window.addEventListener("load", () => {
    bodyDOM.style.width = `${window.visualViewport.width}`
    bodyDOM.style.height = `${window.visualViewport.height}`
  });

/////////////////////////////////////////////////
// screen size
function resize() {
    height = window.visualViewport.height-padding;
    width =  window.visualViewport.width-padding;

    gameSize.style.width = `${width}px`;
    gameSize.style.height = `${height}px`;
}

window.onresize = resize;

gameSize.style.width = `${width}px`;
gameSize.style.height = `${height}px`;
gameSize.style.backgroundColor = '#66FF99';
// screen size end
//////////////////////////////////////////////////////////////



//////////////////////////////////////////////////
// hide game  until start / next round
gameSize.classList.add('hidden') 
panel.classList.add('hidden') 
////////////////////////////////////////////////

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

const rectangle = document.querySelector('.rectangle');

const playerResultDOM = document.querySelector('.player-result');
const pcResultDOM = document.querySelector('.pc-result');
const roundDOM = document.querySelector('.current-round');
const counterDOM = document.querySelector('.timeCounter');




let pointsForPlayer = 0;
let pointsForPc = 0;
let roundCount = 1;
let secondsCount = 0;


////////////////////////////////////////////////////////////////////////
rectangle.addEventListener('click',()=>{
    pointsForPlayer++
    if(secondsCount < seconds){
        rectangle.classList.add('pointer-event-block')
        playerResultDOM.innerHTML = `Your points: ${pointsForPlayer}`
    }
    
})
//////////////////////////////////////////////////////////////////////////////

function gameStartNextRound(){
    counterDOM.innerHTML = `Time: ${seconds}`
    gameStartMenu.style.display = 'none';
    gameSize.classList.remove('hidden') 
    panel.classList.remove('hidden') 
    rectangle.classList.remove('hidden')
    rectangle.style.backgroundColor='#9966FF'

    pcResultDOM.innerHTML = `PC points: 0`;
    playerResultDOM.innerHTML = `Your points: 0`;
    roundDOM.innerHTML = `Round: ${roundCount}`;
  
    const interval = setInterval(function(){
        roundNumberDOM.innerText = `Round: ${roundCount}/${rounds}`

        rectangle.style.top = `${randomNum(0, height-padding-70)}px`
        rectangle.style.left = `${randomNum(0, width-padding-70)}px`

        secondsCount++

        counterDOM.innerText = `Time: ${seconds-secondsCount}`

        if(!rectangle.classList.contains('pointer-event-block')){
            pointsForPc++
            pcResultDOM.innerHTML = `PC points: ${pointsForPc}`
        }
        
        if(secondsCount === seconds){
            roundCount++;
            clearInterval(interval);
            rectangle.classList.add('hidden')

            setTimeout(() => {
                pcResultDOM.innerHTML = `${pointsForPc}`
                gameSize.classList.add('hidden');
                panel.classList.add('hidden');

                if(pointsForPc > pointsForPlayer){
                    pcRoundWins++
                } 
                else playerRoundWins++
                playerRoundWinsDOM.innerHTML = `Player round wins: ${playerRoundWins}`
                pcRoundWinsDOM.innerHTML = ` PC round wins ${pcRoundWins}`
                secondsCount = 0;

                if(roundCount !== rounds+1){
                    roundEnd.classList.remove('round-end-hidden');
                    
                } else {
                    showWinnerDOM.classList.remove('hidden');
                    playerWinRoundsDOM.innerHTML = `Player win rounds: ${playerRoundWins}`;
                    pcWinRoundsDOM.innerHTML = `PC win rounds: ${pcRoundWins}`;
                    finalRoundDOM.innerText = `Round: ${roundCount-1}/${rounds}`;
                    if(playerRoundWins>pcRoundWins){
                        winnerDOM.innerText = `You are the winner`
                    } else if(playerRoundWins<pcRoundWins) {
                        winnerDOM.innerText = `You lost`;
                    } else winnerDOM.innerText = `No winner`;
                }
            }, 1000)
        }
            rectangle.classList.remove('pointer-event-block');
        }, 1000)
    }


//////////////////////////////////////////////////
// Show winner
const showWinnerDOM = document.querySelector('.game-end')
const winnerDOM = document.querySelector('.winner')
const playerWinRoundsDOM = document.querySelector('.player-win-rounds')
const pcWinRoundsDOM = document.querySelector('.pc-win-rounds')
const finalRoundDOM = document.querySelector('.final-round')
const playAgainDOM = document.querySelector('.play-again')

playAgainDOM.addEventListener('click', ()=>{

    roundCount = 1;
    pcRoundWins = 0;
    playerRoundWins =0;
    roundDOM.innerHTML = roundCount;
    playerResultDOM.innerHTML = 0;
    pcResultDOM.innerHTML = 0;
    pointsForPlayer = 0;
    pointsForPc = 0;
    secondsCount = 0;
    roundEnd.classList.add('round-end-hidden')
    gameSize.classList.remove('hidden') 
    panel.classList.remove('hidden') 
    showWinnerDOM.classList.add('hidden');
    gameStartNextRound()
})

// start game / next round function end
/////////////////////////////////////////////////////////////////////////////////////

const startGameBtnDOM = document.querySelector('.start-game-btn');
const gameStartMenu = document.querySelector('.start-game');
const roundEnd = document.querySelector('.round-end')

//////////////////////////////////////////////////////////
// next round
startGameBtnDOM.addEventListener('click', ()=>{
    

    roundDOM.innerHTML = `Round: ${roundCount}`;
    playerResultDOM.innerHTML = 0;
    pcResultDOM.innerHTML = 0;
    pointsForPlayer = 0;
    pointsForPc = 0;
    secondsCount = 0;
    roundEnd.classList.add('round-end-hidden')
    gameSize.classList.remove('hidden') 
    panel.classList.remove('hidden') 
    gameStartNextRound()
})


const playerRoundWinsDOM = document.querySelector('.player-round-win');
const pcRoundWinsDOM = document.querySelector('.pc-round-win');
const roundNumberDOM = document.querySelector('.round-number');
const nexRoundBtnDOM = document.querySelector('.play-next-round')





nexRoundBtnDOM.addEventListener('click', ()=>{
    roundDOM.innerHTML = `Round: ${roundCount}`;
    playerResultDOM.innerHTML = 0;
    pcResultDOM.innerHTML = 0;
    pointsForPlayer = 0;
    pointsForPc = 0;
    secondsCount = 0;
    roundEnd.classList.add('round-end-hidden')
    gameSize.classList.remove('hidden') 
    panel.classList.remove('hidden') 
    gameStartNextRound()
})
let playerRoundWins = 0;
let pcRoundWins = 0;

// //////////////////////////////////////////////////////


