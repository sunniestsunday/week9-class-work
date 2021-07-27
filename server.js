const express = require('express')
const app = express()
const port = 3000
const userRoute = require('./routes/userRoutes');// to import the user route
app. use('/api/user', userRoute) //middleware to define t5he user router

const router = express.Router();

app.use(express.json())

app.get('/', (req, res) => {
  res.send('welcome to my api')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})