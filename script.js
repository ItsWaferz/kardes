const button = document.getElementsByClassName('hamburger')[0];
const nav =document.getElementById('nav');


button.addEventListener('click', () => {
    nav.classList.toggle('active');
})
