# Decrypt-Cipher

# Caesar Cipher Text Encryption/Decryption Application

## Description
This application allows users to encrypt plaintext using a key to generate cipher text and decrypt cipher text back to plaintext using the same key. The Caesar Cipher is a type of substitution cipher in which each letter in the plaintext is shifted a certain number of places down or up the alphabet.

## Features
- Encrypt plaintext using a key to generate cipher text.
- Decrypt cipher text using the correct key to reveal the original plaintext.
- User input for plaintext and key.
- Proper error handling for invalid key inputs.

## Requirements
- HTML
- CSS
- JavaScript (vanilla)

## How to Use
1. Enter the plaintext you want to encrypt or the cipher text you want to decrypt in the `Plaintext` textarea.
2. Enter the key (a number between 0 and 25) in the `Key` input field.
3. Click the `Encrypt` button to encrypt the plaintext or the `Decrypt` button to decrypt the cipher text.
4. The result will be displayed in the `Result` textarea.

## Encryption Algorithm
The Caesar Cipher encryption algorithm shifts each letter in the plaintext by a number of positions defined by the key. For example, with a key of 3, 'A' becomes 'D', 'B' becomes 'E', and so on.

## Decryption Algorithm
The decryption algorithm reverses the encryption process by shifting each letter in the cipher text back by the number of positions defined by the key.

## Example
- Plaintext: `HELLO`
- Key: `3`
- Cipher Text: `KHOOR`

- Cipher Text: `KHOOR`
- Key: `3`
- Decrypted Plaintext: `HELLO`

## Error Handling
- If the key is not a number or is outside the range of 0-25, an alert will be displayed asking the user to enter a valid key.

## Author
Chinonso Nwajagu

## License
This project is licensed under the MIT License.
