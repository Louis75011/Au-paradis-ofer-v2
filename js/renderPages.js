// js\renderPages.js
// Render Chevaux
function renderChevaux() {
    const grid = document.getElementById('chevauxGrid');
    grid.innerHTML = chevaux.map(cheval => `
                <div class="card">
                    <img src="${cheval.photo}" alt="${cheval.nom}" class="card-image">
                    <div class="card-content">
                        <h3 class="card-title">${cheval.nom}</h3>
                        <p class="card-meta">${cheval.type} • ${cheval.race} • ${cheval.age} ans</p>
                        <p class="card-description">${cheval.resume}</p>
                    </div>
                </div>
            `).join('');
}

// Render Installations
function renderInstallations() {
    const grid = document.getElementById('installationsGrid');
    grid.innerHTML = installations.elements.map(installation => `
                <div class="card">
                    ${installation.photos.length > 0 ? `<img src="${installation.photos[0]}" alt="${installation.nom}" class="card-image">` : ''}
                    <div class="card-content">
                        <h3 class="card-title">${installation.nom}</h3>
                        ${installation.dimensions ? `<p class="card-meta">${installation.dimensions}</p>` : ''}
                        <p class="card-description">${installation.resume}</p>
                        <span class="card-badge ${installation.statut === 'en travaux' ? 'en-travaux' : ''}">${installation.statut === 'disponible' ? 'Disponible' : 'En travaux'}</span>
                    </div>
                </div>
            `).join('');
}

// Render Tarifs
function renderTarifs() {
    const grid = document.getElementById('tarifsGrid');
    grid.innerHTML = tarifs.map(tarif => `
                <div class="tarif-card">
                    <div class="tarif-title">${tarif.intitule}</div>
                    <div class="tarif-duree">${tarif.duree}</div>
                    <div class="tarif-prix">${tarif.prix} €</div>
                    ${tarif.note ? `<div class="tarif-note">${tarif.note}</div>` : ''}
                    <div class="tarif-contact">
                        <button class="btn btn-secondary" onclick="showPage('contact')" style="width: 100%;">Contact</button>
                    </div>
                </div>
            `).join('');
}

// Render Gites
function renderGites() {
    const grid = document.getElementById('gitesGrid');
    grid.innerHTML = gites.map(gite => `
                <div class="tarif-card">
                    <div class="tarif-title">${gite.intitule}</div>
                    <div class="tarif-duree">${gite.duree}</div>
                    <div class="tarif-prix">${gite.prix} ${gite.unite}</div>
                    ${gite.capaciteMax ? `<div class="tarif-note">Capacité max : ${gite.capaciteMax} personnes</div>` : ''}
                    ${gite.note ? `<div class="tarif-note">${gite.note}</div>` : ''}
                    <div class="tarif-contact">
                        <button class="btn btn-secondary" onclick="showPage('contact')" style="width: 100%;">Contact</button>
                    </div>
                </div>
            `).join('');
}

// Render Avis
function renderAvis() {
    const grid = document.getElementById('avisGrid');
    grid.innerHTML = avis.map(avisItem => `
                <div class="avis-card">
                    <div class="avis-author">${avisItem.author}</div>
                    <div class="avis-text">${avisItem.text}</div>
                </div>
            `).join('');
}

// Render FAQ
function renderFAQ() {
    const container = document.getElementById('faqContainer');
    container.innerHTML = faqData.map((item, index) => `
                <div class="faq-item">
                    <div class="faq-question" onclick="toggleFAQ(${index})">
                        ${item.question}
                    </div>
                    <div class="faq-answer" id="faq-${index}">
                        ${item.answer}
                    </div>
                </div>
            `).join('');
}

function toggleFAQ(index) {
    const question = document.querySelectorAll('.faq-question')[index];
    const answer = document.getElementById(`faq-${index}`);

    question.classList.toggle('active');
    answer.classList.toggle('active');
}