const Ingridient = require("./models/ingridient");
const Wok = require("./models/wok");
const Database = require("./database");

// const baseService = require('./base-service');
const IngridientService = require("./services/Ingridient-service");
const WokService = require("./service/Wok-service");

// IngridientServ = new IngridientService();

async function main() {
  const rice = new Ingridient("rice");
  const nodles = new Ingridient("nodles");

  const wok1 = new Wok();

  rice.addToWok(wok1);
  nodles.addToWok(wok1);
  wok1.report();

  await IngridientService.add(rice);
  await IngridientService.add(nodles);

  const ingd = await IngridientService.findAll();

  console.log(ingd[0].name);

  console.log(wok1.ingridients);
  wok1.cooking();
  wok1.cooking();

  Database.save("wok.json", wok1);
  Database.save("ingridient.json", rice);

  const loadedFile = Database.load("wok.json");
  // console.log(loadedFile.wok1)
}

main();
