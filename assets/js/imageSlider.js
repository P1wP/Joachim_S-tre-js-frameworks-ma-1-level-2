// IMAGE GALLERY

$(document).ready(function(){
    // ####  SETTINGS ####
    var speedIn = 2000;                 //IMAGE FADE-IN SPEED
    var speedOut = 2000;                //IMAGE FADE-OUT SPEED
    var interval = speedIn+speedOut;    // CHANGE NOT RECCOMENDED
    
    
    
    
    // IMAGE CONTAINER
    var $container = $('#images'); 
    // IMAGES
    var $images = $('.slides--list__img');
    // CONTROLLS
    var $controlls = $('.controlls');
    
    //##### CHANGE CSS BASED ON IMAGES #####
    posElm();
    function posElm(){
        // IMGAGE HEIGHT
        var $imagesHeight= $images.height();
        var $imageWidth = $images.width();

        // SET IMAGE CONTAINER HEIGHT
        $container.css('height', $imagesHeight);
        // SET CONTROLLS WIDTH
        $controlls.css('width', $imageWidth);
        
    }
    
    // CHANGE CSS ON WINDOW RESIZE
    $(window).on('resize', function(){
        posElm();
    })
   
    // ##### NEXT IMAGE #####
    var $right = $('.right');
    var $left = $('.left');
    var $numImages = $('#images img').length;
    var counter = 0;
    
    
    function next(){
        
        var $currentImage = $('.active'); 
        var $next = $currentImage.next();    
        

        $currentImage.stop(true, true).animate(
            {opacity: 0,
            },
            speedOut, 
            function(){
                $currentImage.removeClass('active');
    
                counter++;
                
                if(counter === $numImages){
                    $next = $('#images img:first');
                    console.log($next);
                    counter = 0;
                }// END IF
                
                $next.addClass('active');
    
                $next.css('opacity', 0);
                $next.animate(
                    {opacity: 1},
                    speedIn
                )// END ANIMATE
                
            }// END CALLBACK
        ) // END ANIMATE
        
    }// END NEXT
    
    function prev(){
        var $currentImage = $('.active'); 
        var $prev = $currentImage.prev(); 
        
        $currentImage.animate(
            {opacity: 0,
            },
            speedOut, 
            function(){
                $currentImage.removeClass('active');
    
                counter--;
                
                if(counter <= 0){
                    $prev = $('#images img:last');
                    console.log($prev);
                    counter = $numImages+1;
                }// END IF
                
                $prev.addClass('active');
    
                $prev.css('opacity', 0);
                $prev.animate(
                    {opacity: 1},
                    speedIn
                )// END ANIMATE
                
            }// END CALLBACK
        ) // END ANIMATE
    }// END PREV
    
    
    
    function autoPlay(){
        myInterval = setInterval(next, speedIn+speedOut);

    };
    
    function stopAuto(){
        clearInterval(myInterval);
    };
    
    //NEXT IMAGE
    $right.on('click', next );
    //PREV IMAGE
    $left.on('click', prev );
    // AUTOPLAY
    autoPlay();
    
    //STOP AUTOPLAY ON HOVER
    $container.on('mouseenter', stopAuto );
    $left.on('mouseenter', stopAuto );
    $right.on('mouseenter', stopAuto );
    
    //START AUTOPLAY AGAIN
    $container.on('mouseleave', autoPlay );
    $left.on('mouseleave', autoplay );
    $right.on('mouseleave', autoplay );
    
})