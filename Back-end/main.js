const express = require('express')
const route = require('./routes')
const app = express()

const {connection}  = require("./database");
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)



connection.query('select * from test', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
});