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
    let hintCounter1 = 0;
    let hintCounter2 = 0;
    let pureCode = [];
    let pureUserCode = [];
    for (let i = 0; i < 4; i++) {
      if (this.code[i] === userCode[i]) {
        hintCounter1++;
      } else {
        pureCode.push(this.code[i]);
        pureUserCode.push(userCode[i]);
      }
    }
    if (hintCounter1 != 4) {
      for (let i = 0; i < pureUserCode.length; i++) {
        let firstItem = pureCode.pop();
        if (pureUserCode.includes(firstItem)) {
          hintCounter2++;
        }
      }
    }
    const hintCounters = [hintCounter1, hintCounter2];
    return hintCounters;
  }
}
