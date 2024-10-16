//Ler os dados do arquivo JSON
async function loadTouristData() {
    const response = await fetch('data.json');
    const data = await response.json();
    return data.local;
}

// Mostrar dados do modal, com base no json
function showDetails(touristSpot) {
    document.getElementById('details-title').textContent = touristSpot.title;
    document.getElementById('details-desc').textContent = touristSpot.desc;
    document.getElementById('details-location').textContent = touristSpot.location;
    document.getElementById('details-hours').textContent = touristSpot.hours
    document.getElementById('details-url').href = touristSpot.url;
    document.getElementById('modal').style.display = 'block'; // Abre o modal
}

// Fecha o modal quando o X for clicado
document.getElementById('close-modal').onclick = function() {
    document.getElementById('modal').style.display = 'none';
};

// Fecha o modal quando clicar fora do conteúdo
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

//Insere os dados no html
async function init() {
    const touristSpots = await loadTouristData();
    const list = document.getElementById('tourist-spots');

    touristSpots.forEach((spot, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = spot.title;
        listItem.dataset.id = index;
        listItem.onclick = () => showDetails(spot);
        list.appendChild(listItem);
    });
}

// Inicia
init();
