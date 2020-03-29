//rota de login criamos com Session controler
//login é uma sesao quando faço login estou iniciando uma secao quando faço log 
const ongScema = require('../models/ongsScema')

module.exports ={
    async create(req,res){
        const {id} = req.body
        
        const ong = await ongScema.findOne({
            where: { id: id}})

        if(!ong){
            return res.status(400).send({error:'No ong whit this id'})
        }
        
        return res.json(ong.name)


    }
}