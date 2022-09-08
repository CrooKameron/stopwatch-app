//create event listeners
const playButton = document.querySelector('.play')
const pauseButton = document.querySelector('.pause')
const resetButton = document.querySelector('.reset')

playButton.addEventListener('click',start)
pauseButton.addEventListener('click',pause)
resetButton.addEventListener('click',reset)

// declare variable in our functions below
let startTime
let elapsedTime = 0
let timerInterval


// convert time to a format of hours, minutes, and millisecconds
function timeToString(time) {
    let diffInHrs = time / 3600000
    let hh = Math.floor(diffInHrs)

    let diffInMin = (diffInHrs - hh) * 60
    let mm = Math.floor(diffInMin)

    let diffInSec = (diffInMin - mm) * 60
    let ss = Math.floor(diffInSec)

    let diffInMs = (diffInSec - ss) * 100
    let ms = Math.floor(diffInMs)

    let formattedMM = mm.toString().padStart(2, '0')
    let formattedSS = ss.toString().padStart(2, '0')
    let formattedMS = ms.toString().padStart(2, '0')

    return `${formattedMM}:${formattedSS}:${formattedMS}`
}

function showButton(buttonkey){
    const buttonToShow = buttonkey === 'play' ? playButton : pauseButton
    const buttonToHide = buttonkey === 'play' ? pauseButton : playButton

    buttonToShow.style.display = 'block'
    buttonToHide.style.display = 'none'
}



// create functon to modify innerHTML
function print(txt) {
    document.getElementById('display').innerHTML = txt
}

// create start, pause and reset functions
function start(){
    startTime = Date.now() - elapsedTime
    timerInterval = setInterval(function printTime(){
        elapsedTime = Date.now() - startTime
        print(timeToString(elapsedTime))
    },10)
    showButton('pause')
}


function pause(){
    clearInterval(timerInterval)
    showButton('play')
}

function reset(){
    clearInterval(timerInterval)
    print('00:00:00')
    elapsedTime = 0
    showButton('play')


}