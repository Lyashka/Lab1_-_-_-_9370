
const dot = document.querySelector('#dot')

let dotX =  360
let dotY = 360
dot.style.transform=`translate(${dotX}px, ${dotY}px)`

let stepRadius = 0
let stepDeg = 0
let r = stepRadius * 72
let alpha=(stepDeg*90)*(Math.PI/180)
let stepValueX = 0
let stepValueY = 0
let x = 340 + stepValueX * 72
let y = 338 + stepValueY * (-72)
let deg = 0
let k=0

const icon = document.querySelector('.icon')
icon.style.transform=`translate(${x + r*Math.cos(alpha) + stepValueX * 72}px, ${y + r*Math.sin(-alpha) + stepValueY * (-72)}px) rotate(${deg}deg)`
icon.style.transition="all 0.09s ease 0s"
dot.style.transform=`translate(${dotX + stepValueX * 72}px, ${dotY + stepValueY * (-72)}px)`
dot.style.transition="all 0.8s ease 0s"
const degMove = document.querySelector('#textInput');

document.getElementById("myrange").addEventListener("input", function() {
 

  icon.style.transform=`translate(${x + r*Math.cos(alpha) + stepValueX * 72}px, ${y + r*Math.sin(-alpha) + stepValueY * (-72)}px)  rotate(${this.value}deg)`
})

function radiusInc(){
  k = 0
  r = (stepRadius += 1) * 72
  console.log(r);
  icon.style.transform=`translate(${x + r*Math.cos(alpha) + stepValueX * 72}px, ${y + r*Math.sin(-alpha) + stepValueY * (-72)}px) rotate(${deg}deg)`
  
}
function radiusDec(){
  k = 0
  r = (stepRadius -= 1) * 72
  icon.style.transform=`translate(${x + r*Math.cos(alpha) + stepValueX * 72}px, ${y + r*Math.sin(-alpha) + stepValueY * (-72)}px) rotate(${deg}deg)`
 
}
function degInc(){
  alpha = (stepDeg +=1) * 90 * (Math.PI/180)
  k = k + 1
  
  icon.style.transform=`translate(${x + r*Math.cos(alpha) + stepValueX * 72}px, ${y + r*Math.sin(-alpha) + stepValueY * (-72)}px) rotate(${k*90+deg}deg)`
  dot.style.transform=`translate(${dotX + stepValueX * 72}px, ${dotY + stepValueY * (-72)}px)`
   
}

function degDec(){
  alpha = (stepDeg -=1) * 90 * (Math.PI/180)
  k = k - 1
  
  icon.style.transform=`translate(${x + r*Math.cos(alpha) + stepValueX * 72}px, ${y + r*Math.sin(-alpha) + stepValueY * (-72)}px) rotate(${k*90+deg}deg)`
  dot.style.transform=`translate(${dotX + stepValueX * 72}px, ${dotY + stepValueY * (-72)}px)`
}



 function onHandler(value){
  deg = value
  if(value == undefined || value == ''){
    deg = 0
  }
 
  icon.style.transform=`translate(${x + r*Math.cos(alpha) + stepValueX * 72}px, ${y + r*Math.sin(-alpha) + stepValueY * (-72)}px) rotate(${deg}deg)`
  dot.style.transform=`translate(${dotX + stepValueX * 72}px, ${dotY + stepValueY * (-72)}px)`
 }
 
 function onHandlerDeg(value){
       alpha=(value)*(Math.PI/180)
       console.log(this.value);
      console.log(alpha)
       icon.style.transform=`translate(${x + r*Math.cos(alpha) + stepValueX * 72}px, ${y + r*Math.sin(-alpha) + stepValueY * (-72)}px) rotate(${deg}deg)`
 }

  document.getElementById("myRange").addEventListener("input", function() {
    alpha=(this.value)*(Math.PI/180)
    console.log(this.value);
    console.log(alpha);
    icon.style.transform=`translate(${x + r*Math.cos(alpha) + stepValueX * 72}px, ${y + r*Math.sin(-alpha) + stepValueY * (-72)}px)  rotate(${deg}deg)`
  })

 const moveX = document.querySelector('#moveX');

 function onMoveX(value){
  stepValueX = value;
  console.log(stepValueX);
  dot.style.transform=`translate(${dotX + stepValueX * 72}px, ${dotY + stepValueY * (-72)}px)`
 }

 function onMoveY(value){
  stepValueY = value
  dot.style.transform=`translate(${dotX + stepValueX * 72}px, ${dotY + stepValueY * (-72)}px)`
 }
