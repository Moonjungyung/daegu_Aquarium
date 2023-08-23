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
$('#wrap').fullpage({
    scrollBar:true, //크롤바 표시 유무 true false
        scrollingSpeed:800, //스크롤 속도
        navigation:true, //우측 내비게이션 유무
        navigationTooltips:['대구 아쿠아리움','이벤트','아쿠아리움 이야기','입장권 할인판매'],
        showActiveTooltip:true, //내비게이션에 hover하지 않아도 글자가 보임
})