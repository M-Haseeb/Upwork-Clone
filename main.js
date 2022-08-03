var trend=document.querySelectorAll(".selector");
var data1=document.querySelectorAll(".data1");
var data2=document.querySelectorAll(".data2");
var data3=document.querySelectorAll(".data3");
var data4=document.querySelectorAll(".data4");
var main9=document.querySelector(".main9");
var slide_btn=document.querySelector(".btn-hold");
var slide_btn2=document.querySelector(".btn-hold2");
var hold1=document.querySelector(".hold1");
var hold2=document.querySelector(".hold2");


var a1=document.getElementById("a1");
var a2=document.getElementById("a2");
var a3=document.getElementById("a3");
var a4=document.getElementById("a4");

a1.addEventListener("click",(e)=>{
    e.preventDefault();
    for(let i=0;i<2;i++){
        data2[i].style.display="none";
        data3[i].style.display="none";
        data4[i].style.display="none";
        data1[i].style.display="block";
    }
    styler('770px','1',a1);
    grayer([a4,a2,a3])
})

a2.addEventListener("click",(e)=>{
    e.preventDefault();
    for(let i=0;i<2;i++){
        data1[i].style.display="none";
        data3[i].style.display="none";
        data4[i].style.display="none";
        data2[i].style.display="block";
    }
    
    styler('770px','1',a2);
    grayer([a1,a4,a3])
})

a3.addEventListener("click",(e)=>{
    e.preventDefault();
    for(let i=0;i<2;i++){
        data1[i].style.display="none";
        data2[i].style.display="none";
        data4[i].style.display="none";
        data3[i].style.display="block";
    }
    styler('940px','1',a3);
    grayer([a1,a2,a4])
})


a4.addEventListener("click",(e)=>{
    e.preventDefault();
    for(let i=0;i<2;i++){
        data1[i].style.display="none";
        data3[i].style.display="none";
        data2[i].style.display="none";
        data4[i].style.display="block";
    }
    styler('840px','1',a4);
    
    grayer([a1,a2,a3])
})

function styler(h,o,a){
      main9.style.height=h;
      a.style.color='orange';
      a.style.opacity=o;
}

function grayer(list){
    for(let i=0;i<list.length;i++){
        list[i].style.color="gray";
        list[i].style.opacity='0.3';
    }
}



slide_btn.addEventListener("click",(e)=>{
    e.preventDefault()
   hold1.style.transform="translateX(-100%)"
   hold2.style.transform="translateX(-100%)"
   slide_btn.style.opacity="0";
   slide_btn2.style.opacity="1";
})


slide_btn2.addEventListener("click",(e)=>{
    e.preventDefault()
   hold1.style.transform="translateX(0)"
   hold2.style.transform="translateX(0)"
   slide_btn.style.opacity="1";
   slide_btn2.style.opacity="0";
})