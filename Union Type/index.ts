// คำสั่ง: ประกาศตัวแปรชื่อ value ให้เก็บได้ทั้งข้อความและตัวเลข
let value: string | number;

// คำสั่ง: ใช้ Literal + Union Type ให้เหมาะกับเงื่อนไข
function logMessage(level: "info" | "warning" | "error") {
  console.log(`Level: ${level}`);
}

logMessage("error");

// คำสั่ง: ใช้ Union Type ที่รวม boolean และ string เข้าไปด้วย
function setStatus(status: "active" | false) {
  console.log(`Current status: [${status}]`);
}

setStatus("active");

// คำสั่ง: เริ่มต้นไม่มีค่า → ต้องกำหนดให้เป็น string หรือ undefined ได้
function inputValue(value: string | undefined) {
  if (value !== undefined) {
    console.log(`Input value: ${value}`);
  } else {
    console.log(`No input value provided.`);
  }
}

inputValue("DONUZZ");
inputValue(undefined);
