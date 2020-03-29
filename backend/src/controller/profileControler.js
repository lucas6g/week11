const incidentsScema = require('../models/incidentsScema')

module.exports = {
    async index(req,res){
        const ong_id = req.headers.authorization

        const insidents =  await incidentsScema.findAll({ 
            where: {ong_id: ong_id}})

            return res.json(insidents)
    }
}