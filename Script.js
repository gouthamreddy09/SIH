// JavaScript to handle chatbot open/close functionality

const chatbotToggle = document.querySelector('.chatbot-toggle');
const chatbotWidget = document.querySelector('.chatbot-widget');
const closeBtn = document.querySelector('.close-btn');

chatbotToggle.addEventListener('click', () => {
    chatbotWidget.style.display = chatbotWidget.style.display === 'flex' ? 'none' : 'flex';
});

closeBtn.addEventListener('click', () => {
    chatbotWidget.style.display = 'none';
});
