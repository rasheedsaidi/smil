
            
            function checkView(classSet, animationClass){
                var winheight = window.innerHeight || (document.documentElement || document.body).clientHeight;
                var winTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
                var winBottom = (winTop + winheight);
                
                var x = classSet;
                var i;
                for (i = 0; i < x.length; i++) {
                    //alert(x.length);
                    var elementHeight = x[i].offsetHeight + 500;
                    var elementTop = x[i].offsetTop + 500;
                    var elementBottom = (elementTop + elementHeight);
                    
                    
                    if((winTop >= elementTop) && (elementBottom <= winBottom)){
                            x[i].classList.add(animationClass);
                       }else{
                            x[i].classList.remove(animationClass);
                       }
                }
            }

            function checkViewX(classSet, animationClass){
                var winheight = window.innerHeight || (document.documentElement || document.body).clientHeight;
                var winTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
                var winBottom = (winTop + winheight);
                
                var x = classSet;
                var i;
                for (i = 0; i < x.length; i++) {
                    //alert(x.length);
                    var elementHeight = x[i].offsetHeight;
                    var elementTop = x[i].offsetTop - 500;
                    var elementBottom = (elementTop + elementHeight);
                    
                    
                    if((winTop >= elementTop) && (elementBottom <= winBottom)){
                            x[i].classList.add(animationClass);
                       }else{
                            x[i].classList.remove(animationClass);
                       }
                }
            }
        

            function checkViewY(classSet, animationClass){
                var winheight = window.innerHeight || (document.documentElement || document.body).clientHeight;
                var winTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
                var winBottom = (winTop + winheight);
                
                var x = classSet;
                var i;
                for (i = 0; i < x.length; i++) {
                    //alert(x.length);
                    var elementHeight = x[i].offsetHeight - 300;
                    var elementTop = x[i].offsetTop - 300;
                    var elementBottom = (elementTop + elementHeight);
                    
                    
                    if((winTop >= elementTop) && (elementBottom <= winBottom)){
                            x[i].classList.add(animationClass);
                       }else{
                            x[i].classList.remove(animationClass);
                       }
                }
            }


        window.onload = function(){
            document.getElementById("loader").style.display="none";
            document.getElementById("header").classList.add('header-animate');
            document.getElementById("header").classList.add('upDown');
        };


            var animateLeft = document.querySelectorAll(".animateLeft");
            var slideInleft = "slideInLeft";
            
            var animateRight = document.querySelectorAll(".animateRight");
            var slideInRight = "slideInRight";

            var animateUp = document.querySelectorAll(".animateUp");
            var animateDown = document.querySelectorAll(".animateDown");
            var upDown = "upDown";

            var animateLeftY = document.querySelectorAll(".animateLeftY");
            var animateRightY = document.querySelectorAll(".animateRightY");
            
           window.onscroll = function() {
                checkView(animateLeft, slideInleft);
                checkView(animateRight, slideInRight);
                checkViewX(animateUp, upDown);
                checkViewX(animateDown, upDown);  
                checkViewY(animateLeftY, slideInleft); 
                checkViewY(animateRightY, slideInRight);
               
           };

var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
  if(st == 0 || lastScrollTop == 0) {
       $('#header').removeClass('header-reveal');      
        $('#header').removeClass('header-scrolled');
        $('#header').addClass('header-animate');
        $('#header').addClass('upDown');
   }else  if (st > lastScrollTop){
       // downscroll code
        $('#header').removeClass('upDown');
        $('#header').removeClass('header-animate');
        $('#header').addClass('header-scrolled');
       
   } else if(st < lastScrollTop) {
      // upscroll code
       $('#header').removeClass('header-scrolled');
       $('#header').addClass('header-reveal');
   } else {
        $('#header').addClass('header-scrolled');
   }
   lastScrollTop = st;
});
            
document.getElementById("open-menu").addEventListener("click", shwMenu, false);
document.getElementById("cls-menu").addEventListener("click", clsMenu, false);

function shwMenu(){
    document.getElementById("menu").style.display="block";
}
function clsMenu(){
    document.getElementById("menu").style.display="none";
}