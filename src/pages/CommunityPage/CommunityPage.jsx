import React from 'react';
import Navbar from '../../components/widgets/Navbar/Navbar';
import CommunityImg from '../../assets/images/communityImg.jpg';
import CountUp from 'react-countup';
import Footer from '../../components/sections/Footer/Footer';

const CommunityPage = () => {
  return (
    <div>
      <Navbar isTransparent={false} />
      <div
        className="bg-cover bg-center relative h-[70vh] mb-20"
        style={{ backgroundImage: `url(${CommunityImg})` }}
      >
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5))',
          }}
        ></div>

        {/* Content */}
        <div className="relative text-white z-10 w-1/2 gap-6 h-full flex flex-col justify-center px-14">
          <h2 className="text-white text-4xl font-bold w-[70%]">Connect, Share and Grow</h2>
          <p className='w-[70%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, ducimus.</p>
          <div className="button">
            <a href="" className="bg-primary text-xl px-4 py-1 rounded-md inline-block text-white">
              Join Now
            </a>
          </div>

          <div className="counter flex gap-10 mt-5">
            <div className="counter1 border-r-[1px] border-white pr-4">
            <CountUp end={4} className="text-2xl font-extrabold " suffix="+" />
            <p className='font-semibold text-sm'>Years of Impact</p>
            </div>
            <div className="counter2 border-r-[1px] border-white pr-4">
            <CountUp end={4} className="text-2xl font-extrabold " suffix="+" />
            <p className='font-semibold text-sm'>Batches Trained</p>
            </div>
            <div className="counter3 ">
            <CountUp end={100} className="text-2xl font-extrabold " suffix="+" />
            <p className='font-semibold text-sm'>Alumni</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CommunityPage;