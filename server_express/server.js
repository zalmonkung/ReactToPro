const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const mysql = require('mysql');

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({type:'*/*'}))

app.get('/', (req, res) => {
    getdata();
    res.send('Root Page');
    
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
function getdata(){
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'react_db'
    });
    connection.connect();
  
    connection.query('SELECT * from table_1', function(error,result,fields){
      if(error) throw error;
      console.log('The solution is: ', result)
    });
    connection.end();
  }