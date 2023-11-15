const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("min");
const secondEl = document.getElementById("sec");
const ampmEl = document.getElementsByClassName("tag")[0];
const main = document.getElementsByClassName("main")[0];

function updateClock() {
  const now = new Date();
  let h = now.getHours();
  let m = now.getMinutes().toString().padStart(2, '0');
  let s = now.getSeconds().toString().padStart(2, '0');
  let ampm = h >= 12 ? 'pm' : 'am';

  h = h% 12 || 12;


  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  ampmEl.innerText = ampm;
  setTimeout(() => {
    updateClock();
  }, 1000);

  if(hourEl.innerText >= 5 && hourEl.innerText <12 && ampm == "am"){
    console.log("w1");
    main.style.background = `url("https://wallpaper.dog/large/10841913.jpg")`;
} else if((hourEl.innerText== 12 && ampm == "pm") || ((hourEl.innerText >= 1 && ampm == "pm") && (hourEl.innerText<=6))){
    main.style.background = `url("https://images.unsplash.com/photo-1499002238440-d264edd596ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")`;
console.log("w2");
  }else{
main.style.background = `url("https://c4.wallpaperflare.com/wallpaper/881/499/584/moon-lake-mountains-cold-night-nature-scenery-wallpaper-preview.jpg")`;
console.log("w3");
  }
}

updateClock();