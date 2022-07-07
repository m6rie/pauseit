const timer = document.getElementById("twoMinutesTimer");
const congratulations = document.querySelector(".congratulations");
const tryAgain = document.querySelector(".tryAgain");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const audio = new Audio('../../../Downloads/Beautiful Piano Music - Relaxing Music, Study Music, Stress Relief, Sleep Music (Dior).mp3');

let n = 121;
let m = (10).toHHMMSS;
let o = Number((10).toHHMMSS);
// let playingTime = setTimeout(countDown, 1000);
let playingTime

function playAudio() {
  audio.play();
}

function stopAudio() {
  audio.pause();
}

String.prototype.toHHMMSS = function () {
  var sec_num = parseInt(this, 10); // don't forget the second param
  var hours   = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  var seconds = sec_num - (hours * 3600) - (minutes * 60);

  if (hours   < 10) {hours   = "0"+hours;}
  if (minutes < 10) {minutes = "0"+minutes;}
  if (seconds < 10) {seconds = "0"+seconds;}
  return hours+':'+minutes+':'+seconds;
}
// alert("120".toHHMMSS());

function countDown(){
  n--;
  timer.innerHTML = `${n}`
  tryAgain.innerHTML = ``
  if(n > 0){
    clearTimeout(playingTime);
    playingTime = setTimeout(countDown, 1000);
    playAudio();
  }
  else if(n==0){
    // window.location.replace("congratulations.html")
    document.querySelector('.congratulations').innerHTML = 'Congratulations. <br> <a href="https://www.notion.so/Marie-Fran-oise-Etong-Etong-e5315e6c07c842bca9379c2e41f7d4e1">Check my portfolio.</a>';
  }
}

function stop() {
  clearTimeout(playingTime);
  n = 121;
  stopAudio();
  console.log("stop");
  tryAgain.innerHTML = `Try again`
}

// EVENT LISTENERS
// document.addEventListener("visibilitychange", () => {
//   if(document.visibilityState==="visible") {
//     console.log("visible");
//     countDown();
//   }
//   else{
//     console.log("hidden");
//     stop();
//     console.log("stop");
//   }
// });

document.addEventListener("mousemove", () => {
  n = 121;
  countDown();
  stopAudio();
  tryAgain.innerHTML = `Try again`
});

document.addEventListener("mouseleave", () => {
  n = 121;
  stop();
  stopAudio();
  tryAgain.innerHTML = `Try again`
});

// startButton.addEventListener("click", () => {
//   countDown();
// })
