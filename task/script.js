window.onload = function() {
    var timeoutID, timerID, img;
    function setup() {
        this.addEventListener("mousemove", resetTimer, false);
        this.addEventListener("mousedown", resetTimer, false);
        this.addEventListener("keypress", resetTimer, false);
        this.addEventListener("DOMMouseScroll", resetTimer, false);
        this.addEventListener("mousewheel", resetTimer, false);
        this.addEventListener("touchmove", resetTimer, false);
        this.addEventListener("MSPointerMove", resetTimer, false);
        startTimer();
    }
    setup();
    
    function startTimer() {
        var timeoutID = window.setTimeout(goInactive, 10000);
    }
    
    function resetTimer() {
        window.clearTimeout(timeoutID);
        goActive();
    }
    
    function goInactive() {
        clearInterval(timerID);
        img = document.createElement('img');
        var parentEl = document.getElementById('box');
        parentEl.appendChild(img);
        img.id = "screensaver";
        
        var urls = new Array(
        img.src = 'images/1.jpeg', 
        img.src = 'images/2.jpeg', 
        img.src = 'images/3.jpeg', 
        img.src = 'images/4.jpeg', 
        img.src = 'images/5.jpeg', 
        img.src = 'images/6.jpeg', 
        img.src = 'images/7.jpeg');
        
        function timer() {
            var rand = Math.floor(Math.random() * urls.length);
            img.src = urls[rand];
        }
        timerID = setInterval(timer, 5000);
    }
    
    function goActive() {
        img.parentNode.removeChild(img);
        startTimer();
    } 
};