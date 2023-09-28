
const express = require('express') 
const {readFile,readFileSync} = require('fs');
const app = express();



app.get('/',(request,response)=>{
    response.sendFile('index.htm');

});

app.listen(process.env.PORT || 3000,()=>
console.log('App available')
);