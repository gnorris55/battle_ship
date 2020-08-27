const ship = require('./ship')


test("can hit a ship and it turns that hitpoint into true", () => {
    const shipTwo = ship("USSJOE", 5);
    shipTwo.createHitPoints()
    expect(shipTwo.hit(3)).toStrictEqual([false, false, true, false, false])
});
/*
test("if hit point greater than length nothing occurs", () => {
    const shipThree = ship("USSJOE", 5);
    shipThree.createHitPoints()
    expect(shipThree.hit(7)).toStrictEqual([false, false, false, false, false])
});
test("if hit point less than 1 nothing occurs", () => {
    const shipThree = ship("USSJOE", 5);
    shipThree.createHitPoints()
    expect(shipThree.hit(0)).toStrictEqual([false, false, false, false, false])
});
test("if hit called and it is already false it will return already hit message", () => {
    const shipThree = ship("USSJOE", 5);
    shipThree.createHitPoints()
    shipThree.hit(2);
    expect(shipThree.hit(2)).toStrictEqual([false, true, false, false, false])
});

test("if all hit points are set to true, the ship sinks (sink function)", () => {
    const shipFour = ship("USSJOE", 1);
    shipFour.hit(1);
    expect(shipFour.checkSunk()).toStrictEqual(true);
});

test("if not all hit points are true the ship does not sink, the ship sinks (sink function)", () => {
    const shipFour = ship("USSJOE", 5);
    shipFour.hit(3);
    expect(shipFour.checkSunk()).toStrictEqual(false);
}); */