<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Abdulrhman Alonqi | Official Portfolio</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&family=Tajawal:wght@400;500&display=swap');
        
        body {
            margin: 0;
            padding: 0;
            background-color: #0a0a0a;
            color: #ffffff;
            font-family: 'Montserrat', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }
        
        .vip-card {
            background: linear-gradient(145deg, #141414, #0d0d0d);
            border: 1px solid #c5a059;
            border-radius: 4px;
            padding: 60px 40px;
            max-width: 480px;
            text-align: center;
            box-shadow: 0 20px 50px rgba(0,0,0,0.9), 0 0 20px rgba(197, 160, 89, 0.15);
        }
        
        .monogram {
            width: 65px;
            height: 65px;
            border: 1px solid #c5a059;
            margin: 0 auto 25px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 28px;
            color: #c5a059;
            font-weight: 600;
            border-radius: 2px;
            background: rgba(197, 160, 89, 0.05);
        }
        
        h1 {
            font-size: 26px;
            margin: 0 0 5px 0;
            color: #e6e6e6;
            letter-spacing: 2px;
            font-weight: 600;
        }

        .ar-title {
            font-family: 'Tajawal', sans-serif;
            font-size: 16px;
            color: #8c8c8c;
            margin-bottom: 20px;
        }
        
        .designation {
            font-size: 12px;
            color: #c5a059;
            margin-top: 15px;
            letter-spacing: 2px;
            font-weight: 400;
        }

        .ar-designation {
            font-family: 'Tajawal', sans-serif;
            font-size: 13px;
            color: #9c7f47;
            margin-top: 5px;
            margin-bottom: 30px;
        }
        
        .divider {
            width: 40px;
            height: 2px;
            background-color: #c5a059;
            margin: 0 auto 30px;
        }
        
        .en-bio {
            font-size: 13px;
            line-height: 1.8;
            color: #a3a3a3;
            margin-bottom: 15px;
            font-weight: 300;
        }

        .ar-bio {
            font-family: 'Tajawal', sans-serif;
            font-size: 14px;
            line-height: 1.8;
            color: #737373;
            margin-bottom: 40px;
        }
        
        .action-btn {
            display: inline-block;
            padding: 12px 35px;
            border: 1px solid #c5a059;
            background: transparent;
            color: #c5a059;
            text-decoration: none;
            transition: all 0.4s ease;
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 200px;
            margin: 0 auto;
        }
        
        .btn-en {
            font-size: 12px;
            letter-spacing: 1px;
            margin-bottom: 4px;
        }

        .btn-ar {
            font-family: 'Tajawal', sans-serif;
            font-size: 12px;
            color: #a3a3a3;
        }

        .action-btn:hover {
            background: #c5a059;
            box-shadow: 0 0 15px rgba(197, 160, 89, 0.4);
        }

        .action-btn:hover .btn-en {
            color: #0a0a0a;
            font-weight: 600;
        }

        .action-btn:hover .btn-ar {
            color: #1a1a1a;
        }
    </style>
</head>
<body>
    <div class="vip-card">
        <div class="monogram">A</div>
        
        <h1>ABDULRHMAN ALONQI</h1>
        <div class="ar-title">عبد الرحمن العنقي</div>
        
        <div class="designation">BACKEND DEVELOPER | FOUNDER OF AIVORA</div>
        <div class="ar-designation">مطور واجهات خلفية | مؤسس AIVORA</div>
        
        <div class="divider"></div>
        
        <div class="en-bio">
            Specializing in software engineering and automated tech solutions. Merging strategic vision in artificial intelligence with advanced practical execution, focused on pioneering innovation in Mechatronics engineering.
        </div>
        <div class="ar-bio">
            متخصص في هندسة البرمجيات وتطوير الحلول التقنية المؤتمتة. أجمع بين الرؤية الاستراتيجية في الذكاء الاصطناعي والتنفيذ العملي، مع تركيز نحو ريادة الابتكار في هندسة الميكاترونكس.
        </div>
        
        <a href="mailto:your-email@gmail.com" class="action-btn">
            <span class="btn-en">CONTACT FOR BUSINESS</span>
            <span class="btn-ar">تواصل للأعمال</span>
        </a>
    </div>
</body>
</html>

