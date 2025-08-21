// Datos del directorio
const directoryData = [
  { cargo: "Director", nombre: "Juan Carlos Pérez", division: "Dirección Financiera", correo: "jcperez@unal.edu.co", extension: "12345" },
  { cargo: "Subdirector", nombre: "María Elena García", division: "Dirección Administrativa", correo: "megarcia@unal.edu.co", extension: "12346" },
  { cargo: "Coordinador", nombre: "Carlos Andrés Rodríguez", division: "Contabilidad", correo: "carodriguez@unal.edu.co", extension: "12347" },
  { cargo: "Analista", nombre: "Ana María López", division: "Presupuesto", correo: "amlopez@unal.edu.co", extension: "12348" },
  { cargo: "Asistente", nombre: "Pedro Antonio Martínez", division: "Dirección Financiera", correo: "pamartinez@unal.edu.co", extension: "12349" },
  { cargo: "Coordinador", nombre: "Laura Sofía Hernández", division: "Dirección Administrativa", correo: "lshernandez@unal.edu.co", extension: "12350" },
  { cargo: "Analista", nombre: "Roberto Carlos Jiménez", division: "Contabilidad", correo: "rcjimenez@unal.edu.co", extension: "12351" },
  { cargo: "Técnico", nombre: "Carmen Teresa Ruiz", division: "Presupuesto", correo: "ctruiz@unal.edu.co", extension: "12352" },
  { cargo: "Secretaria", nombre: "Diana Marcela Torres", division: "Dirección Financiera", correo: "dmtorres@unal.edu.co", extension: "12353" },
  { cargo: "Auxiliar", nombre: "Jorge Luis Ramírez", division: "Dirección Administrativa", correo: "jlramirez@unal.edu.co", extension: "12354" }
];

let filteredData = [...directoryData];
let currentPage = 1;
const itemsPerPage = 8;

// Función para renderizar la tabla
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

// Función para actualizar la paginación
function updatePagination() {
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  document.getElementById('currentPage').textContent = currentPage;
  document.getElementById('totalPages').textContent = totalPages;
  
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}

// Función de búsqueda
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

// Función para filtrar por división
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

// Funciones de paginación
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

// Búsqueda en tiempo real
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', searchDirectory);
  }
  
  // Renderizar tabla inicial
  renderTable();
});
