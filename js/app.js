let btn = document.querySelector("button")
let div=document.querySelector("#div");
btn.addEventListener('click',()=>{
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
})
