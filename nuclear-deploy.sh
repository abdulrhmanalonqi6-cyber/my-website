#!/bin/bash

echo "🚀 NUCLEAR DEPLOY - يحل كل شيء بقوة!"
echo ""

# 1. التأكد من مكانك
cd ~/my-website || exit 1

# 2. حذف أي متبقيات قديمة
rm -rf .vercel

# 3. إضافة كل شيء
git add -A
git commit -m "🔥 NUCLEAR UPDATE - Force complete rebuild" || echo "No changes to commit"

# 4. رفع قوي لـ GitHub
git push -u origin main --force-with-lease

# 5. حذف كاش المتصفح
echo "🔄 حذف الكاش..."
rm -rf /tmp/vercel-cache 2>/dev/null

# 6. إعادة نشر من الصفر
echo "🌐 إعادة نشر على Vercel..."
echo ""
echo "الرابط الحي:"
echo "https://my-website-snowy-rho-84.vercel.app"
echo ""
echo "✅ تم! انتظر 2-3 دقائق للنشر"
echo ""
echo "💡 إذا ما اشتغل بعد 5 دقائق:"
echo "روح: https://vercel.com/dashboard"
echo "واحذف المشروع وأعد ربطه من GitHub"

