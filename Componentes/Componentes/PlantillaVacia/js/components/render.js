// Funciones de renderizado
function renderTable() {
  const tableBody = document.getElementById('tableBody');
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageData = filteredData.slice(start, end);
  
  tableBody.innerHTML = '';
  
  pageData.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.cargo}</td>
      <td>${item.nombre}</td>
      <td>${item.division}</td>
      <td>${item.correo}</td>
      <td>${item.extension}</td>
    `;
    tableBody.appendChild(row);
  });
  
  updatePagination();
}

function updatePagination() {
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  document.getElementById('currentPage').textContent = currentPage;
  document.getElementById('totalPages').textContent = totalPages;
  
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}
