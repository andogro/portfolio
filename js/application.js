$(document).ready(function() {

function removePic() {
     $('.picture > img').remove();
}

$('.pic1').on('click', function() {
removePic();
$('.picture').append('<img src ="images/andy-1.jpg" alt= "Andy Gross">');
});

$('.pic2').on('click', function() {
removePic();
$('.picture').append('<img src ="images/andy_fam.jpg" alt="Family">');
});

$('.pic3').on('click', function() {
removePic();
$('.picture').append('<img src ="images/half-life.jpg" alt ="Half Life">');
});

});

