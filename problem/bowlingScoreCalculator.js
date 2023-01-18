function calculateScore(rolls) {
  let frames = [];

  for (let i = 0; i < rolls.length; ) {
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
  let totalScore = 0;
  let frameScores = [];
  let numberOfFrames = frames.length;
  while (numberOfFrames--) {
    let frameScore = 0;
    frames[numberOfFrames].forEach((element) => {
      frameScore += element;
    });

    //open
    if (frameScore < 10) frameScores.unshift(frameScore);
    //spare
    else if (frameScore == 10 && frames[numberOfFrames].length == 2) {
      frameScore = 10 + frameScores[numberOfFrames + 1];
      frameScores.unshift(frameScore);
    }
    //strike
    else {
      frameScore = 10 + frameScores[numberOfFrames + 1];
      frameScores.unshift(frameScore);
    }
  }
  frameScores.forEach((element) => {
    totalScore += element;
  });
  console.log(frameScores);
  return totalScore;
}
console.log(
  calculateScore([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
);
