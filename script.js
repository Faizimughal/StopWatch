let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let miliseconds = document.getElementById("miliseconds");

newDate = () => {
  let date = new Date();
  minutes.innerHTML = date.getMinutes();
  seconds.innerHTML = date.getSeconds();
  miliseconds.innerHTML = date.getMilliseconds();
  setInterval(newDate, 1000);
};
newDate();
