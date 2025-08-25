// Состояние
let activeFilter = 'all';
let searchTerm = '';
let activeDeityId = null;

document.addEventListener('DOMContentLoaded', function() {
    initPantheon();
    initFilters();
    initSearch();
    initShare();

    const hash = window.location.hash.slice(1);
    if (hash && deitiesData[hash]) {
        showDeityDetails(hash);
        activateCard(hash);
        setTimeout(() => {
            const card = document.querySelector(`.deity-card[data-id="${hash}"]`);
            if (card) card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    } else {
        showDeityDetails('rod');
        activateCard('rod');
    }
});

function initPantheon() {
    document.querySelectorAll('.deity-card').forEach(card => {
        card.addEventListener('click', function() {
            const deityId = this.getAttribute('data-id');
            showDeityDetails(deityId);
            activateCard(deityId);
            window.location.hash = deityId;

            if (window.innerWidth < 768) {
                document.getElementById('detail-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

function initFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() { setActiveFilter(this.getAttribute('data-filter')); });
    });
}

function setActiveFilter(filter) {
    activeFilter = filter;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.toggle('active', btn.getAttribute('data-filter') === filter));
    applyFilters();
}

function applyFilters() {
    const cards = document.querySelectorAll('.deity-card');
    const levels = document.querySelectorAll('.pantheon-level');

    cards.forEach(card => {
        const type = card.getAttribute('data-type');
        const name = deitiesData[card.getAttribute('data-id')].name.toLowerCase();
        const searchMatch = searchTerm === '' || name.includes(searchTerm.toLowerCase());

        let show = searchMatch;
        if (activeFilter !== 'all') {
            show = show && ((activeFilter === 'gods' && type === 'god') || (activeFilter === 'spirits' && type === 'spirit'));
        }

        card.classList.toggle('hidden', !show);
        card.classList.toggle('dimmed', searchTerm !== '' && !searchMatch);
    });

    levels.forEach(level => {
        const visibleCards = level.querySelectorAll('.deity-card:not(.hidden)');
        level.classList.toggle('hidden', visibleCards.length === 0);
    });
}

function initSearch() {
    const searchInput = document.getElementById('searchInput');
    let searchTimeout;

    searchInput.addEventListener('input', function(e) {
        clearTimeout(searchTimeout);
        searchTerm = e.target.value.trim();
        searchTimeout = setTimeout(() => {
            applyFilters();
            if (searchTerm.length > 0) showSearchResults(searchTerm); else hideSearchResults();
        }, 300);
    });

    document.addEventListener('click', function(e) {
        if (!e.target.closest('.search-container')) hideSearchResults();
    });
}

function showSearchResults(term) {
    const searchResults = document.getElementById('searchResults');
    const termLower = term.toLowerCase();
    const results = [];

    Object.entries(deitiesData).forEach(([id, deity]) => {
        const nameLower = deity.name.toLowerCase();
        const descLower = deity.description.toLowerCase();
        if (nameLower.includes(termLower) || descLower.includes(termLower)) results.push({ id, deity });
    });

    if (results.length > 0) {
        searchResults.innerHTML = results.map(({ id, deity }) => {
            const iconClass = document.querySelector(`.deity-card[data-id="${id}"] .deity-icon`)?.className || 'fa-solid fa-star';
            return `
                <div class="search-result-item" data-id="${id}">
                    <div class="search-result-icon"><i class="${iconClass.replace('deity-icon ', '')}"></i></div>
                    <div class="search-result-text">
                        <div class="search-result-name">${deity.name}</div>
                        <div class="search-result-desc">${deity.title}</div>
                    </div>
                </div>
            `;
        }).join('');

        searchResults.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', function() {
                const deityId = this.getAttribute('data-id');
                showDeityDetails(deityId);
                activateCard(deityId);
                window.location.hash = deityId;
                hideSearchResults();
                const card = document.querySelector(`.deity-card[data-id="${deityId}"]`);
                if (card) card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                document.getElementById('searchInput').value = '';
                searchTerm = '';
                applyFilters();
            });
        });

        searchResults.style.display = 'block';
    } else {
        hideSearchResults();
    }
}

function hideSearchResults() {
    document.getElementById('searchResults').style.display = 'none';
}

function initShare() {
    const shareButton = document.getElementById('shareButton');
    shareButton.addEventListener('click', function() {
        const url = window.location.href;
        if (navigator.share) {
            navigator.share({
                title: document.title,
                text: activeDeityId ? `${deitiesData[activeDeityId].name} - ${deitiesData[activeDeityId].title}` : 'Древнерусский Пантеон Богов',
                url: url
            }).catch(() => copyToClipboard(url));
        } else {
            copyToClipboard(url);
        }
    });
}

function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(showCopiedMessage);
    } else {
        const textArea = document.createElement('textarea');
        textArea.value = text; textArea.style.position = 'fixed'; textArea.style.left = '-999999px';
        document.body.appendChild(textArea); textArea.focus(); textArea.select();
        try { document.execCommand('copy'); showCopiedMessage(); } catch (err) { console.error('Не удалось скопировать:', err); }
        document.body.removeChild(textArea);
    }
}

function showCopiedMessage() {
    const shareButton = document.getElementById('shareButton');
    const originalHTML = shareButton.innerHTML;
    shareButton.classList.add('copied');
    shareButton.innerHTML = '<i class="fas fa-check"></i><span>Скопировано!</span>';
    setTimeout(() => { shareButton.classList.remove('copied'); shareButton.innerHTML = originalHTML; }, 2000);
}

function activateCard(deityId) {
    document.querySelectorAll('.deity-card').forEach(c => c.classList.remove('active'));
    const targetCard = document.querySelector(`.deity-card[data-id="${deityId}"]`);
    if (targetCard) {
        targetCard.classList.add('active');
        if (targetCard.classList.contains('hidden')) {
            targetCard.classList.remove('hidden');
            targetCard.classList.add('highlighted');
            setTimeout(() => targetCard.classList.remove('highlighted'), 1000);
        }
    }
    activeDeityId = deityId;
}

function showDeityDetails(deityId) {
    const deity = deitiesData[deityId];
    const detailContainer = document.getElementById('deity-detail');
    const placeholder = document.getElementById('placeholder');
    if (!deity) { console.error('Данные не найдены для божества/духа:', deityId); return; }

    detailContainer.style.display = 'block';
    placeholder.style.display = 'none';

    document.getElementById('detail-name').textContent = deity.name;
    document.getElementById('detail-level').textContent = deity.title;
    document.getElementById('detail-level').className = `deity-level ${deity.level}`;
    document.getElementById('detail-description').textContent = deity.description;

    // Изображение
    setDetailImage(deityId, deity);

    renderRelations(deity);
    renderSphere(deity);
    renderCult(deity);
}

function renderRelations(deity) {
    const relationsContainer = document.getElementById('detail-relations');
    relationsContainer.innerHTML = '';

    deity.relations.forEach(relation => {
        const relationItem = document.createElement('div');
        relationItem.className = 'relation-item';

        let iconClass = 'fa-solid fa-user';
        if (relation.icon === 'child') iconClass = 'fa-solid fa-child';
        if (relation.icon === 'heart') iconClass = 'fa-solid fa-heart';
        if (relation.icon === 'female') iconClass = 'fa-solid fa-person-dress';
        if (relation.icon === 'user-friends' || relation.icon === 'user-group') iconClass = 'fa-solid fa-user-group';
        if (relation.icon === 'baby') iconClass = 'fa-solid fa-baby';
        if (relation.icon === 'star') iconClass = 'fa-solid fa-star';
        if (relation.icon === 'fist-raised' || relation.icon === 'hand-fist') iconClass = 'fa-solid fa-hand-fist';
        if (relation.icon === 'tree') iconClass = 'fa-solid fa-tree';
        if (relation.icon === 'mountain') iconClass = 'fa-solid fa-mountain';
        if (relation.icon === 'spa') iconClass = 'fa-solid fa-spa';
        if (relation.icon === 'leaf') iconClass = 'fa-solid fa-leaf';
        if (relation.icon === 'fire') iconClass = 'fa-solid fa-fire';
        if (relation.icon === 'spinner') iconClass = 'fa-solid fa-spinner';
        if (relation.icon === 'snowflake') iconClass = 'fa-solid fa-snowflake';
        if (relation.icon === 'water') iconClass = 'fa-solid fa-water';
        if (relation.icon === 'dove') iconClass = 'fa-solid fa-dove';
        if (relation.icon === 'dragon') iconClass = 'fa-solid fa-dragon';
        if (relation.icon === 'sun') iconClass = 'fa-solid fa-sun';
        if (relation.icon === 'skull') iconClass = 'fa-solid fa-skull';
        if (relation.icon === 'seedling') iconClass = 'fa-solid fa-seedling';
        if (relation.icon === 'eye') iconClass = 'fa-solid fa-eye';
        if (relation.icon === 'house') iconClass = 'fa-solid fa-house-chimney';
        if (relation.icon === 'ghost') iconClass = 'fa-solid fa-ghost';
        if (relation.icon === 'bath') iconClass = 'fa-solid fa-bath';
        if (relation.icon === 'wheat') iconClass = 'fa-solid fa-wheat-awn';
        if (relation.icon === 'fish') iconClass = 'fa-solid fa-fish';
        if (relation.icon === 'moon') iconClass = 'fa-solid fa-moon';

        if (relation.id) {
            relationItem.innerHTML = `
                <div class="relation-icon"><i class="${iconClass}"></i></div>
                <div class="relation-type">${relation.type}:</div>
                <div class="relation-name">${relation.name}</div>
            `;
            relationItem.addEventListener('click', () => {
                showDeityDetails(relation.id);
                activateCard(relation.id);
                window.location.hash = relation.id;
            });
        } else {
            relationItem.innerHTML = `
                <div class="relation-icon"><i class="${iconClass}"></i></div>
                <div class="relation-type">${relation.type}:</div>
                <div class="relation-name">${relation.name}</div>
            `;
        }

        relationsContainer.appendChild(relationItem);
    });
}

function renderSphere(deity) {
    const sphereContainer = document.getElementById('detail-sphere');
    sphereContainer.innerHTML = '';
    deity.sphere.split(', ').forEach(item => {
        const sphereItem = document.createElement('div');
        sphereItem.className = 'sphere-item';

        let iconClass = 'fa-solid fa-check-circle';
        const text = item.toLowerCase();

        if (text.includes('любов') || text.includes('брак')) iconClass = 'fa-solid fa-heart';
        if (text.includes('войн') || text.includes('сила') || text.includes('защит')) iconClass = 'fa-solid fa-shield-halved';
        if (text.includes('плодород') || text.includes('урожай')) iconClass = 'fa-solid fa-seedling';
        if (text.includes('судьб')) iconClass = 'fa-solid fa-dice';
        if (text.includes('смерт')) iconClass = 'fa-solid fa-skull';
        if (text.includes('вода') || text.includes('реки') || text.includes('оз')) iconClass = 'fa-solid fa-water';
        if (text.includes('солнц') || text.includes('лето')) iconClass = 'fa-solid fa-sun';
        if (text.includes('земл')) iconClass = 'fa-solid fa-mountain';
        if (text.includes('ветр')) iconClass = 'fa-solid fa-wind';
        if (text.includes('ремес')) iconClass = 'fa-solid fa-tools';
        if (text.includes('дом') || text.includes('очаг') || text.includes('семь')) iconClass = 'fa-solid fa-house-chimney';
        if (text.includes('лес') || text.includes('звер') || text.includes('охот')) iconClass = 'fa-solid fa-tree';
        if (text.includes('рыб')) iconClass = 'fa-solid fa-fish';
        if (text.includes('бан')) iconClass = 'fa-solid fa-bath';
        if (text.includes('трава') || text.includes('луг') || text.includes('цвет')) iconClass = 'fa-solid fa-leaf';
        if (text.includes('договор')) iconClass = 'fa-solid fa-handshake';
        if (text.includes('богат')) iconClass = 'fa-solid fa-coins';
        if (text.includes('маг')) iconClass = 'fa-solid fa-wand-magic-sparkles';
        if (text.includes('огонь') || text.includes('огн')) iconClass = 'fa-solid fa-fire';
        if (text.includes('зим')) iconClass = 'fa-solid fa-snowflake';
        if (text.includes('страх') || text.includes('мрак') || text.includes('ноч')) iconClass = 'fa-solid fa-moon';

        sphereItem.innerHTML = `<i class="${iconClass}"></i><div>${item}</div>`;
        sphereContainer.appendChild(sphereItem);
    });
}

function renderCult(deity) {
    const cultContainer = document.getElementById('detail-cult');
    cultContainer.innerHTML = '';
    const cultItem = document.createElement('div');
    cultItem.className = 'deity-description';
    cultItem.textContent = deity.cult;
    cultContainer.appendChild(cultItem);
}

// --- Изображения: загрузка с резервом и заглушкой ---
function setDetailImage(deityId, deity) {
    const imgEl = document.getElementById('detail-image');
    const capEl = document.getElementById('detail-image-caption');

    capEl.textContent = 'Иллюстрация (' + deity.name + ') — кликните для увеличения';
    imgEl.alt = deity.name;

    const sources = [];
    // Можно задать индивидуальный путь: deity.image = 'images/custom/xxx.jpg'
    if (deity.image) sources.push(deity.image);
    sources.push(`images/${deityId}.webp`, `images/${deityId}.jpg`, `images/${deityId}.png`);

    const placeholder = makePlaceholderDataURL(deity.name, deity.level);

    loadImageWithFallback(imgEl, sources, placeholder);

    imgEl.onclick = () => window.open(imgEl.src, '_blank');
}

function loadImageWithFallback(imgEl, sources, placeholder) {
    let index = 0;
    imgEl.onerror = () => {
        if (index < sources.length) {
            imgEl.src = sources[index++];
        } else {
            imgEl.onerror = null;
            imgEl.src = placeholder;
        }
    };
    // Старт с первой
    if (sources.length > 0) {
        index = 1;
        imgEl.src = sources[0];
    } else {
        imgEl.src = placeholder;
    }
}

function makePlaceholderDataURL(name, levelClass) {
    const colors = getLevelColors(levelClass);
    const svg = `
        <svg xmlns='http://www.w3.org/2000/svg' width='1200' height='675' viewBox='0 0 800 800'>
            <defs>
                <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
                    <stop offset='0%' stop-color='${colors[0]}'/>
                    <stop offset='100%' stop-color='${colors[1]}'/>
                </linearGradient>
            </defs>
            <rect width='1200' height='675' fill='url(#g)'/>
            <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle'
                  font-family='Russo One, Arial, sans-serif' font-size='64' fill='#ffffff' opacity='0.95'>
                ${escapeXML(name)}
            </text>
            <text x='50%' y='86%' text-anchor='middle' font-family='Comfortaa, Arial, sans-serif'
                  font-size='24' fill='rgba(255,255,255,0.85)'>Изображение отсутствует</text>
        </svg>
    `.trim();
    return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
}

function getLevelColors(levelClass) {
    if (levelClass === 'praw-bg') return ['#00bcd4', '#00838f'];
    if (levelClass === 'jaw-bg')  return ['#4caf50', '#2e7d32'];
    if (levelClass === 'naw-bg')  return ['#f44336', '#b71c1c'];
    return ['#7f8c8d', '#2c3e50'];
}

function escapeXML(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

// Обработка изменений hash
window.addEventListener('hashchange', function() {
    const hash = window.location.hash.slice(1);
    if (hash && deitiesData[hash]) {
        showDeityDetails(hash);
        activateCard(hash);
    }
});