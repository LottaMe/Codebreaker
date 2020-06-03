const generateRandomNumber = () => {
  const number = Math.floor(Math.random() * 6);
  return number;
};
class Codemaker {
  constructor() {
    this.code = [];
  }
  generateCode() {
    for (let i = 0; i < 4; i++) {
      this.code.push(generateRandomNumber());
    }
    console.log(this.code);
  }
  compareCode(userCode) {
    let hintCounter = 0;
    for (let i = 0; i < 4; i++) {
      if (this.code[i] === userCode[i]) {
        hintCounter++;
      }
    }
    console.log(hintCounter);
    return hintCounter;
  }
}
