$(document).ready(function () {
    
    const acc = document.querySelectorAll('.accordion');
		acc.forEach((button) => {
			button.addEventListener('click', function () {
				this.classList.toggle('active');
				const panel = this.nextElementSibling;
				if (panel.style.display === 'block') {
					panel.style.display = 'none';
				} else {
					panel.style.display = 'block';
				}
			});
		});

    $('.hero-slider .swiper-wrapper').slick({
        slidesToShow: 1,
        autoplay: true,
        centerMode: true,
        arrows: false,
        centerPadding: "20px",
        autoplaySpeed: 3000,
        dots: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    centerPadding: "10px",
                }
            }
        ]
      });
          

    //Mobile Nav
    $(".burger-btn").click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $('.nav-menu').css({
                'height': '0',
                'width': '0'
            });
        }else{
            $(this).addClass('active');
            $('.nav-menu').animate({
                "width": "100%"
            }, 100).css("height", "auto");
        }
    })

    //SCROLL

    $(window).bind('scroll', function() {
		var navHeight = $('header').height();
		if ($(window).scrollTop() > navHeight) {
			$('header').addClass('fixed');
		 }
		else {
			$('header').removeClass('fixed');
		 }
	});

    $('.promo-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        centerMode: true,
        variableWidth: true,
        infinite: true,
        focusOnSelect: true,
        cssEase: 'linear',
        touchMove: true,
        // autoplay: true,
        autoplaySpeed: 2000,
        
        responsive: [                        
            {
              breakpoint: 790,
              settings: {
                centerMode: false,
                variableWidth: false,
                slidesToShow: 1,
              }
            },
        ]
      });
      
      
      var imgs = $('.slider img');
      imgs.each(function(){
        var item = $(this).closest('.item');
        item.css({
          'background-image': 'url(' + $(this).attr('src') + ')', 
          'background-position': 'center',            
          '-webkit-background-size': 'cover',
          'background-size': 'cover', 
        });
        $(this).hide();
      });


});
