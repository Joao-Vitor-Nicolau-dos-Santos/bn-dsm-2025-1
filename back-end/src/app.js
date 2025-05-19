import express, { json, urlencoded } from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

import indexRouter from './routes/index.js'
import usersRouter from './routes/users.js'

const app = express()

app.use(logger('dev'))
app.use(json())
app.use(urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', indexRouter)
app.use('/users', usersRouter)

// **********************ROTAS********************** \\
import categoriasRouter from './routes/categoria.js'
app.use('/categorias', categoriasRouter)

import fornecedoresRouter from './routes/fornecedor.js'
app.use('/fornecedor', fornecedoresRouter)

import produtosRouter from './routes/produto.js'
app.use('/produto', produtosRouter)

import clienteRouter from './routes/cliente.js'
app.use('/cliente', clienteRouter)

import pedidosRouter from './routes/pedidos.js'
app.use('/pedidos', pedidosRouter)

export default app
