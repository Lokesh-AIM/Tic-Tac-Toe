var countDownDate = new Date('Oct 16, 2026 00:00:00').getTime()
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

        var days = Math.floor (distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000*60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);


        function formatTime(time){
            return time < 10 ? "0" + time : time;
        }

        document.getElementById('Days').innerHTML = formatTime(days);
        document.getElementById('Hours').innerHTML = formatTime(hours);
        document.getElementById('Minutes').innerHTML = formatTime(minutes);
        document.getElementById('Seconds').innerHTML = formatTime(seconds);


        if(distance <0){
            clearInterval(x);
            document.getElementById('Days').innerHTML = "00";
            document.getElementById('Hours').innerHTML = "00";
            document.getElementById('Minutes').innerHTML = "00";
            document.getElementById('Seconds').innerHTML = "00";

        }


},1000)