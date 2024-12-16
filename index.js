const express = require('express');

const app = express();

app.get('/test', (req, res) => {
    res.send('Hi')
})

app.listen(8080, () => {
    console.log(`App is running at 8080 `)
})