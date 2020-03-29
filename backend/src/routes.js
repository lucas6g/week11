//armazena as rotas da aplicação
const express = require('express')
const routes = express.Router()
const ongsController = require('./controller/ongsController')
const incidentsController = require('./controller/incidentController')
const profileController = require('./controller/profileControler')
const sessionController = require('./controller/sessionControler')

//biblioteca de validacao nas rotas dos dados que vem do fontend
const {celebrate,Segments,Joi} = require('celebrate')

//colocar validação nas rotas de cadastro e auteração



//rota de login 
routes.post('/session',sessionController.create)


//rota de listar ongs do banco 
routes.get('/ongs',ongsController.listarOngs)

//rota de cadastro de uma ong
routes.post('/ongs',celebrate({
    [Segments.BODY]:Joi.object().keys({
        name:Joi.string().required(),
        email:Joi.string().required().email(),
        whatsapp:Joi.number().required().min(10).max(11),
        city:Joi.string().required(),
        uf:Joi.string().required().length(2)

    })
}),ongsController.cadastroOng)

//rota de cadastro de um insidente
routes.post('/insidents',incidentsController.cadastroIncident)

//rota listar casos
routes.get('/insidents',incidentsController.listarCasos)
//rota listar casos
routes.get('/insidents/mobile',incidentsController.listarCasosMobile)



// rota deleta um caso dentro do banco de dados baseado no id
routes.delete('/insidents/:id',celebrate({
    [Segments.PARAMS]:Joi.object().keys({
        id:Joi.number().required(),
    })
}),incidentsController.deletarCasos)

//rota que busca casos por id da ong cadastrada
routes.get('/profile',celebrate({
    [Segments.HEADERS]:Joi.object({
        authorization:Joi.string().required()
    }).unknown()
}),profileController.index)

module.exports = routes