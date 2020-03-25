function colors(){
    var bokstav = "0123456789ABCDEF".split("");
    var color = "#";
    for (var i = 0; i < 6; i++){
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

var clickedTime;
var createdTime;
var reactionTime;

function figurer(){
    var time = Math.random();
    time = time*3000;

    setTimeout(function(){
        if (Math.random()>0.5){
            document.getElementById("box").style.borderRadius = "100px";
        }
        else{
            document.getElementById("box").style.borderRadius="0";
        }

        var top = Math.random();
            top = top*300;
        var left = Math.random();
            left = left*500;
    })
}
