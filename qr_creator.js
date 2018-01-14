function createQRCode(fromId = 0, cost = 0 , eventID = 'NA', TTL= 'NA'){
  if (fromId == 0){
    callback(new Error('No From ID has been specified...'))
    //error, no fromID specified
  }
  if (cost < 0){
    callback(new Error('Negative cost has been specified...'))
    //error, cost is negative
  }
  if (eventID == 'NA'){
    callback(new Error('No eventID has been specified...'))
    //error, no eventID
  }
  if (TTL == 'NA'){
    callback(new Error("No TTL has been specified..."))
    //error, no TTL
  }

  var obj = '{"fromID" : \"'+fromId+'\",'
       +'"cost"  : \"'+cost+'\",'
       +'"eventID" : \"'+eventID+'\",'
       +'"TTL : \"'+TTL+'\"}';
  url="https://api.qrserver.com/v1/create-qr-code/?size=150x150"+obj
  var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  var anHttpRequest = new XMLHttpRequest();
  anHttpRequest.onreadystatechange = function() { 
    if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
      callback(anHttpRequest.responseText);
  }
  anHttpRequest.open( "GET", url, true );            
  anHttpRequest.send( null );
}