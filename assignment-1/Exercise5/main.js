document.getElementById("first_name").setAttribute("placeholder", "Name");
document.getElementById("last_name").setAttribute("placeholder", "Surname");

const tel1 = document.getElementById("txt_telephone");
tel1.addEventListener('input', () => {
    tel1.setCustomValidity('');
    tel1.checkValidity();
})

tel1.addEventListener('invalid', () => {
        tel1.setCustomValidity('The phone pattern is not matched. You should try something like: 6938823619. ' +
            'Please try again!');
    }
);

const tel2 = document.getElementById("txt_telephone2");
tel2.addEventListener('input', () => {
    tel2.setCustomValidity('');
    tel2.checkValidity();
})

tel2.addEventListener('invalid', () => {
    tel2.setCustomValidity('The phone pattern is not matched. You should try something like: 6938823619. ' +
            'Please try again!');
    }
);

const fname =  document.getElementById("first_name");
fname.addEventListener('input', () => {
    fname.setCustomValidity('');
    fname.checkValidity();
});

fname.addEventListener('invalid', () => {
    fname.setCustomValidity('Please fill in your name.');
    fname.style.backgroundColor = "rgb(255,97,97)";
});

const lname =  document.getElementById("last_name");
lname.addEventListener('input', () => {
    lname.setCustomValidity('');
    lname.checkValidity();
});

lname.addEventListener('invalid', () => {
    lname.setCustomValidity('Please fill in your surname.');
    lname.style.backgroundColor = "rgb(255,97,97)";
});

const mail = document.getElementById("my_email");
mail.addEventListener('input', () => {
    mail.setCustomValidity('');
    mail.checkValidity();
});

mail.addEventListener('invalid', () => {
        mail.setCustomValidity('This is not an accurate e-mail address. Please try again!');
    }
);

function check(p1, p2) {
    const password = document.getElementById(p1).value;
    const password2 = document.getElementById(p2).value;

    if (password.length === 0 || password2 === 0) {return;}
    if (password === password2) {return;}
    alert("The password must be identical in both fields")
}