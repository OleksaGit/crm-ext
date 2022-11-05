const Base = require('../services/base');
const user = require('../routes/auth')



class USER extends Base {
  static user = user
}

module.exports = USER
