const decreaseBtn=document.getElementById("Decrbutton")
const IncreaseBtn=document.getElementById("incrButton")
const reset=document.getElementById("reset")


let count=0

decreaseBtn.onclick=function(){
    count --
    countLabel.innerText=count
}

reset.onclick=function(){
    count = 0
    countLabel.innerText=count
}

IncreaseBtn.onclick= function () {
    count ++
    countLabel.innerText=count
}