// ----- мобильное меню -----
const btn = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

btn?.addEventListener('click', () => {
    const open = menu.style.display === 'flex';
    menu.style.display = open ? 'none' : 'flex';
    menu.style.flexDirection = 'column';
    menu.style.gap = '12px';
    btn.textContent = open ? 'Меню' : 'Закрыть';
});

// ----- подсветка активного пункта меню -----
const links = [...document.querySelectorAll('.menu a')];
const sections = links
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

function setActive() {
    let idx = 0;
    const y = scrollY + 90;
    sections.forEach((sec, i) => {
        if (sec.offsetTop <= y) idx = i;
    });
    links.forEach((a, i) => a.classList.toggle('active', i === idx));
}
window.addEventListener('scroll', setActive);
setActive();

// ----- простая анимация появления -----
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.2 }
);

document.querySelectorAll('.card, .feature, .why').forEach(el => {
    observer.observe(el);
});
