"use strict";

// size: false - маленький, true - большой
class Burger {
    static valuesOfSize = {
        false: [50, 20],
        true: [100, 40]
    };

    static valuesOfOptions = {
        ch: [10, 20],
        sa: [20, 5],
        po: [15, 10],
        se: [15, 0],
        ma: [20, 5]
    };

    constructor(size=false, options=[]) {
        this.size= size;
        this.options = options;
    }

    calories() {
        let sum = Burger.valuesOfSize[this.size][1];
        for (let good of this.options) {
            sum += Burger.valuesOfOptions[good][1]
        }
        return sum;
    }
}

const burger = new Burger(true, ['ch', 'sa']);
console.log(burger.calories());
