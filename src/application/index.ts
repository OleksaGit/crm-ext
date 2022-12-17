import express from 'express'
import csrf from 'csurf'
import flash from 'connect-flash'
import exphbs from 'express-handlebars'
import mongoose from 'mongoose'
import session from 'express-session'
import { default as connectMongoDBSession} from 'connect-mongodb-session'
import homeRoutes from '../routes/home'
import messengerRoutes from '../routes/messenger';
import reportRoutes from '../routes/report';
import settingRoutes from '../routes/setting';
import userRoutes from '../routes/user';
import authRoutes from '../routes/auth';
import varMiddleware from '../middleware/variables'
import path from 'path';
const MongoStore = connectMongoDBSession(session);


//todo replace with env
//const MONGODB_URI = 'mongodb://admin:qazwsx@localhost:27017/'
const MONGODB_URI = 'mongodb://localhost:27017/crmExtender'

const app = express();

const store = new MongoStore({
  collection: 'sessions',
  uri: MONGODB_URI,
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
  //useNewUrlParser: true,
  //useUnifiedTopology: true,
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