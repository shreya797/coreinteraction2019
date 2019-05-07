$(document).ready(function(){
 
  
    


    var circles = document.querySelectorAll('.circle'); 
     console.log(circles);
      circles.forEach(function(circle, index) {
          setTimeout(function(){
              circle.style.opacity = "1"; 
          },500 + 300*index)
      });

})