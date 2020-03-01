# Joachim_S-tre-js-frameworks-ma-1-level-2

## INSTRUCTIONS
copy the imageSlider.js and style.css file. 

## HTML
link to the css and fontawesome in your document

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <link rel="stylesheet" type="text/css" href="assets/css/style.css">

Add this block of HTML to your document.

    <div id="slider">

        <!-- images -->
        <div id="images">
                <img class="[ slides--list__img active ]"  src="assets/img/elephant-4389434_640.jpg" alt="Elephant">
                
                <img class="[ slides--list__img ]" src="assets/img/galaxy-4828098_640.jpg" alt="UFO">
                
                <img class="[ slides--list__img ]" src="assets/img/mosque-4196145_640.jpg" alt="Roof Pattern">
                
                <img class="[ slides--list__img ]" src="assets/img/raven-4874366_640.jpg" alt="Raven">
        </div>
        
        <div class=" [ controlls ]">
            <!-- controll left -->
            <div class=" [ left ]"><span class=" [ fa fa-chevron-left ]"></span></div>
          
        
            <!-- controll right -->
            <div class=" [ right ]"><span class=" [ fa fa-chevron-right ]"></span></div>
        </div>
    
    </div>
 
Place all your images inside the #images element.
You can add as many images as you want.

Finaly link to Jquery and imageSlider.js right before the closing body tag

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="assets/js/imageSlider.js"></script>

## SETTINGS
Inside imageSlider.js there is some variable that you can edit to change the speed of the image transition.

      ####  SETTINGS ####
      var speedIn = 2000;                 //IMAGE FADE-IN SPEED
      var speedOut = 2000;                //IMAGE FADE-OUT SPEED
      var interval = speedIn+speedOut;    // CHANGE NOT RECCOMENDED
            
## DEMO
http://www.noob-at-work.com/noroff/y2/jsFrameworks/jquery/index.html
