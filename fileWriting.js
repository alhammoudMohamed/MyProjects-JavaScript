let fs = require('fs');
let string = JSON.stringify({"string": "String goes here"});
fs.writeFileSync('word.json', string);





fs.readFile('word.json', "utf8", (error, data) => {
    if(error) throw error;
    console.log(JSON.parse(data));
});


// json is an object
//.parse did not work unless its is object
// that is why we have to change the object to a string before pasring