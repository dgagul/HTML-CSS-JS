var timer;

function startTimer() {
    var seconds = 0;
    timer = setInterval(function() {
        seconds++;
        document.getElementById("timer").innerText = seconds + " Sekunden";
    }, 1000);

    document.getElementById("start").style.display = "none";
}

function stopTimer() {
    clearInterval(timer);

    document.getElementById("start").style.display = "inline-block";
}

function resetTimer() {
    clearInterval(timer);
    document.getElementById("timer").innerText = "0 Sekunden";
    
    document.getElementById("start").style.display = "inline-block";
}