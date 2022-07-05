const timer = document.getElementById("twoMinutesTimer");
const congratulations = document.querySelector(".congratulations");

let n = 120;
let playingTime = setTimeout(countDown,0);

function countDown(){
  n--;
  timer.innerHTML = `${n}`
  if(n > 0){
    clearTimeout(playingTime)
    playingTime = setTimeout(countDown,1000);
  }
  else if(n==0){
    // window.location.replace("congratulations.html")
    document.querySelector('.congratulations').innerHTML = 'Congratulations. <br> <a href="https://www.notion.so/Marie-Fran-oise-Etong-Etong-e5315e6c07c842bca9379c2e41f7d4e1">Check my portfolio.</a>';
    // Or <i class="fa-solid fa-arrow-rotate-right"></i>' ;
  }
}

function stop() {
  clearTimeout(playingTime);
  n = 120;
  console.log("stop");
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
  n = 120;
  countDown();
});

document.addEventListener("mouseleave", () => {
  n = 120;
  stop();
});
