let count=0;
let g=document.getElementById("counter");
//video//
let khev=document.getElementById("khev");
let cedv=document.getElementById("cedv");
let karv=document.getElementById("karv");
let eurv=document.getElementById("eurv");
let rainv=document.getElementById("raiv");
let us=document.getElementById("-1");
//music//
let k=document.getElementById("khev-a");
let c=document.getElementById("cedv-a");
let ka=document.getElementById("karv-a");
let eu=document.getElementById("eurv-a");
let ra=document.getElementById("raiv-a");
//button//
let add=document.getElementById("add");
let reser=document.getElementById("reset");
let sub=document.getElementById("sub");
let div=document.getElementById("divx");
let me=document.getElementById("team");
let vi=document.getElementById("video"); 
function showVideo(){
 let vid = document.getElementById("vid");
  vid.classList.remove("show");
  setTimeout(() => {
    vid.classList.add("show");
  }, 10);
    let videos = document.querySelectorAll(".container video");
    let music = document.querySelectorAll(".container audio");

      music.forEach(v => {
        v.classList.remove("show");
        v.pause();
        v.currentTime = 0;
        v.style.display = "none";
      });
      // Hide lahat ng video
      videos.forEach(v => {
        v.classList.remove("show");
        v.pause();
        v.currentTime = 0;
        v.style.display = "none";
      });
 //if statement for counter//
 switch(count){
  case -1:
  us.style.display="flex";
  us.play();
  team.textContent="Miss U";
  break;
  case 1:
  khev.style.display="flex";
  khev.play();
  k.style.display="flex";
  team.textContent="KHEVIN";
  break;
  case 2:
  cedv.style.display="flex";
  cedv.play();
  c.style.display="flex";
  team.textContent="CEDRICK";
  break;
  case 3:
  karv.style.display="flex";
  karv.play();
  ka.style.display="flex";
  team.textContent="KARL";
  break;
  case 4:
  eurv.style.display="flex";
  eurv.play();
  team.textContent="EURY";
  eu.style.display="flex";
  break;
  case 5:
  rainv.style.display="flex";
  rainv.play();
  team.textContent="RAIN";
  ra.style.display="flex";
  break;
  default:
  team.textContent="Teamba"; 
 }
}
function a() {
count++;
if (count>5) {
    count=0;
}
g.textContent=count;
showVideo();
}
function s() {
count--;
g.textContent=count;
showVideo()    
}
function r() {
count=0;
g.textContent=count;  
showVideo();  
}
  
