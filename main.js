$(document).ready(function(){
    let cssObject
    // function to turn cicrles red if they do not have a color
    const redClick = function (cssObject){
        $(cssObject).css("background-color", "red")
    }
    // function to turn cicrles black if they do not have a color
     const blackClick = function (cssObject){
        // if( !($(cssObject).css("background-color", "black")) || !($(cssObject).css("background-color", "red"))){
        console.log('This is cssObject', cssObject)    
        $(`#${cssObject}`).css("background-color", "black")
        
        // }
        
    }
    // function calls on function to cicrles to change when click
    $('.cicrle').on('click', function() {
        console.log(event.target.id)
        let circleToChange = event.target.id
        blackClick(circleToChange)
    })
    // cssObject =$('#a1')
    $(cssObject).click(blackClick(cssObject))
})