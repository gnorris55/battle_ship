function ship(name, length, sunk = false, dir = null, startingPont = null) {

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
        checkSunk();
        return hitPoints;
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
        shipPlaced: shipPlaced
    };
}

module.exports = ship;