window.addEventListener('load',function(){
    let sliderSection = document.querySelector('.slider__section');
    let sliderItems = document.querySelectorAll('.slider__item');
    let dotItems = document.querySelectorAll('.dot__item');
    let nextBtn = document.querySelector('.slider__next');
    let preBtn = document.querySelector('.slider__pre');
    let sliderItemWidth = sliderItems[0].clientWidth;
    let sliderLength = sliderItems.length;
    let positionX = 0, index = 0;
    nextBtn.addEventListener('click',function(){
        changeSlider(1);
    });
    preBtn.addEventListener('click',function(){
        changeSlider(-1);
        
    });
    [...dotItems].forEach((item)=>{
        item.addEventListener('click',function(e){
            [...dotItems].forEach((item)=>item.classList.remove('active'))
            item.classList.add('active');
            let sliderIndex = parseInt(e.target.dataset.index);
            index = sliderIndex;
            positionX = -1 * index * sliderItemWidth;
            sliderSection.style = `transform : translate(${positionX}px)`
        })
    })
    function changeSlider(direction){
        if(direction === 1){
            if(index >= sliderLength-1) {
                index = sliderLength -1;
                return ;
            }
            else{
                positionX = positionX - sliderItemWidth
                sliderSection.style = `transform : translate(${positionX}px)`
            }
            index++;
        }
        else if(direction === -1){
            if(index <= 0){
                index = 0;
                return ;
            }
            else {
                positionX = positionX + sliderItemWidth
                sliderSection.style = `transform : translate(${positionX}px)`
            }
            index--;
        }
        [...dotItems].forEach((item)=>item.classList.remove('active'))
        dotItems[index].classList.add('active')
    }

})
