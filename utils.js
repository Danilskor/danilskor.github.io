function generateObstaclesAndBoostersAround(x, y, radius) {
    let cellX = floor(x / width);
    let cellY = floor(y / height);

    for (let i = -radius; i <= radius; i++) {
        for (let j = -radius; j <= radius; j++) {
            let key = `${cellX + i},${cellY + j}`;
            if (!globalObstacles.has(key)) {
                let newObstacles = generateObstaclesInCell(cellX + i, cellY + j);
                globalObstacles.set(key, newObstacles);
                obstacles.push(...newObstacles);
            }
            if (!globalBoosters.has(key)) {
                let newBoosters = generateBoostersInCell(cellX + i, cellY + j);
                globalBoosters.set(key, newBoosters);
                boosters.push(...newBoosters);
            }
        }
    }
}

function generateObstaclesInCell(cellX, cellY) {
    let obstaclesInCell = [];
    let baseX = cellX * width;
    let baseY = cellY * height;
    let numObstacles = 2;

    for (let i = 0; i < numObstacles; i++) {
        let x = random(baseX, baseX + width);
        let y = random(baseY, baseY + height);

        if (y > height - 100) {
            continue;
        }

        let newObstacle = new Obstacle(x, y, 50, 50);
        obstaclesInCell.push(newObstacle);
    }

    return obstaclesInCell;
}

function generateBoostersInCell(cellX, cellY) {
    let boostersInCell = [];
    let baseX = cellX * width;
    let baseY = cellY * height;
    let numBoosters = 1;

    for (let i = 0; i < numBoosters; i++) {
        let x = random(baseX, baseX + width);
        let y = random(baseY, baseY + height);

        if (y > height - 100) {
            continue;
        }

        let newBooster = new Booster(x, y, 20, 20);
        boostersInCell.push(newBooster);
    }

    return boostersInCell;
}

function drawGround() {
    fill(34, 139, 34);
    rect(rocket.pos.x - width * 1.5, height - 50, width * 4, 50);
}