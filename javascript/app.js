//Currently in the middle of task 3. Computer can guess but doesn't take hints in consideration.
// to run the program, open the index.html in the browser of your choice :)

const codebreakerType = prompt("If you are playing enter 'yes'.");
let codemaker = new Codemaker();
let codebreaker = new Codebreaker();
let mastercode = codemaker.generateCode();
let tries = 0;
if (codebreakerType.toLowerCase() === "yes") {
  while (tries <= 12) {
    if (tries === 12) {
      alert("You've lost!");
      break;
    }
    let currentGuess = codebreaker.makeGuess();
    document.getElementById("currentGuess").innerHTML =
      codebreaker.currentGuess;
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
} else {
  console.log("computer is playing");
  while (tries <= 12) {
    if (tries === 12) {
      alert("Computer Lost!");
      break;
    }
    let currentGuess = codebreaker.computerGuess();
    let hintCount1 = codemaker.compareCode(currentGuess)[0];
    document.getElementById("hintCounter1").innerHTML = hintCount1;
    let hintCount2 = codemaker.compareCode(currentGuess)[1];
    document.getElementById("hintCounter2").innerHTML = hintCount2;

    if (hintCount1 === 4) {
      alert("you've won!");
      break;
    } else {
      alert("Attempt Not Successful");
    }
    tries++;
  }
}
