document.addEventListener("DOMContentLoaded", function() {
  let correctAnswer = "Eduardo Nunez";
  let attempts = 0;
  let maxAttempts = 3;

  function guessThePlayer() {
    let guess = prompt("Guess the Player:");

    // Check if the guess is correct
    if (guess === correctAnswer) {
      document.body.innerHTML += '<p style="color: green;">Correct!</p>';
    } else {
      attempts += 1;

      // Display "Strike 1" immediately after the first incorrect guess
      if (attempts === 1) {
        document.body.innerHTML += '<p style="color: red;">Strike 1</p>';
        guessThePlayer(); // Prompt again after displaying strike
        return;
      }

      // Display "Strike 2" immediately after the second incorrect guess
      if (attempts === 2) {
        document.body.innerHTML += '<p style="color: red;">Strike 2</p>';
        guessThePlayer(); // Prompt again after displaying strike
        return;
      }

      // Display "Strike 3, You're Out!" after the third incorrect guess
      if (attempts === 3) {
        document.body.innerHTML += '<p style="color: red;">Strike 3, You\'re Out!</p>';
      }
    }

    // If attempts are less than the maximum allowed and the guess is incorrect, prompt again
    if (attempts < maxAttempts && guess !== correctAnswer) {
      guessThePlayer();
    }
  }

  guessThePlayer();
});

