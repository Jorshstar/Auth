import React, { useState } from 'react';
import axios from 'axios';
import addImage from '../assets/images/addImage.png';

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setError('Please select an image file');
        return;
      }
      if (file.size > 5000000) { // 5MB size limit
        setError('Image size should not exceed 5MB');
        return;
      }
      setError(null);
      setSelectedImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {
    if (!selectedImage) {
      setError('No image selected');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedImage);

    try {
      const response = await axios.post('http://localhost:8000/upload', formData);
      if (response.status === 200) {
        alert('Image uploaded successfully');
      }
    } catch (err) {
      setError('Error uploading image');
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 w-full ">
      <label htmlFor="fileInput" className="cursor-pointer w-full ">
        <div className="ml-[46px] mt-5 flex w-[82%] rounded-[32px] h-80 bg-gray-300 px-14 py-[154px] lg:w-full lg:py-8 md:ml-0 items-center justify-center overflow-hidden" 
        style={{ backgroundImage: `url(${addImage})` }}>
          {/* {preview ? (
            
            <img src={addImage} alt="Preview" className="object-cover w-full h-full" />
          ) : (
            <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg border border-gray-300">
              <div className="text-gray-500">No image selected</div>
            </div>
          )} */}
        </div>
      </label>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
        id="fileInput"
      />
      {error && <p className="text-red-500">{error}</p>}
      <button
        onClick={handleSubmit}
        className="w-full py-2 bg-green-700 text-white rounded-md"
      >
        Confirm
      </button>
    </div>
  );
};

export default ImageUpload;
