const textarea=document.querySelector(".texting")

const char=document.querySelector(".char")

const words=document.querySelector(".word")

const twitter=document.querySelector(".twitter")

const insta=document.querySelector(".insta")

wordCounter=(e)=>{
    let str=e.target.value;
    str=str.split(" ")
    words.innerText=str.length;  
}

textarea.addEventListener('input',(e)=>{
    char.innerText=e.target.value.length;
})

textarea.addEventListener('input',(e)=>{
    wordCounter(e)
})

let twitno=280;
textarea.addEventListener('input',(e)=>{
    twitter.innerText=twitno-e.target.value.length;
})

let instano=300;
textarea.addEventListener('input',(e)=>{
    insta.innerText=instano-e.target.value.length;
})