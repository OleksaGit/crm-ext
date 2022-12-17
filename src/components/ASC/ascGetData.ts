import MysqlService from '../../services/mysql';
import base from '../../services/base';
import AscTask from "./ascTask";

type AwaitingOrder = {
  surname: string;
  name: string;
  makers: string;
  models: string;
  fault: string;
  state: number;
  id: number;
}

export default class AscGetData extends AscTask {

  static async awaitingOrder() {
    let result = []
    const numberOfTask = AscGetData.createTasks(base.configStatusRepair, 'order')

    for (let i = 0; i < numberOfTask.length; i++) {

      let dataSql = await MysqlService.query(`SELECT clients.surname, clients.name, device_makers.name as makers, device_models.name as models, workshop.fault, workshop.state
        FROM ascnbdb.workshop 
        JOIN clients ON clients.id = workshop.client
        JOIN device_models ON device_models.id = workshop.model
        JOIN device_makers ON device_makers.id = workshop.maker
        WHERE workshop.state = ${numberOfTask[i].state}`, 1000)

      result.push(
          {
            data: dataSql,
            status: numberOfTask[i].status
          })
      ///////result.push({row:{[numberOfTask[i].status]: dataSql}})
      // result.push({
      //   ...dataSql,
      //   status: numberOfTask[i].status
      // })
    }

    console.log(numberOfTask)
//   console.log(JSON.stringify(result, null, 2))
    return result
  }

  static async repairLastWeek() {
    const sqlLastWeek = 'SELECT clients.surname, clients.name, device_makers.name as makers, device_models.name as models, workshop.fault, workshop.state\n' +
        'FROM ascnbdb.workshop \n' +
        'JOIN clients ON clients.id = workshop.client\n' +
        'JOIN device_models ON device_models.id = workshop.model\n' +
        'JOIN device_makers ON device_makers.id = workshop.maker\n' +
        'WHERE in_date between DATE_SUB(CURDATE(), INTERVAL 7 DAY) AND curdate() AND workshop.state != 8 AND workshop.state != 12'

    return await MysqlService.query(sqlLastWeek, 100)
  }
}


// const test = [
//   {
//     is: 1,
//     state: 0,
//     status: 'очікує замовлення TEST',
//     action: 'order',
//     nested: [
//       {
//         id: 1,
//         name: 'name',
//         description: 'description',
//       },
//       {
//         id: 2,
//         name: 'name',
//         description: 'description',
//       },
//     ],
//   },
//   {
//     state: 0,
//     status: 'очікує замовлення TEST',
//     action: 'order',
//     nested: [
//       {
//         id: 3,
//         name: 'name',
//         description: 'description',
//       },
//       {
//         id: 4,
//         name: 'name',
//         description: 'description',
//       },
//     ],
//   },
//   // { state: 5, status: 'очікує замовлення TEST', action: 'order' },
//   // { state: 38, status: 'очікує замовлення Forsage', action: 'order' },
//   // { state: 39, status: 'очікує замовлення DFI', action: 'order' }
// ];