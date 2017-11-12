function ClockController() {

    this.startClock = function startClock() {
        var clockDiv = document.getElementById('clock')
        var todaysData = new Date();
        var hours = todaysData.getHours();
        var ampm = hours >= 12 ? "PM" : "AM";
        var minutes = todaysData.getMinutes()
        if (hours > 12) {
            hours -= 12;
        }
        if (minutes < 10) {
            minutes = '0' + minutes
        }
        clockDiv.innerHTML = `${hours}:${minutes}${ampm}`;
        var tickTock = setTimeout(startClock, 1000);
    }
}