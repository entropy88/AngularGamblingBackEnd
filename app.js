let express = require('express'),
  path = require('path'),
  mongoose = require('mongoose'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  dataBaseConfig = require('./database/db');

// Connecting mongoDB
mongoose.Promise = global.Promise;
mongoose.connect(dataBaseConfig.db, {
  useNewUrlParser: true,
  useFindAndModify: false
}).then(() => {
    console.log('Database connected sucessfully ')
  },
  error => {
    console.log('Could not connected to database : ' + error)
  }
)

// Set up express js port
const userRoute = require('./routes/user.route');
const feedbackRoute=require('./routes/feedback.route');
const chapterRoute=require('./routes/chapter.route');
const downloadRoute=require('./routes/download.route');
const counterRoute=require('./routes/counter.route');
const beerRoute=require('./routes/beers.route')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());

// Setting up static directory
app.use(express.static(path.join(__dirname, 'dist/angular8-meanstack-angular-material')));


// RESTful API root
app.use('/api', userRoute);
app.use('/api', feedbackRoute);
app.use('/api',chapterRoute);
app.use('/api', downloadRoute);
app.use('/api', counterRoute);
app.use('/api', beerRoute);

// PORT
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log('Connected to port ' + port)
})



// Index Route
app.get('/', (req, res) => {
  res.send('invaild endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

//https://www.positronx.io/angular-8-mean-stack-tutorial-build-crud-angular-material/