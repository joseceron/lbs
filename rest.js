const request = require('request');

const rest = (dataJSON, callback) => {

    request({
        method: 'POST',
        url: 'http://192.168.2.11:8020/GMLCSP/LocationQueryService',
        headers: {
          "Content-Type": 'application/xml',
          // Authorization: 'token',
        },
        body: dataJSON, 
        
    }, (error,  resp ) => {
       console.log(resp.statusCode)
       respuesta = resp.body
        if (error){
            callback('Unable to connect to location services!', undefined, undefined)
        } else {
            callback('', {
               respuesta
            },resp.statusCode)
        }

    })
}

module.exports = rest
