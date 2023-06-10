const request = require('request')
const forecast = require('./utils/forecast')

const address = process.argv[2];

// console.log(process.argv)


forecast(address,(error,data)=>{
    if(error)
    {
        return console.log(error);
    }
    console.log(data);
})
