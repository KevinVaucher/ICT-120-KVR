document.addEventListener("DOMContentLoaded", init)

function Blue() {
    div1.style.backgroundColor = 'lightblue';
    div1.style.textDecoration = 'line-through';
}

function Clean() {
    div1.style.backgroundColor = 'white';
    div1.style.textDecoration = 'none';
}

function Arial() {
    div3.classList.add('classdiv3');
}

function RemoveArial() {
    div3.classList.remove('classdiv3');
}
function CheckboxCheck(){
    if(div4chk1.checked == true && div4chk2.checked == true){
        div4.classList.add('classdiv4');
    }
    else{
        div4.classList.remove('classdiv4');
    }
}

function init() {
    div1.addEventListener('click', Blue)
    div2.addEventListener('click', Clean)
    div3.addEventListener('mouseover', Arial)
    div3.addEventListener('mouseleave', RemoveArial)
    div4chk1.addEventListener('click', CheckboxCheck)
    div4chk2.addEventListener('click', CheckboxCheck)


}