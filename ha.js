//b for video//
//a for musix//
let b =document.getElementById("optv1");
let a= document.getElementById("optm1");
//1//
let b2 =document.getElementById("optv2");
let a2= document.getElementById("optm2");
//2//
let b3 =document.getElementById("optv3");
let a3= document.getElementById("optm3");
//3//
let b4 =document.getElementById("optv4");
let a4= document.getElementById("optm4");
//4//
let b5=document.getElementById("optv5");
let a5= document.getElementById("optm5");
//5//
let ha=document.getElementById("ha");
//khevin//
let ce =document.getElementById("mm");
 
ce.onmouseover=function(){
   bb.style.display="none";
   body.style.background="black";
   ce.style.marginTop="0%";  
}
ce.onmouseout=function(){
ce.style.marginTop="20%";  
       body.style.background=" linear-gradient(45deg, orange,#F08000,orangered,#36454F,gray,#E5E4E2)";
       body.style.backgroundSize="550% 550%";
       body.style.animation="gradientmove 20s ease infinite alternate";                                  body.style.backgroundAttachment="fixed";
      body.style.backgroundRepeat="no-repeat";
   }
 
function cli() {
   document.getElementById("bb").style.display="none";  
   document.getElementById("mm").style.display="block";
}
function khevin(){
document.getElementById("optv1").style.display="block";
a.style.display="none"
ha.textContent="Tapusin muna video bago mag lumabas ang audio";
}
function vid1(){ document.getElementById("khv").style.display="block";
    let khe= document.getElementById("khv");khe.play();
    khe.muted=false;
      
    khe.onended = function() {
    khe.style.display = "none";
    b.style.display = "none";
    a.style.display = "block";   
     ha.style.display="none";
    
    };
}
function music1() {
document.getElementById("khm").style.display="flex";
let music1=document.getElementById("khm");music1.play();
  music1.onended=function() {
      music1.style.display="none";
      a.style.display = "none";
      body.style.background="none";
  };
}
//karl//
function karl(){
    a2.style.display="none";
    b2.style.display="block";
ha.textContent="Tapusin muna video bago mag lumabas ang audio";    body.style.backgroundImage="url(download.png)";
}
 
function vid2(){ document.getElementById("karl").style.display="block";
    let khe= document.getElementById("karl");khe.play();
    khe.muted=false;
      
    khe.onended = function() {
    khe.style.display = "none";
    b2.style.display = "none";
    a2.style.display="block";
     ha.style.display="none";
    };
}
function music2() {
document.getElementById("karlm").style.display="flex";
let music1=document.getElementById("karlm");music1.play();
  music1.onended=function() {
      music1.style.display="none";
      a2.style.display = "none";
  };
}
//cedrick//
function ced(){
     a3.style.display="none";
    b3.style.display="block";
    ha.textContent="Tapusin muna video bago mag lumabas ang audio";
}
function vid3(){ document.getElementById("ced").style.display="block";
    let khe= document.getElementById("ced");khe.play();
    khe.muted=false;
      
    khe.onended = function() {
    khe.style.display = "none";
    b3.style.display = "none";
    a3.style.display="block";
     ha.style.display="none";
    };
}
function music3() {
document.getElementById("cedm").style.display="flex";
let music1=document.getElementById("cedm");music1.play();
  music1.onended=function() {
      music1.style.display="none";
      a3.style.display = "none";
  };
}
// eury//
function eury(){
     a4.style.display="none";
    b4.style.display="block";
    ha.textContent="Tapusin muna video bago mag lumabas ang audio";
}
function vid4(){ document.getElementById("eur").style.display="block";
    let khe= document.getElementById("eur");khe.play();
    khe.muted=false;
      
    khe.onended = function() {
    khe.style.display = "none";
    b4.style.display = "none";
    a4.style.display="block"
     ha.style.display="none";};
}
function music4() {
document.getElementById("eurm").style.display="flex";
let music1=document.getElementById("eurm");music1.play();
  music1.onended=function() {
      music1.style.display="none";
      a4.style.display = "none";
  };
}
//rain//
function rain(){
     a5.style.display="none";
    b5.style.display="block";
    ha.textContent="Tapusin muna video bago mag lumabas ang audio";
}
function vid5(){ document.getElementById("rain").style.display="block";
    let khe= document.getElementById("rain");khe.play();
    khe.muted=false;
      
    khe.onended = function() {
    khe.style.display = "none";
    b5.style.display = "none";
    a5.style.display="none"
    ha.style.display="none";
    };
}
function music5() {
document.getElementById("rainm").style.display="flex";
let music1=document.getElementById("rainm");music1.play();
  music1.onended=function() {
      music1.style.display="none";
      a5.style.display = "none";
  };
}