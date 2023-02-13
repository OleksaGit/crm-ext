
let statList = []
statList[0] =  {
  state: 0,
  status: 'Прийнятий в ремонт',
  action: 'reg'

}
statList[5] =  {
  state: 5,
  status: 'очікує замовлення TEST',
  action: 'order'

}
statList[38] = {
    state: 38,
    status: 'очікує замовлення Forsage',
    action: 'order',
    seller: {
      name: 'GSM Forsage',
      tg:'telegram',
      viber: 'viber',
      tel: '',
      email: '',
    }

  }
  statList[39] = {
    state: 39,
    status: 'очікує замовлення DFI',
    action: 'order',
    seller: {
      name: 'DFI',
      tg:'telegram',
      viber: 'viber',
      tel: '',
      email: '',
    }
  }

let config;
export default config = {
  configServer: {
    //serverAscIp:  '192.168.10.15',
    serverAscIp:  '78.154.166.49',
    serverAscBase: 'ascnbdb',
    serverAscPort: '7380',
    tokenTg: 'password',
    tokenViber: 'password',
  },
  configMysql: {
    connectionLimit: 5,
    //host: "192.168.10.15",
    host: "78.154.166.49",
    user: "root",
    port: 7380,
    database: "ascnbdb",
    password: "bvepkriv050482"
  },

  configStatusRepair: statList

}

