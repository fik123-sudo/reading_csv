const http = require('http');
const PORT = 3000;
const server = http.createServer((req,res)=>{

    const items = req.url.split('/');

    if( items === '/freinds'){
        res.writeHead(200,{
            'content-type':'application/json',
        });
        res.end(JSON.stringify({
            id:4574,
            name: 'fikereyesus',
        }));
    }else if(req.url === '/messages'){
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>this is messagnig server</li>');
        res.write('</ul>');
        res.write('</body >');
        res.write('</html>');
        res.statusCode(404);
        res.end();

    }
    });

    
    
    
server.listen(PORT,()=>{
    console.log(`server is listnning on port ${PORT}`)
});
setTimeout(()=>{
    console.log("this is using settimeout function");
},2000)

