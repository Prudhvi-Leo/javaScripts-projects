const body=document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
let activeSlide = 0
setBgToBody()
function setBgToBody(){
body.style.backgroundImage = slides[activeSlide].style.backgroundImage
                            
                        }
function setSlides(){
    slides.forEach((slide)=>{
        slide.classList.remove('active')
    })
    slides[activeSlide].classList.add('active')
}
rightBtn.addEventListener('click',()=>{
 
    activeSlide++;
    if(activeSlide>slides.length -1){
        activeSlide =2;
    }
    setBgToBody();
    setSlides()
})

leftBtn.addEventListener('click',()=>{

    activeSlide--;
    if(activeSlide<0){
        activeSlide=0;
    }
    setBgToBody();
    setSlides()
})