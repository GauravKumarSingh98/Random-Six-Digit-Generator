const mainButton = document.querySelector("button");
const currentNumber = document.querySelector(".number-generated");
function generateRandomNumber() {
    const numbers = Math.floor(Math.random() * 1000000);
    const randomNumber = `${numbers}`;
    return randomNumber;
}
mainButton.addEventListener("click", ()=> {
    const randomNumber = generateRandomNumber();
    currentNumber.textContent = randomNumber;
})