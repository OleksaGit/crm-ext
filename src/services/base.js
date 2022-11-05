const {configServer, configMysql, configStatusRepair} = require ('../config/config')

class Base {
  static configServer = configServer
  static configMysql = configMysql
  static configStatusRepair = configStatusRepair
}

module.exports = Base

