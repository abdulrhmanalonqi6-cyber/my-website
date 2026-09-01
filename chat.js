async function sendMessage() {
    const input = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');
    const message = input.value;

    if (!message) return;

    // إضافة رسالة المستخدم
    const userMsg = document.createElement('div');
    userMsg.className = 'chat-message user';
    userMsg.textContent = message;
    chatBox.appendChild(userMsg);
    input.value = '';

    // الاتصال بالخادم (api/chat.js)
    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message })
        });
        const data = await response.json();

        // إضافة رد البوت
        const botMsg = document.createElement('div');
        botMsg.className = 'chat-message bot';
        botMsg.textContent = data.reply || 'حدث خطأ، حاول مرة أخرى.';
        chatBox.appendChild(botMsg);
    } catch (error) {
        const botMsg = document.createElement('div');
        botMsg.className = 'chat-message bot';
        botMsg.textContent = 'تعذر الاتصال بالخادم.';
        chatBox.appendChild(botMsg);
    }

    // تمرير تلقائي لأسفل
    chatBox.scrollTop = chatBox.scrollHeight;
}
