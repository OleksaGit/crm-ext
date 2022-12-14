const {model} = require("mongoose");


class Setting {
  constructor(ipServer, baseNameAsc, tokenTg, tokenViber) {
    this.ipServer = ipServer
    this.baseNameAsc = baseNameAsc
    this.tokenTg = tokenTg
    this.tokenViber = tokenViber
  }

  async save (){
    const setting = new model.setting
  }

  static getAllSetting() {
    // todo mongo base
  }
}

module.exports = Setting