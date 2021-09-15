/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
var i = false
function toogleblock() {
    var z = document.getElementById("myLinks");
    if (z.style.display === "block" && i == false) {
        z.style.display = "none";
        console.log('reset')
    }
    else{
        i = false;
        console.log('False')
    }
}

function waitnav() {
    var y = document.getElementById("links");
    if (y.style.opacity === "0") {
        y.style.opacity = "1";
    } else {
        y.style.opacity = "0";
        
    }
    var x = document.getElementById("background");
    if (x.style.opacity === "0") {
        x.style.opacity = "1";
    } else {
        x.style.opacity = "0";
        
    }
}

function navbaropen() {
    var k = document.getElementById("myLinks");
    if (k.style.display === "none") {
        k.style.display = "block";
        i = true
        console.log('True')
    }
    
    setTimeout(waitnav, 1)
    setTimeout(toogleblock, 1000)


    // var u = document.getElementById("topnav a");
    // if (u.style.color === "white") {
    //     u.style.color = "black";
    // } else {
    //     u.style.color = "white";
        
    // }
}