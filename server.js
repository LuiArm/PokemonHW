require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;

//middleware 
const logger = require('morgan')
app.use(logger('dev'))

app.use(express.urlencoded({extended:false}))
app.use(express.json());



app.get('/', (req, res) => {
    res.json({
        status: 200,
        msg: 'hitting the default route'
    })
})

const pokemonsController = require('./controllers/pokemons')
app.use('/pokemons', pokemonsController)

app.listen(PORT, () => {
    console.log(`listening in on port ${PORT}`)
})