if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
      navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
          console.log('Service Worker registrado con éxito:', registration.scope);
      })
      .catch(error => {
          console.log('Fallo en el registro del Service Worker:', error);
      });
  });
}
