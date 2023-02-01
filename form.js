    function verify() {
        const form = document.getElementById('form');
        const email = document.getElementById('email').value;
        const text = document.getElementById('text-form');
        // eslint-disable-next-line no-useless-escape
        const pattern = /^([a-z0-9\._]+)@([a-z0-9\.])+([a-z]+)(.[a-z]+)?$/;
        if (email.match(pattern)) {
        document.getElementById('footer-btn').type = 'submit';
        text.innerHTML = '';
        } else {
        // form.classList.remove('valid');
        form.classList.add('invalid');
        document.getElementById('footer-btn').type = 'button';
        text.innerHTML = '* Your email is invalid. (make sure your email is in lower cases)';
        }
    }
    
