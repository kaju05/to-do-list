let input=document.querySelector('input');
let addbtn=document.querySelector('.add');
let list=document.querySelector('.list');
addbtn.addEventListener('click',function(e){
    let listItem=document.createElement('div');
    listItem.className="list-item";
    let itemText=document.createElement('span');
    itemText.textContent=input.value;
    itemText.className="list-item-text";
    let delbtn=document.createElement('button');
    delbtn.innerText="delete";
    delbtn.className="del-btn";
    let editbtn=document.createElement('button');
    editbtn.innerText="edit";
    editbtn.className="edit-btn";
    audio("success-1-6297.mp3");
    listItem.appendChild(itemText);
    listItem.appendChild(delbtn);
    listItem.appendChild(editbtn);
    list.appendChild(listItem);
    input.value="";
    delbtn.addEventListener('click',(e)=>{
        audio("unheimliches-gerausch-9563.mp3");
        let div=e.target.parentElement;
        div.parentElement.removeChild(div);
        
    })
    editbtn.addEventListener('click',(e)=>{
        let span=e.target.previousElementSibling.previousElementSibling;
        let r=prompt('what name u wanna change?',span.textContent);
        span.textContent=r;
    })
    
})
let delbtn=document.querySelectorAll('.del-btn');
for(let btn of delbtn){
    btn.addEventListener('click',(e)=>{
        audio("unheimliches-gerausch-9563.mp3");
        let div=e.target.parentElement;
        div.parentElement.removeChild(div);
    })
}
let editbtn=document.querySelectorAll('.edit-btn');
for(let btn of editbtn){
    btn.addEventListener('click',(e)=>{
        let span=e.target.previousElementSibling.previousElementSibling;
        let r=prompt('what name u wanna change?',span.textContent);
        span.textContent=r;
    })
}
function audio(music){
    let audio=new Audio(music);
    audio.play();
}