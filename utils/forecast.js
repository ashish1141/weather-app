const request = require('request')

const forecast = (city,callback) =>{
    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        qs: {q: city},
        headers: {
          'X-RapidAPI-Key': '6daffe4949msh1e20937ad78f2abp1390e9jsn848ee3f90d04',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        },
        json : true 
      }

    request(options,(error,response) => {
        if(error){
            callback('unable to connect with weather service', undefined)
        }else if (response.body.error) {
            callback('unable to find location', undefined)     
        } else {
            callback(undefined, 
                'location is '+ response.body.location.name + '/' + response.body.location.region + '/' + response.body.location.country +'  '+ 'It is currently ' + response.body.current.temp_c + ' Degrees out. Visibility is ' + response.body.current.vis_km + '.')
        }
    })

}

module.exports = forecast


// "http://api.weatherstack.com/current?access_key=6c7648c0744887c21d99376dc761027f&query=" + city