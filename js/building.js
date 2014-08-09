var Building = (function () {
    function Building(factor, moneyCost, proofCost) {
        this.owned = 0;
        this.manual = 0;
        this.factor = 0;
        this.factor = factor;
        this.moneyCost = moneyCost;
        this.proofCost = proofCost;
    }
    Building.prototype.add = function (num) {
        this.owned += num;
    };
    return Building;
})();

var CurrBuyable = (function () {
    function CurrBuyable(cost) {
        this.owned = false;
        this.cost = cost; //cost is an array of length 6
    }
    CurrBuyable.prototype.buy = function () {
        this.owned = true;
    };
    return CurrBuyable;
})();

var Achievement = (function () {
    function Achievement(name, text, condition) {
        this.achieved = false;
        this.name = name;
        this.text = text;
        this.condition = new Function("return " + condition + ";");
    }
    return Achievement;
})();
