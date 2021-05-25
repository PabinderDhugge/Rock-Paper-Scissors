var computer = ["Rock","Paper","Scissor"];
var player = 1;
var comp = 1;

function rockPaperScissor(){

    var compDiv = document.getElementById("compChoice");
    var resultDiv = document.getElementById("result");
    var playerScore = document.getElementById("playerScore");
    var computerScore = document.getElementById("computerScore");
    var compResult = computer[Math.floor(Math.random()*3)];
    var userResult = document.querySelector('input[name="game"]:checked').value;
                    
    compDiv.innerHTML = "The Compute Picked: " + compResult;
                    
    function win(){
        playerScore.innerHTML = player++;
        resultDiv.innerHTML = userResult +" Beats " + compResult +" You Won!";
   }
    function lose(){
        computerScore.innerHTML = comp++;
        resultDiv.innerHTML = compResult + " Beats " + userResult +" You Lost...";
    }
    function tied(){
        resultDiv.innerHTML ="Both Picked " + userResult + " Tied";
    }

   switch(userResult + compResult){
        case "RockScissor":
        case "PaperRock":
        case "ScissorPaper":
            win();
            break; 
        case "RockPaper":
        case "PaperScissor":
        case "ScissorRock":
            lose();
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorScissor":
            tied();
            break;   

   }
}