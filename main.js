// Create computer selection:
function computerPlay () {
    const values = ['Rock', 'Paper', 'Scissors'];
    let random = values[Math.floor(Math.random() * values.length)];
    return random;
}

// Edit any user input to Capitalized first letter:
// function capitalize(str) {
//     let string = str.split("")
//     for (let i=0; i<= string.length - 1; i++) {
//         if (i === 0) {
//             string[i] = string[i].toUpperCase();
//         } else {
//             string[i] = string[i].toLowerCase();
//         }
//     }
//     string = string.join("");
//     return string;
// }



function game() {
    // Set round counter
    let round = 0;
    let compScore = 0;
    let playerScore = 0;
    // Start game:
    while (round < 5) {
        // Set scores :
        // let compScore = 0;
        // let playerScore = 0;
        // Prompt user for input:
        let playerSel = window.prompt("Rock, Paper, Scissors?");
        // Create computer selection:
        let compSel = computerPlay();
        // Play a round:
        function playRound(playerSel, compSel) {
            // If player selects Rock:
            if (playerSel === 'Rock' && compSel === 'Scissors') {
                console.log('You win! Rock beats Scissors!');
                return 'Player won';
            } else if (playerSel === 'Rock' && compSel === 'Paper') {
                console.log('You lose! Paper beats Rock!');
                return 'Comp won';
            } else if (playerSel === 'Rock' && compSel === 'Rock') {
                console.log("It's a draw! Play again!");
                return 'Draw'
            }
        
            // If player selects Paper:
            if (playerSel === 'Paper' && compSel === 'Scissors') {
                console.log('You lose! Scissors beats Paper!');
                return 'Comp won';
            } else if (playerSel === 'Paper' && compSel === 'Rock') {
                console.log('You win! Paper beats Rock!');
                return 'Player won';
            } else if (playerSel === 'Paper' && compSel === 'Paper') {
                console.log("It's a draw! Play again!");
                return 'Draw'
            }
        
            // If player selects Scissors:
            if (playerSel === 'Scissors' && compSel === 'Paper') {
                console.log('You win! Scissors beats Paper!');
                return 'Player won';
            } else if (playerSel === 'Scissors' && compSel === 'Rock') {
                console.log('You lose! Rock beats Scissors!');
                return 'Comp won';
            } else if (playerSel === 'Scissors' && compSel === 'Scissors') {
                console.log("It's a draw! Play again!");
                return 'Draw'
            }
        }
        playRound(playerSel, compSel)
        if ('Player won') {
            console.log('inside Player won');
            playerScore += 1;
        } else if ('Comp won') {
            console.log('inside Comp won')
            compScore += 1;
        } else {
            playerScore += 0;
            compScore += 0;
        }
        round += 1;
        
    }
    console.log(compScore, playerScore, round);
}

game();
