const rest = require('./rest.js')
const xmlToJson = require('xml-to-json-stream');

const phone = '51954559751'
const url = '<?xml version="1.0" encoding="UTF-8" standalone="no" ?><svc_init><hdr><client><id>seraticdev</id><pwd>demopass</pwd></client></hdr><slir res_type="SYNC"><msids><msid>' + encodeURIComponent(phone) + '</msid></msids><loc_type type="CURRENT"/></slir></svc_init>'


rest(url, (error, rta, statusCode) => {
    if (error) {//return stop function execution
        return console.log(error)
    }        
    
    const borrar = '<?xml version=\"1.0\" ?>\n<!DOCTYPE svc_result SYSTEM \"MLP_SVC_RESULT_330.DTD\">'   
    var xml = (rta.respuesta.replace(String.fromCharCode(92),'')).replace(borrar,'')
    
    // console.log("XML: "+ xml2)
   
    const parser = xmlToJson({attributeMode:false});
    parser.xmlToJson(xml, (err,json)=>{
        if(err) {
           console.log('error Parsing: ' + err)
        }
        // var response = JSON.stringify(json.svc_result.slia)
        var response = JSON.stringify(json.svc_result.slia.result)
    console.log('xmlToJson: ' + response)
    console.log('statusCode: ' + statusCode)
    })
    // TO DO 
    
})



