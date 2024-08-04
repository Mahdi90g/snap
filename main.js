let slideindex=1;
function setslide(input,index){
    slideindex=index
    let item=document.querySelector(`#${input}`)
    let slides = [...document.querySelector('.slides').children]
    
    slides.forEach((element)=>{
        element.classList.remove('active');
        
    });
    item.classList.add('active');




}

let time = 23000;


function settime(){
    if(time == 0) return;
    let h = Math.floor(time/3600);
    let m = Math.floor((time%3600)/60);
    let s = Math.floor(time%3600)%60;

    document.querySelector('#hours').innerHTML = h
    document.querySelector('#minutes').innerHTML = m
    document.querySelector('#secondes').innerHTML = s
}
setInterval(() => {
    time -=1
    
    settime()

}, 1000)


const masd = 'hello'

masd.replace = "jasd"
masd.match



function first(){
    document.querySelector("#slide1").setAttribute("class","active")
    document.querySelector("#slide2").setAttribute("class","item")
    document.querySelector("#slide3").setAttribute("class","item")
    
}

function start1(){
    document.querySelector("#slide1").setAttribute("class","item")
    document.querySelector("#slide2").setAttribute("class","active")
    document.querySelector("#slide3").setAttribute("class","item")

}

setTimeout(() => {
    start1()
    
},3000);


function start2(){
    document.querySelector("#slide1").setAttribute("class","item")
    document.querySelector("#slide2").setAttribute("class","item")
    document.querySelector("#slide3").setAttribute("class","active")

}

setTimeout(() => {
    start2()
    
},6000);



setInterval(() => {
    first()
    
}, 9000);

setInterval(() => {
    start1()
    
}, 12000);

setInterval(() => {
    start2()
    
}, 15000);

let btn = document.querySelector('.side-btn').addEventListener('click',()=>{console.log('kiiii')})
let page = document.querySelector('.list-op');

