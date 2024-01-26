import express from "express";

const app = express()

app.get('/', (req, res) => {
    res.send('hola mundo 3')
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})