var a= Math.floor(Math.random()*6+1);
var b= Math.floor(Math.random()*6+1);

var imagesource1= "images/dice" +a+".png";
document.querySelector(".img1").src =imagesource1;

var imagesource2="images/dice"+b+".png";
document.querySelector(".img2").src=imagesource2;

if (a>b) {
document.querySelector("h1").innerHTML="Player 1 wins! 🚩";
}
if (a<b) {
document.querySelector("h1").innerHTML="🚩 Player 2 wins! ";
}
if (a==b){ 
document.querySelector("h1").innerHTML="Draw !";

}
