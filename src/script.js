const passwordBox = document.getElementById('password');
const length = 12; // Adding a default length of 12 for each password generated.
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const specialCharacters = '!@#$%^&*^()_+~`|}{[];?><,./-=';

function createPassword() {
    let password = '';
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

    const allCharacters = upperCase + lowerCase + numbers + specialCharacters;

    while (length > password.length){
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }
 // Displays password input in the password box.
    passwordBox.value = password;
}


function copyPassword(){
    passwordBox.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
}
