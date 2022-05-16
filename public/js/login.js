/*
? @document-start
=================
| PROGRAM LOGIC |
==================================================================================================================================

? @author:                 William J. Horn
? @document-name:          login.js
? @document-created:       05/11/2022
? @document-modified:      05/11/2022

==================================================================================================================================

? @document-info
==================
| ABOUT DOCUMENT |
==================================================================================================================================

Front-end program logic for handling the user login screen

==================================================================================================================================
*/

console.log('Login script');
const usernameBox = document.getElementById('username-box');
const passwordBox = document.getElementById('password-box');
const loginBtn = document.getElementById('login-button');

const onLogin = async (event) => {
    const username = usernameBox.value;
    const password = passwordBox.value;

    const response = await fetch('/login', {
        method: 'POST',
        body: JSON.stringify({
            username,
            password
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const data = await response.json();

    // failed login case
    if (!data.loggedIn) return console.log('Failed to login');
        
    // successful login
    console.log('Login successful!');
    location.replace('/chatroom?' + new URLSearchParams({ username }));
}

loginBtn.addEventListener('click', onLogin);
