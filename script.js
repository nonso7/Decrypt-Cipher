const encryptBtn = document.querySelector('#encryptBtn');
const decryptBtn = document.querySelector('#decryptBtn');
const plaintextEl = document.querySelector('#plaintext');
const keyEl = document.querySelector('#key');
const resultEl = document.querySelector('#result');


encryptBtn.addEventListener('click', () => {
    const plainTextValue = plaintextEl.value
    const key = Number(keyEl.value)
    if (isNaN(key) || key === "" || key > 15) {
        alert(`Please insert a valid key between 1 to 15`)
        return
    }
    resultEl.value = encrypt(plainTextValue, key);
})


decryptBtn.addEventListener('click', () => {
    const cipherTextValue = plaintextEl.value
    const key = Number(keyEl.value)
    if (isNaN(key) || key === "" || key > 15) {
        alert(`Please insert a valid key between 1 to 15`)
        return
    }
    resultEl.value = decrypt(cipherTextValue, key);
})

function encrypt (text, key) {
    return text.split('').map(str => {
        if (str.match(/[a-z]/i)) {
            const code = str.charCodeAt(0)
            if ((code >= 65) && (code <= 90))
                return String.fromCharCode(((code - 65 + key) % 26) + 65);
            if ((code >= 97) && (code <= 122))
                return String.fromCharCode(((code - 97 + key) % 26) + 97);
        }

        return str;
    }).join('')
}

function decrypt(text, key) {
    return encrypt(text, 26 - key);
  }
