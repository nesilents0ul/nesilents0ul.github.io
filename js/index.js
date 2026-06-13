

(function () {
    const srcdoc = `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <style>
        *{margin:0;padding:0;box-sizing:border-box}
        html{scroll-behavior:smooth;scrollbar-width:none;-ms-overflow-style:none;}
        html::-webkit-scrollbar{display:none;width:0;height:0;}
        body{font-family:Inter,sans-serif;background:#fff;color:#111;overflow-x:hidden;scrollbar-width:none;-ms-overflow-style:none;}
        @media(max-width:400px){body{padding-bottom:90px}}
        body::-webkit-scrollbar{display:none;}
        .ds-nav{display:flex;align-items:center;justify-content:space-between;padding:14px 24px;background:#fff;border-bottom:1px solid #f0f0f0;position:sticky;top:0;z-index:10}
        .ds-logo{font-weight:700;font-size:16px;color:#6366f1;letter-spacing:-.5px}
        .ds-links{display:flex;gap:16px;list-style:none}
        .ds-links a{font-size:12px;color:#666;text-decoration:none;cursor:default;pointer-events:none}
        .ds-hero{background:linear-gradient(135deg,#6366f1 0%,#8b5cf6 100%);color:#fff;padding:40px 24px;text-align:center}
        .ds-hero h1{font-size:clamp(18px,4vw,28px);font-weight:700;margin-bottom:10px}
        .ds-hero p{font-size:clamp(11px,2vw,14px);opacity:.8;margin-bottom:20px}
        .ds-btn{background:#fff;color:#6366f1;border:none;padding:8px 20px;border-radius:6px;font-weight:600;font-size:13px;cursor:default;pointer-events:none}
        .ds-cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:12px;padding:20px 16px}
        .ds-card{border:1px solid #f0f0f0;border-radius:10px;padding:14px;text-align:center}
        .ds-card-icon{font-size:24px;margin-bottom:8px}
        .ds-card h3{font-size:12px;font-weight:600;margin-bottom:4px}
        .ds-card p{font-size:11px;color:#888}
        .ds-footer{background:#f8f8fc;text-align:center;padding:16px;font-size:11px;color:#aaa;border-top:1px solid #f0f0f0}
        .ds-burger{display:none}
        @media(max-width:400px){
            .ds-links{
                position:absolute;
                top:100%;
                left:0;right:0;
                background:#fff;
                flex-direction:column;
                align-items:center;
                justify-content:center;
                gap:0;
                box-shadow:0 10px 25px rgba(0,0,0,0.08);
                border-radius:0 0 16px 16px;
                z-index:90;
                overflow:hidden;
                max-height:0;
                transition:max-height .45s cubic-bezier(0.4,0,0.2,1)
            }
            .ds-links.open{max-height:180px}
            .ds-links li{
                width:100%;
                display:flex;
                align-items:center;
                justify-content:center;
                opacity:0;
                transform:translateY(-6px);
                transition:opacity .3s ease, transform .3s ease;
            }
            .ds-links.open li:nth-child(1){opacity:1;transform:translateY(0);transition-delay:.08s}
            .ds-links.open li:nth-child(2){opacity:1;transform:translateY(0);transition-delay:.15s}
            .ds-links.open li:nth-child(3){opacity:1;transform:translateY(0);transition-delay:.22s}
            .ds-links li a{
                display:block;
                width:100%;
                text-align:center;
                padding:13px 20px;
                font-size:13px;
                font-weight:500;
                color:#444;
                border-bottom:1px solid #f0f0f0;
                cursor:default;
                pointer-events:none;
            }
            .ds-links li:last-child a{border-bottom:none}
            .ds-burger{display:block!important;background:none;border:none;font-size:22px;cursor:pointer;color:#111;line-height:1}
        }
    </style>
</head>
<body>
    <nav class="ds-nav">
        <div class="ds-logo">Brand</div>
        <button class="ds-burger" onclick="document.querySelector('.ds-links').classList.toggle('open')">☰</button>
        <ul class="ds-links">
            <li><a href="#" onclick="document.querySelector('.ds-links').classList.remove('open')">Главная</a></li>
            <li><a href="#" onclick="document.querySelector('.ds-links').classList.remove('open')">Преимущества</a></li>
            <li><a href="#" onclick="document.querySelector('.ds-links').classList.remove('open')">О нас</a></li>
        </ul>
    </nav>
    <header class="ds-hero">
        <h1>Адаптивный дизайн</h1>
        <p>Этот блок полностью перестраивается под размеры вашего устройства.</p>
    </header>
    <section class="reveal" style="padding:24px 16px;background:#f8fafc;">
        <h2 style="font-size:16px;margin-bottom:12px;color:#0f172a;">Наши преимущества</h2>
        <div style="display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));">
            <div style="background:#fff;padding:12px;border-radius:8px;border:1px solid #e2e8f0;">
                <h3 style="font-size:13px;margin-bottom:4px;color:#6366F1;">Скорость</h3>
                <p style="font-size:11px;color:#64748b;line-height:1.4;">Мгновенная оптимизация ресурсов.</p>
            </div>
            <div style="background:#fff;padding:12px;border-radius:8px;border:1px solid #e2e8f0;">
                <h3 style="font-size:13px;margin-bottom:4px;color:#6366F1;">Гибкость</h3>
                <p style="font-size:11px;color:#64748b;line-height:1.4;">Идеальное отображение сеток.</p>
            </div>
        </div>
    </section>
    <section style="padding:24px 16px;background:#ffffff;">
        <h2 style="font-size:16px;margin-bottom:8px;color:#0f172a;">О нашей философии</h2>
        <p style="font-size:12px;color:#475569;line-height:1.6;margin-bottom:10px;">
            Мы создаём интерфейсы, которые приятно использовать. Никакого визуального шума, только фокус на контенте.
        </p>
        <p style="font-size:12px;color:#475569;line-height:1.6;">
            Каждый блок спроектирован с использованием CSS Grid и Flexbox, гарантируя стабильность на iOS и Android.
        </p>
    </section>
    <section style="padding:24px 16px;background:#f0f4ff;">
        <h2 style="font-size:16px;margin-bottom:12px;color:#0f172a;">Часто задаваемые вопросы</h2>
        <div style="display:flex;flex-direction:column;gap:10px;">
            <div style="background:#fff;padding:14px;border-radius:8px;border:1px solid #e2e8f0;">
                <h3 style="font-size:13px;color:#0f172a;margin-bottom:4px;">Сколько времени занимает разработка?</h3>
                <p style="font-size:11px;color:#64748b;line-height:1.5;">Обычно от 2 до 8 недель в зависимости от сложности проекта и требований клиента.</p>
            </div>
            <div style="background:#fff;padding:14px;border-radius:8px;border:1px solid #e2e8f0;">
                <h3 style="font-size:13px;color:#0f172a;margin-bottom:4px;">Какие технологии используете?</h3>
                <p style="font-size:11px;color:#64748b;line-height:1.5;">React, Next.js, Node.js, TypeScript, PostgreSQL и Docker — современный fullstack стек.</p>
            </div>
            <div style="background:#fff;padding:14px;border-radius:8px;border:1px solid #e2e8f0;">
                <h3 style="font-size:13px;color:#0f172a;margin-bottom:4px;">Есть ли поддержка после сдачи?</h3>
                <p style="font-size:11px;color:#64748b;line-height:1.5;">Да, предоставляем 3 месяца бесплатной поддержки и обновлений после запуска.</p>
            </div>
        </div>
    </section>
    <section style="padding:24px 16px;background:#ffffff;text-align:center;">
        <h2 style="font-size:16px;margin-bottom:8px;color:#0f172a;">Готовы начать?</h2>
        <p style="font-size:12px;color:#64748b;margin-bottom:14px;">Оставьте заявку — ответим в течение нескольких часов</p>
        <button style="background:#6366f1;color:#fff;border:none;padding:10px 24px;border-radius:8px;font-size:13px;font-weight:600;cursor:default;pointer-events:none;">Написать нам</button>
    </section>
    <footer style="background:#0f172a;color:#94a3b8;padding:20px 16px;text-align:center;font-size:11px;">
        <p>© 2026 Адаптив Ко. Все права защищены.</p>
    </footer>
</body>
</html>`;

    ['deviceIframe', 'deviceIframeTablet', 'deviceIframeMobile'].forEach(function (id) {
        const iframe = document.getElementById(id);
        if (iframe) {
            iframe.srcdoc = srcdoc;
        }
    });
})();

(function () {
    const html = document.documentElement;
    const btn = document.getElementById('themeToggle');
    const saved = localStorage.getItem('theme') || 'light';

    function applyTheme(theme) {
        html.setAttribute('data-theme', theme);
        btn.textContent = theme === 'dark' ? '🌙' : '☀️';
        btn.setAttribute('aria-label', theme === 'dark' ? 'Переключить на светлую тему' : 'Переключить на тёмную тему');
        localStorage.setItem('theme', theme);
    }

    applyTheme(saved);

    btn.addEventListener('click', function () {
        const current = html.getAttribute('data-theme');

        const style = document.createElement('style');
        style.id = '__theme-no-transition';
        style.textContent = '*, *::before, *::after { transition: none !important; }';
        document.head.appendChild(style);

        applyTheme(current === 'dark' ? 'light' : 'dark');

        requestAnimationFrame(function () {
            requestAnimationFrame(function () {
                var s = document.getElementById('__theme-no-transition');
                if (s) s.remove();
            });
        });
    });
})();

(function () {

    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;

    const dot = document.querySelector('.cursor-dot');
    const trail = document.querySelector('.cursor-trail');
    let mouseX = -100, mouseY = -100;
    let trailX = -100, trailY = -100;

    document.addEventListener('mousemove', function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.left = mouseX + 'px';
        dot.style.top = mouseY + 'px';
    });

    function animateTrail() {
        trailX += (mouseX - trailX) * 0.15;
        trailY += (mouseY - trailY) * 0.15;
        trail.style.left = trailX + 'px';
        trail.style.top = trailY + 'px';
        requestAnimationFrame(animateTrail);
    }

    animateTrail();

    document.addEventListener('mouseleave', function () {
        dot.style.opacity = '0';
        trail.style.opacity = '0';
        mouseX = -200;
        mouseY = -200;
    });

    document.addEventListener('mouseenter', function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        trailX = e.clientX;
        trailY = e.clientY;
        dot.style.left = mouseX + 'px';
        dot.style.top = mouseY + 'px';
        trail.style.left = trailX + 'px';
        trail.style.top = trailY + 'px';
        dot.style.opacity = '1';
        trail.style.opacity = '1';
    });
})();

(function () {
    const thumbs = document.querySelectorAll('.dev-thumb');
    const frameWrap = document.getElementById('deviceFrameWrap');
    if (!thumbs.length || !frameWrap) return;

    const MIN_WIDTH = {
        desktop: 1000,
        tablet: 600,
        mobile: 380
    };

    function updateThumbStates() {
        const w = window.innerWidth;
        thumbs.forEach(function (thumb) {
            const device = thumb.dataset.device;
            const min = MIN_WIDTH[device] || 0;
            if (w < min) {
                thumb.classList.add('locked');
                thumb.setAttribute('aria-disabled', 'true');
            } else {
                thumb.classList.remove('locked');
                thumb.removeAttribute('aria-disabled');
            }
        });
    }

    function switchDevice(device) {
        frameWrap.style.transition = 'opacity .25s ease, transform .25s ease';
        frameWrap.style.opacity = '0.5';
        frameWrap.style.transform = 'scale(0.95)';

        setTimeout(function () {
            frameWrap.setAttribute('data-current', device);
            frameWrap.style.opacity = '1';
            frameWrap.style.transform = 'scale(1)';
        }, 220);

        thumbs.forEach(function (t) {
            const isActive = t.dataset.device === device;
            t.classList.toggle('active', isActive);
            t.setAttribute('aria-pressed', String(isActive));
        });
    }

    thumbs.forEach(function (thumb) {
        thumb.addEventListener('click', function () {
            if (thumb.classList.contains('locked')) return;
            switchDevice(thumb.dataset.device);
        });
    });

    updateThumbStates();
    window.addEventListener('resize', updateThumbStates, { passive: true });
})();

const PROJECTS = [
    {
        tag: 'E-commerce',
        title: 'Интернет-магазин электроники',
        img: 'https://i.ibb.co/W4csBCYZ/image.png',
        desc: 'Полноценный сайт интернет-магазина с корзиной, оплатой через YooKassa, личным кабинетом пользователя и удобной панелью администратора. Реализована система скидок, промокодов, фильтрация и поиск товаров. Интегрированы email-уведомления и SMS.',
        tech: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis', 'Docker'],
        stats: [
            { n: '4.2K', l: 'Пользователей' },
            { n: '98%', l: 'Uptime' },
            { n: '2.1s', l: 'Время загрузки' }
        ]
    },
    {
        tag: 'SaaS',
        title: 'Аналитическая CRM-система',
        img: 'https://i.ibb.co/nMN3P8Yx/image.png',
        desc: 'Дашборд с real-time графиками, управлением клиентской базой и автоматическими отчётами. Данные обновляются в реальном времени через WebSocket. Поддерживает экспорт в PDF и Excel, настраиваемые дашборды и ролевую систему доступа.',
        tech: ['React', 'Node.js', 'WebSocket', 'Chart.js', 'PostgreSQL'],
        stats: [
            { n: '12', l: 'Компаний' },
            { n: '850+', l: 'Активных пользователей' },
            { n: '99.9%', l: 'Доступность' }
        ]
    },
    {
        tag: 'Mobile',
        title: 'Мобильное приложение доставки',
        img: 'https://i.ibb.co/7JKs6M44/image.png',
        desc: 'Кроссплатформенное приложение для заказа еды с геолокацией, чатом с курьером и трекингом заказа на карте. Пуш-уведомления, история заказов, программа лояльности и интеграция с платёжными системами.',
        tech: ['React Native', 'Firebase', 'Google Maps API', 'Node.js'],
        stats: [
            { n: '4.8★', l: 'App Store' },
            { n: '15K', l: 'Загрузок' },
            { n: '3+', l: 'Города' }
        ]
    },
    {
        tag: 'Landing',
        title: 'Корпоративный сайт + CMS',
        img: 'https://i.ibb.co/kg6NPZ7Y/image.png',
        desc: 'Представительский сайт компании с анимациями на GSAP, корпоративным блогом, мультиязычностью (ru/en) и собственной headless CMS для удобного редактирования контента без привлечения разработчика.',
        tech: ['Next.js', 'Sanity CMS', 'GSAP', 'i18n', 'Vercel'],
        stats: [
            { n: '95', l: 'PageSpeed' },
            { n: '2', l: 'Языка' },
            { n: '40+', l: 'Страниц' }
        ]
    }
];

(function () {
    const overlay = document.getElementById('portfolioModalOverlay');
    const pmClose = document.getElementById('pmClose');

    function openProjectModal(index) {
        const p = PROJECTS[index];
        if (!p) return;

        document.getElementById('pmImage').src = p.img;
        document.getElementById('pmImage').alt = p.title;
        document.getElementById('pmTag').textContent = p.tag;
        document.getElementById('pmTitle').textContent = p.title;
        document.getElementById('pmDesc').textContent = p.desc;

        const techEl = document.getElementById('pmTech');
        techEl.innerHTML = '';
        p.tech.forEach(function (t) {
            const span = document.createElement('span');
            span.textContent = t;
            techEl.appendChild(span);
        });

        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeProjectModal() {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    document.querySelectorAll('.pcard').forEach(function (card) {
        card.addEventListener('click', function (e) {
            const idx = parseInt(card.dataset.project);
            if (!isNaN(idx)) {
                openProjectModal(idx);
            }
        });
    });

    pmClose.addEventListener('click', closeProjectModal);

    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) closeProjectModal();
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && overlay.classList.contains('open')) {
            closeProjectModal();
        }
    });
})();

(function () {
    const wrap = document.getElementById('csWrap');
    const selected = document.getElementById('csSelected');
    const dropdown = document.getElementById('csDropdown');
    const options = dropdown.querySelectorAll('.cs-option');

    let selectedValue = '+7';

    function openDropdown() {
        wrap.classList.add('open');
        selected.classList.add('open');
        wrap.setAttribute('aria-expanded', 'true');
    }

    function closeDropdown() {
        wrap.classList.remove('open');
        selected.classList.remove('open');
        wrap.setAttribute('aria-expanded', 'false');
    }

    selected.addEventListener('click', function () {
        wrap.classList.contains('open') ? closeDropdown() : openDropdown();
    });

    selected.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            wrap.classList.contains('open') ? closeDropdown() : openDropdown();
        }
    });

    options.forEach(function (opt) {
        opt.addEventListener('click', function () {
            selectedValue = opt.dataset.value;
            selected.textContent = opt.dataset.flag + ' ' + opt.dataset.value;
            options.forEach(function (o) {
                o.classList.remove('selected');
                o.setAttribute('aria-selected', 'false');
            });
            opt.classList.add('selected');
            opt.setAttribute('aria-selected', 'true');
            closeDropdown();
        });
    });

    document.addEventListener('click', function (e) {
        if (!wrap.contains(e.target)) closeDropdown();
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeDropdown();
    });

    window.getSelectedCountryCode = function () {
        return selectedValue;
    };

    const phoneFormats = {
        '+7':   { mask: 'XXX XXX-XX-XX', maxDigits: 10 },
        '+375': { mask: 'XX XXX-XX-XX',  maxDigits: 9  },
        '+998': { mask: 'XX XXX-XX-XX',  maxDigits: 9  },
        '+996': { mask: 'XXX XXX-XXX',   maxDigits: 9  },
        '+992': { mask: 'XX XXX-XXXX',   maxDigits: 9  },
        '+374': { mask: 'XX XXX-XXX',    maxDigits: 8  },
        '+994': { mask: 'XX XXX-XX-XX',  maxDigits: 9  },
        '+373': { mask: 'XX XXX-XXX',    maxDigits: 8  },
        '+993': { mask: 'XX XXX-XX-XX',  maxDigits: 9  },
    };

    function applyPhoneMask(digits, code) {
        const fmt = phoneFormats[code] || phoneFormats['+7'];
        const limited = digits.slice(0, fmt.maxDigits);
        let result = '';
        let di = 0;
        for (let i = 0; i < fmt.mask.length && di < limited.length; i++) {
            if (fmt.mask[i] === 'X') {
                result += limited[di++];
            } else {
                result += fmt.mask[i];
            }
        }
        return result;
    }

    const phoneInput = document.getElementById('orderPhone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function (e) {
            const code = window.getSelectedCountryCode ? window.getSelectedCountryCode() : '+7';

            const digits = phoneInput.value.replace(/\D/g, '');
            const formatted = applyPhoneMask(digits, code);

            const prevLen = phoneInput.value.length;
            phoneInput.value = formatted;
        });

        options.forEach(function (opt) {
            opt.addEventListener('click', function () {
                const code = opt.dataset.value;
                const digits = phoneInput.value.replace(/\D/g, '');
                phoneInput.value = applyPhoneMask(digits, code);

                const fmt = phoneFormats[code] || phoneFormats['+7'];
                phoneInput.placeholder = fmt.mask.replace(/X/g, '0');
            });
        });
    }
})();

(function () {
    const PRODUCTS = [
        { id: 1, emoji: '⌚', name: 'Умные часы Pro', price: 12990 },
        { id: 2, emoji: '🎧', name: 'Беспроводные наушники', price: 8490 },
        { id: 3, emoji: '📱', name: 'Чехол iPhone 15', price: 1290 },
        { id: 4, emoji: '💻', name: 'Подставка для ноутбука', price: 3490 },
        { id: 5, emoji: '🖱️', name: 'Беспроводная мышь', price: 2190 },
        { id: 6, emoji: '⌨️', name: 'Механическая клавиатура', price: 7990 },
        { id: 7, emoji: '🔋', name: 'Powerbank 20000mAh', price: 2590 }
    ];

    const catalogEl = document.getElementById('shopCatalog');
    const cartItemsEl = document.getElementById('cartItems');
    const cartCountEl = document.getElementById('cartCount');
    const cartTotalEl = document.getElementById('cartTotal');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const cartClearBtn = document.getElementById('cartClearBtn');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    const payBtn = document.getElementById('payBtn');
    const closeSuccessBtn = document.getElementById('closeSuccessBtn');

    let cart = {};
    let checkedItems = {};

    const paginationEl = document.getElementById('catalogPagination');
    const prevBtn = document.getElementById('catPrev');
    const nextBtn = document.getElementById('catNext');
    const pageNumsEl = document.getElementById('catPageNums');

    let currentPage = 0;
    let lastPageSize = 0;

    function getVisibleCardsForWidth(w) {
        if (w <= 768) return 4;
        if (w >= 769 && w <= 801) return 6;
        if (w >= 901 && w <= 946) return 4;
        if (w >= 947 && w <= 1122) return 6;
        return 8;
    }

    function getPageSize() {
        return getVisibleCardsForWidth(window.innerWidth);
    }

    function getGridColumns(pageSize) {
        return pageSize / 2;
    }

    function getVisiblePages(current, total, max) {
        if (total <= max) {
            var all = [];
            for (var i = 0; i < total; i++) all.push(i);
            return all;
        }
        var start = Math.max(0, Math.min(current - Math.floor(max / 2), total - max));
        var pages = [];
        for (var j = 0; j < max; j++) pages.push(start + j);
        return pages;
    }

    function renderPagination(totalPages) {
        var needsPagination = PRODUCTS.length > getPageSize();
        pageNumsEl.innerHTML = '';

        if (!needsPagination || totalPages <= 1) {
            paginationEl.classList.remove('visible');
            prevBtn.disabled = true;
            nextBtn.disabled = true;
            return;
        }

        paginationEl.classList.add('visible');
        prevBtn.disabled = currentPage === 0;
        nextBtn.disabled = currentPage >= totalPages - 1;

        getVisiblePages(currentPage, totalPages, 5).forEach(function (idx) {
            var btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'cat-page-num' + (idx === currentPage ? ' active' : '');
            btn.textContent = idx + 1;
            btn.setAttribute('aria-label', 'Страница ' + (idx + 1));
            if (idx === currentPage) btn.setAttribute('aria-current', 'page');
            (function (pageIdx) {
                btn.addEventListener('click', function () {
                    currentPage = pageIdx;
                    renderCatalog();
                });
            })(idx);
            pageNumsEl.appendChild(btn);
        });
    }

    function renderCatalog() {
        var pageSize = getPageSize();
        var cols = getGridColumns(pageSize);
        catalogEl.style.gridTemplateColumns = 'repeat(' + cols + ', 1fr)';

        var totalPages = Math.ceil(PRODUCTS.length / pageSize);

        if (currentPage >= totalPages) currentPage = totalPages - 1;
        if (currentPage < 0) currentPage = 0;

        var start = currentPage * pageSize;
        var end = Math.min(start + pageSize, PRODUCTS.length);
        var pageProducts = PRODUCTS.slice(start, end);

        catalogEl.innerHTML = '';
        pageProducts.forEach(function (p) {
            const inCart = cart[p.id] && cart[p.id] > 0;
            const qty = inCart ? cart[p.id] : 0;
            const card = document.createElement('div');
            card.className = 'product-card';
            card.dataset.cardId = p.id;
            card.innerHTML =
                '<div class="product-img">' + p.emoji + '</div>' +
                '<div class="product-body">' +
                    '<div class="product-name">' + p.name + '</div>' +
                    '<div class="product-price">' + p.price.toLocaleString('ru-RU') + ' ₽</div>' +
                    (inCart
                        ? '<div class="product-qty-ctrl" data-id="' + p.id + '">' +
                              '<button class="pqc-minus" data-id="' + p.id + '" aria-label="Убрать">−</button>' +
                              '<span class="pqc-count">' + qty + '</span>' +
                              '<button class="pqc-plus" data-id="' + p.id + '" aria-label="Добавить">+</button>' +
                          '</div>'
                        : '<button class="product-add" data-id="' + p.id + '" aria-label="Добавить ' + p.name + ' в корзину">+ В корзину</button>'
                    ) +
                '</div>';
            catalogEl.appendChild(card);
        });

        renderPagination(totalPages);

        catalogEl.querySelectorAll('.product-add').forEach(function (btn) {
            btn.addEventListener('click', function () {
                const id = parseInt(btn.dataset.id);
                cart[id] = (cart[id] || 0) + 1;
                checkedItems[id] = true;
                renderCart();
                renderCatalog();
            });
        });

        catalogEl.querySelectorAll('.pqc-plus').forEach(function (btn) {
            btn.addEventListener('click', function () {
                const id = parseInt(btn.dataset.id);
                cart[id] = (cart[id] || 0) + 1;
                checkedItems[id] = true;
                renderCart();
                const ctrl = catalogEl.querySelector('.product-qty-ctrl[data-id="' + id + '"]');
                if (ctrl) ctrl.querySelector('.pqc-count').textContent = cart[id];
            });
        });

        catalogEl.querySelectorAll('.pqc-minus').forEach(function (btn) {
            btn.addEventListener('click', function () {
                const id = parseInt(btn.dataset.id);
                cart[id] = Math.max(0, (cart[id] || 1) - 1);
                if (!cart[id]) {
                    delete cart[id];
                    delete checkedItems[id];
                    renderCart();
                    renderCatalog();
                } else {
                    renderCart();
                    const ctrl = catalogEl.querySelector('.product-qty-ctrl[data-id="' + id + '"]');
                    if (ctrl) ctrl.querySelector('.pqc-count').textContent = cart[id];
                }
            });
        });
    }

    prevBtn.addEventListener('click', function() {
        if (currentPage > 0) { currentPage--; renderCatalog(); }
    });
    nextBtn.addEventListener('click', function() {
        var pageSize = getPageSize();
        var totalPages = Math.ceil(PRODUCTS.length / pageSize);
        if (currentPage < totalPages - 1) { currentPage++; renderCatalog(); }
    });

    function handleCatalogResize() {
        var newPageSize = getPageSize();
        if (newPageSize === lastPageSize) return;
        lastPageSize = newPageSize;
        currentPage = 0;
        renderCatalog();
    }

    window.addEventListener('resize', handleCatalogResize);
    lastPageSize = getPageSize();

    function updateTotals() {
        const ids = Object.keys(cart).filter(function (id) { return cart[id] > 0; });
        let total = 0, count = 0, selectedTotal = 0, selectedCount = 0;
        ids.forEach(function (id) {
            const p = PRODUCTS.find(function (x) { return x.id === parseInt(id); });
            const qty = cart[id];
            const isChecked = !!checkedItems[id];
            total += p.price * qty;
            count += qty;
            if (isChecked) { selectedTotal += p.price * qty; selectedCount += qty; }

            const item = cartItemsEl.querySelector('[data-id="' + id + '"].cart-item');
            if (item) item.classList.toggle('unchecked', !isChecked);
        });
        cartCountEl.textContent = count;
        cartTotalEl.textContent = (selectedCount > 0 ? selectedTotal : total).toLocaleString('ru-RU') + ' ₽';
        checkoutBtn.disabled = selectedCount === 0;
    }

    function renderCart() {
        const ids = Object.keys(cart).filter(function (id) { return cart[id] > 0; });

        if (!ids.length) {
            cartItemsEl.innerHTML = '<div class="cart-empty">Корзина пуста</div>';
            cartCountEl.textContent = '0';
            cartTotalEl.textContent = '0 ₽';
            checkoutBtn.disabled = true;
            if (cartClearBtn) cartClearBtn.style.display = 'none';
            return;
        }

        if (cartClearBtn) cartClearBtn.style.display = 'inline-flex';

        let total = 0, count = 0, selectedTotal = 0, selectedCount = 0;
        cartItemsEl.innerHTML = '';

        ids.forEach(function (id) {
            const p = PRODUCTS.find(function (x) { return x.id === parseInt(id); });
            const qty = cart[id];
            const isChecked = !!checkedItems[id];
            total += p.price * qty;
            count += qty;
            if (isChecked) { selectedTotal += p.price * qty; selectedCount += qty; }

            const item = document.createElement('div');
            item.className = 'cart-item' + (isChecked ? '' : ' unchecked');
            item.dataset.id = id;
            item.innerHTML =
                '<div class="ci-check">' +
                    '<input type="checkbox" id="check-' + id + '" data-id="' + id + '"' + (isChecked ? ' checked' : '') + ' aria-label="Выбрать ' + p.name + '">' +
                '</div>' +
                '<div class="ci-emoji">' + p.emoji + '</div>' +
                '<div class="ci-info">' +
                    '<div class="ci-name">' + p.name + '</div>' +
                    '<div class="ci-price">' + (p.price * qty).toLocaleString('ru-RU') + ' ₽</div>' +
                '</div>' +
                '<div class="ci-qty">' +
                    '<button class="qty-minus" data-id="' + id + '" aria-label="Убрать одну штуку">−</button>' +
                    '<span aria-label="Количество">' + qty + '</span>' +
                    '<button class="qty-plus" data-id="' + id + '" aria-label="Добавить одну штуку">+</button>' +
                '</div>';
            cartItemsEl.appendChild(item);
        });

        cartItemsEl.querySelectorAll('.ci-check input[type="checkbox"]').forEach(function (cb) {
            cb.addEventListener('change', function () {
                const id = cb.dataset.id;
                if (cb.checked) {
                    checkedItems[id] = true;
                } else {
                    delete checkedItems[id];
                }
                updateTotals();
            });
        });

        cartItemsEl.querySelectorAll('.qty-minus').forEach(function (b) {
            b.addEventListener('click', function () {
                const id = b.dataset.id;
                cart[id] = Math.max(0, (cart[id] || 0) - 1);
                if (!cart[id]) { delete cart[id]; delete checkedItems[id]; }
                renderCart();
                renderCatalog();
            });
        });

        cartItemsEl.querySelectorAll('.qty-plus').forEach(function (b) {
            b.addEventListener('click', function () {
                cart[b.dataset.id] = (cart[b.dataset.id] || 0) + 1;
                renderCart();
                renderCatalog();
            });
        });

        cartCountEl.textContent = count;
        cartTotalEl.textContent = (selectedCount > 0 ? selectedTotal : total).toLocaleString('ru-RU') + ' ₽';
        checkoutBtn.disabled = selectedCount === 0;
    }

    function showStep(id) {
        ['stepForm', 'stepProcessing', 'stepSuccess'].forEach(function (s) {
            document.getElementById(s).classList.toggle('hidden', s !== id);
        });
    }

    function openModal() {
        showStep('stepForm');
        document.getElementById('orderName').value = '';
        document.getElementById('orderPhone').value = '';
        document.getElementById('nameHint').textContent = '';
        document.getElementById('nameHint').classList.remove('error-msg');
        document.getElementById('phoneHint').textContent = '';
        document.getElementById('phoneHint').classList.remove('error-msg');
        document.getElementById('orderName').classList.remove('input-error');
        document.getElementById('orderPhone').classList.remove('input-error');

        const ids = Object.keys(cart).filter(function (id) { return cart[id] > 0 && checkedItems[id]; });
        let html = '', total = 0;
        ids.forEach(function (id) {
            const p = PRODUCTS.find(function (x) { return x.id === parseInt(id); });
            const qty = cart[id];
            total += p.price * qty;
            html += p.emoji + ' ' + p.name + ' × ' + qty + ' — ' + (p.price * qty).toLocaleString('ru-RU') + ' ₽<br>';
        });

        document.getElementById('modalSummary').innerHTML = html;
        document.getElementById('modalTotal').innerHTML = 'Итого: <span>' + total.toLocaleString('ru-RU') + ' ₽</span>';
        modalOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
        setTimeout(function () { document.getElementById('orderName').focus(); }, 100);
    }

    function closeModal() {
        modalOverlay.classList.remove('open');
        document.body.style.overflow = '';
    }

    function showToast(message) {
        const toast = document.getElementById('custom-toast');
        if (!toast) return;
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(function () { toast.classList.remove('show'); }, 3500);
    }

    function validatePhone(raw) {

        const digits = raw.replace(/[\s\-\(\)]/g, '');
        return /^\d{7,13}$/.test(digits);
    }

    function processPayment() {
        const nameEl = document.getElementById('orderName');
        const phoneEl = document.getElementById('orderPhone');
        const name = nameEl.value.trim();
        const phoneRaw = phoneEl.value.trim();
        const countryCode = window.getSelectedCountryCode ? window.getSelectedCountryCode() : '+7';
        const pay = document.querySelector('input[name="pay"]:checked').value;

        let hasError = false;

        if (!name || !/^[А-Яа-яЁё\s]+$/.test(name)) {
            nameEl.classList.add('input-error');
            document.getElementById('nameHint').textContent = 'Только русские буквы!';
            document.getElementById('nameHint').classList.add('error-msg');
            hasError = true;
        } else {
            nameEl.classList.remove('input-error');
            document.getElementById('nameHint').textContent = '';
            document.getElementById('nameHint').classList.remove('error-msg');
        }

        const selectedCode2 = window.getSelectedCountryCode ? window.getSelectedCountryCode() : '+7';
        const phoneFormatsV = { '+7': 10, '+375': 9, '+998': 9, '+996': 9, '+992': 9, '+374': 8, '+994': 9, '+373': 8, '+993': 9 };
        const expectedLen = phoneFormatsV[selectedCode2] || 10;
        const phoneDigits = phoneRaw.replace(/[\s\-\(\)]/g, '');
        const phoneValid = /^\d+$/.test(phoneDigits) && phoneDigits.length === expectedLen;
        if (!phoneRaw || !phoneValid) {
            phoneEl.classList.add('input-error');
            document.getElementById('phoneHint').textContent = 'Нужно ' + expectedLen + ' цифр';
            document.getElementById('phoneHint').classList.add('error-msg');
            hasError = true;
        } else {
            phoneEl.classList.remove('input-error');
            document.getElementById('phoneHint').textContent = '';
            document.getElementById('phoneHint').classList.remove('error-msg');
        }

        if (hasError) return;

        const phone = countryCode + ' ' + phoneRaw;
        showStep('stepProcessing');

        setTimeout(function () {
            showStep('stepSuccess');

            const orderId = Math.floor(Math.random() * 90000) + 10000;
            const date = new Date().toLocaleString('ru-RU', {
                day: '2-digit', month: '2-digit', year: 'numeric',
                hour: '2-digit', minute: '2-digit'
            });
            const payLabels = { card: '💳 Банковская карта', cash: '💵 Наличные', sbp: '📱 СБП' };
            const summary = document.getElementById('modalSummary').innerHTML;
            const totalText = document.getElementById('modalTotal').querySelector('span').textContent;

            document.getElementById('orderReceipt').innerHTML =
                '<div class="receipt-row"><span>Заказ</span><span>#' + orderId + '</span></div>' +
                '<div class="receipt-row"><span>Дата</span><span>' + date + '</span></div>' +
                '<div class="receipt-row"><span>Покупатель</span><span>' + name + '</span></div>' +
                '<div class="receipt-row"><span>Телефон</span><span>' + phone + '</span></div>' +
                '<div class="receipt-row"><span>Оплата</span><span>' + payLabels[pay] + '</span></div>' +
                '<div class="receipt-items">' + summary + '</div>' +
                '<div class="receipt-row total"><span>Итого</span><span>' + totalText + '</span></div>' +
                '<div class="receipt-confirmed">✓ Платёж подтверждён</div>';

            Object.keys(checkedItems).forEach(function (id) {
                delete cart[id];
            });
            checkedItems = {};
            renderCart();
            renderCatalog();
        }, 2200);
    }

    checkoutBtn && checkoutBtn.addEventListener('click', openModal);
    modalClose && modalClose.addEventListener('click', closeModal);
    payBtn && payBtn.addEventListener('click', processPayment);
    closeSuccessBtn && closeSuccessBtn.addEventListener('click', closeModal);

    cartClearBtn && cartClearBtn.addEventListener('click', function () {
        cart = {};
        checkedItems = {};
        renderCart();
        renderCatalog();
    });

    modalOverlay && modalOverlay.addEventListener('click', function (e) {
        if (e.target === modalOverlay) closeModal();
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modalOverlay.classList.contains('open')) closeModal();
    });

    document.querySelectorAll('.pay-opt input').forEach(function (r) {
        r.addEventListener('change', function () {
            document.querySelectorAll('.pay-opt').forEach(function (o) { o.classList.remove('active'); });
            r.closest('.pay-opt').classList.add('active');
        });
    });

    renderCatalog();
    renderCart();
})();

(function () {

    const reveals = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            const siblings = Array.from(entry.target.parentElement.querySelectorAll('.reveal:not(.visible)'));
            const idx = siblings.indexOf(entry.target);
            setTimeout(function () {
                entry.target.classList.add('visible');
            }, Math.min(idx * 80, 300));
            obs.unobserve(entry.target);
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(function (el) { obs.observe(el); });

    const nav = document.getElementById('nav');
    window.addEventListener('scroll', function () {
        nav.classList.toggle('scrolled', scrollY > 40);
    }, { passive: true });

    const burger = document.getElementById('burger');
    const mm = document.getElementById('mobileMenu');
    burger && burger.addEventListener('click', function () {
        const open = mm.classList.toggle('open');
        burger.setAttribute('aria-expanded', String(open));
    });

    mm && mm.querySelectorAll('.mm-link').forEach(function (l) {
        l.addEventListener('click', function () { mm.classList.remove('open'); });
    });

    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
        a.addEventListener('click', function (e) {
            const t = document.querySelector(a.getAttribute('href'));
            if (t) {
                e.preventDefault();
                t.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    const sects = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    const linkObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navLinks.forEach(function (l) {
                    l.style.color = l.getAttribute('href') === '#' + id ? 'var(--clr-accent)' : '';
                });
            }
        });
    }, { threshold: 0.4 });

    sects.forEach(function (s) { linkObs.observe(s); });
})();

(function () {
    var imgs = document.querySelectorAll('img[loading="lazy"]');

    var imgObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            var img = entry.target;
            imgObs.unobserve(img);

            requestAnimationFrame(function () {
                requestAnimationFrame(function () {
                    img.classList.add('img-visible');
                });
            });
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });

    imgs.forEach(function (img) {

        img.classList.remove('img-visible');
        imgObs.observe(img);
    });
})();
(function () {
    window.addEventListener('wheel', function (e) {
        if (e.target.closest('#deviceIframe, #deviceIframeTablet, #deviceIframeMobile, .cart-items, .modal, .pm-scroll, .cs-dropdown')) return;
        e.preventDefault();
        window.scrollBy({ top: e.deltaY * 2.5, left: 0, behavior: 'smooth' });
    }, { passive: false });
})();