let btn = document.querySelector("button")
let div=document.querySelector("#div");
btn.addEventListener('click',function(){
    fetch('https://api.kanye.rest/').then((response)=>{
    return response.json()
}).then((data)=>{
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
    let btnups=document.querySelectorAll('.up')
    for(let btnup of btnups){
        btnup.addEventListener("click",function(){
            
        })
    }
}).catch()
})
