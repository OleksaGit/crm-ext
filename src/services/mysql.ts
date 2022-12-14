import mysql from 'mysql2';
import config from '../config/config.js';

const pool = mysql.createPool(config.configMysql);

export default class MySqlService {
  static escape (...args) {
    // @ts-ignore
    return mysql.escape(...args);
  }

  // static async execute (sql, timeout = 3e5) {
  //   // console.log(sql)
  //   try {
  //     return await MySQLService.query(sql, timeout);
  //   } catch (error) {
  //     if (sql.substr(0, 18) === 'START TRANSACTION;') {
  //       await MySQLService.query('ROLLBACK;');
  //     }
  //     return Promise.reject(new MySQLError(error));
  //   }
  // }

  // static async transaction (sql, timeout = 3e5) {
  //   return MySQLService.execute(`START TRANSACTION;${sql}COMMIT;`, timeout);
  // }

  static query (sql, timeout) {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) { return reject(err); }

        connection.query({ sql, timeout }, (err, results/*, fields*/) => {
          connection.release();
          if (err) { return reject(err); }
          resolve(results);
        });
      });
    });
  }
}
