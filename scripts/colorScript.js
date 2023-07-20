function buttonColorChange() {
    let p1 = document.querySelector('p');
    let list = document.querySelector('ul');
    
    btn1.classList.toggle('coloredBtn');
    p1.classList.toggle('coloredBtn');
    p1.textContent = 'Текст тоже изменился';
    list.classList.toggle('activeList');
}

let btn1 = document.getElementById('myButton');
btn1.addEventListener('click', buttonColorChange);

