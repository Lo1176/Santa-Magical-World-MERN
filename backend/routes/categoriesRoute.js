const Categories = require('../models/categories')

const categoriesRoute = (app) => {
   
    app.get('/categories', async (req,res)=> {
        const categories = await Categories.find({}) // .find() méthode moongoose qui retourne une promesse
        res.json({status:200,categories:categories})
    })
    
    app.get('/categories/:id', (req,res)=> {
        const id = req.params.id
        
        Categories.find({_id: id})
        .then((category)=>{
            res.json({status:200,category:category})
        })
        .catch((err)=>{
            res.json({status:500, err}) //erreur 404, quand le serveur n'a pas trouvé
        })
    })
    
    app.post('/categories/add', async (req,res) => {
        const data = {
            name : req.body.name,
            creationDate : new Date()
        }
    
        const categorie = new Categories(data)
        const result = await categorie.save()
    
        res.json({status:200,result:result})
    
    })
    
    app.put('/categories/update/:id', async(req,res)=>{
        const id = req.params.id
        const data = {
            name : req.body.name
        }
        const result = await Categories.updateOne({_id: id}, data)
        res.json({status: 200, result: result})
    
    })
    
    app.delete('/categories/delete/:id', async(req,res)=>{
        const id = req.params.id;
        const result = await Categories.deleteOne({_id: id});
        res.json({status: 200, result: result})
    })
    
}

module.exports = categoriesRoute