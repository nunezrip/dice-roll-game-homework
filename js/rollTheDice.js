

function rollTheDice(){
       die.setAttribute('src', 'https://media.giphy.com/media/l4hLAf6Eo8DEcO5ZS/giphy.gif');

        // roll.textContent = '?';

        setTimeout(function(){
            let num = Math.floor(Math.random() * 10 + 1)
            roll.textContent = num;

            if (turn === player1){
                player1position += num;
                movePlayer(player1, player1position)
                turn = player2

            } else {
                player2position += num
                movePlayer(player2, player2position)
                turn = player1

            }
        }, 1900)

}

die.addEventListener('click', rollTheDice)
roll.addEventListener('click', rollTheDice)