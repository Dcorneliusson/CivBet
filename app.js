let balance = 0;

function bet(choice){

    let betAmount = parseInt(
        document.getElementById("betAmount").value
    );

    if(isNaN(betAmount) || betAmount <= 0){
        alert("Enter valid bet amount");
        return;
    }

    if(betAmount > balance){
        alert("Not enough diamonds");
        return;
    }

    balance -= betAmount;

    let win = Math.random() < 0.5;

    if(win){
        let winnings = betAmount * 2;
        balance += winnings;

        document.getElementById("result").innerText =
        "You WON " + winnings + " diamonds!";
    } else {
        document.getElementById("result").innerText =
        "You lost the bet!";
    }

    document.getElementById("balanceDisplay").innerText =
    "Balance: " + balance + " Diamonds";
}
