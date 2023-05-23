var menu = document.querySelector('.menu');
var links = document.querySelector('.links');
var mark = document.querySelector('#cancel');

// function appear(){
//     links.style.right = "2px";
// }

// function disappear(){
//     links.style.right = "-300px";
// }

menu.addEventListener('click', () =>{
    links.classList.add('active');
    links.style.transition = "all .5s ease-in-out";
});


mark.addEventListener('click', () =>{
    links.classList.remove('active');
    links.style.transition = "all .5s ease-in-out";
});