# Acortador de URLs

Un acortador de URLs simple y elegante construido con HTML, CSS y JavaScript. Esta aplicación web permite a los usuarios acortar URLs largas en enlaces más manejables, con una interfaz limpia y responsive.

![Vista previa del Acortador de URLs](https://lh4.googleusercontent.com/proxy/vjSZQ-aTg8HJtwCcqdaKX1_PVpiKHJFUS4Jfrqq8To-i7UwlM_h5apZ0Zk7Hl-T8dQcv7kETTFGsyjGnplTCpp1UwYaJmurpe5F4v_dEx7OZBKw6vHmTe8KT6r-SbObg)

## 📋 Características

- Interfaz de usuario intuitiva y responsive
- Generación rápida de URLs cortas
- Botón de copia al portapapeles
- Botón para visitar la URL original
- Diseño moderno con Bootstrap 4

## 🛠️ Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript
- Bootstrap 4.5.2
- jQuery 3.5.1
- Popper.js 2.5.4

## 📦 Estructura del Proyecto

```
acortador-urls/
├── index.html
├── styles.css
└── script.js
```

## 💻 Instalación

1. Clona este repositorio:
```bash
git clone https://github.com/tu-usuario/acortador-urls.git
```

2. Navega al directorio del proyecto:
```bash
cd acortador-urls
```

3. Abre `index.html` en tu navegador web preferido.

## 🔧 Código Principal

### HTML (index.html)
El archivo HTML define la estructura de la aplicación y carga los recursos necesarios:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="https://files.softicons.com/download/system-icons/lozengue-filetype-icons-by-gurato/ico/URL.ico" type="image/x-icon">
    <title>Acortador de URLs</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container text-center">
        <h1 class="my-4">Acortador de URLs</h1>
        <img src="https://lh4.googleusercontent.com/proxy/vjSZQ-aTg8HJtwCcqdaKX1_PVpiKHJFUS4Jfrqq8To-i7UwlM_h5apZ0Zk7Hl-T8dQcv7kETTFGsyjGnplTCpp1UwYaJmurpe5F4v_dEx7OZBKw6vHmTe8KT6r-SbObg" alt="Logo" class="mb-4" style="width: 100px; height: auto;">
        <div class="input-group mb-3">
            <input type="text" class="form-control" id="longUrl" placeholder="Pega tu URL larga aquí">
            <div class="input-group-append">
                <button class="btn btn-primary" onclick="shortenUrl()">Recortar</button>
            </div>
        </div>
        <div id="result" class="mt-3">
            <p id="shortUrl" class="h4"></p>
            <button id="visitButton" class="btn btn-success" style="display: none;" onclick="openInNewTab()">Visitar</button>
            <button id="copyButton" class="btn btn-secondary" style="display: none;" onclick="copyToClipboard()">Copiar</button>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrap..com/4.5.2/js/bootstrap.min.js"></script>
    <script src="script.js"></script>
</body>
</html>

```

### CSS (styles.css)
Estilos personalizados para mejorar la apariencia de la aplicación:

```css
body {
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
}

img {
    margin: 20px 0;
}

input, button {
    margin: 10px;
    padding: 10px;
    font-size: 16px;
}

#shortUrl {
    font-weight: bold;
}

```

### JavaScript (script.js)
Funcionalidad principal para acortar URLs y manejar las interacciones del usuario:

```javascript
function shortenUrl() {
    const longUrl = document.getElementById('longUrl').value;
    if (longUrl) {
        const url = new URL(longUrl);
        const domain = url.hostname;
        const uniqueId = Math.random().toString(36).substring(2, 8);
        const shortUrl = `https://${domain}/short.url/${uniqueId}`;

        document.getElementById('shortUrl').innerText = shortUrl;
        document.getElementById('visitButton').style.display = 'inline';
        document.getElementById('copyButton').style.display = 'inline';
        document.getElementById('visitButton').setAttribute('onclick', `openInNewTab('${longUrl}')`);
    }
}

function copyToClipboard() {
    const shortUrl = document.getElementById('shortUrl').innerText;
    navigator.clipboard.writeText(shortUrl);
}

function openInNewTab(url) {
    window.open(url, '_blank').focus();
}


// Otras funciones
```

## 🚀 Uso

1. Ingresa una URL larga en el campo de texto.
2. Haz clic en el botón "Recortar".
3. La URL acortada se mostrará debajo.
4. Usa el botón "Copiar" para copiar la URL acortada al portapapeles.
5. Usa el botón "Visitar" para abrir la URL original en una nueva pestaña.

## 📝 Funciones Principales

### shortenUrl()
Genera una URL corta a partir de la URL larga ingresada:
- Extrae el dominio de la URL original
- Genera un ID único aleatorio
- Construye y muestra la URL acortada

### copyToClipboard()
Copia la URL acortada al portapapeles del sistema.

### openInNewTab(url)
Abre la URL original en una nueva pestaña del navegador.

## ⚠️ Limitaciones

- Esta es una implementación de demostración y no almacena las URLs en una base de datos
- Las URLs acortadas son simuladas y no son permanentes
- No incluye validación avanzada de URLs

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para contribuir:

1. Haz un Fork del proyecto
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`)
3. Haz commit de tus cambios (`git commit -m 'Añade nueva característica'`)
4. Haz push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.
