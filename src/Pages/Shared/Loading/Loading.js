import React from 'react';
import laoder from '../../../Resources/Images/loader3.gif';

const Loading = () => {
    return (
      <div className="text-center">
        <img
          className="mx-auto"
          src={laoder}
          alt="Loading..."
        />
      </div>
    );
};

export default Loading;