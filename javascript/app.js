let codemaker = new Codemaker();
let codebreaker = new Codebreaker();
let mastercode = codemaker.generateCode();

let tries = 0;
while (tries <= 13) {
  if (tries === 13) {
    alert("You've lost!");
    break;
  }
  let currentGuess = codebreaker.makeGuess();
  document.getElementById("currentGuess").innerHTML = codebreaker.currentGuess;
  let hintCount = codemaker.compareCode(currentGuess);
  document.getElementById("hintCounter").innerHTML = hintCount;
  if (hintCount === 4) {
    alert("you've won!");
    break;
  }

  tries++;
}
