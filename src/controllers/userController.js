const userModel=require("../models/userModel")
const aws = require("aws-sdk")


  
  aws.config.update({
    accessKeyId: "AKIAY3L35MCRUJ6WPO6J",
    secretAccessKey: "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",
    region: "ap-south-1"
  })
  
  let uploadFile = async (file) => {
    return new Promise(function (resolve, reject) {
      
      let s3 = new aws.S3({ apiVersion: '2006-03-01' }); 
  
      var uploadParams = {
        ACL: "public-read",
        Bucket: "classroom-training-bucket",  
        Key: "abc/" + file.originalname, 
        Body: file.buffer
      }
  
  
      s3.upload(uploadParams, function (err, data) {
        if (err) {
          return reject({ "error": err })
        }
        console.log(data)
        console.log("file uploaded succesfully")
        return resolve(data.Location)
      })
   })
  }

//   //      let files= req.files
//   console.log("okay:   ",req.files)
//   if(files && files.length>0){
//       //upload to s3 and get the uploaded link
//       // res.send the link back to frontend/postman
//       let uploadedFileURL= await uploadFile( files[0] )

const createUser= async function(req,res){
    
}