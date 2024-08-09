import React from 'react';
import ImageUpload from '../components/ImageUpload';
import backgroundPicture from '../assets/images/backgroundPicture.png';
// import Avatar1 from '../assets/images/avatar1.png';
// import Avatar2 from '../assets/images/avatar2.png';

const AddImagePage = () => {
  return (
    <div className="flex h-screen ">
      <div
        className="hidden md:block md:w-1/2 h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundPicture})` }}
      ></div>
      <div className="flex-1 flex flex-col items-center justify-center bg-white p-8">
        <h1 className="text-3xl font-bold mb-6">Upload Profile Photo</h1>
        <ImageUpload />
        <div className="mt-4 text-center">
          <p className="text-gray-500 mb-2">Or</p>
          <p className="text-gray-500">Use our Virtual avatar</p>
          {/* <div className="flex space-x-4 mt-2">
            <img src={Avatar1} alt="Avatar 1" className="w-12 h-12 rounded-full border" />
            <img src={Avatar2} alt="Avatar 2" className="w-12 h-12 rounded-full border" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AddImagePage;
