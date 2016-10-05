            $(document).ready(function(){       
                $(".navbar-default").css("background", "url(img/Banner-Background-007.jpg)");   
                $(".navbar-brand").css('display','none');
                var scroll_start = 0;
                var startchange = $('#startchange');
                var offset = startchange.offset();
                    if (startchange.length){
                $(document).scroll(function() { 
                    scroll_start = $(this).scrollTop();
                    if(scroll_start > offset.top) {
                        console.log(scroll_start);
                          $(".navbar-brand").css('display','block');
                       } else {
                           $(".navbar-brand").css('display','none');
                       }
                   });
                    }
                });