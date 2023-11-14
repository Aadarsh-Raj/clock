const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("min");
const secondEl = document.getElementById("sec");
const ampmEl = document.getElementsByClassName("tag")[0];
const main = document.getElementsByClassName("main")[0];

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourEl.innerText = 6;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  ampmEl.innerText = ampm;
  setTimeout(() => {
    updateClock();
  }, 1000);

  if(h>= 5 && h <12 && ampm == "am"){
    main.style.background = `url("https://wallpaper.dog/large/10841913.jpg")`;
} else if((h == 12 && ampm == "pm") || ((h >= 1 && ampm == "pm") && (h<=6))){
    main.style.background = `url("https://images.unsplash.com/photo-1499002238440-d264edd596ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")`;

  }else{
main.style.background = `url("https://c4.wallpaperflare.com/wallpaper/881/499/584/moon-lake-mountains-cold-night-nature-scenery-wallpaper-preview.jpg")`;

  }
}

updateClock();