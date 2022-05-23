import React from 'react';

const Reviews = () => {
    return (
      <div>
        <div className="flex flex-col w-full">
          <div className="grid card bg-base-200  place-items-center">
            <div className="card w-80 bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="card-actions justify-center">
                  <div className="avatar">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src="https://api.lorem.space/image/face?hash=3174" />
                    </div>
                  </div>
                </div>
                <p>
                  We are using cookies for no reason.We are using cookies for no
                  reason.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Reviews;