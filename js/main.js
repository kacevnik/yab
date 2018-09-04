   $(document).ready(function() {
        $("#mmenu").mmenu({
            navbar: {
                title: "Y&B"
            }
        });

        $(window).resize(function() {
            resizeMenu()
        });

        function resizeMenu(){
            var c = $('.main_menu li').length;
            var w = $('.main_menu').width();
            var d = 0;
            $('.main_menu li').each(function(index, el) {
                d += $(this).width();
            });
            var r = (w - d)/(c-1);
            $('.main_menu li').each(function(index, el) {
                $(this).css({'margin-right' : r});
            });
            $('.main_menu li:last-child').css({'margin-right' : '0px'});
        }

        resizeMenu();

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

      $(".product_more_slider_wrap").owlCarousel({
          loop:true,
          margin: 30,
          responsive:{
              0:{
                  items:1,
                  nav:true
              },
              500:{
               items:2,
               nav:true
              },
              767:{
                  items:4,
                  nav:true
              },
              992:{
                  items:4,
                  nav:true
              }
          },
          navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
          autoplay: true,
          autoplayTimeout: 5000
      });      

      $(".com_slider").owlCarousel({
          loop:true,
          margin: 30,
          responsive:{
              0:{
                  items:1,
                  nav:true
              },
              500:{
                  items:1,
                  nav:true
              },
              767:{
                  items:2,
                  nav:true
              },
              992:{
                  items:2,
                  nav:true
              }
          },
          navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>']
      });

      $('[data-fancybox]').fancybox();
      $('[data-fancybox-video]').fancybox();

      var api = $("#mmenu").data( "mmenu" );
      api.bind('open:finish', function() {
         $('.hamburger').addClass('is-active');
      }).bind('close:finish', function(){
         $('.hamburger').removeClass('is-active');
      });

        ymaps.ready(init);
         
        function init () {
            var myMap = new ymaps.Map("map", {
                // Центр карты, указываем коордианты
                center:[54.930181, 83.129441],
                // Масштаб, тут все просто
                zoom: 16,
            }); 
                     
            var myGeoObjects = [];
             
            // Наша метка, указываем коордианты
            myGeoObjects = new ymaps.Placemark([54.930181, 83.129441],{
                            balloonContentBody: 'Текст в балуне',
                            },{
                            iconLayout: 'default#image',
                            // Путь до нашей картинки
                            iconImageHref: 'img/logo_map.png', 
                            // Размер по ширине и высоте
                            iconImageSize: [102, 22],
                            // Смещение левого верхнего угла иконки относительно
                            // её «ножки» (точки привязки).
                            iconImageOffset: [-35, -35]
            });
                         
            var clusterer = new ymaps.Clusterer({
                clusterDisableClickZoom: false,
                clusterOpenBalloonOnClick: false,
            });
             
            clusterer.add(myGeoObjects);
            myMap.geoObjects.add(clusterer);
         
        }
   });