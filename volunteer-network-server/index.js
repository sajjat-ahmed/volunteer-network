const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 5000

app.use(cors());
app.use(bodyParser.json());

const pass = 'mGQSuXuPr6MRYodO';


const uri = "mongodb+srv://sajjat:mGQSuXuPr6MRYodO@cluster0.3phgf.mongodb.net/volunteerNetwork?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("volunteerNetwork").collection("Tasks");

  app.post('/allTasks', (req, res) => {
    const newTasks = req.body;
    collection.insertOne(newTasks);
    console.log(newTasks);
  });

  app.get('/redTasks', (req, res) => {
    collection.find({})
    .toArray( (err, documents) => {
      res.send(documents)
    })
  })
  
});

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  

app.listen(port)