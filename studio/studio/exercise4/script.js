$(document).ready(function() {

setInterval(function(){
    var dt = new Date();
    //alert(time);

    var sec_deg = dt.getSeconds() * 6;
    var min_deg = dt.getMinutes() * 6;
    var hr_deg = dt.getHours() * 30;

    $('.clock .second-hand').css({'transform':'rotate(' + sec_deg + 'deg)'});

    $('.clock .minute-hand').css({'transform':'rotate(' + min_deg + 'deg)'});

    $('.clock .hour-hand').css({'transform':'rotate(' + hr_deg + 'deg)'});

}, 1000);

});