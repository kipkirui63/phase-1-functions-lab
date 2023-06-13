// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - 42);
}

function distanceFromHqInFeet(blocks) {
    const distanceInBlocks = distanceFromHqInBlocks(blocks);
    return distanceInBlocks * 264;
}

function distanceTravelledInFeet(startBlock, endBlock) {
    const distanceInBlocks = Math.abs(endBlock - startBlock);
    return distanceInBlocks * 264;
}

function calculatesFarePrice(startBlock, endBlock) {
    const distanceInFeet = distanceTravelledInFeet(startBlock, endBlock);

if (distanceInFeet <= 400) {
    return 0;
} else if (distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * 0.02;
} else if (distanceInFeet <= 2500) {
    return 25;
} else {
    return "cannot travel that far";
}
}

module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice,
};


