// var x=prompt("Do you happen to have an extra heart?")
alert("You can keep my heart that you took from me 8 weeks ago.")
document.querySelector("strong").addEventListener("click",handleClick)
function handleClick(){
    var audio = new Audio("I love you baby - Surf Mesa.mp3");
    audio.play()
}