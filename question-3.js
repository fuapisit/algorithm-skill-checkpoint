/*
What is the Big O notation for Function findStudentById . Explain your reason.
Answer:
Big O notation ของฟังก์ชัน findStudentById คือ O(n) เพราะใช้การค้นหาแบบ linear search
จะตรวจสอบนักเรียนทีละคนไปเรื่อย ๆ จนกว่าจะเจอ ID ที่ตรงกัน หรือจนกว่าจะถึงคนสุดท้ายในอาเรย์ 
ทำให้อาจต้องตรวจสอบนักเรียนทุกคนทั้งหมด n คน 


*/

/* 
What is the Big O notation for Function findProductPrice. Explain your reason.
Answer:
Big O notation ของฟังก์ชัน findProductPrice คือ O(log n) เพราะใช้การค้นหาแบบ binary search
ซึ่งทุกครั้งที่เปรียบเทียบจะลดขนาดของข้อมูลที่ต้องค้นหาลงครึ่งหนึ่ง 
ทำให้จำนวนรอบการทำงานเพิ่มขึ้นตามลอการิทึมเมื่อจำนวนสินค้ามากขึ้น

*/

/* 
Which function is more efficient and why?
Answer:
ฟังก์ชัน findProductPrice มีประสิทธิภาพดีกว่า findStudentById 
เพราะใช้ binary search ที่มีเวลาในการทำงานเป็น O(log n) 
ซึ่งเร็วกว่า linear search ใน findStudentById ที่มีเวลาในการทำงานเป็น O(n) 
โดยเฉพาะเมื่อข้อมูลมีจำนวนมาก

*/
