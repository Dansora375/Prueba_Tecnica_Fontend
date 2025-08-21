// Inicializador: eventos y render inicial
function initDirectory() {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', searchDirectory);
  }
  
  // Renderizar tabla inicial
  renderTable();
}

// Exponer init para uso global
window.initDirectory = initDirectory;
