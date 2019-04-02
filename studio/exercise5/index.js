//check if document is ready
$(document).ready(function(){
 
    var width = $(document).width() - 300;
    var height = $(document).height() - 300;
    var colors = ["#003B46","66A5AD"]
    
//random color and position every 2 second
    setInterval(function(){
    var positionLeft = Math.random() * width + "px";
    var positionTop = Math.random() * height + "px";
         
    var randomNumber = Math.random()*colors.length;
    var randomColor = colors[Math.floor(randomNumber)];
    
    var grow = Math.random()*200;
    var zoom = grow + "px";
   
    var rad = Math.random()*500;
    var randomRadius = Math.floor(rad);
        
    $('.circle').css("left", positionLeft)
    $('.circle').css("top", positionTop)
    $('div:nth-child(even)').css("background-color", randomColor)
    $('.circle').css("width", zoom)
     $('.circle').css("border-radius", randomRadius)
    
    },200)
 
    
 
  
  
//end document ready function
})

 setTimeout(function(){
     $(".circle").fadeOut("slow", function () {
    $(".circle").remove();
  }); }, 40500);




