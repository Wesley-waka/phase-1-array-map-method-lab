describe('index.js', function () {
  describe('titleCased()', function () {
    it('returns an array with title case tutorial names', function () {
      expect(titleCased()).to.have.all.members(
        [
          "WHAT DOES THE THIS KEYWORD MEAN?",
          "WHAT IS THE CONSTRUCTOR OO PATTERN?",
          "IMPLEMENTING BLOCKCHAIN WEB API",
          "THE TEST DRIVEN DEVELOPMENT WORKFLOW",
          "WHAT IS NAN AND HOW CAN WE CHECK FOR IT",
          "WHAT IS THE DIFFERENCE BETWEEN STOPPROPAGATION AND PREVENTDEFAULT?",
          "IMMUTABLE STATE AND PURE FUNCTIONS",
          "WHAT IS THE DIFFERENCE BETWEEN == AND ===?",
          "WHAT IS THE DIFFERENCE BETWEEN EVENT CAPTURING AND BUBBLING?",
          "WHAT IS JSONP?"
      ]
      )
    });
  });
});
