let botaoMobile = document.getElementById('botaoMobile');

function openMenu(){
    var menu = document.getElementById('menu');
    menu.classList.toggle('ativo');

}


botaoMobile.addEventListener('click',openMenu);

