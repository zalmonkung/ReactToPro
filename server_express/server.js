const express = require('express');
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({type:'*/*'}))

app.get('/', (req, res) => {
    res.send('Root Page')
})

app.get('/member', (req, res) => {
    res.send('Member Page')
})

app.get('/order', (req, res) => {
    res.send('Order Page')
})

app.get('/order/:orderid',(req,res)=>{
    res.send('Order Page Id=' + req.params.orderid)
})

app.post('/order',(req,res) =>{
    console.log(req.body)
    res.json({status:'ok'})
})

app.listen(8000, () => {
    console.log('read on http://localhost:8000')
})