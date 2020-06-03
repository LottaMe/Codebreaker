let codemaker = new Codemaker();
let codebreaker = new Codebreaker();
let mastercode = codemaker.generateCode();

let currentGuess = codebreaker.makeGuess();

document.getElementById("currentGuess").innerHTML = codebreaker.currentGuess;
let hintCount = codemaker.compareCode(currentGuess);
document.getElementById("hintCounter").innerHTML = hintCount;
