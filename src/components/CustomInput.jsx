import React from 'react';

const CustomInput = ({ className, type = 'text', placeholder }) => {
  return <input type={type} placeholder={placeholder} className={className} />;
};

export default CustomInput;
