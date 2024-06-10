const multer = require('multer');
const path = require('path');

// Set up storage configuration for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'profile/'); // specify the destination directory
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

// Set up file filter to allow only specific file types (optional)
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb(new Error('Only images are allowed'));
  }
};

// Initialize multer with storage and file filter configurations
const upload = multer({
  storage: storage,
  fileFilter: fileFilter
});

module.exports = upload.fields([{ name: 'licenceFront' }, { name: 'licenceBack' }]);
