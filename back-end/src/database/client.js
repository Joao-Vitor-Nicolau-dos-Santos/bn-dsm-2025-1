import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient({
    //habilita a exibição dos comandos db no console
    log: [{
        emit: 'event',
        level: 'query'
    }]
})

prisma.$on('query', event => {
    // Personaliza a forma como a instrução do db será exibida no console
    console.log('-'.repeat(40))
    console.log(event.query)
    if(event.params) console.log('PARAMS: ', event.params)
})

export default prisma