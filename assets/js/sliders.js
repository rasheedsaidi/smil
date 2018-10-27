/* website sliders */
    var prevBtn = document.getElementById("prev");
    var nextBtn = document.getElementById("next");

        var slideIndex = 0;
        showSlides();

        function showSlides() {
            var i;
            var slides = document.getElementsByClassName("item");
            for (i = 0; i < slides.length; i++) {
                slides[i].classList.remove("active");
            }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1} 
            slides[slideIndex-1].className += " active";
            //setTimeout(showSlides, 7000); // Change image every 7 seconds
            
        }
		
		setInterval(nextSlide, 7000);

        prevBtn.onclick = function(){
            prevSlide();
        }
        nextBtn.onclick = function(){
            nextSlide();
        }
           
        //set controls for the slider
        function nextSlide(){
            var i; 
            var slides = document.getElementsByClassName("item");
            var x = slides.length;
                x = x - 1;
            
            for (i = 0; i < slides.length; i++) {
                if(slides[i].classList.contains("active")){
                    if(i < x){
                    slides[i].classList.remove("active");
                    i = i + 1;
                    slides[i].className += " active";    
                    }else if(i == x){
                    slides[i].classList.remove("active");
                    slides[0].className += " active";
                    }
                }
            }
        }

        function prevSlide(){
            var i; 
            var slides = document.getElementsByClassName("item"); 
            var x = slides.length;
                x = x - 1;
            
            for (i = 0; i < slides.length; i++) {
                if(slides[i].classList.contains("active")){
                    if(i == 0){
                    slides[i].classList.remove("active");
                    i = x - 1;
                    slides[i].className += " active";    
                    }else{
                    slides[i].classList.remove("active");
                    i = i - 1;
                    slides[i].className += " active";
                    }
                };
            }
        }