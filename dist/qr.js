"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateQRCode = generateQRCode;
const QRCode = require("qrcode");
async function generateQRCode(text, size = 8) {
    // Проверка на наличие текста
    if (!text || text.trim().length === 0) {
        console.error('Ошибка: Укажите текст или ссылку.');
        process.exit(1);
    }
    try {
        // Генерация QR-кода в формате ASCII
        const qrCode = await QRCode.toString(text, {
            type: 'terminal',
            version: size,
            errorCorrectionLevel: 'L',
        });
        console.log(qrCode);
        return qrCode;
    }
    catch (err) {
        // Обработка ошибок генерации QR-кода
        console.error('Ошибка генерации QR-кода:', err);
        process.exit(1);
    }
}
