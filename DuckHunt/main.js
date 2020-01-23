(function () {
        'use strict';
    

    var area = document.body,
        areaHeight = window.innerHeight,
        areaWidth = window.innerWidth,
        points = document.getElementById('points'),
        duck = document.createElement('img'),
        score = 0,
        timer = 400;


    var clickedTime;
    var createdTime;
    var reactionTime;

        function makeBox(){
            var time = Math.random();
            time = time*3000;
            
            setTimeout(function(){
                if (Math.random()>0.5){
                    document.getElementById
                }
            })
        }
    
    




    function newDuck() {
        var newX = Math.floor(Math.random() * (areaWidth - duck.width)),
            newY = Math.floor(Math.random() * (areaHeight - duck.height));

        duck.style.left = newX + 'px';
        duck.style.top = newY + 'px';
        area.appendChild(duck);
    }

    
    function startGame() {
        window.setInterval(newDuck, timer);
    }


    startGame();

    alert('Klicka på ankan och samla poäng');
    
    
})();
