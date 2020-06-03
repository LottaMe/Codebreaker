class Codebreaker {
  constructor() {
    this.currentGuess = ["1", "2", "3", "4"];
  }
  makeGuess() {
    const user_input = prompt("Please Enter four numbers  ");

    for (let i = 0; i < user_input.length; i++) {
      this.currentGuess[i] = parseInt(user_input[i]);
    }
    return this.currentGuess;
  }
}
