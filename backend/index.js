// const express = require('express');
import express from 'express'
import cors from 'cors'
const app = express()
const port = 8080;

app.use(cors())

app.get('/', (req, res) => {
  res.json('Hello (from server cors)');
});

app.listen(port, () => console.log(`Listening on port ${port}`));
