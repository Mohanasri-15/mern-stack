let path=require("path");
console.log(path.dirname ("/user/test/file text"));

let fullpath=path.join("folder","file.txt");
console.log("fullpath");

//path.join ("folder","two.js")
//path.basename ("/user/test/file.txt");
//path.dirname ("/user/test/file text");
//path.extname ("index.js");

let fs = require("fs");

fs.mkdir("./documents",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Folder created successfully");
    }
    }
);

// Check if "documents" folder exists
if (!fs.existsSync("./documents")) {
    fs.mkdir("./documents", (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Folder created successfully");
        }
    });
}

// Create a file inside documents folder
fs.writeFile("./documents/hello.txt", "Hello Hello Hello", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File created successfully");
    }
});



