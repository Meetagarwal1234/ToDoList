inp=document.querySelector('input');
ul=document.querySelector("ul");
btn=document.querySelector("button");
btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;
    dltbtn=document.createElement("button");
    dltbtn.innerText="delete";
    dltbtn.classList.add("delete");
    item.appendChild(dltbtn);
    ul.appendChild(item);
    inp.value="";
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        par=event.target.parentElement;
        par.remove();
    }
})
// let dltbtns=document.querySelectorAll(".delete");
// for(dltbtn of dltbtns){
//     dltbtn.addEventListener("click",function(){
//         par=this.parentElement;
//         par.remove();
//     });
// };