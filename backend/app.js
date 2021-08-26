const express = require('express');
const db = require('./db');

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

const http = require('http')
const app = express()
const port = 3000;

http.createServer(app).listen(port)
console.log(`JobsNet server listening at http://+:${port}`);

app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.post('/api/candidatos', (req, res) => {
    /* #swagger.tags = ['Candidatos']
    #swagger.description = 'Endpoint para adicionar um candidato.' */

    /* #swagger.parameters['newUser'] = {
           in: 'body',
           description: 'Informações do candidato.',
           required: true,
           type: 'object'
    } */

    try {
        db.insert(req.body);
        return res.status(201).send('Cadastro realizado com sucesso')
    }
    catch (e) {
        console.log(e)
        return res.status(500).send('Falha ocorrida. Por favor, tente novamente.');
    }
});