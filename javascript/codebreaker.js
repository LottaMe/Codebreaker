class Codebreaker {
  constructor() {
    this.currentGuess = [];
  }
  makeGuess() {
    const user_input = prompt("Please Enter four numbers  ");

    for (let i = 0; i < 4; i++) {
      this.currentGuess[i] = parseInt(user_input[i]);
    }
    return this.currentGuess;
  }
  makePossibleGuesses() {
    let possibleGuesses = [];
    const evilGuesses = ["0", "7", "8", "9"];
    for (let i = 1111; i < 6667; i++) {
      const combination = i.toString().split("");
      if (!combination.some((x) => evilGuesses.includes(x))) {
        possibleGuesses.push(combination);
      }
    }
  }
}
