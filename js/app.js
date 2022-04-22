let btn = document.querySelector("button")
let div=document.querySelector("#div");
let tmp=[]
let poblemecount=[]
function add(){
fetch('https://api.kanye.rest/').then((response)=>{
            return response.json()
        }).then((data)=>{
            if(tmp.includes(data.quote)){
                console.log(poblemecount)
                if(poblemecount.length<10){
                    poblemecount.push('pobleme')
                    add()
                }
                else{
                    alert('aucun phrase na eter trouver')
                    poblemecount=[]
                }
            }
            else{
                tmp.push(data.quote)
                let p =document.createElement("p");
                let box = document.createElement('div')
                let up = document.createElement('button')
                let down = document.createElement('button')
                up.textContent='UP'
                down.textContent='DOWN'
                up.className='up'
                down.className='down'
                box.className='box'
                div.appendChild(box)
                box.appendChild(p)
                box.appendChild(up)
                box.appendChild(down)
                p.textContent=data.quote;
                poblemecount=[]
            }
            const btnUp = document.querySelectorAll(".up");
            const btnDown = document.querySelectorAll(".down");
            const btnUps = btnUp[btnUp.length-1];
            const btnDowns = btnDown[btnDown.length-1];
            btnUps.addEventListener("click", function(){
                (btnUps.parentElement).previousElementSibling.insertAdjacentElement("beforebegin", btnUps.parentElement);
            })
            btnDowns.addEventListener("click", function(){
                (btnDowns.parentElement).nextElementSibling.insertAdjacentElement("afterend", btnDowns.parentElement);
            })
}).catch()
}
btn.addEventListener('click',add)
        
