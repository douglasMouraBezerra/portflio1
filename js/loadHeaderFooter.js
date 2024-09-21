// Função para carregar o header e o footer dinamicamente
function loadHeaderFooter() {
    // Carregar o header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o header:', error));

    // Carregar o footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o footer:', error));
}

// Chama a função para carregar o header e o footer
window.onload = loadHeaderFooter;
