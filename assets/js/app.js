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
























btnLoqin.addEventListener('click', loqinUserHandler);
btnRegistr.addEventListener("click", registrationHandler);
registrSubmit.addEventListener("click", saveUserRegistrHandler);
btnLogout.addEventListener('click', wayOutInProfile);