import { model } from 'mongoose';


export default class Setting {
  constructor(ipServer, baseNameAsc, tokenTg, tokenViber) {
    ipServer = ipServer
    baseNameAsc = baseNameAsc
    tokenTg = tokenTg
    tokenViber = tokenViber
  }

  async save (){
    //const setting = new model.setting
  }

  static getAllSetting() {
    // todo mongo base
  }
}
