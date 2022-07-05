// // page active
// // create a chrono that goes from 2 minutes to 0
// // create an event listener so that when the mouse moves or keyboard is used the chrono restart
// // create a congrats at the end of the chrono

// // DISPLAY THE TIMER
// const twoMinutesTimer = document.getElementById('twoMinutesTimer');
// // PAGE VISIBITILY API
// // const pageVisibility = document.documentElement;
//     const startDate = new Date();
//     const finishDate = new Date();
//     finishDate.setMinutes(startDate.getMinutes() + 1);
//     const distance = finishDate - startDate;

//     // TIME CALCULATION
//     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     const x = setInterval(function() {
//       startDate
//       distance
//       days
//       hours
//       minutes
//       seconds
//       // console.log(seconds)
//       document.querySelector(".ww3test").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

//       if (distance < 0) {
//         clearInterval(x);
//         document.querySelector(".ww3test").innerHTML = "Done";
//       }
//     }, 1000);

// // CURRENT TIME AND EVENT LISTENER
// function currentTime() {
// document.addEventListener("visibilitychange", () => {
//   if(document.visibilityState==="visible") {
//     startDate
//     finishDate
//     distance




//     console.log("visible")
//     console.log(`${startDate}`)
//     console.log(`${finishDate}`)
//     // timer.play()

//   }
//   else{
//     console.log("hidden")
//     // timer.pause()
//   }
// })
// }



// const now = currentTime();
// console.log(`${currentTime()}`)
// console.log(`${now}`)

// // AIMED TIME
// const countDownDate = new Date("July 4, 2022, 17:30:00").getTime();







// // function timer() {
// //   const startTime = new Date();
// //   const finishTime = new Date();

// //   // finishTime.setDate(startTime.getDate());
// //   finishTime.setMinutes(startTime.getMinutes() + 1);
// //   const distance = finishTime - startTime;

// //   console.log(startTime);
// //   console.log(finishTime);
// //   // console.log(distance)

// //     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
// //     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// //     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
// //     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

// //     document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

// //     if (distance < 0) {
// //       clearInterval(x);
// //       document.getElementById("demo").innerHTML = "EXPIRED";
// //     }
// // };

// // console.log(setTimeout(() => 2))

//   // setTimeout(function() {
//   //   console.log('hello');
//   // }, 5000);

//   // do {
//   //   // refarctor for time -= 1 later
//   //   minute = minute - 1;
//   // } while (minute > 0);
//   // return `${minute}`

// // console.log(timer())

// // setInterval(testMinute, 0);
// // function testMinute() {
// //   const a = new Date();
// //   document.getElementById("testMin").innerHTML = a.toLocaleTimeString();
// // }

// // SOURCE 1 CALCUL DE LA DATE
//   // let targetDate = new Date();
//   // targetDate.setDate(targetDate.getDate() + 10);

//   // // So you can see the date we have created
//   // console.log(targetDate);

//   // let dd = targetDate.getDate();
//   // let mm = targetDate.getMonth() + 1; // 0 is January, so we must add 1
//   // let yyyy = targetDate.getFullYear();

//   // let dateString = dd + "/" + mm + "/" + yyyy;

//   // // So you can see the output
//   // console.log(dateString);
//   // console.log(targetDate)

let n = 100;
setTimeout(countDown,1000);

function countDown(){
   n--;
   if(n > 0){
      setTimeout(countDown,1000);
   }
   console.log(n);
}

var m = 100;
var tm = setInterval(countDown2,1000);

function countDown2(){
   m--;
   if(n == 0){
      clearInterval(tm);
   }
   console.log(m);
}
