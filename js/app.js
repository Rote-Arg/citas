// Progressive web application y Service Workers
// PWA: Rapida, Instalable, Soporte offline
// SW: base de PWA son scripts corriendo todo el tiempo por detas. Tambien funcionan offline y no funcionan con el DOM. Cargan de forma instantanea y pueden sincronizar datos. No usa window sino self. no usa document sino caches. no utiliza localstorage sino fetch

// Se fija si service worker corre en el navegador luego lo registra y le manda la ruta donde estara el mismo
if('serviceWorker'in navigator) {
    navigator.serviceWorker.register('../sw.js')
        .then( registrado => console.log(registrado) )
        .catch( error => console.log(error) );
} else {
    console.log('F');
}