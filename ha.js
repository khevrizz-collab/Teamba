const form = document.getElementById("form");
let video = document.getElementById("video");
let audio = document.getElementById("audio");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // stop page refresh
  const choice = document.querySelector('input[name="r"]:checked');

  if (choice) {
    if (choice.value === "1") {
      video.style.display = "flex";
      audio.style.display = "none";
      audio.pause();
      
      video.onended=function(){
        video.style.display = "none";
      }
    } else if (choice.value === "2") {
      audio.style.display = "flex";
      video.style.display = "none";
      video.pause();
       audio.onended=function(){
        audio.style.display = "none";
      }
    }
  }
});
