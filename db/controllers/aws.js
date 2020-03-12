// const express = require('express');
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
// cons path = require('path');
// const s3 = require('aws-sdk/clients/s3');

aws.config.update({
  access_key: process.env.AWS_ACCESS_KEY_ID,
  secret_key: process.env.AWS_SECRET_ACCESS_KEY
});
const s3 = new aws.S3();

//https://www.youtube.com/watch?v=e-gb9IBfSw8&amp=&t=1476s
// Guided by this and other youtube videos and some repos from github
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'ffs-image-upload',
    metadata: function(req, file, cb) {
      cb(null, { fieldname: file.fieldname });
    },
    key: function(req, file, cd) {
      cb(null, Date.now().toString());
    },
    limits: { fileSize: 2000000 }, //2 MB
    fileFilter: function(req, file, cb) {
      checkFileType(file, cb);
    }
  })
});

const checkFileType = function(file, cb) {
  const fileTypes = /jpeg|jpg|png/;
  //tests that the file type matches the mimetype
  const mimetype = filetypes.test(file.mimetype);
  if (mimetype === 'jpeg' || mimetype === 'png' || mimetype === 'jpg') {
    return cd(null, true);
  } else {
    cb('Error: Please upload an image of type .jpeg, .png, or .jpg');
  }
};

//AWS Setup

// const uploadToBucket = function(file) {
//   const s3Bucket = {
//     bucket_name: process.env.AWS_BUCKET,
//     access_key: process.env.AWS_ACCESS_KEY_ID,
//     secret_key: process.env.AWS_SECRET_ACCESS_KEY
//   };
//   let imageURL;
//   const params = {
//     Bucket: process.env.AWS_BUCKET,
//     Body: file.name,
//     key: file.data
//   };
//   s3Bucket.upload(params, function(err, data) {
//     if (err) {
//       console.log('Error', err);
//     }
//     if (data) {
//       console.log('uploaded to:', data.location);
//       imageURL = data.location;
//     }
//   });
// };

module.exports = upload;
