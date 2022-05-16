console.log('Welcome to the chatroom homepage!');
const continueBtn = document.getElementsByTagName('button')[0];

continueBtn.addEventListener('click', (event) => {
    location.replace('/login');
});