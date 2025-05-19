// Importiere Express
const express = require('express');

// Erstelle eine Express-Anwendung
const app = express();

// Definiere einen Test-Endpunkt
app.get('/test', (req, res) => {
  res.json({ message: 'Test erfolgreich!' });
});

// Der Server hört auf Port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
