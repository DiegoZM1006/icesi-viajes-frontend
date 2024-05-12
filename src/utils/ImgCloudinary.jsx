import { Cloudinary } from '@cloudinary/url-gen';
// import { auto } from '@cloudinary/url-gen/actions/resize';
// import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

const ImgCloudinary = () => {
  const cld = new Cloudinary({cloud: {cloudName: 'dbcdnlxle'}});
  
  // Use this sample image or upload your own via the Media Explorer
  const img = cld.image('paris_folmvy')
        .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
        .quality('auto')

  return (<AdvancedImage cldImg={img}/>);
};

export default ImgCloudinary;
