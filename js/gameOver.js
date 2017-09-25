

function gameOver(winner){

    const circleposition = circle.getBoundingClientRect()

    winner.style.top = circleposition.top + 'px'
    winner.style.left = circleposition.left + 'px'
    winner.classList.add('winner')
    winner.classList.add('alter-ego')
    //winner.classList.add(url('https://media.giphy.com/media/26tOZ42Mg6pbTUPHW/giphy.gif'))

    setTimeout(function() {
        alert(winner.id + 'wins')
        player1position = 0
        player2position = 0

        player1.style.top = '60px'
        player1.style.left = '10px'
        
        player2.style.top = '250px'
        player2.style.left = '10px'

        winner.classList.remove('winner')
        winner.classList.remove('alter-ego')

   }, 400)
    
}

