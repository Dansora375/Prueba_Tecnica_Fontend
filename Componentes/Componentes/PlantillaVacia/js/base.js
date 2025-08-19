/**
 * DIRECTORIO - JavaScript Principal
 * Universidad Nacional de Colombia - Dirección Financiera y Administrativa
 */

// Esperar a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // INICIALIZACIÓN
    // ========================================
    console.log('Directorio UNAL - Sistema iniciado');
    
    // ========================================
    // BÚSQUEDA EN TIEMPO REAL (FUTURO)
    // ========================================
    const searchInput = document.querySelector('.directorio-search__input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            // Funcionalidad de búsqueda se implementará posteriormente
            console.log('Búsqueda:', this.value);
        });
    }
    
    // ========================================
    // FILTRO POR DIVISIÓN (FUTURO)
    // ========================================
    const filterSelect = document.querySelector('.directorio-filter__select');
    if (filterSelect) {
        filterSelect.addEventListener('change', function() {
            // Funcionalidad de filtro se implementará posteriormente
            console.log('Filtro seleccionado:', this.value);
        });
    }
    
    // ========================================
    // PAGINACIÓN (FUTURO)
    // ========================================
    const paginationBtns = document.querySelectorAll('.directorio-pagination__btn');
    paginationBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Funcionalidad de paginación se implementará posteriormente
            console.log('Paginación clickeada');
        });
    });
    
    // ========================================
    // ANIMACIONES SUAVES
    // ========================================
    
    // Animación de entrada para las tarjetas de contacto
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar tarjetas de contacto
    const contactCards = document.querySelectorAll('.directorio-contact__card');
    contactCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // ========================================
    // RESPONSIVE ENHANCEMENTS
    // ========================================
    
    // Ajustar navegación en móviles
    function adjustNavigation() {
        const nav = document.querySelector('.directorio-nav__menu');
        if (window.innerWidth <= 768 && nav) {
            nav.style.flexDirection = 'column';
        } else if (nav) {
            nav.style.flexDirection = 'row';
        }
    }
    
    // Ejecutar al cargar y redimensionar
    adjustNavigation();
    window.addEventListener('resize', adjustNavigation);
    
    // ========================================
    // UTILIDADES
    // ========================================
    
    // Función para mostrar mensajes de estado (futuro uso)
    function showMessage(message, type = 'info') {
        console.log(`${type.toUpperCase()}: ${message}`);
        // Implementar sistema de notificaciones posteriormente
    }
    
    // Función para validar email (futuro uso)
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // ========================================
    // DATOS MOCK PARA DESARROLLO
    // ========================================
    
    window.DirectorioData = {
        contactos: [
            {
                cargo: "Director",
                nombre: "Juan Carlos Pérez",
                division: "Dirección Financiera",
                correo: "jcperez@unal.edu.co",
                extension: "12345"
            },
            {
                cargo: "Subdirector",
                nombre: "María Elena García",
                division: "Dirección Administrativa",
                correo: "megarcia@unal.edu.co",
                extension: "12346"
            },
            {
                cargo: "Coordinador",
                nombre: "Carlos Andrés Rodríguez",
                division: "Contabilidad",
                correo: "carodriguez@unal.edu.co",
                extension: "12347"
            },
            {
                cargo: "Analista",
                nombre: "Ana María López",
                division: "Presupuesto",
                correo: "amlopez@unal.edu.co",
                extension: "12348"
            },
            {
                cargo: "Asistente",
                nombre: "Pedro Antonio Martínez",
                division: "Dirección Financiera",
                correo: "pamartinez@unal.edu.co",
                extension: "12349"
            }
        ],
        divisiones: [
            "Dirección Financiera",
            "Dirección Administrativa", 
            "Contabilidad",
            "Presupuesto",
            "Recursos Humanos",
            "Servicios Generales"
        ]
    };
    
    // Exponer funciones globalmente para futuro uso
    window.DirectorioApp = {
        showMessage,
        isValidEmail,
        data: window.DirectorioData
    };
    
});
