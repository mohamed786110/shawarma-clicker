let shawarmaCount = 0;
let buildings = {
    chef: { cost: 100, production: 5, count: 0 },
    osmows: { cost: 500, production: 20, count: 0 },
    lazeez: { cost: 1500, production: 50, count: 0 }
};

function makeShawarma() {
    shawarmaCount++;
    updateDisplay();
}

function buyBuilding(type) {
    if (shawarmaCount >= buildings[type].cost) {
        shawarmaCount -= buildings[type].cost;
        buildings[type].count++;
        buildings[type].cost = Math.floor(buildings[type].cost * 1.15);
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById("shawarma-count").innerText = shawarmaCount;
    document.getElementById("chef-cost").innerText = buildings.chef.cost;
    document.getElementById("osmows-cost").innerText = buildings.osmows.cost;
    document.getElementById("lazeez-cost").innerText = buildings.lazeez.cost;
}

function autoProduce() {
    let totalProduction = 0;
    for (let type in buildings) {
        totalProduction += buildings[type].count * buildings[type].production;
    }
    shawarmaCount += totalProduction;
    updateDisplay();
}

setInterval(autoProduce, 1000);
