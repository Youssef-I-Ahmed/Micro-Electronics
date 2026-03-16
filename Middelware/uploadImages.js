const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) { // request, file, callback function to set the destination for uploaded files, 
        // request: the incoming request object, file: Variable carrying file name and all details of the file being uploaded, cb: callback function used to do actions, such as to specify the destination folder for the uploaded file
        cb(null, "uploads"); // first argument is for error handling (null means no error), second argument is the destination folder for uploaded files
        // "uploads" is the folder where the uploaded files will be stored. You can change this to any folder you want.
    },
    filename: function (req, file, cb) { // request, file, callback function to set the filename for uploaded files
        cb(null, Date.now() + path.extname(file.originalname)); // Date.now() is used to generate a unique filename based on the current timestamp. This helps to avoid filename conflicts when multiple files are uploaded. path.extname(file.originalname) is used to preserve the original file extension.
    // The filename will be a combination of the current timestamp and the original file extension, ensuring that each uploaded file has a unique name while retaining its original format. eg: if the original file name is "image.jpg", the stored file name might be something like "1623456789012.jpg".
    },
});

const upload = multer({ storage: storage }); // Create a multer instance with the defined storage configuration

const uploadProductImages = upload.single("image"); // Middleware function to handle single file upload with the field name "image"

module.exports = uploadProductImages; // Export the middleware function for use in other parts of the application, such as in route handlers where you want to handle image uploads.

