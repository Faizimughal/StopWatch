let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let miliseconds = document.getElementById("miliseconds");

let pauseBtn = document.getElementById("pause");
let resetBtn = document.getElementById("reset");
let startBtn = document.getElementById("start");

newDate = () => {
  let date = new Date();
  minutes.innerHTML = date.getMinutes();
  seconds.innerHTML = date.getSeconds();
  miliseconds.innerHTML = date.getMilliseconds();
};
setInterval(() => {
  newDate();
}, 1000);

resetBtn.addEventListener("click", () => {
  clearInterval(newDate());
  newDate = () => {
    let date = new Date();
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
    miliseconds.innerHTML = "00";
  };
});

startBtn.addEventListener("click", () => {
  clearInterval(newDate());
  newDate = () => {
    let date = new Date();
    minutes.innerHTML = date.getMinutes();
    seconds.innerHTML = date.getSeconds();
    miliseconds.innerHTML = date.getMilliseconds();
  };
});
