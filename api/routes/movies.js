const db = require('../db/db')
const express = require('express');

const router = express(); // replacement for app i guees from last examples.

router.get('/', async (req,res) => {
  try{
    const result = await db('favorites').select('*');
    return res.status(200).json(result);
  }catch(err){
    res.status(500).send({message: err})
  }
});

module.exports = router;