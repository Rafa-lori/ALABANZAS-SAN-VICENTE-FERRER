function detectOS() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
    // Detectar iOS
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      document.body.classList.add('ios'); // Añadir clase 'ios' al body
    }
  
    // Detectar Android
    else if (/android/i.test(userAgent)) {
      document.body.classList.add('android'); // Añadir clase 'android' al body
    }
  }
  
  // Llamar la función al cargar la página
  window.onload = detectOS;
  