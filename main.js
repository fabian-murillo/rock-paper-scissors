// Create computer selection:
function computerPlay () {
    const values = ['Rock', 'Paper', 'Scissors'];
    let random = values[Math.floor(Math.random() * values.length)];
    return random;
}

// Edit any user input to Capitalized first letter:
function capitalize(str) {
    let string = str.split("")
    for (let i=0; i<= string.length - 1; i++) {
        if (i === 0) {
            string[i] = string[i].toUpperCase();
        } else {
            string[i] = string[i].toLowerCase();
        }
    }
    string = string.join("");
    return string;
}


function playRound(playerSel, compSel) {
    playerSel = capitalize(playerSel);
    
    // If player selects Rock:
    if (playerSel === 'Rock' && compSel === 'Scissors') {
        return 'You win! Rock beats Scissors!';
    } else if (playerSel === 'Rock' && compSel === 'Paper') {
        return 'You lose! Paper beats Rock';
    } else if (playerSel === 'Rock' && compSel === 'Rock') {
        return "It's a draw! Play again!"
    }

}

let playerSel = 'Rock';
let compSel = computerPlay();

console.log(playRound(playerSel, compSel));
