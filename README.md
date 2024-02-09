<<<<<<< HEAD
##วิธีการเข้าเกม
สามารถเข้าได้ผ่านลิ้ง https://xo-game-rust.vercel.app/

##วิธีออกแบบโปรแกรม & algorithm ที่ใช้
1.tools และ technology
	1. VS Code	=   coding program
	2. Next.js	= 	framwork
	3.Firebase	=	database
	4. Figma	=	UI design
	5.Github	=	code repository
	6.html, css, javascript =   coding languages
	7.Vercel	=	deploy

2.ทำการออกแบบ UI ของเกมใน Figma
3.จากโจทย์จำแนกฟังก์ชันออกมาได้ดังนี้	*เรียงลำดับตามความสำคัญ
	3.1 ตัวเกม XO
	3.2 ปรับขนาดตารางได้
	3.3 มี Replay เพื่อดูผลการแล่นย้อนหลัง
4. ใช้ next.js เป็น framwork ในการสร้าง webapp 	

5. จัดทำตัวเกม XO โดยใช้ html, css และ javascript เพื่อสร้าง grid ที่มีจำนวนช่องตามขนาดของตาราง
และมีตัวอักษร X/O ที่ขึ้นสลับกันทุกครั้งที่กดที่ช่องใดก็ตามในตราง เมื่อรูปแแบบเป็นไปตามเงื่อนไข หรือช่องเต็ม เกมจะจบลงทันที

6.การปรับขนาดตาราง ผู้จัดทำได้สร้าง button ที่ homepage โดยให้เลือก 3 แบบ คือ 3x3 4x4 5x5 ตามลำดับ เมื่อกดที่ปุ่มจะทำการ link
ไปยัง page ของตารางนั้น ๆ

7.ระบบ hitory and replay ระบบนี้เป็นระบบที่ต้องมี database มารองรับ ผู้จัดทำจึงเลือกใช้ firebase เนื่องจากใช้งานง่าย 
และรองรับหลาย framework รวมถึง next.js ด้วย ทำการบันทึก winner, timestamp และ isTie(ตรวจสอบว่าเสมอกันหรือไม่)ทุกๆครั้งที่่ทราบการเล่น และนำเสนอเป็นรูป pop-up window ที่จะแสดงเมื่อกดปุ่ม replay ในหน้า home
 
8. ทำการปรับให้เว็ป responsive เมื่อหน้าจอมีขนาดเล็กลง (code ยังไม่สมบูรณ์ ปัจจุบันรองรับแค่ desktop เท่านั้น ใน platform อื่นยังไม่สเถียร

9. ตกแต่ง UI โดยใช้ css ตามที่ออกแบบไว้ใน Figma 
