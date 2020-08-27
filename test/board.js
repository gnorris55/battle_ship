function board() {
    len = 5;
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

    const placeShip = (dir, row, col, length, name) => {
        if (dir == "vert") {
            if ((row + length >= 0 && row + length <= len) && (len >= 0 && col <= len)) {
                for (let r = row; r < row + length; r++) {
                    layout[r][col] = name;
                }
                return layout;
            } else {
                return "error, out of bounds";
            }
        }
        else if (dir == "hor") {
            if ((col + length >= 0 && col + length <= len) && (row >= 0 && row <= len)) {
                for (let c = col; c < col + length; c++) {
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
                return row - 1;
            }
        }

    }

    return {
        createBoard: createBoard,
        placeShip: placeShip,
        receiveAttack, receiveAttack
    };
}

module.exports = board