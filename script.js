const gameContainer = document.getElementById("game");



const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);



// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}


//-----------------------MY CODE---------------------------

let counter = 0;
let firstCardColor = '';
let secondCardColor = '';
let firstCardSelected = '';
let secondCardSelected = '';
let currentScore = 0;
let preventClick = false;
// const clickCount = 0;
// const selectionCount = 0;

function updateScore() {
  currentScore++;
  score = document.getElementById('score-counter');
  score.textContent = currentScore;
} 


// TODO: Implement this function!
function handleCardClick(event) {
  
  if (preventClick) {
    return;
  } 

  // CHANGES BG OF SELECTED DIV
  event.target.style.backgroundColor = event.target.classList.value;
  // ADDS A 'SELECTED' CLASS TO SELECTED DIV
  event.target.classList.add('selected');



  // MATCH CHECK
  if (counter === 0) {
    firstCardColor = event.target.classList.value;
    firstCardSelected = event.target;
    counter++
  } else {
    secondCardColor = event.target.classList.value;
    secondCardSelected = event.target;
    counter = 0;
    preventClick = true;
    

     if (firstCardColor === secondCardColor) {
      updateScore();
      firstCardSelected.classList.add('correct');
      secondCardSelected.classList.add('correct');
      const correctCards = document.querySelectorAll('.correct');
      for (cards of correctCards) {
        cards.classList.remove('selected');
      }
      preventClick = false;
    } else {
      setTimeout(function() {
        firstCardSelected.style.backgroundColor = '';
        secondCardSelected.style.backgroundColor = '';
        secondCardSelected.classList.remove('selected');
        firstCardSelected.classList.remove('selected');
        preventClick = false;
      },1000)
      
    }
      
}

//-----------------------MY CODE---------------------------

    // you can use event.target to see which element was clicked
    console.log("you just clicked", event.target);
}

// when the DOM loads
createDivsForColors(shuffledColors);

// START BUTTON?
// const startGame = document.getElementById('startBtn');
// startGame.addEventListener('click', function() {
//   createDivsForColors(shuffledColors);
// });

/* */