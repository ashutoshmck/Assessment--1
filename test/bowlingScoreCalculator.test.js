const { calculateScore } = require("../problem/bowlingScoreCalculator");

describe("Bowling Game Score Calculate", () => {
  describe("Calculate bowling game score", () => {
    it("Should be 90", () => {
      expect(
        calculateScore([
          3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6,
        ])
      ).toBe(90);
    });
  });
});
