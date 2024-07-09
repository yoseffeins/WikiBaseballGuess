document.addEventListener("DOMContentLoaded", function() {
  let correctAnswer = "Eduardo Nunez";
  let attempts = 0;
  let maxAttempts = 3;

  function guessThePlayer() {
    let guess = prompt("Guess the Player:");
    if (guess === correctAnswer) {
      document.body.innerHTML += '<p style="color: green;">Correct!</p>';
    } else {
      attempts += 1;
      if (attempts === 1) {
        document.body.innerHTML += '<p style="color: red;">Strike 1</p>';
      } else if (attempts === 2) {
        document.body.innerHTML += '<p style="color: red;">Strike 2</p>';
      } else if (attempts === 3) {
        document.body.innerHTML += '<p style="color: red;">Strike 3, You\'re Out!</p>';
      }
    }

    if (attempts < maxAttempts && guess !== correctAnswer) {
      guessThePlayer();
    }
  }

  guessThePlayer();
});
