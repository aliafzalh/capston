// const express = require('express');
import express from 'express'
import cors from 'cors'

import 'dotenv/config'

import connectDb from './db.js';
import Todo from './models/todo.js';

const app = express()
const port = process.env.PORT

app.use(cors())

app.get('/todos', async (req, res) => {
try {
   const todos = await Todo.find({})
   res.status(200).json(todos)
   res.json(todos);
} catch (error) {
  console.log(error)
  res.status(400).json(error)
}
  
});

app.listen(port, () => {console.log(`Listening on port ${port}`);connectDb()});
