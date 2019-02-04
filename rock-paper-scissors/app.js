let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score")
const compScore_span = document.getElementById("comp-score")
const scoreBoard_div = document.querySelector(".score-board")
const result_p = document.querySelector(".result > p")
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")


function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex]
}

function convertToWord(letter) {
    if(letter == 'r') return "Rock";
    if(letter == 'p') return "Paper";
    if(letter == 's') return "Scissors";

}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    user = convertToWord(userChoice)
    comp = convertToWord(computerChoice)
    result_p.innerHTML = user + " beats " + comp + ". You win!!!"
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(function(){ document.getElementById(userChoice).classList.remove("green-glow")}, 1000);
}

function lose(userChoice, computerChoice) {
    compScore++;
    compScore_span.innerHTML = compScore;
    user = convertToWord(userChoice)
    comp = convertToWord(computerChoice)
    result_p.innerHTML = comp + " beats " + user + ". You lose :("
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(function(){ document.getElementById(userChoice).classList.remove("red-glow")}, 1000);
}

function draw(userChoice) {
    result_p.innerHTML = "Its a Draw!"
    document.getElementById(userChoice).classList.add("grey-glow");
    setTimeout(function(){ document.getElementById(userChoice).classList.remove("grey-glow")}, 1000);
}

function game(userChoice) {
    computerChoice = getComputerChoice();
    combination = userChoice + computerChoice

    switch (combination) {
        case "rs":
        case "sp":
        case "pr":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "ps":
        case "rp":
            lose(userChoice, computerChoice);
            break;
        case "ss":
        case "rr":
        case "pp":
            draw(userChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function(){
        game("r")
    })

    paper_div.addEventListener('click', function(){
        game("p")
    })

    scissors_div.addEventListener('click', function(){
        game("s")
    })
}

main();
