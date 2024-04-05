const officegen = require('officegen');

const fs = require('fs');

const docx = officegen('docx');

const p = docx.createP();

p.addText("This is a simple paragraph");

const p2 = docx.createP();

p2.addText("This is a second paragraph");

docx.putPageBreak();

const p3 = docx.createP();

p3.addImage("./image.png")


const out = fs.createWriteStream("result.docx");

docx.generate(out);
