//todo codigo parte desse arquivo o inicio da aplicacao
const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const {errors} = require('celebrate')
const app = express()

//cors permite qual endereco pode acessar minha aplicacao

app.use(cors())

//dizer que a comunicao nas requisicoes serao no formato json
app.use(express.json())

//para que minha aplicacao use as rotas
app.use(routes)

app.use(errors())


app.listen(3333)


    
