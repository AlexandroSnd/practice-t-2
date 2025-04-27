"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const qr_1 = require("./qr");
const program = new commander_1.Command();
program
    .name("qr-cli")
    .description("Генератор QR-кодов для терминала")
    .version("1.0.0");
program
    .command("generate")
    .description("Генерирует QR-код из текста или ссылки")
    .argument("<text>", "Текст или ссылка для генерации QR-кода")
    .option("--size <number>", "Размер QR-кода", (value) => parseInt(value, 10), 8)
    .action((text, sizeObj) => {
    const size = parseInt(sizeObj.size);
    console.log(size);
    if (isNaN(size) || size < 1) {
        console.error("Ошибка: Неверный размер QR-кода.");
        process.exit(1);
    }
    (0, qr_1.generateQRCode)(text, size);
});
program.parse(process.argv);
