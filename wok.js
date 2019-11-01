const Boxen = require('boxen')
module.exports = class Wok {
    constructor() {
        this.name = []
        this.clean = true
        this.ingridients = []
    }
    washing() {
        console.log(Boxen("wait a minute, the wok is being washed!"))
        this.clean = true
        this.cooking()
    }
    cooking(Ingridient) {
        if(this.clean){
            // luckily the wok is clean, so we can start cooking
            console.log(Boxen("seesshh.. your food is being cooked!", {padding: 1, margin: 1, borderStyle: 'double'}))
            this.clean = false
        } else {
            // unfortunately the wok is filthy, so we need to wash it first
            this.washing()
        }
    }
}
