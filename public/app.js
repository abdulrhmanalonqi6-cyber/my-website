
document.getElementById('myButton').addEventListener('click', function() {
    const result = document.getElementById('result');
    result.classList.remove('hidden');
    this.textContent = '✅ تم الضغط!';
    this.style.opacity = '0.7';
    
    // اختياري: إخفاء النتيجة بعد 3 ثواني
    setTimeout(() => {
        result.classList.add('hidden');
        this.textContent = 'اضغط هنا';
        this.style.opacity = '1';
    }, 3000);
});
