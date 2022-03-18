$(function(){
  $(".nav-link").on('click', function () {
        $('.navbar-collapse').removeClass('show');
    });

    $('#about-more').on('click', function () {
        var text=$('#about-more').text();
        if(text === "Развернуть"){
            $(this).html('Свернуть');
        } else{
            $(this).text('Развернуть');
        }
    });
    $(".navbar-toggler").on('click',function () {
      if ($('.navbar-collapse').hasClass('show'))
        $('#navbar-main').css("background-color", 'transparent'); 
      else
        $('#navbar-main').css("background-color", '#d5a353');       
      
    })
    $('#price-more').on('click', function () {
        var text=$('#price-more').text();
        if(text === "Еще"){
            $(this).html('Свернуть');
        } else{
            $(this).text('Еще');
        }
    });
  $(window).on('load', function () {
    $('.services-slider').slick({
        responsive: [
        {
          breakpoint: 9999,
          settings: "unslick"

        },
        {
          breakpoint: 980,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              dots: true,
              setPosition: true
          }
        }
      ]
    });
  });
  $(window).on('load', function () {
    $('.team-slider').slick({
    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick"
      },
      {
        breakpoint: 980,
        settings: {
            slidesToShow: 1,
            variableWidth: true,
            slidesToScroll: 1,
            arrows: false,
            dots: true
          }
        }
      ]
    });
  });  
    $(".lazy").Lazy();
  });