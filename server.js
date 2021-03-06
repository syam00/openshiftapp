const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

app.listen(server_ip_address, server_port, function(){
  console.log("Listening on " + server_ip_address + ", server_port " + server_port)
});