function startCountdown(duration) {
    const hoursEl = document.querySelector(".hourse__clock:nth-child(1) span");
    const minutesEl = document.querySelector(".hourse__clock:nth-child(3) span");
    const secondsEl = document.querySelector(".hourse__clock:nth-child(5) span");

    function updateCountdown() {
        let hours = Math.floor(duration  / 3600 ) ;
        let minutes = Math.floor((duration % 3600) / 60);
        let seconds = duration % 60;

        hoursEl.textContent = hours.toString().padStart(2, '0');
        minutesEl.textContent = minutes.toString().padStart(2, '0');
        secondsEl.textContent = seconds.toString().padStart(2, '0');

        if (duration > 0) {
            duration--;
            setTimeout(updateCountdown, 1000);
        } else {
            document.querySelector(".Mashrooms__countdown-title p").textContent = "Auction ended!";
        }
    }

    updateCountdown();
}


startCountdown(86400);
