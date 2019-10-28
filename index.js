const Ingridient = require('./ingridient')
const Wok = require('./wok')
const Database = require('./database')

rice = new Ingridient('rice')
nodles = new Ingridient('nodles')


wok1 = new Wok()

rice.addToWok(wok1)
nodles.addToWok(wok1)

console.log(wok1.ingridients)
wok1.cooking()
wok1.cooking()

Database.save('wok.json', wok1)
Database.save('ingridient.json',wok1)

const loadedFile = Database.load('wok.json')
console.log(loadedFile.wok1)