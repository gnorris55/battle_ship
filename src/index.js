// for the objects
function ship(name, length, sunk = false, dir = null, startingPoint = null) {

    let hitPoints = [length];
    const createHitPoints = () => {
        for (let i = 0; i < length; i++) {
            hitPoints[i] = false
        }
    }
    const shipPlaced = (dir, startingPoint) => {
        this.dir = dir;
        this.startingPoint = startingPoint;
    }

    const hit = (point) => {
        if (point <= length && point > 0) {
            hitPoints[point - 1] = true;
        }
        console.log(hitPoints)
        checkSunk();
    }

    const checkSunk = () => {
        let hitCount = 0;
        for (let i = 0; i < length; i++) {
            if (hitPoints[i] == true) { hitCount++; }
        }
        if (hitCount == length) {
            sunk = true;
        }
    }

    return {
        createHitPoints: createHitPoints,
        hit: hit,
        shipPlaced: shipPlaced,
        dir,
        startingPoint,
        name,
        length
    };
}

function board(len) {

    let layout = new Array(len)
    const createBoard = () => {

        for (var i = 0; i < layout.length; i++) {
            layout[i] = new Array(len);
        }
        for (let r = 0; r < len; r++) {
            for (let c = 0; c < len; c++) {
                layout[r][c] = "o";
            }
        }
        return layout;

    }

    const placeShip = (dir, row, col, ship) => {

        if (dir == "vert") {
            if ((row + ship.length >= 0 && row + ship.length <= len) && (len >= 0 && col <= len)) {
                for (let r = row; r < row + ship.length; r++) {
                    layout[r][col] = ship.name;

                }
                return layout;
            } else {
                return "error, out of bounds";
            }
        }
        else if (dir == "hor") {
            if ((col + ship.length >= 0 && col + ship.length <= len) && (row >= 0 && row <= len)) {
                for (let c = col; c < col + ship.length; c++) {
                    layout[row][c] = name;
                }
                return layout;
            } else {
                return "error, out of bounds";
            }
        }
    }

    const receiveAttack = (row, col) => {
        if ((col >= 0 && col <= len) && (row >=0 && row <= len)) {
            if (layout[row][col] != "o") {
               //TODO
            }
        }
    }

    return {
        createBoard: createBoard,
        placeShip: placeShip,
        receiveAttack, receiveAttack
    };
}
