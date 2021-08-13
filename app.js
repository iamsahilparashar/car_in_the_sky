function moveLeft(){
    let left= parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left-=100;
    if(left >=0){
        character.style.left= left + "px";
        character.style.transition= "left .1s ease-in 0s";
    }
}

function moveRight(){
    let left= parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left+=100;
    if(left <300){
        character.style.left= left + "px";
        character.style.transition= "left .1s ease-in 0s";
    }
}


document.addEventListener("keydown",event =>{    
    if(event.key === "ArrowLeft"){
        moveLeft();
    }
    if(event.key === "ArrowRight"){
        moveRight();
    }
    
});

var counter =0;
var block = document.getElementById("block");
var character= document.getElementById("character");
block.addEventListener('animationiteration',()=>{
    var random = Math.floor(Math.random()*3);
    left = random *100;
    block.style.left= left + "px";
    console.log(block.style.left);
    console.log(character.style.left);
    
    let left_char= parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    setTimeout(function(){
        if(character.style.left>'200px'){
            character.style.left=200+"px";
        }

        if((character.style.left == block.style.left) && (left_char>=0)){
            alert("your score is "+counter);
            window.location.reload();
        }
    },3800)
    counter++;
});

// let front_block = document.getElementById("front_block");
// let front_character = document.getElementById("front_character")

// if(front_block.style.marginLeft == front_character.style.marginLeft) {
//     alert("your score is "+counter);
// }


