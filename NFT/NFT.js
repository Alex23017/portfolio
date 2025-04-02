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

function removeLastWordFromRankingTitle() {
    document.querySelectorAll(".ranking__title h3").forEach(h3 => {
        let originalText = h3.getAttribute("data-original-text"); // Получаем оригинальный текст

        if (!originalText) {
            h3.setAttribute("data-original-text", h3.textContent.trim()); // Сохраняем оригинальный текст
            originalText = h3.textContent.trim();
        }

        let words = originalText.split(" ");

        if (words.length > 1 && window.matchMedia("(max-width: 970px)").matches) {
            h3.textContent = words.slice(0, -1).join(" "); // Удаляем только последнее слово
        } else {
            h3.textContent = originalText; // Восстанавливаем оригинальный текст, если экран > 970px
        }
    });
}

// Запуск при загрузке и изменении размера окна
window.addEventListener("DOMContentLoaded", removeLastWordFromRankingTitle);
window.addEventListener("resize", removeLastWordFromRankingTitle);

const burgerMenu = document.getElementById('burger-menu');
const menu = document.getElementById('menu');
const header = document.querySelector('header'); // Получаем header
const headerBody = document.querySelector('.header__body'); // Получаем header__body

burgerMenu.addEventListener('click', function () {
    menu.classList.toggle('open'); 
    header.classList.toggle('open'); // Добавляем open к header
    headerBody.classList.toggle('open'); // Добавляем open к header__body
    burgerMenu.classList.toggle('open'); 
});

// Закрытие при увеличении экрана
window.addEventListener('resize', function () {
    if (window.innerWidth > 970) {
        menu.classList.remove('open');
        header.classList.remove('open'); // Убираем open у header
        headerBody.classList.remove('open'); // Убираем open у header__body
        burgerMenu.classList.remove('open');
    }
});