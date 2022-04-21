let btn = document.querySelector("button")
let div=document.querySelector("#div");
function addelement(){
    let p =document.createElement("p");
    let box = document.createElement('div')
    let up = document.createElement('button')
    let down = document.createElement('button')
    up.textContent='UP'
    down.textContent='DOWN'
    box.className='box'
    div.appendChild(box)
    box.appendChild(p)
    box.appendChild(up)
    box.appendChild(down)
    fetch('https://api.kanye.rest/').then((response)=>{
    return response.json()
}).then((data)=>{
    p.textContent=data.quote;
}).catch()
}
btn.addEventListener('click',addelement)
//p.previousElementSibling