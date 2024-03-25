const  slides = document.querySelectorAll(".slide");
console.log(slides);
var counter = 0;
const sildeLength = slides.length;

slides.forEach(
    (slide,index) => {
        slide.style.left = `${index *100}%` 
    }
)

const goPrev = () =>{
    counter --;
    // alert()
    if(counter<0) {
        counter = sildeLength -1;
    }
    slideImage ();
}

const goNext = () =>{
    counter ++;
    // alert()
    if(counter >= sildeLength){
        counter=0;
    }
    slideImage ();
}

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    );
};