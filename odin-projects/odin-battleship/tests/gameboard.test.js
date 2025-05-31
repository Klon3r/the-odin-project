const { Gameboard } = require("../scripts/gameboard");

test("convertInt() outputs correct letter", () => {
  const gameboard = new Gameboard();
  expect(gameboard.convertInt(1)).toBe("A");
  expect(gameboard.convertInt(2)).toBe("B");
  expect(gameboard.convertInt(3)).toBe("C");
  expect(gameboard.convertInt(4)).toBe("D");
  expect(gameboard.convertInt(5)).toBe("E");
  expect(gameboard.convertInt(6)).toBe("F");
  expect(gameboard.convertInt(7)).toBe("G");
  expect(gameboard.convertInt(8)).toBe("H");
  expect(gameboard.convertInt(9)).toBe("I");
  expect(gameboard.convertInt(10)).toBe("J");
});
