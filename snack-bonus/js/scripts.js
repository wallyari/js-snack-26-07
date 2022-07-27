/* 
 *  SNACK BONUS - READY, SET, go()
 *  Creiamo un timer! In pagina dovranno essere visualizzati:
 *  - una label che mostra un conto alla rovescia di 3 secondi prima che il timer parta / il tempo trascorso quando il timer è partito;
 *  - un pulsante per avviare/mettere in pausa il timer;
 *  - un pulsante per stoppare il timer.
 * 
*/

const timeContainer = document.getElementById('time-container');
const playPauseButton = document.getElementById('play-pause');
const stopButton = document.getElementById('stop');
const clockIcon = document.querySelector('#timer h2 span');

let timeElapsed = 0,
    countDownInterval = null,
    timerInterval = null,
    started = false;

timeContainer.innerHTML = timeElapsed;

playPauseButton.addEventListener('click', handlePlayPause());
stopButton.addEventListener('click', handleStop());

function handlePlayPause(e) {
    if(!started){
        timeElapsed = 3;
        timeContainer.innerHTML = timeElapsed;
        countDownInterval = setInterval(() => {
            timeElapsed--;
            timeContainer.innerHTML = timeElapsed;
    
            if(timeElapsed == 0){
                clearInterval();
                countDownInterval = null;
            }
        }, 1000);
    
        setTimeout(function() {
            manageTimer('play');
        }, 3050);
    }
    else{
        if(this.classList.contains('play'))
            manageTimer('play');
        else if(this.classList.contains('pause'))
            manageTimer('pause');
    }
}

function handleStop(e) {
    manageTimer('stop');
}

function manageTimer(action){
    manageTimerHtml(action);
    manageTimerInterval(action);
}

function manageTimerHtml(action) {
    switch (action) {
        case 'play':
            playPauseButton.classList.remove('play');
            playPauseButton.classList.add('pause');
            playPauseButton.innerHTML = '||';
            clockIcon.classList.add('time-started');
            break;

        case 'pause':
        case 'stop':
            playPauseButton.classList.remove('pause');
            playPauseButton.classList.add('play');
            playPauseButton.innerHTML = '▶';
            clockIcon.classList.remove('time-started');
            break;
    }
}

function manageTimerInterval(action) {
    switch (action) {
        case 'play':
            timerInterval = setInterval(() => {
                timeElapsed++;
                timeContainer.innerHTML = timeElapsed;
            }, 1000);
            started = true;
            break;

        case 'pause':
            clearInterval();
            timerInterval = null;
            break;

        case 'stop':
            clearInterval();
            timerInterval = null;
        
            started = false;
            timeElapsed = 0;
            timeContainer.innerHTML = timeElapsed;
            break;
    }
}