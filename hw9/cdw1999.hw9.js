function main() {
    let play = prompt("Rock, Paper, or Scissors?");
    if (play != null) {
        play = play.toLowerCase();
    }
    else {
        return;
    }

    function cpu() {
        cpu_number = Math.floor(Math.random() * 3);
        if (cpu_number == 0) {
            return "rock";
        }
        else if (cpu_number == 1) {
            return "paper";
        }
        else if (cpu_number == 2) {
            return "scissors";
        }
    }
    cpu_string = cpu();
    console.log("You chose " + play + ", while the computer chose " + cpu_string + ".");
    switch (play) {
        case "rock":
            if (cpu_string == "rock") {
                console.log("You tied!")
            }
            else if (cpu_string == "paper") {
                console.log("You lost!");
            }
            else if (cpu_string == "scissors") {
                console.log("You won!");
            }
            break;
        case "paper":
            if (cpu_string == "rock") {
                console.log("You won!")
            }
            else if (cpu_string == "paper") {
                console.log("You tied!");
            }
            else if (cpu_string == "scissors") {
                console.log("You lost!");
            }
            break;
        case "scissors":
            if (cpu_string == "rock") {
                console.log("You lost!")
            }
            else if (cpu_string == "paper") {
                console.log("You won!");
            }
            else if (cpu_string == "scissors") {
                console.log("You tied!");
            }
            break;
        default:
            console.log("I don't know what you just played...");
            break;
    }
    if (confirm("Play again?") == true) {
        main();
    }
    else {
        alert("Thanks for playing!");
    }
}
main();