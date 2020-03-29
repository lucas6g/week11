const Ong = require('../models/ongsScema')
const  generateUniqueID = require('../utils/genereteUnitId')

module.exports = {

    async listarOngs(req,res){

      const ongsArray =  await Ong.findAll()
      
      return res.json(ongsArray)
    },



    async cadastroOng(req,res){
        
            const {name,email,whatsapp,city,uf} = req.body
            
            //gera um id para cada ong
            const id = generateUniqueID()
            
             await Ong.create({
                id,
                name,
                email,
                whatsapp,
                city,
                uf
            })
            
        
           
            //id funcina como um cpf para se conectar na app
            return res.json({id})

    },

    

    
}
