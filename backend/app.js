const express = require('express')

const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`JobsNet server listening at http://+:${port}`)
})

app.get('/', (req, res) => {
    res.send('JobsNet server is running')
})

app.post('/curriculos', (req, res) => {
    try {
        if (!req.body.nome) {
            res.status(503)
        }
    }
    catch {
        res.status(500).send('Falha ocorrida. Por favor, tente novamente.')
    }
    
})