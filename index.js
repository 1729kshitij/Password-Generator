function generatePassword() {

    const length = Number(document.getElementById("passwordLength").value);

    const useUppercase = document.getElementById("uppercase").checked;
    const useLowercase = document.getElementById("lowercase").checked;
    const useNumbers = document.getElementById("numbers").checked;
    const useSymbols = document.getElementById("symbols").checked;

    const passwordOutput = document.getElementById("passwordOutput");
    const errorMessage = document.getElementById("errorMessage");


    errorMessage.textContent = "";


    if (length < 4 || length > 50) {
        errorMessage.textContent =
            "Password length must be between 4 and 50.";
        return;
    }


    if (!useUppercase && !useLowercase && !useNumbers && !useSymbols) {
        errorMessage.textContent =
            "Please select at least one character type.";
        return;
    }

    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const lowercase = "abcdefghijklmnopqrstuvwxyz";

    const numbers = "0123456789";

    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let characters = "";

    if (useUppercase) {
        characters += uppercase;
    }

    if (useLowercase) {
        characters += lowercase;
    }

    if (useNumbers) {
        characters += numbers;
    }

    if (useSymbols) {
        characters += symbols;
    }

    let password = "";

    for (let i = 0; i < length; i++) {

        const randomIndex =
            Math.floor(Math.random() * characters.length);

        password += characters[randomIndex];
    }

    passwordOutput.value = password;
}


function copyPassword() {

    const passwordOutput =
        document.getElementById("passwordOutput");

    const errorMessage =
        document.getElementById("errorMessage");


    if (!passwordOutput.value) {
        errorMessage.textContent =
            "Generate a password first.";
        return;
    }

    navigator.clipboard.writeText(passwordOutput.value);

    errorMessage.textContent =
        "Password copied to clipboard!";
}
