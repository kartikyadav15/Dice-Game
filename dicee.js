var random1 = Math.floor(Math.random()*6)+1;
var random2 = Math.floor(Math.random()*6)+1;
var string1 = "./images/dice"+random1+".png"
var string2 = "./images/dice"+random2+".png"
if(random1>random2){
    document.querySelector("h1").innerHTML="Player1 Wins!🚩";
}
else if(random1<random2){
    document.querySelector("h1").innerHTML="Player2 Wins!🚩";
}
else{
    document.querySelector("h1").innerHTML="🚩It's a draw!";
}

document.querySelector(".img1").setAttribute("src",string1);
document.querySelector(".img2").setAttribute("src",string2);