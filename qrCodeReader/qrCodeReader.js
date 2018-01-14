/*
Created for NWHacks 2018
Adapted from:
https://www.sitepoint.com/create-qr-code-reader-mobile-website/ 
*/

function openQRCamera(node)
{
  	var reader = new FileReader();
 	reader.onload = function()
	{
 		node.value = "";
    	qrcode.callback = function(res) 
		{
	      	if(res instanceof Error) 
			{
				alert("No QR code found. Please make sure the QR code is within the camera's frame and try again.");
	      	} 
			else 
			{
				node.parentNode.previousElementSibling.value = res;
	      	}
    	};
    	qrcode.decode(reader.result);
  	};
	console.log(node.files[0]);
  	reader.readAsDataURL(node.files[0]);
}

function showQRIntro() {
  	return confirm("Use your camera to take a picture of a QR code.");
}
