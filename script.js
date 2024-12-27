// Función para acortar la URL
function shortenUrl() {
    // Obtiene la URL larga desde el input
    const longUrl = document.getElementById('longUrl').value;
    
    // Verifica que la URL no esté vacía
    if (longUrl) {
        // Crea un objeto URL para extraer el dominio
        const url = new URL(longUrl);
        const domain = url.hostname;
        
        // Genera un ID único para la URL acortada
        const uniqueId = Math.random().toString(36).substring(2, 8);
        
        // Crea la URL acortada
        const shortUrl = `https://${domain}/short.url/${uniqueId}`;

        // Muestra la URL acortada en el elemento con id 'shortUrl'
        document.getElementById('shortUrl').innerText = shortUrl;
        
        // Muestra los botones 'Visitar' y 'Copiar'
        document.getElementById('visitButton').style.display = 'inline';
        document.getElementById('copyButton').style.display = 'inline';
        
        // Configura el botón 'Visitar' para abrir la URL larga en una nueva pestaña
        document.getElementById('visitButton').setAttribute('onclick', `openInNewTab('${longUrl}')`);
    }
}

// Función para copiar la URL acortada al portapapeles
function copyToClipboard() {
    // Obtiene la URL acortada desde el elemento con id 'shortUrl'
    const shortUrl = document.getElementById('shortUrl').innerText;
    
    // Copia la URL acortada al portapapeles
    navigator.clipboard.writeText(shortUrl);
}

// Función para abrir una URL en una nueva pestaña
function openInNewTab(url) {
    window.open(url, '_blank').focus();
}

// Función para limpiar el formulario
function clearForm() {
    // Limpia el input
    document.getElementById('longUrl').value = '';
    
    // Limpia la URL acortada
    document.getElementById('shortUrl').innerText = '';
    
    // Oculta los botones
    document.getElementById('visitButton').style.display = 'none';
    document.getElementById('copyButton').style.display = 'none';
}
