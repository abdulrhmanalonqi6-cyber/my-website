export default async function handler(req, res) {
    // السماح فقط بـ POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { message } = req.body || {};
        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }

        // ✅ الاتصال بـ Groq API (وليس Gemini)
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 🔑 هنا يقرأ المفتاح من متغيرات البيئة في Vercel
                'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
            },
            body: JSON.stringify({
                model: 'mixtral-8x7b-32768', // يمكنك تغييره إلى 'llama3-70b-8192' أو غيره
                messages: [
                    { role: 'system', content: 'أنت مساعد ذكي ومفيد.' },
                    { role: 'user', content: message }
                ],
                temperature: 0.7
            })
        });

        const data = await response.json();

        // ✅ استخراج الرد من تنسيق Groq (choices وليس candidates)
        const text = data?.choices?.[0]?.message?.content || 'عذراً، لم أتمكن من الرد.';

        // ✅ إرسال الرد إلى العميل
        return res.status(200).json({ reply: text });

    } catch (error) {
        console.error('Error in chat API:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
ت
// new update
