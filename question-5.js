/*  
What is the Big O notation for Function sortProductsByPrice of the Question 4. Explain your reason.
Answer:

Big O notation ของฟังก์ชัน sortProductsByPrice คือ O(n²) 
เพราะฟังก์ชันนี้ใช้ bubble sort algorithm ซึ่งมีการวนลูปซ้อนกันสองชั้น 
โดยจำนวนรอบของลูปขึ้นอยู่กับขนาดของอาเรย์ (n) เมื่อมีการวนลูปซ้อนกันสองชั้น จึงกลายเป็น n*n
ทำให้ Big O notation เป็น O(n²) 


*/
