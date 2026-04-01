const db = require('./db/db');

const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

//importing those routes
const movieRoutes = require('./routes/movies');

app.get('/', (req,res) => {
  return res.status(200).json({message: 'you want to let the end-user know they have reached your API, but there is no data for them here. /movies is the endpoint that provides the data retained in your favorites table, in JSON format.'})
});

// app.get('/movies', async (req,res) => {
//   try{
//     const result = await db('favorites').select('*');
//     return res.status(200).json(result);
//   }catch(err){
//     res.status(500).send({message: err})
//   }
// });

// make sure to run this for this to even work lol:
// npx knex migrate:latest
// npx knex seed:run
app.use('/movies', movieRoutes);

app.listen(port, () => console.log(`Express server listening on port ${port}`));