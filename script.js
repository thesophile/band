
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