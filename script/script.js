const sub = document.querySelectorAll('nav .sub')
const gnb = document.querySelectorAll('nav > ul')
const nav_bg = document.querySelector('.nav_bg')
console.log(sub, gnb, nav_bg)
function sub_func (status){
    nav_bg.style.display = status
    for(let i of sub){i.style.display = status}
}
sub_func('none')
for(let i of gnb){
    console.log(i)
    i.addEventListener('mouseover',function(){
        sub_func('block')
    })
    i.addEventListener('mouseout',function(){
        sub_func('none')
    })
}