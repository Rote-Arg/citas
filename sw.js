// Fijarse que este corriendo en application => service worker. Light house para mirar la performance.
const nombreCache = 'apv-v3';

const archivos = [
    '/',
    'index.html',
    'error.html',
    'manifest.json',
    'sw.js', 
    '/css/bootstrap.css',
    '/css/styles.css',
    '/js/app.js',
    '/js/apv.js',
];

// Cuando se instala el service worker, se ejecuta una sola vez
self.addEventListener( 'install', e => {
    console.log(e)
    
    // Esperamos a que se descarguen todos los archivos de cache
    e.waitUntil(
        caches.open(nombreCache)
            .then( cache => {
                
                cache.addAll(archivos)
            })
    )
});

// Activar el service worker
self.addEventListener( 'activate', e => {
    e.waitUntil(
        caches.keys()
            .then( keys => {
                return Promise.all(
                    keys.filter( key => key !== nombreCache ) // Filtra los que son diferentes a la version actual
                        .map( key => caches.delete(key) ) // Borra las demas versiones 
                )
            })
    ) 
});

// Evento fetch para descargar archivos estaticos
self.addEventListener( 'fetch', e => { 
    
    // Agarramos con un catch y mostramos la pag si hay error
    e.respondWith(
        caches.match(e.request)
            .then( responseCache => {
                return responseCache;
            })
            .catch( () => caches.match('error.html') )
    )
});