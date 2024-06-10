const multer = require('multer');
const path = require('path');




const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    },
  });
  
  // Initialize multer with storage configuration
  const upload = multer({ storage });
  
  // Export middleware to handle multiple files with specific field names
  module.exports = upload.fields([{ name: 'image1' }, { name: 'image2' }, { name: 'image3' }]);