const fs = require("fs");
const path = require("path");
const os = require("os");

//shu masalada soralganidek qilish uchun shunchaki fayl nomi directoryda mavjud
// bolmasa fs ozi fayl yaratib ichiga yozib qoyar ekan shu usulda foydalandim!

fs.writeFileSync("hello.txt", "Hello Node.Js!", "utf-8");
let checkIfTrue = path.join(__dirname, "hello.txt");
console.log(os.cpus());

console.log(checkIfTrue);
