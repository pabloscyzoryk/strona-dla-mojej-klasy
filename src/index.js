import './ui/css/styles.css';

let isDark = false;
const form = document.querySelectorAll('form');
const darkMode = document.querySelector('.fa-solid');
const body = document.querySelector('body');

form.forEach(form => {    
    form.setAttribute('action', form.topics.value);
    form.topics.addEventListener('change', () => {
        if(form.topics.value == 'kawus') {
            window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ'); 
        }
        else {
            form.setAttribute('action', form.topics.value);
        }  
    });  
});

darkMode.addEventListener('click', () => {
    if(isDark === false) {
        body.classList.toggle('body-dark');
        darkMode.classList.toggle('icon-dark');
        darkMode.classList.add('fa-sun');
        darkMode.classList.remove('fa-moon');
        isDark = true;
    }
    else {
        body.classList.toggle('body-dark');
        darkMode.classList.toggle('icon-dark');
        darkMode.classList.add('fa-moon');
        darkMode.classList.remove('fa-sun');
        isDark = false;
    }
});



