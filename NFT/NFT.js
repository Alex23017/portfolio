document.addEventListener("DOMContentLoaded", function () {
    function startCountdown(duration) {
        const hoursEl = document.querySelector(".hourse__clock:nth-child(1) span");
        const minutesEl = document.querySelector(".hourse__clock:nth-child(3) span");
        const secondsEl = document.querySelector(".hourse__clock:nth-child(5) span");

        if (!hoursEl || !minutesEl || !secondsEl) {
            return; // Прерываем выполнение, если элементов нет
        }

        function updateCountdown() {
            let hours = Math.floor(duration / 3600);
            let minutes = Math.floor((duration % 3600) / 60);
            let seconds = duration % 60;

            hoursEl.textContent = hours.toString().padStart(2, '0');
            minutesEl.textContent = minutes.toString().padStart(2, '0');
            secondsEl.textContent = seconds.toString().padStart(2, '0');

            if (duration > 0) {
                duration--;
                setTimeout(updateCountdown, 1000);
            } else {
                let auctionTitle = document.querySelector(".Mashrooms__countdown-title p");
                if (auctionTitle) {
                    auctionTitle.textContent = "Auction ended!";
                }
            }
        }

        updateCountdown();
    }

    // Запуск таймера только если он нужен
    if (document.querySelector(".hourse__clock")) {
        startCountdown(86400);
    }

    // Фон при скролле
    document.addEventListener("scroll", function () {
        let scrollPosition = window.scrollY;
        let element = document.getElementById("header-main");

        if (element) { // Проверка, есть ли элемент на странице
            if (scrollPosition > 50) {
                element.style.background = "linear-gradient(0deg, rgba(162, 89, 255, 0.5) 0%, rgb(120, 43, 220) 100%)";
                element.style.borderRadius = "16px";
            } else {
                element.style.background = "transparent";
            }
        }
    });
});

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

document.addEventListener("DOMContentLoaded", function () {
    // Получаем параметры из URL
    const urlParams = new URLSearchParams(window.location.search);
    const imgSrc = urlParams.get("img");

    // Найти <img> в .create__column и подставить src
    if (imgSrc) {
        const imgElement = document.querySelector(".create__column img");
        if (imgElement) {
            imgElement.src = imgSrc;
            imgElement.alt = "Selected NFT Image"; // Добавляем alt для доступности
        }
    }
});

    