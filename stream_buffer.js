// Use of stream and buffer
// stream = প্রবাহ (follow to data)
// Buffer = chank of data for stream

const fs = require('fs');

// Read Data
const myData = fs.createReadStream(`${__dirname}/package.json`, 'utf8');

// Write Data
const myData2 = fs.createWriteStream(`${__dirname}/output.txt`, 'utf8');

/* myData.on('data', (data) => {
    console.log(data);
}); */

// write data with help of stream
myData.on('data', (data) => {
    myData2.write(data);
});

// Easyest way to do stream read and write
// myData.pipe(myData2);
