import express from 'express';

const app = express()

app.get('/ads', (req, res) => {
    return res.json({ 
        "message": "hello world",
        "testreload": "Test"
    })
})

app.listen(3333)