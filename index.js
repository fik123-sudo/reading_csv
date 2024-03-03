const {parse} = require('csv-parse');
const fs = require('fs');

const result = [];
function isHabitable(planet){
    return planet[isHabitable] = 'CONFIRMED';
}

fs.createReadStream('kepler_data.csv')
.pipe(parse())
.on('data',(data)=>{
    if(isHabitable(data)){

    }
    result.push(data);

})
.on('error',(err)=>{
    console.log(err);
})
.on('end',()=>{
    console.log(result);
    console.log('done');
});