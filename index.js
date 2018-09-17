/**
 * Don't change these constants!
 */
const DODGER = document.getElementById('dodger')
const GAME = document.getElementById('game')
const GAME_HEIGHT = 400
const GAME_WIDTH = 400
const LEFT_ARROW = 37 // use e.which!
const RIGHT_ARROW = 39 // use e.which!
const ROCKS = []
const START = document.getElementById('start')

var gameInterval = null



/**
 * Be aware of what's above this line,
 * but all of your work should happen below.
 */

function checkCollision(rock) {
  const top = positionToInteger(rock.style.top)

  // rocks are 20px high
  // DODGER is 20px high
  // GAME_HEIGHT - 20 - 20 = 360px;
  if (top > 360) {
    const dodgerLeftEdge = positionToInteger(DODGER.style.left)
    // FIX: The DODGER is 40 pixels wide -- how do we get the right edge?
    const dodgerRightEdge = dodgerLeftEdge + 40;

    const rockLeftEdge = positionToInteger(rock.style.left)
    // FIX: The rock is 20 pixel's wide -- how do we get the right edge?
    const rockRightEdge = rockLeftEdge + 20;

    if ((rockLeftEdge < dodgerLeftEdge) || (rockRightEdge > dodgerRightEdge) || ((rockLeftEdge < dodgerLeftEdge) && (rockRightEdge > dodgerRightEdge)));
              //  * Think about it -- what's happening here?
              //  * There's been a collision if one of three things is true:
              //  * 1. The rock's left edge is < the DODGER's left edge,
              //  *    and the rock's right edge is > the DODGER's left edge;
              //  * 2. The rock's left edge is > the DODGER's left edge,
              //  *    and the rock's right edge is < the DODGER's right edge;
              //  * 3. The rock's left edge is < the DODGER's right edge,
              //  *    and the rock's right edge is > the DODGER's right edge
              //  */) {
      return true
    }
  }
}

function createRock(x) {
  const rock = document.createElement('div')

  rock.className = 'rock'
  rock.style.left = `${x}px`

  // Hmmm, why would we have used `var` here?
  var top = 0
  rock.style.top = top

  /**
   * Now that we have a rock, we'll need to append
   * it to GAME and move it downwards.
   */
   $('div rock').append(.rock)

  /**
   * This function moves the rock. (2 pixels at a time
   * seems like a good pace.)
   */
  function moveRock() {
    // implement me!

    //  * If a rock collides with the DODGER,
    //  * we should call endGame()
    //  */

     if (checkCollision() === true) {
      endGame()

    /**
     * Otherwise, if the rock hasn't reached the bottom of
     * the GAME, we want to move it again.
     */
      } else if (checkCollision() === false) {
       moveRock()

    /**
     * But if the rock *has* reached the bottom of the GAME,
     * we should remove the rock from the DOM
     */
      } else if () {
     const rock = document.remove('div')
      }


}

  // We should kick of the animation of the rock around here

  // Add the rock to ROCKS so that we can remove all rocks
  // when there's a collision
  ROCKS.push(rock)

  // Finally, return the rock element you've created
  return rock
}





function endGame() {
  //End the game by clearing `gameInterval`,
  gameInterval = null;

  //Removing all ROCKS from the DOM,

  //and removing the `moveDodger` event listener.


  //Finally, alert "YOU LOSE!" to the player.
  alert("YOU LOSE!");


}



/**
 * @param {string} p The position property
 * @returns {number} The position as an integer (without 'px')
 */
function positionToInteger(p) {
  return parseInt(p.split('px')[0]) || 0
}



function moveDodgerLeft() {
  var leftNumbers = DODGER.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
  if (dodgerLeftEdge > 0) {
    DODGER.style.left = `${left - 10}px`
    console.log(leftNumbers);
    }
  };

function moveDodgerRight() {
  var leftNumbers = DODGER.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
  if (dodgerLeftEdge < 360) {
    DODGER.style.left = `${left + 10}px`
    console.log(leftNumbers);
    }
};

function moveDodger(e) {
  console.log(event.code);
  console.log(event.which);
      if (e.which === RIGHT_ARROW) {
        moveDodgerLeft();
      }
      if (e.which === LEFT_ARROW) {
        moveDodgerRight();

      }
    });


}


function hideCTA() {
  START.style.display = 'none';
}

function startGame() {
  $('#start').on("click", hideCTA);
  window.addEventListener('keydown', moveDodger);
  console.log("game started");

};


gameInterval = setInterval(function() {
  createRock(Math.floor(Math.random() *  (GAME_WIDTH - 20)))
}, 1000)
};
