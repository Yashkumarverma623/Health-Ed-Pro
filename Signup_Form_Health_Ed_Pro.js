const wrapper = document.querySelector('.wrapper');
const signuplink = document.querySelector('.signup-link');
const loginlink = document.querySelector('.login-link');

signuplink.onclick = () => {
  wrapper.classList.add('active');
}

loginlink.onclick = () => {
  wrapper.classList.remove('active');
}
