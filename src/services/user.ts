import Base from './base.js';
const user = require('../routes/auth')


export default class USER extends Base {
  static user = user
}

