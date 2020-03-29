
const incidentsScema = require('../models/incidentsScema')
const ongScema = require('../models/ongsScema')


module.exports = {
    async cadastroIncident(req,res){
        //headers significa cabecalho da requisicao a info de qual ong esta logada no momento fica nos headers
       //dados da autenticacao 
    
        const {title,description,value} = req.body

        const  ong_id = req.headers.authorization
       


        const result =  await incidentsScema.create({

            title,
            description,
            value,
            ong_id

        })
        const id = result.id 
        

        
            //id funcina como um cpf para se conectar na app
            return res.json({id})
    },


    async listarCasos(req,res){


        const {count} = await incidentsScema.findAndCountAll()

        // const incidentsArray =  await incidentsScema.findAll({limit:5})

        const incidentsOngs = await incidentsScema.findAll({include: [ongScema],limit:5})
        
        const array = incidentsOngs.filter(function(obj){

            return obj.ong_id == obj.ong.id
        })
       
      
        

        res.header('X-Total-Count',count)

        return res.json(array)
      },
    async listarCasosMobile(req,res){


        const {count} = await incidentsScema.findAndCountAll()

        // const incidentsArray =  await incidentsScema.findAll({limit:5})

        const incidentsOngs = await incidentsScema.findAll({include: [ongScema]})
     
        res.header('X-Total-Count',count)

        return res.json(incidentsOngs)
      },



      async deletarCasos(req,res){
       
            await incidentsScema.destroy({ 
              where: { id: req.params.id}}
              
              )

        return res.status(204).send()

      }
}

