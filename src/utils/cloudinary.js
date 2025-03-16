import {v2 as cloudinary} from cloudinary;
import fs from fs

// Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_SECRETE_KEY 
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath)return null;
        //upload file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath,{
            resourse_type:"auto"
        })
        console.log("file is uploaded on cloudinary",response.url);
        fs.unlinkSync(localFilePath) 
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath) //remove the locally saved temporary file as upload got failed
        return null
    }
}

export {uploadOnCloudinary};