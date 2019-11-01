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
        this.wok = wok.name
        wok.ingridients.push(this)
    }
}
