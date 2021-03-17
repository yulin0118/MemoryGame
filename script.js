//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
context.resume();

// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const maxPatternLen = 8;
const totalButtonCount = 7;
const minimalDuration = 100;

//Global Variables
var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var mistakeCount = 0;
var secondsBetweenActions = 7;
var secondsRemaining;
var timer;
var level;
var allowedMistakes;
var speedUpFactor;

function startGame() {
  //initialize game variables
  context.resume()
  console.log("game starting now");
  gamePlaying = true;
  progress = 0;
  clueHoldTime = 1000;
  makeRandomPattern();
  mistakeCount = 0;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("oopsie").style.backgroundColor = "AliceBlue";
  level = document.getElementById("levels");
  // change variables according to difficulty level
  if (level.value == "easy") {
    secondsBetweenActions = 9;
    speedUpFactor = 0.9;
    allowedMistakes = 2;
  }
  if (level.value == "medium") {
    secondsBetweenActions = 7;
    speedUpFactor = 0.7;
    allowedMistakes = 1;
  }
  if (level.value == "hard") {
    secondsBetweenActions = 5;
    speedUpFactor = 0.5;
    allowedMistakes = 0;
  }
  updateMistakes();
  playClueSequence();
}
function stopGame() {
  //initialize game variables
  gamePlaying = false;
  // swap the Start and Stop buttons
  clearInterval(timer);
  resetStatusButtons();
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}
function resetStatusButtons(){
  document.getElementById("clock").innerHTML ="00:00";
  document.getElementById("oopsie").innerHTML ="oopsies";
  document.getElementById("oopsie").style.backgroundColor = "AliceBlue";
  document.getElementById("clock").style.backgroundColor = "AliceBlue";
  document.getElementsByClassName('progress')[0].style.width = '0%';
}
function makeRandomPattern() {
  var index = 0;
  while (index < maxPatternLen - 1) {
    pattern[index] = Math.round(Math.random() * (totalButtonCount - 1)) + 1;
    index++;
  }
  console.log(pattern);
}
function loseGame() {
  stopGame();
  clearInterval(secondsRemaining);
  alert("Game Over. You lost.");
}
function winGame() {
  stopGame();
  resetClockColor()
  alert("Game Over. You won!");
}
function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}
function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}
function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  if (clueHoldTime > minimalDuration){
    clueHoldTime = clueHoldTime * speedUpFactor;
  }
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  startTimer();
  updateProgress()
}
function startTimer() {
  secondsRemaining = secondsBetweenActions;
  timer = setInterval(function() {
    updateStatus(secondsRemaining);
    secondsRemaining--;
    if (secondsRemaining <= -1) {
      alertFunc();
      secondsRemaining = secondsBetweenActions;
    }
  }, 1000);
}

function updateStatus(secondsRemaining) {
  document.getElementById("clock").innerHTML =
    "00:0" + secondsRemaining;
  if (secondsRemaining <= 3){
    document.getElementById("clock").style.backgroundColor = "MistyRose";
  }
}

function resetClockColor(){
  document.getElementById("clock").style.backgroundColor = "AliceBlue";
}


function updateProgress(){
  var percentage = (progress / maxPatternLen) * 100
  var widthText = String(percentage) + '%';
  document.getElementsByClassName('progress')[0].style.width = widthText;
}

function alertFunc(secondsRemaining) {
  clearInterval(timer);
  loseGame();
}
function updateMistakes() {
  var currCount = allowedMistakes - mistakeCount;
  if (currCount == 0){
    document.getElementById("oopsie").style.backgroundColor = "MistyRose";
  }
  document.getElementById("oopsie").innerHTML = currCount + " oopsies left";
}
function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }
  if (pattern[guessCounter] == btn) {
    //Guess was correct!
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        //GAME OVER: WIN!
        document.getElementsByClassName('progress')[0].style.width = '100%';
        winGame();
        clearInterval(timer);
      } else {
        //Pattern correct. Add next segment
        resetClockColor()
        clearInterval(timer);
        progress++;
        playClueSequence();
      }
    } else {
      //so far so good... check the next guess
      guessCounter++;
    }
  } else {
    //Guess was incorrect
    //GAME OVER: LOSE!
    if (mistakeCount < allowedMistakes) {
      mistakeCount++;
      updateMistakes();
    } else {
      updateMistakes();
      loseGame();
    }
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.63,
  2: 293.66,
  3: 329.63,
  4: 349.23,
  5: 392,
  6: 440,
  7: 493.88
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

