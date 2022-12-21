const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


//  strech goals:
//  Ability to set password length
//  Add "copy-on-click"
//  Toggle "symbols" and "numbers" on/off

let passwordBtn = document.querySelector('#password-btn')
let firstPasswordEl = document.querySelector('#passfield-one') 
let secondPasswordEl = document.querySelector('#passfield-two')



passwordBtn.addEventListener('click', generatePasswords)

function generatePasswords() {
    let pWordOne = ''
    let pWordTwo = ''

    for (let i = 0; i < 15; i++) {
        let pCharOne = Math.floor(Math.random() * characters.length)
        let pCharTwo = Math.floor(Math.random() * characters.length)

        pWordOne += characters[pCharOne]
        pWordTwo += characters[pCharTwo]
    }

    firstPasswordEl.textContent = pWordOne;
    secondPasswordEl.textContent = pWordTwo;
}