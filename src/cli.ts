import { Command } from "commander";
import { generateQRCode } from "./qr";

const program = new Command();

program
  .name("qr-cli")
  .description("Генератор QR-кодов для терминала")
  .version("1.0.0")
  .command("generate")
  .description("Генерирует QR-код из текста или ссылки")
  .argument("<text>", "Текст или ссылка для генерации QR-кода")
  .option(
    "--size <number>",
    "Размер QR-кода",
    (value) => parseInt(value, 10),
    8
  )
  .action((text, sizeObj) => {
    const size = parseInt(sizeObj.size);
    if (isNaN(size) || size < 1) {
      console.error("Ошибка: Неверный размер QR-кода.");
      process.exit(1);
    }

    generateQRCode(text, size);
  });

program.parse(process.argv);
