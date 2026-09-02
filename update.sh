#!/bin/bash

# الألوان
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${BLUE}╔════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║    🚀 سكريبت النشر السريع - عبدالرحمن    ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════╝${NC}"

# التحقق من أننا في المكان الصحيح
if [ ! -d ".git" ]; then
    echo -e "${YELLOW}❌ خطأ: أنت لست في مجلد المشروع!${NC}"
    echo "الأمر الصحيح: cd ~/my-website && bash update.sh"
    exit 1
fi

echo -e "${YELLOW}📁 المكان الحالي: $(pwd)${NC}"
echo ""

# الخطوة 1: إضافة الملفات
echo -e "${YELLOW}📝 إضافة الملفات...${NC}"
git add .
echo -e "${GREEN}✅ تم${NC}"
echo ""

# الخطوة 2: التحقق من التغييرات
echo -e "${YELLOW}🔍 التغييرات:${NC}"
git status --short
echo ""

# الخطوة 3: حفظ التحديثات
echo -e "${YELLOW}💾 حفظ التحديثات...${NC}"
git commit -m "🎨 تحديث التصميم - VIP Premium Edition" --quiet
echo -e "${GREEN}✅ تم${NC}"
echo ""

# الخطوة 4: رفع إلى GitHub
echo -e "${YELLOW}📤 رفع إلى GitHub...${NC}"
git push --quiet
echo -e "${GREEN}✅ تم${NC}"
echo ""

# النتيجة النهائية
echo -e "${BLUE}╔════════════════════════════════════════╗${NC}"
echo -e "${GREEN}✨ تم تحديث الموقع بنجاح!${NC}"
echo -e "${BLUE}╚════════════════════════════════════════╝${NC}"
echo ""
echo -e "${YELLOW}🌐 الموقع الحي:${NC}"
echo -e "${GREEN}https://my-website-snowy-rho-84.vercel.app${NC}"
echo ""
echo -e "${YELLOW}⏱️  Vercel بتحدث الموقع الآن (انتظر دقيقة)${NC}"
echo ""
echo -e "${BLUE}📊 آخر commit:${NC}"
git log --oneline -1
echo ""
