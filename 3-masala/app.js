const fs = require("fs");
const path = require("path");
const os = require("os");
const { log } = require("console");

//shu masalada soralganidek qilish uchun shunchaki fayl nomi directoryda mavjud
// bolmasa fs ozi fayl yaratib ichiga yozib qoyar ekan shu usulda foydalandim!

fs.writeFileSync("hello.txt", "Hello Node.Js!", "utf-8");
console.log(fs.readFileSync("./hello.txt", "utf-8"));

let checkIfTrue = path.join(__dirname, "hello.txt");
console.log(os.cpus());
console.log(os.userInfo());
console.log(os.arch());

console.log(checkIfTrue);
