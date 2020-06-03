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
  getFirstHint(userCode) {
    let hintCounter = 0;
    for (let i = 0; i < 4; i++) {
      if (this.code[i] === userCode[i]) {
        hintCounter++;
      }
    }
    return hintCounter;
  }
  removeSameNumbers(userCode) {
    let pureCode = [];
    let pureUserCode = [];

    for (let i = 0; i < 4; i++) {
      if (this.code[i] !== userCode[i]) {
        pureCode.push(this.code[i]);
        pureUserCode.push(userCode[i]);
      }
    }
    const output = [pureCode, pureUserCode];
    return output;
  }
  getSecondHint(userCode) {
    const pureCodes = this.removeSameNumbers(userCode);
    let hint2counter = 0;
    let pureCode = pureCodes[0];
    let pureUserCode = pureCodes[1];
    console.log(pureCode);
    console.log(pureUserCode);

    for (let i = 0; i < pureUserCode.length; i++) {
      let firstItem = pureCode.pop();
      if (pureUserCode.includes(firstItem)) {
        hint2counter++;
      }
    }
    console.log(hint2counter);
    return hint2counter;
  }
}
