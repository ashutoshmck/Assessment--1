function calculateScore(rolls) {
  let frames = [];

  for (let i = 0; i < rolls.length; ) {
    //10th frame
    if (frames.length == 9) {
      if (rolls[i] + rolls[i + 1] >= 10)
        frames.push([rolls[i], rolls[i + 1], rolls[i + 2]]);
      else frames.push([10]);

      break;
    }
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
      frameScore = frameScore + frameScores[numberOfFrames];
      frameScores.unshift(frameScore);
    }
    //strike
    else if (frameScore == 10) {
      frameScore = 10 + frameScores[numberOfFrames];
      frameScores.unshift(frameScore);
    }
  }
  frameScores.forEach((element) => {
    totalScore += element;
  });
  console.log(frames);
  return totalScore;
}
console.log(
  calculateScore([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10,
  ])
);
module.exports = { calculateScore };
