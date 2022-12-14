import config from '../config/config.js'
const { configServer, configMysql, configStatusRepair } = config

export default class Base {
  static configServer = configServer
  static configMysql = configMysql
  static configStatusRepair = configStatusRepair
}


