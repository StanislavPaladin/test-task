'use strict'
document.addEventListener('DOMContentLoaded', function (event) {
    const emailWrapper = document.querySelector('.survey__wrapper')
    const email = document.querySelector('.survey__wrapper-email');
    const emailInput = document.querySelector('.email-input');
    const inputCounter = document.querySelector('.input-counter');
    const emailYour = document.querySelector('.email-your');
    const maxLength = 30;

    emailInput.addEventListener('input', (e) => {
        if (emailInput.value[0] != '@') {
            emailInput.value = '@ |' + emailInput.value;
        }
        // emailInput.value = emailInput.value.splice(1)
        emailInput.value = emailInput.value.split(' ').join('');
        const yourEmail = emailInput.value;
        let count = yourEmail.length -2;
        emailYour.innerHTML = `
        Ваш email: ${yourEmail.slice(2)} <i class="fa fa-info-circle" aria-hidden="true" contenteditable="false"></i>
        `;
        inputCounter.textContent = `${count} / ${maxLength}`;
        if (count >= maxLength || count === 0) {
            inputCounter.style.color = 'red'
        } else {
            inputCounter.style.color = 'green'
        }

    })
    emailInput.addEventListener('focus', (e) => {
        // e.preventDefault();
        emailInput.value = emailInput.value.split(' ').join('');
        const yourEmail = emailInput.value;
        let count = yourEmail.length;
        emailInput.style.border = '1px solid green'
        // inputCounter.classList.remove('hide');
            emailYour.innerHTML = `
            Ваш email: ${yourEmail.slice(2)} </div><i class="fa fa-info-circle" aria-hidden="true" contenteditable="false"></i>
            `;
            if(count > 0) {
                inputCounter.textContent = `${count-2} / ${maxLength}`;
            } else {
                inputCounter.textContent = `${count} / ${maxLength}`;
            }
            
    })
    emailInput.addEventListener('focusout', (e) => {
        // e.preventDefault()
        emailInput.style.border = '1px solid gray'
        // inputCounter.classList.add('hide');
        inputCounter.textContent = ''
    })
})
