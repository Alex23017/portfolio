document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Остановить наблюдение после появления
            }
        });
    }, { threshold: 0.1 }); // Элемент будет виден хотя бы на 10%

    fadeElements.forEach(el => {
        el.classList.remove("visible"); // Удаляем класс, если он случайно был добавлен
        observer.observe(el);
    });
});