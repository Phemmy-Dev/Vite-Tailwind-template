import { Link } from 'react-router-dom';
import Navbar from '../../components/widgets/Navbar/Navbar';
import CommunityImg from '../../assets/images/communityImg.jpg';
import CountUp from 'react-countup';
// import CommunityBoxes from '../../components/widgets/CommunityBoxes/CommunityBoxes';
import CommunityJoinBox from '../../components/widgets/CommunityJoinBox/CommunityJoinBox';
import Carousel from '../../components/widgets/Carousel/Carousel';
// import CarouselCards from '../../components/widgets/CarouselCards/CarouselCards';
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
        <div className="relative text-white z-10 md:w-1/2 gap-6 h-full flex flex-col justify-center px-14">
          <h2 className="text-white text-4xl font-bold w-[70%]">Connect, Share and Grow</h2>
          <p className='w-[70%]'>Become part of a thriving network of young changemakers across Africa.</p>
          <div className="button">
          <Link to="/join" className="bg-primary text-xl font-semibold px-4 py-1 rounded-md inline-block text-white transition-all duration-300 hover:bg-blue-400 active:scale-95">
              Join Now
            </Link>
          </div>

          <div className="counter flex items-center gap-10 mt-5">
            <div className="counter1 border-r-[1px] border-white pr-4">
            <CountUp end={4} className="text-2xl font-extrabold " suffix="+" />
            <p className='font-semibold text-xs md:-sm'>Years of Impact</p>
            </div>
            <div className="counter2 border-r-[1px] border-white pr-4">
            <CountUp end={4} className="text-2xl font-extrabold " suffix="" />
            <p className='font-semibold text-xs md:text-sm'>Batches Trained</p>
            </div>
            <div className="counter3 ">
            <CountUp end={100} className="text-2xl font-extrabold " suffix="+" />
            <p className='font-semibold text-xs md:text-sm'>Alumni</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Community content */}
      {/* <div className=" md:px-10">
        <h2 className='text-center font-bold text-4xl text-primary mb-1'>Our Community</h2>
        <p className='text-center text-gray-600 text-sm mb-9'>Lorem ipsum dolor sit amet.</p>
        <div className="communityboxes mb-10 flex justify-center items-center flex-wrap gap-5">
          <Link to="/community/batch1" className="communitybox"><CommunityBoxes comtitle={"Batch 1"} /></Link>
          <Link to="/community/batch2" className="communitybox"><CommunityBoxes comtitle={"Batch 2"} /></Link>
          <Link to="/community/batch3" className="communitybox"><CommunityBoxes comtitle={"Batch 3"} /></Link>
          <Link to="/community/batch4" className="communitybox"><CommunityBoxes comtitle={"Batch 4"} /></Link>
          <Link to="/community/batch5" className="communitybox"><CommunityBoxes comtitle={"Batch 5"} /></Link>
        </div>
      </div> */}

      {/* Why Join Us */}
      <div className="md:px-10 my-20">
      <h2 className='text-center font-bold text-3xl md:text-4xl text-primary mb-3'>Why Join Our Community?</h2>
      <p className='text-center text-gray-600 text-sm mb-9 px-8 md:w-1/2 mx-auto'>Discover a thriving community where passion meets purpose. At Equipr, we provide the resources, connections, and support you need to unlock your full potential.</p>

      <div className="flex flex-col justify-center items-center md:flex-row gap-10 mx-20">

        <div className="md:w-1/2 flex flex-col gap-5">
        <CommunityJoinBox jointitle={"Events"} joindesc={"Equipr hosts engaging events such as workshops, networking sessions, and leadership training tailored to help members grow personally and professionally."} />
        <CommunityJoinBox jointitle={"Connection"} joindesc={"Expand your circle by connecting with like-minded individuals, mentors, and industry leaders. Equipr brings together a network of passionate changemakers to support and uplift each other."} />
        <CommunityJoinBox  jointitle={"Great people"} joindesc={"Surround yourself with a community of talented and driven individuals. At Equipr, you'll find friendships and collaborations that last a lifetime."} />
        </div>
        
        <div className=" w-[80%] md:w-1/2">
          <Carousel />
        </div>
      </div>


      <div className="button flex justify-center items-center mt-14">
          <Link to="/join" className="bg-primary text-xl px-4 py-1 font-semibold rounded-md inline-block text-white transition-all duration-300 hover:bg-blue-400 active:scale-95">
              Join Now
            </Link>
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default CommunityPage;