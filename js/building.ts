class Building {
	owned: number = 0;
	manual: number = 0;
	factor: number = 0;
	moneyCost: number;
	proofCost: number;
	
	constructor(factor: number, moneyCost: number, proofCost: number) {
		this.factor = factor;
		this.moneyCost = moneyCost;
		this.proofCost = proofCost;
	}
	
	add(num) {
		this.owned += num;
	}
}

class CurrBuyable {
	owned: boolean = false;
	cost: Array<number>;
	
	constructor(cost: Array<number>) {
		this.cost = cost; //cost is an array of length 6
	}
	
	buy() {
		this.owned = true;
	}
}

class Achievement {
	achieved: boolean = false;
	name: string;
	text: string;
	condition: any;

	constructor(name, text, condition) {
		this.name = name;
		this.text = text;
		this.condition = new Function("return " + condition + ";");
	}
}