async function shortenUrl() {
    const longUrl = document.getElementById('longUrl').value;

    if (!longUrl) {
        alert('Por favor, introduce una URL válida.');
        return;
    }

    try {
        const response = await fetch('/api/shorten', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ longUrl }),
        });

        const data = await response.json();

        if (response.ok) {
            document.getElementById('shortUrl').innerText = data.shortUrl;
            document.getElementById('visitButton').style.display = 'inline';
            document.getElementById('copyButton').style.display = 'inline';
            document.getElementById('visitButton').setAttribute('onclick', `openInNewTab('${data.shortUrl}')`);
        } else {
            alert(data.error);
        }
    } catch (error) {
        console.error('Error acortando la URL:', error);
        alert('Ocurrió un error al acortar la URL.');
    }
}

function copyToClipboard() {
    const shortUrl = document.getElementById('shortUrl').innerText;
    navigator.clipboard.writeText(shortUrl);
    alert('¡URL copiada al portapapeles!');
}

function openInNewTab(url) {
    window.open(url, '_blank').focus();
}

function clearForm() {
    document.getElementById('longUrl').value = '';
    document.getElementById('shortUrl').innerText = '';
    document.getElementById('visitButton').style.display = 'none';
    document.getElementById('copyButton').style.display = 'none';
}
