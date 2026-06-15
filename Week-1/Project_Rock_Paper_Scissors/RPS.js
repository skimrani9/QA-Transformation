let userscore = 0;
let computerscore = 0;

function playGame(userchoose) {
    const choices = ['rock', 'paper', 'scissors'];

    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = '';

    if (userchoose === computerChoice) {
        result = "It's a Draw!";
    }
    else if (
        (userchoose === 'rock' && computerChoice === 'scissors') ||
        (userchoose === 'paper' && computerChoice === 'rock') ||
        (userchoose === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You Win!';
        userscore = userscore + 1;
    }
    else {
        result = 'Computer Wins!';
        computerscore = computerscore + 1;
    }

    document.getElementById('userscore').innerHTML = `${userscore}`
    document.getElementById('computerscore').innerHTML = `${computerscore}`
    document.getElementById('userchoose').innerHTML = `${userchoose}`
    document.getElementById('computerchoose').innerHTML = `${computerChoice}`
    document.getElementById('result').innerHTML = `RESULTS : ${result}`;
}
function Reload_Page(){
    window.location.reload();
}