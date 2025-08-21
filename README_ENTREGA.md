## Universidad Nacional de Colombia
## Dirección Financiera y Administrativa - Sede Bogotá

# Prueba Técnica – Frontend Developer - Convocatoria CS1529 de 2025

---

## Organización General

```
PlantillaVacia/
├── css/
│   ├── base/
│   │   └── variables.css          # Variables CSS globales
│   ├── components/
│   │   ├── contact.css            # Estilos sección de contacto
│   │   ├── hero.css               # Estilos sección hero
│   │   ├── layout.css             # Layout principal del directorio
│   │   ├── navigation.css         # Menús de navegación
│   │   ├── responsive.css         # Media queries y responsive
│   │   ├── search.css             # Barra de búsqueda y filtros
│   │   └── table.css              # Tabla del directorio
│   └── base.css                   # Archivo maestro que importa todos los módulos
├── js/
│   ├── components/
│   │   ├── init.js                # Inicialización de la aplicación
│   │   ├── render.js              # Funciones de renderizado
│   │   └── state.js               # Manejo del estado
│   ├── modules/
│   │   └── actions.js             # Acciones del directorio (búsqueda, filtros)
│   ├── utils/
│   │   └── directoryData.js       # Datos del directorio
│   └── base.js                    # Cargador modular de scripts
└── index.html                     # Página principal
```

---

## Arquitectura Modular

### CSS
- `base.css` actúa como archivo maestro usando `@import` para cargar todos los módulos.
- Estructura por componentes: cada sección del directorio tiene su propio archivo CSS.
- Separación clara: variables, layout, componentes y responsive están divididos.

### JavaScript
- `base.js` implementa un sistema de carga asíncrona de módulos.
- Carga secuencial: garantiza el orden correcto de ejecución.
- Modular: separación entre datos, lógica de negocio y renderizado.

---



## Implementaciones a futuro

## Implementación del Directorio

### HTML Semántico - Modularizacion en el index HTML

```html
<main class="detalle">
  <section class="directorio-hero">...</section>      <!-- Título y descripción -->
  <section class="directorio-search">...</section>    <!-- Búsqueda y filtros -->
  <section class="directorio-content">...</section>   <!-- Tabla de datos -->
  <section class="directorio-contact">...</section>   <!-- Información de contacto -->
</main>
```

---

Plantee ralizarlo, dividí y cree los diferentes archivos, para luego usarlos en el index, pero las imagenes no cargaban aunque le diera la ruta correcta, asi que opte por entregarlo sin modularizar en la parte del HTML, para que se lograra observar adecuadamente el resultado final.

Con el fin de:

- Fácil extensión para nuevos componentes y funcionalidades.
- Estructura pensada para escalabilidad y



## cambias realizado a lo que ya se encontraba en la plantilla

```html
<div class="breadcrumb-class" style="display: none;">Está en:<a href="index.html" target="_self" title="Inicio">Inicio</a>/<span>Directorio</span></div>

```

Agregué "style="display: none;" para que se asemejara un poco mas al mockup y no se viera el texto "Está en: Inicio /Directorio".