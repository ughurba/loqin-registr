const btnRegistr = document.querySelector(".btn-registr");
const registrWindow = document.querySelector(".registr-modal");
const overlayWindow = document.querySelector(".overlay");
const registrSubmit = document.querySelector(".registr-submit");
const userNameRegistrInput = document.querySelector(".username-registr");
const passwordRegistrInput = document.querySelector(".password-registr");
const userNameLoqinInput = document.querySelector('.user-name-loqin');
const passwordLoqunInput = document.querySelector('.password-loqin');
const btnLoqin = document.querySelector('.btn-login');
const page = document.querySelector('.page');
const formLoqin = document.querySelector('.form-loqin');
const btnLogout = document.querySelector('.btn-logout');


const userGoodList = JSON.parse(localStorage.getItem('users'));

userGoodList.forEach(user => {
    if (user.isLoqin) {
        profileLogin(user.username);
    }
})


function renderDisplay(item, display) {
    item.style.display = display;
}

function addtoUserInfo(userName, password) {

    let userList = JSON.parse(localStorage.getItem("users")) || [];

    userList.push({
        isLoqin: false,
        username: userName,
        password: password,
    });

    localStorage.setItem("users", JSON.stringify(userList));
}

function registrationHandler(ev) {
    ev.preventDefault();

    renderDisplay(registrWindow, "block");
    renderDisplay(overlayWindow, "block");
}

function renderInputValue(value) {
    userNameRegistrInput.value = value;
    passwordRegistrInput.value = value;
}

function checkUserInfoRegistr(userName, password) {
    userList = JSON.parse(localStorage.getItem("users"));

    if (userList == null) {
        addtoUserInfo(userName, password);
    }


    let element = userList.find(
        (user) => user.userName === userName || user.password === password
    );


    if (element === undefined) {

        addtoUserInfo(userName, password);
        renderInputValue('')

    } else {
        alert("bad");
        renderInputValue('')

    }
}

function saveUserRegistrHandler(ev) {
    ev.preventDefault();

    let userNameRegistrValue = userNameRegistrInput.value;
    let passwordRegistrValue = passwordRegistrInput.value;

    checkUserInfoRegistr(userNameRegistrValue, passwordRegistrValue);
}


function profileLogin(userName) {

    renderDisplay(formLoqin, "none");
    let h1 = document.getElementById('title-page')
    h1.innerText = `hello ${userName} how are you?`;
    renderDisplay(page, "block");
    const userGoodList = JSON.parse(localStorage.getItem('users'));


    localStorage.setItem('users', JSON.stringify(userGoodList))


}

function wayOutInProfile() {
    renderDisplay(page, 'none');
    renderDisplay(formLoqin, "flex");


    let userGoodList = JSON.parse(localStorage.getItem('users'));
    userGoodList.forEach(user => {
        user.isLoqin = false

    });

    localStorage.setItem('users', JSON.stringify(userGoodList));

}

function checkUserInfoLoqin(userName, password) {

    let userList = JSON.parse(localStorage.getItem("users"));

    let element = userList.find(
        (user) => user.username === userName || user.password === password
    );


    if (element === undefined) {

        alert('bele bir account yoxdur')

    } else {
        const selectedCheckBox = document.querySelector('.form-check-input').checked

        if (selectedCheckBox) {
            element.checkUser = true
        }


        element.isLoqin = true;
        localStorage.setItem('users', JSON.stringify(userList))
        profileLogin(element.username)

    }


}


function loqinUserHandler(ev) {
    ev.preventDefault();

    let userNameLoqinInputValue = userNameLoqinInput.value;
    let passwordLoqinInputValue = passwordLoqunInput.value;
    checkUserInfoLoqin(userNameLoqinInputValue, passwordLoqinInputValue)

}





















btnLoqin.addEventListener('click', loqinUserHandler);
btnRegistr.addEventListener("click", registrationHandler);
registrSubmit.addEventListener("click", saveUserRegistrHandler);
btnLogout.addEventListener('click', wayOutInProfile);