$(document).ready(function(){

  $('#more').click(function(){
    $('#landing').fadeOut({
      duration: 1500,
      easings: "easeOutExpo"
    });

    var newY = $('#fullpage').height()/2 - 32 - 36;
    var newX = $('#fullpage').width()/2 - 148 - 60;

    var fadeAway = function(){
      $('#invis').fadeOut({
        duration: 1000,
        easings: "easeOutExpo"
      });
      $('#circle').fadeOut({
        duration: 1000
      });
      $("#fullpage").animate({
        backgroundColor: "#BA5C12",
      }, 1000);
      $('#everything').fadeIn({
        duration: 1000
      });
      $("#off-black").animate({
        color: "black",
      }, 1000);
    };

    var after = function(){
      $("#invis").animate({
        backgroundColor: "#87e1ff",
      }, 1200);
      $(".name").animate({
        color: "#ffa8d7",
      },{
        duration: 1200,
        complete: fadeAway
      });
      $('#circle').fadeIn();
    };

    $("#invis").animate({
        top: newY,
        left: newX,
        height: '64px',
        width: '296px',
      },{
        duration: 1000,
        easings: "easeInSine",
        complete: after
    });

    $(".name").animate({
        color: "#fffb96"
      },{
        duration: 1000,
        easings: "easeInSine",
    });
    

  });

});
