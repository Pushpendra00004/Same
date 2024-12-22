function tossCoin() {
  const coin = document.getElementById("coin");
  const resultText = document.getElementById("result");

  // Reset the coin's transform for a fresh toss
  coin.style.transition = "none";
  coin.style.transform = "rotateY(0deg)";

  // Force a repaint to apply the reset
  void coin.offsetWidth;

  // Randomly decide if it's heads (0) or tails (1)
  const result = Math.random() < 0.5 ? 0 : 1;

  // Animate the coin toss
  coin.style.transition = "transform 2s";
  coin.style.transform = `rotateY(${360 + (result === 0 ? 0 : 180)}deg)`;

  // Wait for animation to finish and display result
  setTimeout(() => {
    resultText.textContent = result === 0 ? "Heads" : "Tails";
  }, 2000);
}
