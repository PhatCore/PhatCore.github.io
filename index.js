 $(function(){
    positionblockEdu = $('#blockEdu').offset().top;
    positionbblockPortfolio = $('#blockPortfolio').offset().top;
    positionblockContact = $('#blockContact').offset().top;

    $(".effectBtn,.exp").click(function () { 
        $('body,html').animate({scrollTop:positionblockEdu-80},600)
        return false;
    })  
    $(".port").click(function () { 
        $('body,html').animate({scrollTop:positionbblockPortfolio-180},600)
        return false;
    })  
    $(".linkCon").click(function () { 
      $('body,html').animate({scrollTop:positionblockContact+200},600)
      return false;
  }) 
}) 

var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer'
  });
  // layout Masonry after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.masonry();
  });  
 