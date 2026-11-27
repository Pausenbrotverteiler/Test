// Offline-Unterstützung: App-Dateien werden auf dem Gerät zwischengespeichert.
// Bewusst einfach und fehlertolerant gehalten, damit die App immer startet.
const CACHE = 'kita-raum-v18';
const FILES = ['./', 'index.html', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png'];

self.addEventListener('install', e => {
  // Fehler beim Vorab-Speichern dürfen die Installation nicht verhindern
  e.waitUntil(caches.open(CACHE).then(c => Promise.all(FILES.map(f =>
    fetch(f, { cache: 'no-cache' }).then(r => r.ok ? Promise.resolve(clean(r)).then(res => c.put(f, res)) : null).catch(() => null)
  ))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

// Safari lehnt weitergeleitete Antworten für Seitenaufrufe ab → als neue, saubere Antwort ausliefern
function clean(r){
  if (!r.redirected) return r;
  return r.blob().then(body => new Response(body, { status: r.status, statusText: r.statusText, headers: r.headers }));
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  const isPage = req.mode === 'navigate';
  e.respondWith((async () => {
    try {
      // Neueste Version aus dem Netz (an veralteten Browser-Kopien vorbei)
      const r = await fetch(isPage ? new Request(req.url, { cache: 'no-cache', credentials: 'same-origin' }) : req, isPage ? undefined : { cache: 'no-cache' });
      const res = await clean(r);
      if (res.ok){ const copy = res.clone(); caches.open(CACHE).then(c => c.put(isPage ? 'index.html' : req, copy)).catch(() => {}); }
      return res;
    } catch (err) {
      // Offline: gespeicherte Kopie
      const cached = (await caches.match(isPage ? 'index.html' : req, { ignoreSearch: true })) || (isPage && await caches.match('./'));
      if (cached) return cached;
      return fetch(req);
    }
  })());
});
