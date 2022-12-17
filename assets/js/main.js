
$(document).ready(function(){
    $(".services-carousel").owlCarousel(
      {
        loop:true,
        rtl:true,
        dots:true,
        pading:40,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                dots:true
            },
            600:{
                items:3,
                dots:true
            },
            1000:{
                items:4,
                dots:true,
                loop:true
            }
        }
    }
    );
  });


  $num = $('.my-card').length;
  $even = $num / 2;
  $odd = ($num + 1) / 2;
  
  if ($num % 2 == 0) {
    $('.my-card:nth-child(' + $even + ')').addClass('active');
    $('.my-card:nth-child(' + $even + ')').prev().addClass('prev');
    $('.my-card:nth-child(' + $even + ')').next().addClass('next');
  } else {
    $('.my-card:nth-child(' + $odd + ')').addClass('active');
    $('.my-card:nth-child(' + $odd + ')').prev().addClass('prev');
    $('.my-card:nth-child(' + $odd + ')').next().addClass('next');
  }
  
  $('.my-card').click(function() {
    $slide = $('.active').width();
    console.log($('.active').position().left);
    
    if ($(this).hasClass('next')) {
      $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
    } else if ($(this).hasClass('prev')) {
      $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
    }
    
    $(this).removeClass('prev next');
    $(this).siblings().removeClass('prev active next');
    
    $(this).addClass('active');
    $(this).prev().addClass('prev');
    $(this).next().addClass('next');
  });


    $('.my-card').click(function () {
        $slide = $('.active').width();
        console.log($('.active').position().left);

        if ($(this).hasClass('next')) {
            $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
        } else if ($(this).hasClass('prev')) {
            $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
        }

        $(this).removeClass('prev next');
        $(this).siblings().removeClass('prev active next');

        $(this).addClass('active');
        $(this).prev().addClass('prev');
        $(this).next().addClass('next');
    });


// Keyboard nav
    $('html body').keydown(function (e) {
        if (e.keyCode == 37) { // left
            $('.active').next().trigger('click');
        } else if (e.keyCode == 39) { // right
            $('.active').prev().trigger('click');
        }
    });

    $("#next-project").click(function () {
        $('.active').next().trigger('click');
    });

    $("#prev-project").click(function () {
        $('.active').prev().trigger('click');
    });
 


    // start add-new.html/
    if(document.getElementById("imgInp")){
      document.getElementById("imgInp").onchange = evt => {
        const [file] = imgInp.files
        if (file) {
          blah.src = URL.createObjectURL(file)
        }
      }
    }
    


    $( function() {
      $( ".datepicker" ).datepicker();
    } );


