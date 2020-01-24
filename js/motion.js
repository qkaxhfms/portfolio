const innerLetter1 = document.querySelector('.letter-1');
const innerLetter2 = document.querySelector('.letter-2');
var winW = document.documentElement.offsetWidth;
console.log(winW);
console.log(innerLetter1);
console.log(innerLetter2);

// resizeMotion();


// function resizeMotion(){

// }

// console.log(resizeMotion)

function delayIntro(){
    if(winW > 939){
        setTimeout(function(){
            innerLetter1.classList.add('change-svg');
        },0);
        setTimeout(function(){
            innerLetter1.classList.add('change-stroke');
        },1500);
        setTimeout(function(){
            innerLetter1.classList.add('change-fill');
        },4500);
        setTimeout(function(){
            innerLetter1.classList.add('letter-move');
        },4800);
        setTimeout(function(){
            innerLetter2.classList.add('change-svg');
        },5000);
        setTimeout(function(){
            innerLetter2.classList.add('change-stroke');
        },6500);
        setTimeout(function(){
            innerLetter2.classList.add('letter-move');
        },9500);
        setTimeout(function(){
            innerLetter2.classList.add('change-fill');
        },9800);    
        clearTimeout(delayIntro);
    }else{
        innerLetter1.classList.add('change-svg','change-stroke', 'change-fill', 'letter-move');
        innerLetter2.classList.add('change-svg', 'change-stroke', 'change-fill' ,'letter-move');
    }
    
}

// console.log(delayIntro)
window.onload = function() {
    delayIntro();
}


// window.onresize = function(){
    
//     if(winW > 940){
//         delayIntro();
//     } else {
//         resizeMotion();
//     }
// }
