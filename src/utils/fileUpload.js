import { v2 } from "cloudinary";
import fs from "fs";

v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


const fileUploadOnCloud = async (localFilePath) => {
    try {
        if (!localFilePath) return null;

        v2.uploader.upload(localFilePath, {
            resource_type: "auto",
        });

        console.log("File uploaded successfully", response.url);

        return response;
        
    } catch (error) {
        fs.unlinkSync(localFilePath);
        return null;
    }
};


export { fileUploadOnCloud };