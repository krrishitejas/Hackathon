import React from 'react';
import Loader from 'react-loader-spinner';

const LoadingSpinner = () => {
  return (
    <Loader
      type="Overset"
      color="#00BFFF"
      height={100}
      width={100}
    />
  );
};

export default LoadingSpinner;