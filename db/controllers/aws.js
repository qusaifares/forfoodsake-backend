const aws = require('aws-sdk');

aws.config.update({
  access_key: process.env.AWS_ACCESS_KEY_ID,
  secret_key: process.env.AWS_SECRET_ACCESS_KEY
});
const s3 = new aws.S3();

//AWS Setup

const upload = function(file) {
  // const s3Bucket = {
  //   bucket_name: process.env.AWS_BUCKET,
  //   access_key: process.env.AWS_ACCESS_KEY_ID,
  //   secret_key: process.env.AWS_SECRET_ACCESS_KEY
  // };
  let imageURL;
  const params = {
    Bucket: process.env.AWS_BUCKET,
    Body: file.name,
    key: file.data
  };
  s3.upload(params, function(err, data) {
    if (err) {
      console.log('Error', err);
    }
    if (data) {
      console.log('uploaded to:', data.location);
      imageURL = data.location;
    }
  });
};
