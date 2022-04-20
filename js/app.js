let btn = document.querySelector("button")
let div=document.querySelector("#div");
function addelement(){
    let p =document.createElement("p");
    let box = document.createElement('div')
    box.className='box'
    div.appendChild(box)
    box.appendChild(p)
    fetch('https://api.kanye.rest/').then((response)=>{
    console.log(response);
    return response.json()
}).then((data)=>{
    console.log(data.quote)
    p.textContent=data.quote;
}).catch()
}
btn.addEventListener('click',addelement)
