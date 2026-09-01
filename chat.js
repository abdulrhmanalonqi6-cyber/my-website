async function sendMessage() {
    const input = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');
    const message = input.value;

    if (!message) return;

    const userMsg = document.createElement('div');
    userMsg.className = 'chat-message user';
    userMsg.textContent = message;
    chatBox.appendChild(userMsg);
    input.value = '';

    const loadingMsg = document.createElement('div');
    loadingMsg.className = 'chat-message bot';
    loadingMsg.textContent = '...';
    chatBox.appendChild(loadingMsg);

    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message })
        });
        const data = await response.json();
        loadingMsg.textContent = data.reply || 'عذراً، لم أستطع فهم السؤال.';
    } catch (error) {
        loadingMsg.textContent = 'حدث خطأ في الاتصال بالخادم.';
    }

    chatBox.scrollTop = chatBox.scrollHeight;
}
