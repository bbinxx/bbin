
const express = require('express') 
const app = express();



app.get('/',(request,response)=>{
    response.sendFile(__dirname + '/index.htm');

});

app.listen(process.env.PORT || 3000,()=>
console.log('App available')
);