// Acciones: búsqueda, filtro y paginación
function searchDirectory() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  filteredData = directoryData.filter(item => 
    item.nombre.toLowerCase().includes(searchTerm) ||
    item.cargo.toLowerCase().includes(searchTerm) ||
    item.division.toLowerCase().includes(searchTerm) ||
    item.correo.toLowerCase().includes(searchTerm)
  );
  currentPage = 1;
  renderTable();
}

function filterByDivision() {
  const division = document.getElementById('divisionFilter').value;
  if (division === '') {    
    filteredData = [...directoryData];
  } else {
    filteredData = directoryData.filter(item => item.division === division);
  }
  currentPage = 1;
  renderTable();
}

function previousPage() {
  if (currentPage > 1) {
    currentPage--;
    renderTable();
  }
}

function nextPage() {
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    renderTable();
  }
}
