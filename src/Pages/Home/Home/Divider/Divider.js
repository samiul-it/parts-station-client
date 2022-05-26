import React from 'react';
import CountUp from "react-countup";

const Divider = () => {
    return (
      <div>
        <div className="flex flex-col w-full">
          <div className="grid  card   place-items-center ">
            <div className="stats stats-vertical text-center lg:stats-horizontal shadow">
              <div className="stat">
                <div className="stat-figure text-primary"></div>
                <div className="stat-title lg:text-4xl">Clients</div>
                <div className="stat-value text-primary lg:text-9xl">
                  <CountUp end={96} duration={5} />+
                </div>
                <div className="stat-desc">11% more than last month</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary "></div>
                <div className="stat-title  lg:text-4xl">Countries</div>
                <div className="stat-value text-yellow-400 lg:text-9xl">
                  <CountUp end={13} duration={5} />+
                </div>
                <div className="stat-desc">Service All Over the World</div>
              </div>
              <div className="stat">
                <div className="stat-figure text-secondary "></div>
                <div className="stat-title lg:text-4xl">
                  Client Satisfaction
                </div>
                <div className="stat-value text-orange-600 lg:text-9xl">
                  <CountUp end={100} duration={5} />%
                </div>
                <div className="stat-desc">We deal love with the clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Divider;