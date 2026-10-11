// driver.spec.js
const { test, expect } = require('@playwright/test');
const path = require('path');

test('Driver - ตรวจสอบว่าใน card.html มีชื่อและนามสกุลจริงหรือไม่', async ({ page }) => {
    // 1. กำหนด Path ไปยังไฟล์ card.html
    const filePath = path.join(__dirname, '..', 'card.html');
    
    // 2. Driver ทำการเรียก/เปิดไฟล์ card.html
    await page.goto(`file://${filePath}`);

    // 3. ดึง Element ที่แสดงชื่อ-นามสกุล
    const authorElement = page.locator('#author-name');

    // 4. Assertion: ตรวจสอบว่ามี Element อยู่จริง และมีข้อความชื่อ-นามสกุลของคุณ
    await expect(authorElement).toBeVisible();
    await expect(authorElement).toContainText('พิศนุ แสงปี'); 
});