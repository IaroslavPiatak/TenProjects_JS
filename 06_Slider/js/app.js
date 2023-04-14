const buttonNext = document.querySelector('.buttonNext');
const buttonBack = document.querySelector('.buttonBack');
let left = 0;

buttonNext.addEventListener("click", ()=>
{
    left += 256;
    if(left == 1024)
    {
        left = 0;
        
    }
    document.querySelector('.slider-line').style.left = "-" + left + "px";
  
})

buttonBack.addEventListener("click", ()=>
{
    left -= 256;
    if(left < 0)
    left = 768;
   
    document.querySelector('.slider-line').style.left = "-" + left + "px";
  
})