const express = require('express');
const { nanoid } = require('nanoid');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Base de datos simulada
const urlDatabase = {};

// Ruta para acortar una URL
app.post('/api/shorten', (req, res) => {
    const { longUrl } = req.body;

    if (!longUrl || !longUrl.startsWith('http')) {
        return res.status(400).json({ error: 'URL inválida. Debe comenzar con http o https.' });
    }

    const shortId = nanoid(6); // Genera un ID único de 6 caracteres
    const shortUrl = `https://acortador-url.vercel.app/${shortId}`;

    urlDatabase[shortId] = longUrl; // Guarda la URL en la base de datos
    res.json({ shortUrl });
});

// Ruta para redirigir desde la URL corta
app.get('/:shortId', (req, res) => {
    const { shortId } = req.params;
    const longUrl = urlDatabase[shortId];

    if (!longUrl) {
        return res.status(404).send('URL no encontrada.');
    }

    res.redirect(longUrl);
});

// Servidor escuchando
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

