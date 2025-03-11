// const http = require('http')
// const fs = require('fs')



// const server = http.createServer((req, res) => {
//     const read = fs.createReadStream('./static/index.html')
//     read.pipe(res)
// })

// server.listen(3000)
// console.log(`server on port ${3000}`)

const express = require('express')
const morgan = require('morgan')
const app = express() //nuestro servidor

//EJEMPLOS DE: METODOS HTTP EN EXPRESS - HTTP RESPONSE - REQUEST(BODY Y PARAMS) - QUERIES - METODO ALL -
//METODOS HTTP EN EXPRESS (GET, POST PUT, PATCH, DELETE)

// app.get('/products', (req, res) => {
//     // -- ACCIONES QUE PUEDO REALIZAR ANTES DE MOSTRAR O RESPONDER --
//     // validate data
//     // query a database
//     // process data
//     res.send('lista de productos')
// })

// app.post('/products', (req, res) => {
//     res.send('creando productos')
// })

// //put actualiza el producto por completo
// app.put('/products', (req, res) => {
//     res.send('actualizacion producto')
// })
// //patch actualiza una parte del producto
// app.patch('/products', (req, res) => {
//     res.send('actualizacion una parte del producto')
// })

// app.delete('/products', (req, res) => {
//     res.send('eliminadno un producto')
// })


// //HTTP RESPONSE (TODAS LAS RESPUESTAS QUE SE PUEDE DAR EL SERVIDOR A UN CLIENTE CON UN RES. AL CONSULTAR UNA RUTA)
// //MENSAJE
// app.get('/', (req, res) => {
//     res.send('hola')
// })
// //ARCHIVO
// app.get('/miarchivo', (req, res) => {
//     res.sendFile('./images.png', {
//         root: __dirname //nos dice la ruta inicial de donde se cuentra nuestro archivo
//     })
// })
// //OBJETO JSON
// app.get('/user', (req, res) => {
//     res.json({
//         "name": "carola",
//         "lastname": "codes"
//     })
// })
// //UN ESTADO DEL SERVIDOR
// app.get('/isAlive', (req, res) => {
//     res.sendStatus(204)
// })

//EJEMPLOS DE REQUEST BODY (El cliente le envia algo al servidor)

//ESTO ES PARA QUE EXPRESS ENTIENDA LO QUE MANDA EL CLIENTE
// app.use(express.text())
// app.use(express.json())
// app.use(express.urlencoded({extended: false})) //para que express entienda los datos que vienen de un formulario

// app.post('/user', (req, res) => {
//     console.log(req.body)
//     res.send('nuevo usuario creado')
// })

// app.all('/info', (req, res) => {
//     res.send('server info')
// })

// //REQUEST PARAMS
// app.get('/hello/:user', (req, res) => {
//     console.log(typeof req.params.user)
//     res.send(`hola ${req.params.user.toUpperCase()}`)
// })

// app.get('/add/:x/:y', (req, res) => {
//     const {x, y} = req.params
//     const resul = parseInt(x) + parseInt(y)
//     res.send(`Resultado: ${resul}`)
// })

// app.get('/users/:username/photo', (req, res) => {
//     console.log
//     if(req.params.username === "carola"){
//         return res.sendFile('./images.png', {
//             root: __dirname
//         })
//     }
//     res.send('el usuario no tiene acceso')
// })

// app.get('/name/:nombre/age/:age', (req, res) => {
//     res.send(`el usuario ${req.params.nombre} tiene ${req.params.age} años`)
// })

// //QUERIES
// app.get('/search', (req, res) => {
//     if(req.query.q === 'javascript books') {
//         res.send('lista de libros de js')
//     }else{
//         res.send('pagina normal')
//     }
// })

/**
 * --------------------------------------------------------------------------------------------
 */
// ----------------------------- MIDDLEWARES EN EXPRESS ---------------------------------------
//MIDDLEWARES es una funcion que se encuentra entre el navegador y la ruta, es decir que cada que se visite una ruta se tendra que pasar primero por este middleware que es la funcion app.use

/** MIDDLEWARES
 *app.use((req, res, next) => {
    console.log('paso por aqui')
    next()
})

app.get('/profile', (req, res) => {
    res.send('profile page')
})

app.get('/about', (req, res) => {
    res.send('about page')
})

app.use((req, res, next) => {
    if(req.query.login === "carola@gmail.com") {
        next()
    }else{
        res.send('no autorizado')
    }
})

app.get('/dashboard', (req, res) => {
    res.send('dashboard page')
})
 */

/** MIDDLEWARES INTERCEPTOR
 * Puedo usar un middleware de otro desarrollador instalando paquetes etc
    - Instalamos morgan desde la pagina de NPM

app.use(morgan('dev')) //este middleware tan solo muestra mensajes por consola, como el tipo de protocolo http, el estado, nombre de la url etc.

app.get('/profile', (req, res) => {
    res.send('profile page')
})

app.get('/about', (req, res) => {
    res.send('about page')
})

app.use((req, res, next) => {
    if(req.query.login === "carola@gmail.com") {
        next()
    }else{
        res.send('no autorizado')
    }
})

app.get('/dashboard', (req, res) => {
    res.send('dashboard page')
})

*/



app.listen(3000)
console.log(`server on port ${3000}`)