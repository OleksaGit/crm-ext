const express = require('express');
const csrf = require('csurf')
const flash = require('connect-flash')
const exphbs = require('express-handlebars');
const mongoose = require('mongoose')
const session = require('express-session')
const MongoStore = require('connect-mongodb-session')(session)
const homeRoutes = require('../routes/home');
const messengerRoutes = require('../routes/messenger');
const reportRoutes = require('../routes/report');
const settingRoutes = require('../routes/setting');
const userRoutes = require('../routes/user');
const authRoutes = require('../routes/auth');
const varMiddleware = require('../middleware/variables')
const path = require('path');

//todo replace with env
//const MONGODB_URI = 'mongodb://admin:qazwsx@localhost:27017/'
const MONGODB_URI = 'mongodb://localhost:27017/crmExtender'

const app = express();

const store = new MongoStore({
  collection: 'sessions',
  uri: MONGODB_URI
})

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
});


app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../../views'));
app.use(express.static('../../public'));
app.use(express.urlencoded({ extended: true }));

//todo replace env
app.use(session({
  secret: '12345',
  resave: false,
  saveUninitialized: false,
  store: store,
}))
app.use(csrf())
app.use(flash())
app.use(varMiddleware)

app.use('/', homeRoutes);
app.use('/messenger', messengerRoutes);
app.use('/report', reportRoutes);
app.use('/setting', settingRoutes);
app.use('/user', userRoutes);
app.use('/auth', authRoutes)


mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, (err) => {
  if (err)
    console.log(err);
  else {
    console.info('MongoDB connected!!!');
  }
});

const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.info('Server ready');
});