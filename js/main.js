   $(document).ready(function() {
        $("#mmenu").mmenu({
            navbar: {
                title: "Y&B"
            }
        });

        $(window).resize(function() {
            resizeMenuHeader();
            resizeMenuFooter();
        });

        function resizeMenuHeader(){
            var c = $('header .main_menu li').length;
            var w = $('header .main_menu').width();
            var d = 0;
            $('header .main_menu li').each(function(index, el) {
                d += $(this).width();
            });
            var r = (w - d)/(c-1);
            $('header .main_menu li').each(function(index, el) {
                $(this).css({'margin-right' : r});
            });
            $('header .main_menu li:last-child').css({'margin-right' : '0px'});
        }

        function resizeMenuFooter(){
            var c = $('footer .main_menu li').length;
            var w = $('footer .main_menu').width();
            var d = 0;
            $('footer .main_menu li').each(function(index, el) {
                d += $(this).width();
            });
            var r = (w - d)/(c-1);
            $('footer .main_menu li').each(function(index, el) {
                $(this).css({'margin-right' : r});
            });
            $('footer .main_menu li:last-child').css({'margin-right' : '0px'});
        }

        resizeMenuHeader();
        resizeMenuFooter();

        $('.qws_item_show').on('click', function(e){
            e.preventDefault();
            if($(this).attr('data-show') == '0'){
                $('.qws_item_show').attr('data-show', 0);
                $(this).attr('data-show', 1);
                $('.qws_item_show_body').slideUp(400);
                $(this).next('div').slideDown(400);
                $('.qws_item_show').removeClass('qws_s');
                $(this).addClass('qws_s');
            }else{
                $('.qws_item_show').attr('data-show', 0);
                $('.qws_item_show').removeClass('qws_s');
                $('.qws_item_show_body').slideUp(400);
            }
        });

      $('.obj_item').click(function(){
         $('.object_check_tab').hide();
         $('.obj_item').removeClass('active');
         $('#tab_object_check_' + $(this).attr('data-tab')).fadeIn(500);
         $(this).addClass('active');
         return false;
      });

      $('.product_tabs a').click(function() {
         $('.product_tab_content').hide();
         $('#product_tab_' + $(this).attr('product-data-tab')).fadeIn(500);
         return false;
      });

      $('.catalog_item_cart').click(function(){
         $('[name="name_product"]').val($(this).parent().parent().find('[data-name-product]').html());
      });

      $('[name="phone"]').inputmask("+380 (99) 99 99 999");

        $(".home_otziv_slider_wrap").owlCarousel({
            loop:true,
            margin: 30,
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                500:{
                    items:1,
                    nav:false
                },
                767:{
                    items:2,
                    nav:false
                },
                992:{
                    items:2,
                    nav:false
                }
            },
            autoplay: true,
            autoplayTimeout: 5000,
            dots: true
        });

        $(".partners_slider").owlCarousel({
            loop:true,
            margin: 30,
            responsive:{
                0:{
                    items:1,
                },
                500:{
                    items:1,
                },
                767:{
                    items:3,
                },
                992:{
                    items:5,
                    nav:true
                }
            },
            navText: ['<div class="partners_slider_left"></div>','<div class="partners_slider_right"></div>'],
            autoplay: true,
            autoplayTimeout: 5000,
            dots: false
        });

    $("a[href*='#']").bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 500);
        e.preventDefault();
        return false;
    });


      var api = $("#mmenu").data( "mmenu" );
      api.bind('open:finish', function() {
         $('.hamburger').addClass('is-active');
      }).bind('close:finish', function(){
         $('.hamburger').removeClass('is-active');
      });

   });