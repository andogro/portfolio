$(document).ready(function() {

function removePic() {
     $('.top > img').remove();
}

$('.pic1').on('click', function() {
removePic();
$('.top').append('<img src ="images/andy-1.jpg" alt= "Andy Gross" class="picture">');
});

$('.pic2').on('click', function() {
removePic();
$('.top').append('<img src ="images/andy_fam.jpg" alt="Family" class="picture">');
});

$('.pic3').on('click', function() {
removePic();
$('.top').append('<img src ="images/half-life.jpg" alt ="Half Life" class="picture">');
});

$('.pic4').on('click', function() {
removePic();
$('.top').append('<img src ="images/boulder_1.jpg" alt ="Hiking in Boulder" class="picture">');
});

$('.pic5').on('click', function() {
removePic();
$('.top').append('<img src ="images/cooking.jpg" alt ="Cooking" class="picture">');
});

$('.pic6').on('click', function() {
removePic();
$('.top').append('<img src ="images/frisbee_golf.jpg" alt ="Frisbee Golf" class="picture">');
});

$('.pic7').on('click', function() {
removePic();
$('.top').append('<img src ="images/future.gif" alt ="Future" class="picture">');
});

$('.pic8').on('click', function() {
removePic();
$('.top').append('<img src ="images/future2.gif" alt ="Future" class="picture">');
});

$('.pic9').on('click', function() {
removePic();
$('.top').append('<img src ="images/future3.gif" alt ="Future" class="picture">');
});

});

