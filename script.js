
var images = [];
images[0] = "images/chicago.jpg";
images[1] = "images/la.jpg";
images[2] = "images/ny.jpg";

var x = 0;

function displayNextImage() {
    
    if (x == 2){
        x=0;
    }
    else{
        x=x+1
    }

    document.getElementById("img").src = images[x];
    
    
}



function startTimer() {
    setInterval(displayNextImage, 3000);

}