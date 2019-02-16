$(function(){

/*
wait for submit on form, prevent default, AJAX send input value to server
*/

const $form = $("#guess-form")
const $guessInput =$("#guess-input")
const $showResult = $("#show-result")
const $showScore = $("#show-score")
const $highestScore = $("#highest-score")
const $gamenum = $("#gamenum")
// const $playAgain = $("#play-again")

timesup = 0

$form.on("submit", async function(evt){
    evt.preventDefault();
    
    setTimeout(function(){ 
    //     $form.off("submit")
    // }, 5000)

            timesup++;
        return }, 5000);
    if (timesup ==1) {
        alert("TIMES UP!")  
        timesup++;
    } else if (timesup>1) {
        return
    }

    const guessResponse = await submitGuess();
    console.log(guessResponse)
    showResult(guessResponse)

})

async function submitGuess(){  
    let word = $guessInput.val();
    const response = await $.post("/wordlist", {word})
    console.log("response", response)
    return response;
}

function showResult(guessResponse){
   $showResult.html(guessResponse.result)
   $showScore.html(guessResponse.score)
//    score = guessResponse.score
}





})