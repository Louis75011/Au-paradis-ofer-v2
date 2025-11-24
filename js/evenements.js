// js/evenements.js

// Fonction pour afficher les 3 derniers événements (dans l'ordre d'insertion)
function loadEvenementsRecents() {
    const evenementsGrid = document.getElementById('evenementsGrid');
    if (!evenementsGrid) return;

    const evenementsRecents = evenements.slice(0, 3);

    evenementsGrid.innerHTML = evenementsRecents.map(evt => 
        createEvenementCard(evt)
    ).join('');
}

// Fonction pour créer une carte d'événement
function createEvenementCard(evenement) {
    const isPerime = new Date(evenement.date) < new Date();
    const badgePerime = isPerime ? '<span class="evenement-badge">Passé</span>' : '';
    const classePerime = isPerime ? 'perime' : '';

    return `
        <div class="evenement-card ${classePerime}" onclick="openEvenementDetail('${evenement.id}')">
            ${badgePerime}
            <img src="${evenement.image}" alt="${evenement.titre}" class="evenement-image">
            <div class="evenement-info">
                <h3 class="evenement-titre">${evenement.titre}</h3>
                <p class="evenement-date">${formatDate(evenement.date)}</p>
            </div>
        </div>
    `;
}

// Fonction pour formater la date
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('fr-FR', options);
}

// Fonction pour afficher tous les événements dans la modal
function showAllEvenements() {
    const modal = document.getElementById('evenementsModal');
    const modalGrid = document.getElementById('modalEvenementsGrid');
    
    if (!modal || !modalGrid) return;

    modalGrid.innerHTML = evenements.map(evt => 
        createEvenementCard(evt)
    ).join('');

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Fonction pour fermer la modal
function closeEvenementsModal() {
    const modal = document.getElementById('evenementsModal');
    if (!modal) return;

    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Fonction pour ouvrir le détail d'un événement (agrandi)
function openEvenementDetail(id) {
    const evenement = evenements.find(evt => evt.id === id);
    if (!evenement) return;

    // CORRECTION : Modale améliorée avec meilleur contraste
    const detailModal = document.createElement('div');
    detailModal.className = 'modal-evenements modal-detail-evenement active';
    detailModal.innerHTML = `
        <div class="modal-evenements-content">
            <div class="modal-evenements-header">
                <h2>${evenement.titre}</h2>
                <button class="modal-close" onclick="this.closest('.modal-evenements').remove(); document.body.style.overflow = '';" aria-label="Fermer">×</button>
            </div>
            <div class="modal-evenements-body">
                <img src="${evenement.image}" alt="${evenement.titre}" style="width: 100%; display: block;">
                <div class="modal-detail-info">
                    <p><strong>${formatDate(evenement.date)}</strong></p>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(detailModal);
    document.body.style.overflow = 'hidden';
}

// Fermer la modal au clic en dehors
document.addEventListener('click', (e) => {
    const modal = document.getElementById('evenementsModal');
    if (e.target === modal) {
        closeEvenementsModal();
    }
});

// Initialisation au chargement
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadEvenementsRecents);
} else {
    loadEvenementsRecents();
}
