$(document).ready(function(){
    $('#gameBroad').append('<div class = cicrle>')
    $('.cicrle').css("border", "2px solid yellow" ).css("border-radius", "50px")
    $('.cicrle').css("width", "80px").css("height", "80px")
    function grid(numRow){
        const row =[]
        
        for(i= 0; i<6; i++){
            
            row[i] = numRow
            console.log("this iis working")
            for(j=0; j<7; j++){
                row[i][j] = numRow
                console.log("this is working")
            }
        }
        return row
    }
    console.log(grid)
    $('#gameBroad').append(grid($('.cicrle')))
})