$(function(){

/*
wait for submit on form, prevent default, AJAX send input value to server
*/

const $form = $("#guess-form")
const $guessInput =$("#guess-input")

$form.on("submit", async function(evt){
    
    evt.preventDefault();
    const serverConfirmation = await submitGuess();
   console.log(serverConfirmation)
})



async function submitGuess(){
   
    let word = $guessInput.val();
    const response = await $.post("/wordlist", {word})

    return response;
}





})