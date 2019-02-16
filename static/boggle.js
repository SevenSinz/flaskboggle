$(function(){

/*
wait for submit on form, prevent default, AJAX send input value to server
*/

const $form = $("#guess-form")
const $guessInput =$("#guess-input")
const $showResult = $("#show-result")
const $showScore = $("#show-score")

$form.on("submit", async function(evt){
    
    evt.preventDefault();
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