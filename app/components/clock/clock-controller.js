function ClockController() {

    var military = false;

    function startClock() {
        var clockDiv = document.getElementById('clock')
        var todaysData = new Date();
        var hours = todaysData.getHours();
        var salutation = ''
        var ampm = hours >= 12 ? "PM" : "AM";
        var minutes = todaysData.getMinutes()

        if (minutes < 10) {
            minutes = '0' + minutes
        }

        if (hours < 12) {
            salutation = "Good morning!";
        } else if (hours > 12 && hours <= 17) {
            salutation = "Good afternoon!";
        } else {
            salutation = "Good evening!";
        }
        if (military) {
            clockDiv.innerHTML = `
            <span class="clock">${hours}:${minutes}</span><br>
            <span class="salutations">${salutation}</span>
        `;
        } else {
            if (hours > 12) {
                hours -= 12;
            }
            clockDiv.innerHTML = `
                <span class="clock">${hours}:${minutes}${ampm}</span><br>
                <span class="salutations">${salutation}</span>
            `;
        }
        var tickTock = setTimeout(startClock, 1000);
    }
    startClock();

    this.cycleMilitaryTime = function cycleMilitaryTime() {
        military = !military;
    }
}