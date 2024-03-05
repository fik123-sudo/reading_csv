const express = require('express');
const app = express();
const PORT = 3000;
freinds = {
    id: 34,
    name:'fikereyesus',
    code_number : 453763
}
app.use((req,res,next)=>{
    const start = Date.now();
    console.log(`${req.method,req.url}`);
    next();
    const delta = Date.now() - start;
});
app.use(express.json());
app.post('/freinds',(req,res)=>{
    const newFreind = {
        name: req.body.name
        
    }

});
app.get('/',(req,res)=>{
    res.send('hello port 303482');
});
app.get('/freinds',(req,res)=>{
    res.json(freinds);
});
app.get('/freinds/:freindsid',(req,res)=>{
    const freindid = number(req.params.freindsis())
   const freind = freinds[freindid];
   if(freind){
    res.status(200).json(freind);
   }else{
    res.status(404).json({
        error: "freinds does not exist"
    });
   }
app.listen(PORT,()=>{
    console.log(`the app is running on  port ${PORT}`);
});
});