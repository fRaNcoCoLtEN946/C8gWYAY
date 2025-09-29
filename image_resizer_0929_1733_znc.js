// 代码生成时间: 2025-09-29 17:33:00
// Import Lodash library
const _ = require('lodash');

// Define the Image Resizer class
class ImageResizer {
    /**
     * Constructs an ImageResizer instance with a set of images.
     * @param {string[]} images - Array of image file paths
     * @param {number} width - Desired width of the resized images
     * @param {number} height - Desired height of the resized images
     */
    constructor(images, width, height) {
        this.images = images;
        this.width = width;
        this.height = height;
        this.resizedImages = [];
    }

    /**
     * Resizes all images and saves them to a specified directory.
     * @param {string} outputDirectory - Directory to save the resized images
     * @returns {Promise<string[]>} - Array of file paths of the resized images
     */
    async resizeImages(outputDirectory) {
        try {
            // Check if the output directory exists, if not create it
            if (!fs.existsSync(outputDirectory)) {
                await fs.promises.mkdir(outputDirectory, { recursive: true });
            }

            // Resize each image and store the new file paths
            const resizedImagePaths = await Promise.all(this.images.map(async (image) => {
                try {
                    // Load the image using a library like sharp for image processing
                    const sharpInstance = sharp(image);
                    const metadata = await sharpInstance.metadata();
                    
                    // Calculate new dimensions based on aspect ratio
                    const { width, height } = this.calculateNewDimensions(metadata.width, metadata.height);
                    
                    // Resize the image
                    const resizedImage = await sharpInstance
                        .resize({ width, height })
                        .toBuffer();

                    // Save the resized image to the output directory
                    const outputPath = `${outputDirectory}/resized_${image}`;
                    await sharp(resizedImage).toFile(outputPath);

                    // Add the resized image path to the array
                    this.resizedImages.push(outputPath);

                    return outputPath;
                } catch (error) {
                    // Handle errors and log them
                    console.error(`Error resizing image ${image}: ${error.message}`);
                }
            }));

            // Filter out any null values that might have been added due to errors
            return _.compact(resizedImagePaths);
        } catch (error) {
            // Handle any global errors
            console.error(`Error resizing images: ${error.message}`);
            throw error;
        }
    }

    /**
     * Calculates new dimensions based on the aspect ratio to maintain the image integrity.
     * @param {number} originalWidth - Original image width
     * @param {number} originalHeight - Original image height
     * @returns {object} - Object containing new width and height
     */
    calculateNewDimensions(originalWidth, originalHeight) {
        // Calculate aspect ratio
        const aspectRatio = originalWidth / originalHeight;

        // Determine the new width and height based on the aspect ratio
        let newWidth = this.width;
        let newHeight = this.height;

        if (this.width && !this.height) {
            newHeight = this.width / aspectRatio;
        } else if (!this.width && this.height) {
            newWidth = this.height * aspectRatio;
        } else if (this.width && this.height) {
            newWidth = this.width;
            newHeight = this.height;
        }

        return { width: newWidth, height: newHeight };
    }
}

// Export the ImageResizer class
module.exports = ImageResizer;