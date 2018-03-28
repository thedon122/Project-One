$(document).ready(function(){
    let cssObject
    
    const redClick = function (cssObject){
        console.log('This is cssObject', cssObject) 
        $(`#${cssObject}`).css("background-color", "red")
    }
    // function to turn cicrles black if they do not have a color
     const blackClick = function (cssObject){
        
        console.log('This is cssObject', cssObject)    
        $(`#${cssObject}`).css("background-color", "black")
        
        
        
    }
    let gameBroadArray = []
    let alphabet
    alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    for(i = 0; i<7; i++){
        let alp
        alp = 0
        gameBroadArray[i] = alphabet[alp] + (i+1)
        for(j = 0; j<6; j++){
            alp++
            gameBroadArray[i][j] = alphabet[alp] + (j+1)
        }
        
    }
    console.log(gameBroadArray)
    // function calls on function to cicrles to change when click
    // const count = function(turnCount){  
    let turn = 0
    $('.cicrle').on('click', function() {
        console.log(event.target.id)
        console.log(turn)
        let circleToChange = event.target.id
        if(turn%2 == 0){
        blackClick(circleToChange)
        turn++
        }
        else
        {redClick(circleToChange)
        turn++}
        // var turn = 42 - turnCount
        // if(turnCount%2 === 0){

        
    })
    
        //     console.log(turn)
        //     $('.cicrle').on('click', function() {
        //         console.log(event.target.id)
        //         turn++
        //         console.log(turn)
        //         let circleToChange = event.target.id
        //         redClick(circleToChange)
        
        // })
    // }
    // turn + '%'

    // cssObject =$('#a1')
})