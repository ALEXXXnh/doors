
const bttn1 = document.querySelector(".C1c")
bttn1.addEventListener('click', function (){
    document.getElementById("prest").style.display = "none";
    document.getElementById("scene1").style.display = "flex";
    });
    bttn1.addEventListener('click', () => {
        music.play();
        music.loop = "true";
    });
    const music = document.querySelector('.music')
    bttn1.addEventListener('click', () => {
    music.play();
    music.loop = "true";
});


const bttn2 = document.querySelector(".continue1")
bttn2.addEventListener('click', function (){
    document.getElementById("scene1").style.display = "none";
    document.getElementById("scene2").style.display = "flex";
});
const bttn3 = document.querySelector(".continue2")
bttn3.addEventListener('click', function (){
    document.getElementById("scene2").style.display = "none";
    document.getElementById("scene3").style.display = "flex";
});

const bttn4 = document.querySelector(".door1")
bttn4.addEventListener('click', function (){
    document.getElementById("scene3").style.display = "none";
    document.getElementById("scene4").style.display = "flex";
});
const bttn5 = document.querySelector(".continue4")
bttn5.addEventListener('click', function (){
    document.getElementById("scene4").style.display = "none";
    document.getElementById("scene5").style.display = "flex";
});
const bttn6 = document.querySelector(".talk")
bttn6.addEventListener('click', function (){
    document.getElementById("scene5").style.display = "none";
    document.getElementById("scene6").style.display = "flex";
});
const bttn7 = document.querySelector(".goback")
bttn7.addEventListener('click', function (){
    document.getElementById("scene6").style.display = "none";
    document.getElementById("scene3").style.display = "flex";
});
const bttn8 = document.querySelector(".thx")
bttn8.addEventListener('click', function (){
    document.getElementById("scene6").style.display = "none";
    document.getElementById("scene3").style.display = "flex";
});



const bttn9 = document.querySelector(".door2")
bttn9.addEventListener('click', function (){
    document.getElementById("scene3").style.display = "none";
    document.getElementById("scene7").style.display = "flex";
});
const bttn10 = document.querySelector(".continue7")
bttn10.addEventListener('click', function (){
    document.getElementById("scene7").style.display = "none";
    document.getElementById("scene8").style.display = "flex";
});
const bttn11 = document.querySelector(".help")
bttn11.addEventListener('click', function (){
    document.getElementById("scene8").style.display = "none";
    document.getElementById("scene3").style.display = "flex";
});



const bttn12 = document.querySelector(".door3")
bttn12.addEventListener('click', function (){
    document.getElementById("scene3").style.display = "none";
    document.getElementById("scene9").style.display = "flex";
});
const bttn13 = document.querySelector(".continue9")
bttn13.addEventListener('click', function (){
    document.getElementById("scene9").style.display = "none";
    document.getElementById("scene10").style.display = "flex";
});





const bttn14 = document.querySelector(".BG10")
bttn14.addEventListener('click', function (){
    document.getElementById("scene10").style.display = "none";
    document.getElementById("scene11").style.display = "flex";
});
const sound = document.querySelector('.audi')
bttn14.addEventListener('click', () => {
    sound.play();
    sound.currentTime =0;
});




const bttn15 = document.querySelector(".continue11")
bttn15.addEventListener('click', function (){
    document.getElementById("scene11").style.display = "none";
    document.getElementById("scene12").style.display = "flex";
});
const bttn16 = document.querySelector(".back12")
bttn16.addEventListener('click', function (){
    document.getElementById("scene12").style.display = "none";
    document.getElementById("scene3").style.display = "flex";
});
const bttn17 = document.querySelector(".ending")
bttn17.addEventListener('click', function (){
    document.getElementById("scene12").style.display = "none";
    document.getElementById("scene13").style.display = "flex";
});


const bttn18 = document.querySelector(".back13")
bttn18.addEventListener('click', function (){
    document.getElementById("scene13").style.display = "none";
    document.getElementById("prest").style.display = "flex";
});






const cursor = document.querySelector('.cursor')
window.addEventListener('mousemove', (e)=> {
cursor.style.left = e.clientX + 'px';
cursor.style.top = e.clientY + 'px';
}
)
