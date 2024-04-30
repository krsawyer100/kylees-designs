const form = document.getElementById("contact-form")

//Form constraints
const constraints = {
    name: {
        presence: {allowEmpty: false}
    }, 
    email: {
        presence: {allowEmpty: false},
        email: true
    },
    message: {
        presence: {allowEmpty: false}
    }
};

//form event listener
form.addEventListener('submit', function(e) {
    const formValues = {
        name: form.elements.name.value,
        email: form.elements.email.value,
        message: form.elements.message.value
    }

    const errors = validate(formValues, constraints)

    if (errors) {
        e.preventDefault();
        const errorMessage = Object
            .values(errors)
            .map(function (fieldValues) {return fieldValues.join(', ')})
            .join("\n")
        alert(errorMessage)
    }
}, false)