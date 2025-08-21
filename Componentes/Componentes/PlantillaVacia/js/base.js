// Loader modular para los componentes del directorio.
// Este archivo reemplaza la versión monolítica, carga módulos existentes
// en `js/components/` y arranca la inicialización sin cambiar la lógica.

(function () {
  const scripts = [
    'js/components/directoryData.js',
    'js/components/state.js',
    'js/components/render.js',
    'js/components/actions.js',
    'js/components/init.js'
  ];

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = src;
      s.async = false; // preserve execution order
      s.onload = resolve;
      s.onerror = () => reject(new Error('Error cargando ' + src));
      document.head.appendChild(s);
    });
  }

  // Cargar todos los scripts en secuencia y luego inicializar
  document.addEventListener('DOMContentLoaded', function () {
    (async function () {
      try {
        for (const s of scripts) {
          await loadScript(s);
        }
        if (window.initDirectory) window.initDirectory();
      } catch (err) {
        // Mantener comportamiento no intrusivo: reportar en consola
        console.error('No se pudieron cargar los módulos del directorio:', err);
      }
    })();
  });
})();
