function ClockController() {

    function startClock() {
        var clockDiv = document.getElementById('clock')
        var todaysData = new Date();
        var hours = todaysData.getHours();
        var salutation = ''
        if (hours < 12) {
            salutation = "Good morning!";
        } else if (hours > 12 && hours <= 17) {
            salutation = "Good afternoon!";
        } else {
            salutation = "Good evening!";
        }
        var ampm = hours >= 12 ? "PM" : "AM";
        var minutes = todaysData.getMinutes()
        if (hours > 12) {
            hours -= 12;
        }
        if (minutes < 10) {
            minutes = '0' + minutes
        }
        clockDiv.innerHTML = `
            <span class="clock">${hours}:${minutes}${ampm}</span><br>
            <span class="salutations">${salutation}</span>
        `;
        var tickTock = setTimeout(startClock, 1000);
    }
    startClock();
}