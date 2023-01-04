const Toys = require('../models/toys')

const toysRoutes = (app) => {

    app.get('/toys', async (req,res) => {
        const toys = await Toys.find({})
        res.json({status:200, toys:toys})
    })
    
    app.get('/toys/:id', async (req,res)=> {
            const id = req.params.id
            const toys = await Toys.find({_id: id})
            res.json({status:200,toys:toys})
        
    })
    
    app.post('/toys/add', async (req,res) => {
        const data = {
            name : req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            creationDate : new Date()
        }
    
        const toy = new Toys(data)
        const result = await toy.save()
    
        res.json({status:200,result:result})
    
    })
    
    app.put('/toys/update/:id', async(req,res)=>{
        const id = req.params.id
        const data = {
            name : req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category
        }
        const result = await Toys.updateOne({_id: id}, data)
        res.json({status: 200, result: result})
    
    })
    
    app.delete('/toys/delete/:id', async(req,res)=>{
        const id = req.params.id;
        const result = await Toys.deleteOne({_id: id});
        res.json({status: 200, result: result})
    })
    
    app.get('/categories/:category/toys', async(req,res)=>{
        const category = req.params.category
        const result = await Toys.find({category:category})
        res.json({status: 200, result: result})
    })    
}

module.exports = toysRoutes