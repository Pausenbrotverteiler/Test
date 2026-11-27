// Der Offline-Speicher ist abgeschaltet: Er hat auf dem iPad beim Aktualisieren zu einer
// weißen Seite geführt. Diese Datei entfernt einen früher installierten Service Worker und
// seine gespeicherten Dateien. Ohne fetch-Handler gehen alle Anfragen direkt ins Netz.
// Die App-Daten (Kinder, Raum, Verlauf) liegen in IndexedDB und werden nicht berührt.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.map(k => caches.delete(k))))
      .catch(() => {})
      .then(() => self.registration.unregister())
  );
});
