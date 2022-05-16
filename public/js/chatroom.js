/*
? @document-start
=================
| PROGRAM LOGIC |
==================================================================================================================================

? @author:                 William J. Horn
? @document-name:          chatroom.js
? @document-created:       05/11/2022
? @document-modified:      05/11/2022

==================================================================================================================================

? @document-info
==================
| ABOUT DOCUMENT |
==================================================================================================================================

Front-end program logic for handling chatroom interface interactions

==================================================================================================================================
*/

console.log('Chatroom script');
const chatMessageContainer = document.getElementById('chat-messages');
const chatBar = document.getElementById('chat-bar');

const loadChatMessages = () => {

}

const updateChatMessages = () => {

}

const sendGlobalChat = message => {
    
}

const sendLocalChat = message => {
    const messageEl = document.createElement('p');
    messageEl.textContent = message;
    chatMessageContainer.appendChild(messageEl);
}

const validateChatRequest = event => {
    if (event.keyCode != 13) return;
    sendLocalChat(chatBar.value);
}

chatBar.addEventListener('keyup', validateChatRequest);

