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
}
