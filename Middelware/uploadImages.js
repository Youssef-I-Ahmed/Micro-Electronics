const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) { // request, file, callback function to set the destination for uploaded files, 
        // request: the incoming request object, file: Variable carrying file name and all details of the file being uploaded, cb: callback function used to do actions, such as to specify the destination folder for the uploaded file
        cb(null, "uploads"); // first argument is for error handling (null means no error), second argument is the destination folder for uploaded files
        // "uploads" is the folder where the uploaded files will be stored. You can change this to any folder you want.
    },
    filename: function (req, file, cb) { // request, file, callback function to set the filename for uploaded files
        cb(null, Date.now()); // will be contined 

    }
});