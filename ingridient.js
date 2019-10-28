module.exports = class Ingridient {
    constructor(name){
        this.name = name
    }
    serving() {
        if(this.cooked){
            console.log("Enjoy your " + this.name)
        }
    }
    addToWok(wok) {
        wok.ingridients.push(this)
    }
}