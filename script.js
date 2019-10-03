const pressBtn = document.querySelector('.colorBtn');
const nameOfColor= document.querySelector('.name');
const body = document.querySelector('body');
const hexaNumber = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

pressBtn.addEventListener('click',change );

function change(){
    hash = "#";
    for(i=0 ; i<6 ; i++){
        let random = Math.floor(Math.random()*hexaNumber.length);
        hash += hexaNumber[random];
        console.log(hash);
    }
    body.style.background = hash;
    nameOfColor.innerHTML = hash;
}