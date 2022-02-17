import Stats from "../models/stats.model"
import fs from 'fs'


export default class PlayerController {
  readPlayersJson() {
    const jsonData;
    fs.readFile("../database.json", "utf8", function (err, data) {
      if (err) {
        return console.log("Erro ao ler arquivo");
      }

      jsonData.push(JSON.parse(data)); // faz o parse para json
      /**
       Se precisar em array use:
       jsonData = Object.keys(jsonData);
      / */
    });
    return jsonData
  }

  getPlayerLike(stats: Stats) {
    let playersJson = this.readPlayersJson();

    console.log(playersJson)
    return 'ok'
  }
}
