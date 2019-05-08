$(document).ready(function() {
             

setInterval(function(){
    var dt = new Date();
    //alert(time);

    var sec_deg = dt.getSeconds() * 6;

    $('.clock .second-hand').css({'transform':'rotate(' + sec_deg + 'deg)'});
    
      var div = document.getElementById("img1");
      var rect = div.getBoundingClientRect();
      x = rect.left;
      y = rect.top;
      w = rect.width;
      h = rect.height;  
      Rx = x + 150;
      Ry = y + 150;
      ry = 525;
      rx = parseInt(objImage.style.left) + 25;
      if ( Ry > 360 & rx >100 & rx < 280){
           window.location = "../gameover.html"; 
      }

     var div = document.getElementById("img2");
      var rect = div.getBoundingClientRect();
      x = rect.left;
      y = rect.top;
      w = rect.width;
      h = rect.height;  
      Rx = x + 150;
      Ry = y + 150; 
      ry = 525;
      rx = parseInt(objImage.style.left) + 25;
      if ( Ry > 284 & rx >355 & rx < 70){
           window.location = "../gameover.html"; 
      }
  
}, 1000);

});



var objImage= null;
			function init(){
				objImage=document.getElementById("char");				
				objImage.style.position='relative';
				objImage.style.left='0px';
				objImage.style.top='500px';
			}
			function getKeyAndMove(e){				
				var key_code=e.which||e.keyCode;
				switch(key_code){
					case 37: //left arrow key
						moveLeft();
						break;
				
					case 39: //right arrow key
						moveRight();
						break;
									
				}
                
                 var div = document.getElementById("char");

  rx = parseInt(objImage.style.left) + 25;

    
 
                if (rx < 10) {
                  document.getElementById("char").style.left = 0;
                }
                var width = document.body.clientWidth;
                if(rx > width) {
                     window.location = "../won.html";
            
                

			}
                  
			}
			function moveLeft(){
				objImage.style.left=parseInt(objImage.style.left)-20 +'px';
			}
			
			function moveRight(){
				objImage.style.left=parseInt(objImage.style.left)+20 +'px';
			}
			
			window.onload=init;
            

function myFunction() {
  var div = document.getElementById("img1");
  var rect = div.getBoundingClientRect();
  x = rect.left;
  y = rect.top;
  w = rect.width;
  h = rect.height;  
  Rx = x + 150;
  Ry = y + 150;
  ry = 525;
  rx = parseInt(objImage.style.left) + 25;
  if ( Ry > 100 ){
      alert ("Left: " + Rx + ", Top: " + Ry + ", Width: " + w + ", Height: " + h);
  }
  

}
