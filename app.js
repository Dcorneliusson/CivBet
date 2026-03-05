let balance = 100;
let username = "";

function login(){
    username = document.getElementById("username").value;

    if(username === "") return;

    document.getElementById("loginBox").style.display = "none";
    document.getElementById("game").style.display = "block";

    document.getElementById("welcome").innerText =
        "Welcome " + username;
}

function coinflip(){
    let bet = parseInt(document.getElementById("betAmount").value);

    if(isNaN(bet) || bet <= 0) return;

    if(bet > balance){
        alert("Not enough diamonds!");
        return;
    }

    balance -= bet;

    if(Math.random() < 0.5){
        let winnings = bet * 2;
        balance += winnings;

        document.getElementById("result").innerText =
            "You WON " + winnings + " diamonds!";
    } else {
        document.getElementById("result").innerText =
            "You lost the bet!";
    }

    document.getElementById("balance").innerText = balance;
}
