/* ========= Подсветка курсора ========= */
const glow = document.querySelector('.cursor-glow');
window.addEventListener('mousemove', (e) => {
    // обновляем CSS-переменные, которые использует radial-gradient
    glow?.style.setProperty('--x', e.clientX + 'px');
    glow?.style.setProperty('--y', e.clientY + 'px');
});

/* ========= Появления при прокрутке (IntersectionObserver) ========= */
const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* ========= Hover-наклон карточек (tilt) ========= */
function attachTilt(el) {
    const bounds = () => el.getBoundingClientRect();
    el.addEventListener('mousemove', (e) => {
        const b = bounds();
        const cx = e.clientX - b.left, cy = e.clientY - b.top;
        // нормализуем в -1..1
        const nx = (cx / b.width) * 2 - 1;
        const ny = (cy / b.height) * 2 - 1;
        // небольшие углы
        el.style.setProperty('--ry', (nx * 6) + 'deg');
        el.style.setProperty('--rx', (-ny * 6) + 'deg');
    });
    el.addEventListener('mouseleave', () => {
        el.style.setProperty('--ry', '0deg');
        el.style.setProperty('--rx', '0deg');
    });
}
document.querySelectorAll('.tilt').forEach(attachTilt);

/* ========= Фильтрация статей на странице списка ========= */
const chips = document.querySelectorAll('.chip');
const list = document.getElementById('list');
if (chips.length && list) {
    chips.forEach(ch => {
        ch.addEventListener('click', () => {
            chips.forEach(c => c.classList.remove('is-active'));
            ch.classList.add('is-active');
            const tag = ch.dataset.filter;
            [...list.children].forEach(card => {
                const tags = (card.dataset.tags || '').split(' ');
                card.style.display = (tag === 'all' || tags.includes(tag)) ? '' : 'none';
            });
        });
    });
}

/* ========= Автогенерация оглавления на статье ========= */
const toc = document.getElementById('toc');
const content = document.getElementById('content');
if (toc && content) {
    const hs = content.querySelectorAll('h2, h3');
    hs.forEach((h, i) => {
        const id = h.textContent.toLowerCase().replace(/[^\wа-яё]+/gi, '-') + '-' + i;
        h.id = id;
        const item = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#' + id; a.textContent = h.textContent;
        if (h.tagName === 'H3') { item.style.marginLeft = '12px'; }
        item.appendChild(a);
        toc.appendChild(item);
    });

    // подстановка «динамического» заголовка и категории из query-параметра
    const params = new URLSearchParams(location.search);
    const slug = params.get('slug');
    if (slug === 'glass') {
        content.querySelector('h1').textContent = 'Glassmorphism без библиотек';
        document.getElementById('cat').textContent = 'UI';
    } else if (slug === 'scroll') {
        content.querySelector('h1').textContent = 'Плавные появления при прокрутке';
        document.getElementById('cat').textContent = 'JS';
    } else if (slug === 'parallax') {
        content.querySelector('h1').textContent = 'Параллакс и наклон на мышь';
        document.getElementById('cat').textContent = 'JS';
    }
}
