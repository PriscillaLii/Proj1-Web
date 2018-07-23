$(document).ready(function(){
            $('[data-toggle="tooltip"]').tooltip();
            $('#mycarousel').carousel({interval:2000});
            $('#carouselButton').click(function(){
                if ($('#carouselButton').children('span').hasClass('fa-pause')) {
                    $('#mycarousel').carousel('pause');
                    $('#carouselButton').children('span').removeClass('fa-pause');
                    $('#carouselButton').children('span').addClass('fa-play')
                } else {
                    $('#mycarousel').carousel('cycle');
                    $('#carouselButton').children('span').removeClass('fa-play');
                    $('#carouselButton').children('span').addClass('fa-pause')
                }
            });
            
           /* $('#loginButton').click(function(){
                $('#loginModal').css("display", "block");
                $('#loginModal').addClass('show');
                $('#loginModal').css("background-color", "rgba(0,0,0,0.5)");
            });
            $('#closeLogin').click(function(){
                $('#loginModal').css("display", "none");
                $('#loginModal').removeClass('show');
            });
            
            $('#reserveButton').click(function(){
                $('#reserveModal').css("display", "block");
                $('#reserveModal').addClass('show');
                $('#reserveModal').css("background-color", "rgba(0,0,0,0.5)");
            });
            $('#reserveClose').click(function(){
                $('#reserveModal').css("display", "none");
                $('#reserveModal').removeClass('show');
            });*/
        });
        $('#loginButton').click(function(){
            $('#loginModal').modal('show');
        });
        $('#loginClose').click(function(){
            $('#loginModal').modal('hide');
        });
        $('#reserveButton').click(function(){
            $('#reserveModal').modal('show');
        });
        $('#reserveClose').click(function(){
            $('#reserveModal').modal('hide');
        });