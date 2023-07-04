
var images = ["images/chicago.jpg","images/la.jpg","images/ny.jpg"];
var places = ["Chicago","Los Angeles","New York"];
var des    = ["Thank you, Chicago - A night we won't forget.","We had the best time playing at Venice Beach!",
                "The atmosphere in New York is lorem ipsum."];

var x = 0;

function displayNextImage() {
    
    if (x == 2){
        x=0;
    }
    else{
        x=x+1
    }

    document.getElementById("img").src = images[x];
    document.getElementById("place").innerHTML=places[x];
    document.getElementById("des").innerHTML=des[x];
    
}



function startTimer() {
    setInterval(displayNextImage, 3000);

}


const dropdown = document.getElementsByClassName("dropdown")[0];

dropdown.addEventListener("mouseenter",function(){
    $(".more")[0].style.background="#ccc";
    $(".more")[0].style.color="black";
    $(".fa-caret-down")[0].style.color="black";
})

dropdown.addEventListener("mouseleave",function(){
    $(".more")[0].style.background="";
    $(".more")[0].style.color="";
    $(".fa-caret-down")[0].style.color="";
})