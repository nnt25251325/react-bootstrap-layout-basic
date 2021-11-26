import React from 'react';

import './style.scss';

export const MainFooter = ({ className = '', ...rest }) => {
  return (
    <div className={`c-main-footer text-center ${className}`} {...rest}>
      Copyright &copy; 2021
    </div>
  );
};
