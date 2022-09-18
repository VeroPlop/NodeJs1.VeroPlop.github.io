//creación de un servidor basico utilizando express

//Importando modulos
import express from 'express'
import{dirname, join} from 'path'
import { fileURLToPath } from 'url'

import indexRoutes from './routes/index.js'


//Creación de aplicación para la utilización del module express
const app = express()

//Forma dinamica para obtener la ruta 
const __dirname = dirname(fileURLToPath(import.meta.url))


//Establecemos una nueva forma para indicar que configuración queremos utilizar
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(indexRoutes)

app.use(express.static(join(__dirname, 'public')))




app.listen(process.env.PORT || 3000)
console.log('Server is listening on port',process.env.PORT || 3000)