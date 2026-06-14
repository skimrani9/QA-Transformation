function playGame(userchoose){
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
    }
    else {
        result = 'Computer Wins!';
    }
    document.getElementById('userchoose').innerHTML = `${userchoose}`
    document.getElementById('computerchoose').innerHTML = `${computerChoice}`
    document.getElementById('result').innerHTML = `${result}`;

}