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

    const hoverClick = function (cssObject){
        $(`${cssObject}`).css("background-color", "purple")
    }

    // let gameBroadArray = [id = a1, id = a2, id = a3, id = a4, id = a5, id = a6, id = a7,
    //                       id = b1, id = b2, id = b3, id = b4, id = b5, id = b6, id = b7,
    //                       id = c1, id = c2, id = c3, id = c4, id = c5, id = c6, id = c7,
    //                       id = d1, id = d2, id = d3, id = d4, id = d5, id = d6, id = d7,
    //                       id = e1, id = e2, id = e3, id = e4, id = e5, id = e6, id = e7,
    //                       id = f1, id = f2, id = f3, id = f4, id = f5, id = f6, id = f7]
    // console.log(gameBroadArray)
    
    var row
    // this function finds the last 
    function findEmpty(cloum){
    const column = $(`.cicrle[data-clo='${cloum}']`)
    console.log(column)
    for(var i = column.length - 1; i >= 0; i--){
        if ($(column[i]).attr('data-click') === ('!clicked')){
            return column[i]
            console.log(column[i])
        }
    }
        return null
        console.log(column[i])
    }

    let turn = 0
    var cloum
    $('.cicrle').mouseenter(function() {
        const clo = event.target.dataset.clo
        console.log(this)
        console.log(findEmpty(clo))
        let clickHold = findEmpty(clo)
        $(clickHold).css("background-color", "purple")
    })
    $('.cicrle').mouseleave(function(){
        const clo = event.target.dataset.clo
        console.log(this)
        console.log(findEmpty(clo))
        let clickHold = findEmpty(clo)
        $(clickHold).css("background-color", "white")
    })
    // 
    $('.cicrle').on('click', function() {
        console.log(turn)
        console.log(event.target.dataset.clo)
        console.log(event.target.dataset.row)
        // change color after each turn    
        if(turn%2 == 0){
            const clo = event.target.dataset.clo
            console.log(this)
            console.log(findEmpty(clo))
            // make sure pieces silde to the bottom
            let clickHold = findEmpty(clo)
            // changes piece to black
            $(clickHold).css("background-color", "black")
            // make sure pieces are clicked only once
            $(clickHold).attr("data-click", "clicked")
            // blackClick(circleToChange)
            turn++
        }
        else
        {   const clo = event.target.dataset.clo
            console.log(this)
            console.log(findEmpty(clo))
            // make sure pieces silde to the bottom
            let clickHold = findEmpty(clo)
            // changes piece to red
            $(clickHold).css("background-color", "red")
            // make sure pieces are clicked only once
            $(clickHold).attr("data-click", "clicked")
            turn++}
    })
})