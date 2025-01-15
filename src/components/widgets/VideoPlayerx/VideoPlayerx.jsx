
import Plyr from 'plyr-react';
import 'plyr-react/plyr.css';
import Video from '../../../assets/images/video3.mp4';

const VideoPlayerx = () => {
  
  const videoSource = {
    type: 'video',
    sources: [
      {
        src: Video,
        type: 'video/mp4',
      },
    ],
  };

  const options = {
    autoplay: false,
    muted: false,
    controls: ['play', 'progress', 'volume', 'fullscreen'],
  };

  
  
  return (
    <div className='relative w-full max-w-xl mx-auto p-4 bg-gray-800 rounded-lg shadow-lg'>
      <Plyr source={videoSource} options={options}/>
    </div>
  )
}

export default VideoPlayerx
