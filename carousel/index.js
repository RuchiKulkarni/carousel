let slideCount=1;
var slideInterval = setInterval(nextSlide,2000);


function moveToslide(slideNumber)
{

   
    let margin=slideNumber*100;
    document.querySelector('.slider').style.transition=".5s";
    document.querySelector('.slider').style.marginLeft=-margin+"%";
    
    setInterval(function() {
        slideShow()
      }, 1000);

    if(slideNumber==5)
    {
        slideCount=1;

        setTimeout(function(){
            document.querySelector('.slider').style.transition="0s";
            document.querySelector('.slider').style.marginLeft="-100%";
           
        },500)

    }

    if(slideNumber==0)
    {
        slideCount=4;

        setTimeout(function(){
            document.querySelector('.slider').style.transition="0s";
            document.querySelector('.slider').style.marginLeft="-400%";
           
        },500)

    }
}

function nextSlide()
{

    setInterval(500)
    slideCount++;
    moveToslide(slideCount);
    
   

    
   
}


function prevSlide()
{
    slideCount--;
    moveToslide(slideCount);

  
   
}






