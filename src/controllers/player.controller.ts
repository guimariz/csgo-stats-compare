import Stats from "../models/stats.model"
import fs from 'fs'

export default class PlayerController {
  
  readPlayersJson() {
    try {
      const jsonData = fs.readFileSync('src/database.json', 'utf-8')
      const playerStats = JSON.parse(jsonData)
      return playerStats
    } catch (err) {
      console.log(err)
    }
  }

  filterCompare(playersJson: any, stats: Stats) {  
    return playersJson.filter((player: any) =>  player.rating == stats.rating && player.kd == stats.kd)
  }

  getPlayerLike(stats: Stats) {
    const playersJson = this.readPlayersJson()
    let compare = this.filterCompare(playersJson, stats)
    let highest = 0;

    while(!compare.length) {
      let rate = true
      if(rate) {
        stats.rating = stats.rating - 0.01
        compare = this.filterCompare(playersJson, stats)
        rate = !rate
      } else {
        stats.kd = stats.kd - 0.01
        compare = this.filterCompare(playersJson, stats)
        rate = !rate
      }
    }
   
    compare.forEach((i: any) => {
      if(i.kd_diff > highest) {
        highest = i.kd_diff
      }
    })

    let name = compare.name
    let data = compare.filter((player: any) => player.kd_diff == highest)

    return `Você está jogando como o ${data[0].name}`
  }
}
