var img=document.querySelector(".img")
var h=document.querySelector(".h")
var t=document.querySelector(".t")
var heads=0
var tails=0


function flip(){
    var num=Math.floor(Math.random()*2)
    if(num===0){
<<<<<<< HEAD
        img.innerHTML=`<img class="heads_img" src="img/heads.jpeg">`
=======
        img.innerHTML=`<img class="heads_img" src="img/heads.jpeg" alt="heads_image">`
>>>>>>> e3018dd7e51f8c0d0201cffa99cb28073b13b4a8
        heads++
        h.innerHTML=`Heads: ${heads}`
    }
    else {
<<<<<<< HEAD
        img.innerHTML=`<img class="tails_img" src="img/tails.jpeg" >`
=======
        img.innerHTML=`<img class="tails_img" src="img/tails.jpeg" alt="tails_image" >`
>>>>>>> e3018dd7e51f8c0d0201cffa99cb28073b13b4a8
        tails++
        t.innerHTML=`Tails: ${tails}`
    }

}

function reset(){
    heads=0
    tails=0
    h.innerHTML=`Heads: 0 `
    t.innerHTML="Tails: 0 "
<<<<<<< HEAD
    img.innerHTML=`<img class="toss_img" src="img/toss.png"></img>`
}
=======
    img.innerHTML=`<img class="toss_img" src="img/toss.png" alt="toss_image"></img>`
}
>>>>>>> e3018dd7e51f8c0d0201cffa99cb28073b13b4a8
