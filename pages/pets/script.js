const btnAbout = document.querySelector('.li-about');
const btnHelp = document.querySelector('.li-help');
const btnContacts = document.querySelector('.li-contacts');

btnAbout.addEventListener('click', () => {
    btnHelp.classList.remove('active');
    btnContacts.classList.remove('active');
    btnAbout.classList.add('active');
})
btnHelp.addEventListener('click', () => {
    btnAbout.classList.remove('active');
    btnContacts.classList.remove('active');
    btnHelp.classList.add('active');
})
btnContacts.addEventListener('click', () => {
    btnHelp.classList.remove('active');
    btnAbout.classList.remove('active');
    btnContacts.classList.add('active');
})