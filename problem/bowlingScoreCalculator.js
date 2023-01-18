function calculateScore(rolls) {
  let frames = [];
  let n = rolls.length;
  for (let i = 0; i < n; ) {
    //frame in case of open frame or spare
    if (rolls[i] + rolls[i + 1] <= 10) {
      frames.push([rolls[i], rolls[i + 1]]);
      i += 2;
    }
    //frame in case of strike
    else {
      frames.push([10]);
      i++;
    }
  }
  return frames;
}
console.log(
  calculateScore([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
);
