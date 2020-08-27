const board = require('./board')

test("board is succesfully created", () => {
    const testBoard = board();
    expect(testBoard.createBoard()).toStrictEqual([["o", "o", "o", "o", "o"],
                                                   ["o", "o", "o", "o", "o"], 
                                                   ["o", "o", "o", "o", "o"], 
                                                   ["o", "o", "o", "o", "o"], 
                                                   ["o", "o", "o", "o", "o"]]);
});

test("can place shipt vertically", () => {
    const testBoard = board();
    testBoard.createBoard();
    expect(testBoard.placeShip("vert", 1, 2, 3, "x")).toStrictEqual([["o", "o", "o", "o", "o"], 
                                                                     ["o", "o", "x", "o", "o"], 
                                                                     ["o", "o", "x", "o", "o"], 
                                                                     ["o", "o", "x", "o", "o"], 
                                                                     ["o", "o", "o", "o", "o"]])
});

test("can place ship horizontally", () => {
    const testBoard = board();
    testBoard.createBoard();
    expect(testBoard.placeShip("hor", 1, 2, 3, "x")).toStrictEqual([ ["o", "o", "o", "o", "o"], 
                                                                     ["o", "o", "x", "x", "x"], 
                                                                     ["o", "o", "o", "o", "o"], 
                                                                     ["o", "o", "o", "o", "o"], 
                                                                     ["o", "o", "o", "o", "o"]])
});

test("cant place ship if out of bounds", () => {
    const testBoard = board();
    testBoard.createBoard();
    expect(testBoard.placeShip("hor", 6, 2, 3, "x")).toStrictEqual("error, out of bounds")
});

test("cant place ship if out of bounds, test 2", () => {
    const testBoard = board();
    testBoard.createBoard();
    expect(testBoard.placeShip("hor", 1, 4, 6, "x")).toStrictEqual("error, out of bounds")
});

test("tells you what ship you have hit", () => {
    const testBoard = board();
    testBoard.createBoard();
    testBoard.placeShip("vert", 1, 2, 3, "x")
    expect(testBoard.receiveAttack(2,2)).toBe(1);
});