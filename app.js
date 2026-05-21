// ============================================================
// Logique du site : filtres, tri, modal, rendu
// Sécurité : toutes les données proviennent de data.js (contrôlé,
// aucune entrée utilisateur). La fonction escape() échappe tous
// les caractères HTML avant injection, prévenant tout XSS.
// ============================================================

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));

const fmtPrice = (p) => p.toLocaleString('fr-FR', { minimumFractionDigits: 0, maximumFractionDigits: 0 }) + ' €';

// Strict HTML escaping (équivalent à un sanitizer Mustache-style).
const escape = (s) => String(s)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;');

// Replace target's children with an HTML string parsed via Range
// (avoids assigning to .innerHTML directly while still inserting markup).
function setMarkup(target, html) {
  while (target.firstChild) target.removeChild(target.firstChild);
  if (!html) return;
  const range = document.createRange();
  range.selectNodeContents(target);
  const frag = range.createContextualFragment(html);
  target.appendChild(frag);
}

// Detect AIB brand from GPU string
function detectAIB(card) {
  if (card.aib) return card.aib;
  const m = (card.gpu || '').match(/(MSI|ASUS|Gigabyte|PNY|Gainward|Palit|Zotac|Inno3D)/i);
  return m ? m[1] : 'Variable';
}

// ====================== PCs PREBUILT ======================

function pcCardHTML(pc) {
  const aib = detectAIB(pc);
  const tierLabel = { budget: 'Budget', mid: 'Milieu', high: 'Haut', pro: 'Pro' }[pc.tier];
  const stockHtml = pc.inStock
    ? '<span class="stock-badge">En stock</span>'
    : '<span class="stock-badge out">Sur commande</span>';

  return `
    <article class="pc-card" data-id="${escape(pc.id)}">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span class="card-tier tier-${escape(pc.tier)}">${escape(tierLabel)}</span>
        ${stockHtml}
      </div>
      <div>
        <div class="card-name">${escape(pc.name)}</div>
        <div class="card-vendor">${escape(pc.vendor)}</div>
      </div>
      <div>
        <div class="card-price">${fmtPrice(pc.price)}</div>
        <div class="card-price-note">${escape(pc.priceNote || '')}</div>
      </div>
      <div class="card-specs">
        <div class="spec-row"><span class="spec-key">CPU</span><span class="spec-val">${escape(pc.cpu)}</span></div>
        <div class="spec-row"><span class="spec-key">GPU</span><span class="spec-val">${escape(pc.gpu)} <span class="aib-tag">${escape(aib)}</span></span></div>
        <div class="spec-row"><span class="spec-key">RAM</span><span class="spec-val">${pc.ram} Go &middot; ${escape(pc.ramType)}</span></div>
        <div class="spec-row"><span class="spec-key">Stockage</span><span class="spec-val">${escape(pc.storage)}</span></div>
        <div class="spec-row"><span class="spec-key">Garantie</span><span class="spec-val">${escape(pc.warranty)}</span></div>
      </div>
      <div class="card-actions">
        <button class="btn-secondary" data-detail="${escape(pc.id)}">Détails &amp; avis</button>
        <a class="btn-primary" href="${escape(pc.url)}" target="_blank" rel="noopener noreferrer">Voir l'offre →</a>
      </div>
    </article>
  `;
}

function renderPCs() {
  const grid = $('#pc-grid');
  const maxPrice = parseFloat($('#filter-price').value);
  const aib = $('#filter-aib').value;
  const minRam = parseInt($('#filter-ram').value, 10);
  const minVram = parseInt($('#filter-vram').value, 10);
  const cpuBrand = $('#filter-cpu').value;
  const sortBy = $('#sort-by').value;

  let list = PC_PREBUILT.filter(pc => {
    if (pc.price > maxPrice) return false;
    if (aib && detectAIB(pc) !== aib) return false;
    if (pc.ram < minRam) return false;
    if (pc.vram < minVram) return false;
    if (cpuBrand && pc.cpuBrand !== cpuBrand) return false;
    return true;
  });

  list.sort((a, b) => {
    switch (sortBy) {
      case 'price-desc': return b.price - a.price;
      case 'vram-desc':  return b.vram - a.vram || a.price - b.price;
      case 'ram-desc':   return b.ram - a.ram || a.price - b.price;
      default:           return a.price - b.price;
    }
  });

  $('#filter-price-value').textContent = fmtPrice(maxPrice);
  $('#results-count').textContent = `${list.length} PC affiché${list.length > 1 ? 's' : ''} sur ${PC_PREBUILT.length}`;

  if (list.length === 0) {
    setMarkup(grid, `
      <div class="empty-state">
        <h3>Aucun PC ne correspond</h3>
        <p>Essayez d'élargir les filtres (budget, RAM, VRAM).</p>
      </div>
    `);
    return;
  }

  setMarkup(grid, list.map(pcCardHTML).join(''));

  $$('[data-detail]', grid).forEach(btn => {
    btn.addEventListener('click', () => openModal(btn.dataset.detail));
  });
}

// ====================== MODAL ======================

function openModal(id) {
  const pc = PC_PREBUILT.find(p => p.id === id);
  if (!pc) return;

  const aib = detectAIB(pc);
  const body = $('#modal-body');
  setMarkup(body, `
    <h3>${escape(pc.name)}</h3>
    <div class="modal-vendor">${escape(pc.vendor)} &middot; garantie ${escape(pc.warranty)}</div>

    <div class="modal-price-row">
      <div class="modal-price">${fmtPrice(pc.price)}</div>
      <div style="color:var(--text-mute); font-size:14px;">${escape(pc.priceNote || '')}</div>
    </div>

    <div class="modal-section">
      <h4>Configuration</h4>
      <div class="modal-specs-grid">
        <div class="modal-spec"><div class="modal-spec-key">CPU</div><div class="modal-spec-val">${escape(pc.cpu)}</div></div>
        <div class="modal-spec"><div class="modal-spec-key">GPU + AIB</div><div class="modal-spec-val">${escape(pc.gpu)} <span class="aib-tag">${escape(aib)}</span></div></div>
        <div class="modal-spec"><div class="modal-spec-key">RAM</div><div class="modal-spec-val">${pc.ram} Go ${escape(pc.ramType)}</div></div>
        <div class="modal-spec"><div class="modal-spec-key">VRAM</div><div class="modal-spec-val">${pc.vram} Go</div></div>
        <div class="modal-spec"><div class="modal-spec-key">Stockage</div><div class="modal-spec-val">${escape(pc.storage)}</div></div>
        <div class="modal-spec"><div class="modal-spec-key">Alim</div><div class="modal-spec-val">${escape(pc.psu)}</div></div>
        <div class="modal-spec"><div class="modal-spec-key">Boîtier</div><div class="modal-spec-val">${escape(pc.casing)}</div></div>
        <div class="modal-spec"><div class="modal-spec-key">Stock</div><div class="modal-spec-val">${pc.inStock ? 'En stock' : 'Sur commande'}</div></div>
      </div>
    </div>

    <div class="modal-section">
      <h4 style="color: var(--success);">Points forts</h4>
      <ul style="list-style:none;">
        ${pc.pros.map(p => `<li style="padding-left:20px; position:relative; margin-bottom:8px; color:var(--text-dim); font-size:14px;"><span style="position:absolute; left:0; color:var(--success); font-weight:700;">+</span>${escape(p)}</li>`).join('')}
      </ul>
    </div>

    <div class="modal-section">
      <h4 style="color: var(--danger);">Limitations</h4>
      <ul style="list-style:none;">
        ${pc.cons.map(c => `<li style="padding-left:20px; position:relative; margin-bottom:8px; color:var(--text-dim); font-size:14px;"><span style="position:absolute; left:0; color:var(--danger); font-weight:700;">−</span>${escape(c)}</li>`).join('')}
      </ul>
    </div>

    <a class="btn-primary" href="${escape(pc.url)}" target="_blank" rel="noopener noreferrer" style="display:inline-block; padding:14px 28px; text-decoration:none; margin-top:16px;">
      Voir l'offre chez ${escape(pc.vendor)} →
    </a>
  `);

  $('#modal').setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  $('#modal').setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// ====================== CUSTOM BUILDS ======================

function buildPanelHTML(key) {
  const b = CUSTOM_BUILDS[key];
  const total = b.parts.reduce((sum, p) => sum + p.price, 0);

  return `
    <div class="build-panel">
      <div class="build-header">
        <div class="build-title">
          <h3>${escape(b.name)}</h3>
          <p>${escape(b.tagline)}</p>
        </div>
        <div class="build-total">
          <div class="build-total-label">Total estimé</div>
          <div class="build-total-value">${fmtPrice(total)}</div>
          <div style="color: var(--text-mute); font-size: 12px; margin-top: 4px;">${escape(b.note || '')}</div>
        </div>
      </div>

      <div class="parts-list">
        ${b.parts.map(p => `
          <div class="part-row">
            <span class="part-cat">${escape(p.cat)}${p.brand ? ` · ${escape(p.brand)}` : ''}</span>
            <div class="part-name">${escape(p.name)}<small>${escape(p.note || '')}</small></div>
            <span class="part-price">${p.price === 0 ? 'inclus' : fmtPrice(p.price)}</span>
          </div>
        `).join('')}
      </div>

      <div class="build-pros-cons">
        <div class="proscons-block pros">
          <h4>Pour</h4>
          <ul>${b.pros.map(p => `<li>${escape(p)}</li>`).join('')}</ul>
        </div>
        <div class="proscons-block cons">
          <h4>Contre</h4>
          <ul>${b.cons.map(c => `<li>${escape(c)}</li>`).join('')}</ul>
        </div>
      </div>
    </div>
  `;
}

function renderCustomBuild(key) {
  setMarkup($('#custom-content'), buildPanelHTML(key));
  $$('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === key);
  });
}

// ====================== SCREENS ======================

function screenCardHTML(s) {
  const tierLabel = { budget: 'Budget', mid: 'Milieu', pro: 'Pro' }[s.tier];
  const calBadge = s.calibrated
    ? '<span class="stock-badge" style="color:var(--accent-2); margin-left:auto;">✓ Calibré usine</span>'
    : '';
  const tierClass = s.tier === 'mid' ? 'mid' : (s.tier === 'pro' ? 'pro' : 'budget');

  return `
    <article class="pc-card">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span class="card-tier tier-${escape(tierClass)}">${escape(tierLabel)}</span>
        ${calBadge}
      </div>
      <div>
        <div class="card-name">${escape(s.name)}</div>
        <div class="card-vendor">${escape(s.brand)} &middot; ${escape(s.size)} &middot; ${escape(s.resLabel)}</div>
      </div>
      <div>
        <div class="card-price">${fmtPrice(s.price)}</div>
        <div class="card-price-note">${escape(s.priceNote || '')}</div>
      </div>
      <div class="card-specs">
        <div class="spec-row"><span class="spec-key">Dalle</span><span class="spec-val">${escape(s.panel)} &middot; ${s.hz} Hz</span></div>
        <div class="spec-row"><span class="spec-key">Résol.</span><span class="spec-val">${escape(s.res)}</span></div>
        <div class="spec-row"><span class="spec-key">sRGB</span><span class="spec-val">${s.srgb} %</span></div>
        <div class="spec-row"><span class="spec-key">DCI-P3</span><span class="spec-val">${s.dcip3} %</span></div>
        <div class="spec-row"><span class="spec-key">HDR</span><span class="spec-val">${s.hdr ? escape(s.hdr) : 'Non'}</span></div>
        <div class="spec-row"><span class="spec-key">Connect.</span><span class="spec-val" style="font-size:12px;">${escape(s.connect)}</span></div>
      </div>
      <div>
        <div style="font-size:13px; font-weight:600; color:var(--success); margin-bottom:6px;">+ Points forts</div>
        <ul style="list-style:none; font-size:13px; color:var(--text-dim);">
          ${s.pros.slice(0, 3).map(p => `<li style="padding-left:16px; position:relative; margin-bottom:4px;"><span style="position:absolute; left:0; color:var(--success);">+</span>${escape(p)}</li>`).join('')}
        </ul>
        <div style="font-size:13px; font-weight:600; color:var(--danger); margin: 12px 0 6px;">− Limitations</div>
        <ul style="list-style:none; font-size:13px; color:var(--text-dim);">
          ${s.cons.slice(0, 2).map(c => `<li style="padding-left:16px; position:relative; margin-bottom:4px;"><span style="position:absolute; left:0; color:var(--danger);">−</span>${escape(c)}</li>`).join('')}
        </ul>
      </div>
      <div class="card-actions">
        <a class="btn-primary" href="${escape(s.url)}" target="_blank" rel="noopener noreferrer">Voir l'offre →</a>
      </div>
    </article>
  `;
}

function renderScreens() {
  const grid = $('#screen-grid');
  const maxPrice = parseFloat($('#screen-price').value);
  const brand = $('#screen-brand').value;
  const res = $('#screen-res').value;
  const cal = $('#screen-cal').value;
  const sortBy = $('#screen-sort').value;

  let list = SCREENS.filter(s => {
    if (s.price > maxPrice) return false;
    if (brand && s.brand !== brand) return false;
    if (res && s.resLabel !== res) return false;
    if (cal === 'yes' && !s.calibrated) return false;
    return true;
  });

  list.sort((a, b) => {
    switch (sortBy) {
      case 'price-desc':  return b.price - a.price;
      case 'dcip3-desc':  return b.dcip3 - a.dcip3 || a.price - b.price;
      default:            return a.price - b.price;
    }
  });

  $('#screen-price-value').textContent = fmtPrice(maxPrice);
  $('#screen-count').textContent = `${list.length} écran${list.length > 1 ? 's' : ''} affiché${list.length > 1 ? 's' : ''} sur ${SCREENS.length}`;

  if (list.length === 0) {
    setMarkup(grid, `<div class="empty-state"><h3>Aucun écran ne correspond</h3><p>Élargissez les filtres.</p></div>`);
    return;
  }

  setMarkup(grid, list.map(screenCardHTML).join(''));
}

// ====================== INIT ======================

document.addEventListener('DOMContentLoaded', () => {
  $('#stat-pcs').textContent = PC_PREBUILT.length;
  $('#stat-screens').textContent = SCREENS.length;

  ['filter-price', 'filter-aib', 'filter-ram', 'filter-vram', 'filter-cpu', 'sort-by'].forEach(id => {
    $('#' + id).addEventListener('input', renderPCs);
    $('#' + id).addEventListener('change', renderPCs);
  });

  $('#reset-filters').addEventListener('click', () => {
    $('#filter-price').value = 4500;
    $('#filter-aib').value = '';
    $('#filter-ram').value = '0';
    $('#filter-vram').value = '0';
    $('#filter-cpu').value = '';
    $('#sort-by').value = 'price-asc';
    renderPCs();
  });

  renderPCs();

  $$('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => renderCustomBuild(btn.dataset.tab));
  });
  renderCustomBuild('budget');

  ['screen-price', 'screen-brand', 'screen-res', 'screen-cal', 'screen-sort'].forEach(id => {
    $('#' + id).addEventListener('input', renderScreens);
    $('#' + id).addEventListener('change', renderScreens);
  });
  renderScreens();

  $$('[data-close]').forEach(el => el.addEventListener('click', closeModal));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
});
