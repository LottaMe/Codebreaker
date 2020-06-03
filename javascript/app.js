let codemaker = new Codemaker();
let codebreaker = new Codebreaker();
let mastercode = codemaker.generateCode();
let tries = 0;

while (tries <= 12) {
  if (tries === 12) {
    alert("You've lost!");
    break;
  }
  codebreaker.makePossibleGuesses();
  let currentGuess = codebreaker.makeGuess();
  document.getElementById("currentGuess").innerHTML = codebreaker.currentGuess;
  let hintCount1 = codemaker.compareCode(currentGuess)[0];
  document.getElementById("hintCounter1").innerHTML = hintCount1;
  let hintCount2 = codemaker.compareCode(currentGuess)[1];
  document.getElementById("hintCounter2").innerHTML = hintCount2;

  if (hintCount1 === 4) {
    alert("you've won!");
    break;
  }

  tries++;
}
