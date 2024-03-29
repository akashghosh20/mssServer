const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://mssserver:CukY2AuUurBoLmas@cluster0.8jjla.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri)

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run(){
    try{
        await client.connect();
        const resultCollection = client.db('mssserver').collection('results');

        app.get('/results', async(req, res) =>{
            const query = {};
            const cursor = resultCollection.find(query);
            const results = await cursor.toArray();
            res.send(results);
        })
        app.get('/results7', async(req, res) =>{
            const query = {};
            const cursor = resultCollection.find(query);
            const results7 = await cursor.toArray();
            res.send(results7);
        })
        app.get('/results8', async(req, res) =>{
            const query = {};
            const cursor = resultCollection.find(query);
            const results8 = await cursor.toArray();
            res.send(results8);
        })
        app.get('/results9', async(req, res) =>{
            const query = {};
            const cursor = resultCollection.find(query);
            const results9 = await cursor.toArray();
            res.send(results9);
        })
        app.get('/results10', async(req, res) =>{
            const query = {};
            const cursor = resultCollection.find(query);
            const results10 = await cursor.toArray();
            res.send(results10);
        })


    }
    finally{

    }
}

run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Hello MSSSERVER!')
})

app.listen(port, () => {
  console.log(`MSSSERVER App is listening on port ${port}`)
})