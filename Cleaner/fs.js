// Ищем все элементы с классом .fade-in
const fadeInElements = document.querySelectorAll('.fade-in');

// Создаем новый IntersectionObserver
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Если элемент виден, добавляем класс "visible"
            entry.target.classList.add('visible');
            entry.target.classList.remove('hidden');
        } else {
            // Если элемент не виден, добавляем класс "hidden"
            entry.target.classList.remove('visible');
            entry.target.classList.add('hidden');
        }
    });
}, { threshold: 0.1 });  // Устанавливаем порог, например, 10% элемента должно быть видно

// Наблюдаем за всеми элементами с классом .fade-in
fadeInElements.forEach(element => {
    observer.observe(element);
});
