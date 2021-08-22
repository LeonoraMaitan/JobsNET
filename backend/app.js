const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`Example app listening at http://+:${port}`)
})

app.get('/test', (req, res) => {
    res.send('Hello World!')
})