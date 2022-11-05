const { Router } = require('express');
const router = Router();
const auth = require('../middleware/auth')
const getTask = require('../controllers/getTask');
const GetDatabaseService = require('../services/getData')
const hbs = require('hbs')

// hbs.registerHelper('tableOfOrder', function (data) {
//   for (let i = 0; i < data.length; i++) {
//
//   }
// })

router.get('/', auth, async (req, res) => {

  // const data = await getTask.awaitingOrder()
  try {
    //const data = await GetDatabaseService.awaitingOrder('order')
    const data = {}
    res.render('index', { data });
  } catch (e) {
    console.log(e)
  }
});

module.exports = router;


// [
//   {
//     surname: 'Кравець',
//     name: 'Олександр',
//     makers: 'Canon',
//     models: 'MF4410',
//     fault: 'Пропадає по УСБ',
//     state: 5,
//     status: 'очікує замовлення TEST'
//   },
//   {
//     surname: 'Горковлюк',
//     name: 'Вікторія',
//     makers: 'Xiaomi',
//     models: 'Redmi Note 4',
//     fault: 'Пошкоджений тачскрін',
//     state: 38,
//     status: 'очікує замовлення Forsage'
//   },
//   {
//     surname: 'Тестостерон',
//     name: 'Тест',
//     makers: 'Dell',
//     models: 'Latitude E5500',
//     fault: 'Відновлення ОС',
//     state: 39,
//     status: 'очікує замовлення DFI'
//   }
// ]

