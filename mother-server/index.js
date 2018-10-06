const express = require('express');
const app = express();
const fs = require('file-system');
const bodyParser = require('body-parser');
const {spawn, exec} = require('child_process');
const cors = require('cors');
const axios = require('axios');

//Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.text());
app.use(cors());

let PORT = process.env.PORT || 3069; 

const image = '9c27d1bad198'
app.post('/', (req, res)=>{

    let portAss = Math.floor(Math.random()*5000);
    let code = req.body;
    let dockerPort = 3000+portAss;
    console.log('docker port is ', dockerPort);
    exec(`docker run -p ${dockerPort.toString()}:3000 ${image}`, (err, stdout)=>{
        console.log('cb invoked');
        if(err) {
          console.log('error is', err);
        } else {
          console.log('standard output is...', stdout);
        }

    let codedOutput = ""
      });
      setTimeout(()=>{
        console.log('sending request');
        axios.post(`http://127.0.0.1:6192`, code, {headers: {
            'Content-Type': 'text/plain'
        }}).then((response)=>{
            
             console.log(response);
            res.send(JSON.stringify(response.data));
        }).catch((err)=>{res.send(err)})}, 2000);
    
      ;
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}!`);
  });