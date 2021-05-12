const express = require('express')
// instantiate a new Router instance
const router = express.Router()
// import the fruits models
const pokemons = require('../models/pokemons')

router.get('/', (req, res) => {
    res.json({
        status:200,
        data: pokemons
    })
})

router.get('/:id', (req, res) => {
    res.json({
        status: 200,
        data: pokemons[req.params.id]
    })
})



router.post('/', (req, res) => {
	
	pokemons.push(req.body);
	res.json({
		status: 200,
		route: 'hitting the POST route',
		data: req.body,
	});
})

router.delete('/:id', (req, res) => {
  
    pokemons.splice(req.params.id, 1)
    res.json({
        status:200,
        route: 'hitting the DELETE route'
    })
})


router.put('/:id', (req, res) => {
    
    pokemons[req.params.id] = req.body
    res.json({
        status:200,
        route: 'hitting the PUT route'
    })
})

module.exports = router