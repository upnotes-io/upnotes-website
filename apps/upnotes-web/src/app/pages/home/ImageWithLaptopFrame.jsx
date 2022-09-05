import React from 'react';

const ImageWithLaptopFrame = function (props) {
  const { imageUrl } = props;
  return (
    <div className="laptop">
      <div className="laptop__screen">
        <img src={imageUrl} width="1600" height="1000" alt="Screen" />
      </div>
      <div className="laptop__bottom">
        <div className="laptop__under"></div>
      </div>
      <div className="laptop__shadow"></div>
    </div>
  );
};

export default ImageWithLaptopFrame;
