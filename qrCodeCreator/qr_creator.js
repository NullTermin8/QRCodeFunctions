
function createQRCode(fromID, cost , eventID, TTL){
  fromID = fromID.trim()
  if (isNaN(fromID) || fromID == '' || fromID == 'fromID'){
    document.getElementById('errorMessage').innerHTML = 'No proper FromID has been specified...';
    return
    //error, no fromID specified
  }

  cost = cost.trim()
  if (isNaN(cost) || cost == '' || cost == 'cost' || cost < 0){
    document.getElementById('errorMessage').innerHTML = 'No proper cost has been specified...';
    return
    //error, no fromID specified
  }
  eventID = eventID.trim()
  console.log("eventID-"+eventID+"-")
  if (eventID == 'eventID' || eventID == ''){
    document.getElementById('errorMessage').innerHTML = 'No eventID has been specified...';
    return
    //error, no eventID
  }

  TTL = TTL.trim()
  if (isNaN(TTL) || TTL == '' || TTL == 'TTL' || TTL < 0){
    document.getElementById('errorMessage').innerHTML = "No proper TTL has been specified";
    return
    //error, no TTL
  }
  console.log("hello")
  var obj = '\{\"fromID\" : \"'+fromID+'\",'
       +'\"cost\"  : \"'+cost+'\",'
       +'\"eventID\" : \"'+eventID+'\",'
       +'\"TTL : \"'+TTL+'\"\}';
  url="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+obj
  document.getElementById('myImage').src=url;
}