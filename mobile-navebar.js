
let botao = document.querySelector('.mobile-menu')



function toggleMenu(){
    let nav = document.querySelector('.nav-list');
    nav.classList.toggle('active')
    botao.classList.toggle('hambuger-x')
}
botao.addEventListener("click", toggleMenu); 
/* -- sem parenteses no final do nome da funcao -- */