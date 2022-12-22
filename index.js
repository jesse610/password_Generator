let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let symbols = characters.slice(62, 92)
console.log(symbols)

//  strech goals:
//  Toggle "symbols" and "numbers" on/off

let passwordBtn = document.querySelector('#password-btn')
let firstPasswordEl = document.querySelector('#textArea-one') 
let secondPasswordEl = document.querySelector('#textArea-two')

let firstPasswordField = document.querySelector('#passfield-one')
let secondPasswordField = document.querySelector('#passfield-two')

let noNumbersCheckbox = document.querySelector('#noNumbersBox')
noNumbersCheckbox.addEventListener('change', isNoNumberChecked)

passwordBtn.addEventListener('click', generatePasswords)

function generatePasswords() {

    let pWordOne = ''
    let pWordTwo = ''

    let passwordLength = document.querySelector('#passLength').value

    for (let i = 0; i < passwordLength; i++) {
        let pCharOne = Math.floor(Math.random() * characters.length)
        let pCharTwo = Math.floor(Math.random() * characters.length)

        pWordOne += characters[pCharOne]
        pWordTwo += characters[pCharTwo]
    }

    firstPasswordEl.textContent = pWordOne;
    secondPasswordEl.textContent = pWordTwo;
}

firstPasswordField.addEventListener('click', function () {
    let copyText = firstPasswordEl.textContent
    if (copyText !== '') {
        navigator.clipboard.writeText(copyText)
        alert("Copied the text: " + copyText)
    }
})

secondPasswordField.addEventListener('click', function() {
    let copyText2 = secondPasswordEl.textContent
    if (copyText2 !== '') {
        navigator.clipboard.writeText(copyText2)
        alert("Copied the text: " + copyText2)
    }
})

function isNoNumberChecked() {
    if (noNumbersCheckbox.checked === true) {
        characters = characters.slice(0, 52).concat(symbols)
    } else {
        characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
    }
}
