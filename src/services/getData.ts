import config from "../config/config";
import MysqlService from "./mysql";

export default class GetDatabaseService {

  static createTasks  (configStatus, action) {
    let result =[]
    for (let i = 0; i < configStatus.length; i++) {
      if (configStatus[i] !== undefined ) {
        if (configStatus[i].action === action) {
          result.push(configStatus[i])
        }
      }
    }
    return result
  }


  static async awaitingOrder (action) {

    const tasks = this.createTasks(config.configStatusRepair, action)
    let result = [];

    for (let i = 0; i < tasks.length; i++) {
      let dataSql = await MysqlService.query(`SELECT clients.surname, clients.name, device_makers.name as makers, device_models.name as models, workshop.fault, workshop.state, workshop.id
        FROM ascnbdb.workshop 
        JOIN clients ON clients.id = workshop.client
        JOIN device_models ON device_models.id = workshop.model
        JOIN device_makers ON device_makers.id = workshop.maker
        WHERE workshop.state = ${tasks[i].state}`, 100);

      let parts = await MysqlService.query(`SELECT parts_request.item_name, parts_request.notes
        FROM ascnbdb.parts_request
        WHERE parts_request.repair = ${dataSql[0].id}`, 100)

      result.push({
        data: dataSql,
        parts: parts,
        status: tasks[i].status,
        state: tasks[i].state,
        action: tasks[i].action,
        seller: tasks[i].seller,
      });
    }
     // console.log(tasks)
    console.log(JSON.stringify(result, null, 2))
    return result;
  }
}