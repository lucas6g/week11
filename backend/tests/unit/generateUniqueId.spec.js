const generateUniqueId = require('../../src/utils/genereteUnitId')

describe('Gera um id unico ',()=>{
    it('deve gerar um id unico',()=>{
       const id = generateUniqueId()

       expect(id).toHaveLength(8)
    })
})