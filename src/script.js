const passwordBox = document.getElementById('password');
const userNameBox = document.getElementById('username');
const checkBox = document.getElementById('checkBox');
const length = 12; // Adding a default length of 12 for each password generated.
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const specialCharacters = '!@#$%^&*^()_+~`|}{[];?><,./-=';
const names = ['Alice', 'Bob', 'Charlotte', 'Daniel', 'Eve', 'Frank', 'Grace', 'Henry', 'Ivona', 'Jessica', 'Kevin', 'Linda', 'Martin', 'Nancy', 'Oliver', 'Pamela', 'Quincy', 'Rachel', 'Steven', 'Tina', 'Ursula', 'Victor', 'Wendy', 'Xavier', 'Yvonne', 'Zachary'];


function getRandomName(namesArray) {
    const randomIndex = Math.floor(Math.random() * namesArray.length);
    return namesArray[randomIndex];
}

function createUserName() {
    const randomName = getRandomName(names);
    userNameBox.value = randomName;
    console.log(randomName);
}

function createPassword() {
    if (!checkBox.checked) {
        let password = '';
        password += upperCase[Math.floor(Math.random() * upperCase.length)];
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        password += numbers[Math.floor(Math.random() * numbers.length)];
        password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

        const allCharacters = upperCase + lowerCase + numbers + specialCharacters;

        while (length > password.length) {
            password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
        }
        // Displays password input in the password box.
        passwordBox.value = password;
    }  else {
        let password = '';
        password += upperCase[Math.floor(Math.random() * upperCase.length)];
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        password += numbers[Math.floor(Math.random() * numbers.length)];

        const allCharacters = upperCase + lowerCase + numbers;

        while (length > password.length) {
            password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
        }
        // Displays password input in the password box.
        passwordBox.value = password;
    }
}


function copyPassword(){
    passwordBox.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
}

function copyUserName(){
    userNameBox.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
}

console.log(checkBox.checked)
