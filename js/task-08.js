const formElem = document.querySelector('.login-form');
const nameInputElem = document.querySelector('input[name="email"]');
const namePasswordElem = document.querySelector('input[name="password"]');


const OnSubmitClick = event => {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    if (nameInputElem.value === '' || namePasswordElem.value === '') {
        alert('Заповніть ВСІ поля')
    } else {
        const userBase = {
            email: email.value,
            password: password.value,
        }
        console.log(userBase);
        event.currentTarget.reset();

    }
}


formElem.addEventListener('submit', OnSubmitClick)
