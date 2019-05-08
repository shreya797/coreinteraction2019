$(document).ready(function() {
             

    setInterval(function(){
        var dt = new Date();
        //alert(time);

        var sec_deg = dt.getSeconds() * 6;

        $('.clock .second-hand').css({'transform':'rotate(' + sec_deg + 'deg)'});



    }, 1000);




});



var objImage= null;
function init(){
    objImage=document.getElementById("char");				
    objImage.style.position='relative';
    objImage.style.left='800px';
    objImage.style.top='50px';
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
}
function moveLeft(){
    objImage.style.left=parseInt(objImage.style.left)-80 +'px';
}

function moveRight(){
    objImage.style.left=parseInt(objImage.style.left)+80 +'px';
}

window.onload=init;


//var images = document.getElementsByClassName(".imgs");
//var height = document.innerHeight;
//
////                alert('Done');
//    if (images > height) {
//       window.location = "cILabGame/page3/index.html"; 
//}
//    

function finish() {
     window.location = "../page3/index.html";
}

setTimeout(finish, 5000);
  

          
            
           