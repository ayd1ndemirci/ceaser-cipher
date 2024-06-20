function caesarCipher(text, scroll) {
    let ciphertext = '';

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (/[a-zA-Z]/.test(char)) {
            let asciiOffset = char === char.toUpperCase() ? 65 : 97;
            let code = ((char.charCodeAt(0) - asciiOffset + scroll) % 26 + 26) % 26 + asciiOffset;
            ciphertext += String.fromCharCode(code);
        } else {
            ciphertext += char;
        }
    }
    return ciphertext;
}

function encrypt() {
    let text = document.getElementById('text').value;
    let scroll = parseInt(document.getElementById('scroll').value);
    let result = caesarCipher(text, scroll);
    document.getElementById('result').value = result;
}

function decrypt() {
    let text = document.getElementById('text').value;
    let scroll = parseInt(document.getElementById('scroll').value);
    let result = caesarCipher(text, -scroll);
    document.getElementById('result').value = result;
}
