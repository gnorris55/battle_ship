
function ship(name, length, sunk = false) {

    // this is hard coded!!!
    let dir = "vert";
    let startingPoint = 2;
    let hitPoints = [length];
    // creates the hitpoints of the ship and makes them false because they
    // have not been hit yet
    const createHitPoints = () => {
        for (let i = 0; i < length; i++) {
            hitPoints[i] = false
        }
    }
    // gives the ship a direction (vert, hor) and where it starts, for calculation
    const shipPlaced = (d, sP) => {
        dir = d;
        startingPoint = sP;
        console.log(this.dir);
        console.log(this.startingPoint);
    }

    // determines if ship has been hit in a place that has not been hit yet
    const hit = (point) => {
        console.log(point);
        if (point <= length && point >= 0) {
            // reminder the point is not an index like number
            hitPoints[point] = true;
        }
        console.log(hitPoints);
        checkSunk();
    }

    // checks to see if all points are hit
    const checkSunk = () => {
        // counts all the hits
        let hitCount = 0;
        for (let i = 0; i < length; i++) {
            if (hitPoints[i] == true) { hitCount++; }
        }
        // if hits are equal to the length that means that all locations have been hit
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

    let ships = []
    //creating a 2-dimensional array and filling it with os to sgnify that nothing has hit it
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
        createShips();
    }

    const createShips = () => {
        let shipOne = new ship("small", 3);
        shipOne.createHitPoints();
        let shipTwo = new ship("medium", 5);
        shipTwo.createHitPoints();
        let shipThree = new ship("large", 7);
        shipThree.createHitPoints();
        ships.push(shipOne, shipTwo, shipThree);
        console.log(ships[2]);
    }
    
    // places ship depending on direction, row, col, and the ship that you are placing
    const placeShip = (dir, row, col, size) => {
        let ship;
        if ( size == "small" ) {
            ship = ships[0]
        }   else if ( size == "medium" ) {
            ship = ships[1]
        }   else if (size == "large") {
            ship = ships[2]
        }
        if (dir == "vert") {
            // shange!!!
            ship.shipPlaced("vert", row);
            // !!!
            // makes sure that the ship is not out of bounds
            if ((row + ship.length >= 0 && row + ship.length <= len) && (len >= 0 && col <= len)) {
                // fills the space with the ships name so that the game can tell if the user is there
                for (let r = row; r < row + ship.length; r++) {
                    layout[r][col] = ship.name;
                }
            } else {
                console.log("error");
            }
        }
        else if (dir == "hor") {
            ship.shipPlaced("hor", col);
            if ((col + ship.length >= 0 && col + ship.length <= len) && (row >= 0 && row <= len)) {
                for (let c = col; c < col + ship.length; c++) {
                    layout[row][c] = ship.name;
                }
            } else {
                console.log("error");
            }
        }
    }

    // gets coordinates from player and determines if it has hit the player
    const receiveAttack = (row, col) => {
        if ((col >= 0 && col <= len) && (row >=0 && row <= len)) {
            // anything that has not been hit it will mark that spot down as a ship
            if (layout[row][col] != "o" && layout[row][col] != "n") {
               for (let i = 0; i < ships.length; i++) {
                   console.log(ships[i].name);
                   console.log(layout[row][col]);
                   if (ships[i].name == layout[row][col]) {
                    if (ships[i].dir == "vert") {
                        ships[i].hit(row - ships[i].startingPoint);
                    }
                   }
               }
            }   else {
                layout[row][col] = "n";
            }
        }
    }

    return {
        createBoard: createBoard,
        placeShip: placeShip,
        receiveAttack, receiveAttack,
        createShips: createShips
    };
}

function player(name) {

    let myBoard = new board(30);
   
    const createBoard = () => {
        myBoard.createBoard();
    }
    const placeShip = (dir, row, col, size) => {
        myBoard.placeShip(dir, row, col, size);
    }
    const takeHit = (row, col) => {
        myBoard.receiveAttack(row, col)
    }
    return {
        name,
        createBoard: createBoard,
        placeShip: placeShip,
        takeHit: takeHit
    }
}

// exports-------
export {player};
export {board};
export {ship};
// --------------