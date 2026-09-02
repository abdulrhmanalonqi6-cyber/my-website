#!/bin/bash

echo "🚀 بدء نشر التحديثات..."

cd ~/my-website

echo "📝 إضافة الملفات..."
git add .

echo "💾 حفظ التحديثات..."
git commit -m "🎨 Update VIP design - Final version"

echo "📤 رفع إلى GitHub..."
git push

echo "✅ تم! الموقع تحديث على:"
echo "https://my-website-snowy-rho-84.vercel.app"

echo ""
echo "⏱️  Vercel بتحدث الموقع الآن... انتظر دقيقة"
