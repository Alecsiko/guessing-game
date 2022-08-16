class GuessingGame {
    constructor() {}

    setRange(min, max) {
       this.min = min;
       this.max = max;

    }

    guess() {

        let thisNum = Math.round((this.min + this.max)/2)
        return thisNum

    }

    lower() {
        this.max = this.guess();
    }

    greater() {
        this.min = this.guess();
    }
}

module.exports = GuessingGame;
