window.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('#menu_btn');
    console.log(btn);
    const menu = document.querySelector('#mobile-nav');
    console.log(menu);
    const close = document.querySelector('#mobile-nav span');
    console.log(close);
    const list = document.querySelectorAll('#mobile-nav ul li');
  
    btn.addEventListener('click', () => {
        menu.style.display = 'flex';
    })
    close.addEventListener('click', () => {
      menu.style.display = 'none';
    })
    list.forEach(li=> {
      li.addEventListener('click', () => {
        menu.style.display = 'none';
      })
    })
  })