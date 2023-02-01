    const form = document.getElementById('form');
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('textare');

    const input = JSON.parse(localStorage.getItem('inputs'));

    if (input) {
    nameField.value = input.name;
    emailField.value = input.email;
    messageField.value = input.textarea;
    }

    form.addEventListener('change', (event) => {
    event.preventDefault();

    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const textareaform = messageField.value.trim();

    const obj1 = {
        name: name,
        email: email,
        message: textareaform,
    };

    localStorage.setItem('inputs', JSON.stringify(obj1));
    });