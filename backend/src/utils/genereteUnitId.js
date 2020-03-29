const cripto = require('crypto')

//teste unitario testa uma coisa muito especifica
//sem banco de dados nenum side efect 
module.exports = function generateUniqueId(){
    return cripto.randomBytes(4).toString('HEX')
}