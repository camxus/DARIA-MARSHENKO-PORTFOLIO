// var y = document.getElementById("videocontainer");
// var x = document.getElementById("close");
var y

function videotimeout(){
    y.style.display = "none";
}

function fadetimeout() {
    y.style.opacity = "1";
}
function getElementsById(elementID){
    var elementCollection = new Array();
    var allElements = document.getElementsByTagName("*");
    for(i = 0; i < allElements.length; i++){
        if(allElements[i].id == elementID)
            elementCollection.push(allElements[i]);

    }
    return elementCollection;
}

function togglevideo(input,index){
    console.log(index)
    y = getElementsById(input)[index]
    console.log(y)
    if (y.style.opacity === "0") {
        y.style.display = "block";
        setTimeout(fadetimeout, 1);
    } else {
        y.style.opacity = "0";
        setTimeout(videotimeout, 1000)
    }
}

