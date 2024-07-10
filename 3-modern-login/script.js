const button = document.querySelector('.myButton')       //main toggle button
const container = document.querySelector('.container')
// greeet elements
const greet_h1 = document.querySelector('.greet h1')
const greet_h3 = document.querySelector('.greet h3')
const greet_button = document.querySelector('.greet button')
// main elements
const main_h1 = document.querySelector('.main h1')
const main_h3 = document.querySelector('.main h3')
const inp = document.querySelectorAll('.main .input-field input')



// button click event goes here {..

button.addEventListener('click', () => {

    // clearing the input field
    inp.forEach(element => {
        element.value = '';
    });
    container.classList.toggle('active');

    // changing text and toggle active class
    setTimeout(() => {
        if (container.classList.contains('active')) {
            greet_h1.innerHTML = 'Welcome Back!';
            greet_h3.innerHTML = 'Enter your personal details to use all of site features';
            greet_button.innerHTML = 'SIGN IN';
            main_h1.innerHTML = 'Create Account';
            main_h3.innerHTML = 'or use your email for registration';
            button.innerHTML = 'SIGN UP';
        }
        else {
            greet_h1.innerHTML = 'Hello, Friend!';
            greet_h3.innerHTML = 'Register with your personal details to use all of site features';
            greet_button.innerHTML = 'SIGN UP';
            main_h1.innerHTML = 'Sign In';
            main_h3.innerHTML = 'or use your email password';
            button.innerHTML = 'SIGN IN';
        }
    }, 300);
    
})



