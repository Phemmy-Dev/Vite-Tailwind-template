import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({ id, publicId, ...props }) => {
  const videoRef = useRef();
  const cloudinaryRef = useRef();
  const playerRef = useRef();

  // Store the Cloudinary window instance to a ref when the page renders

  useEffect(() => {
    if ( cloudinaryRef.current ) return;

    cloudinaryRef.current = window.cloudinary;

    playerRef.current = cloudinaryRef.current.videoPlayer(videoRef.current, {
      cloud_name: 'dvhepzlgr',
      secure: true
    });
  }, []);

  return (
    <div className="flex">
        <div className='w-1/2'>
        d
        </div>
        <div className='w-full aspect-w-16 aspect-h-9'>
      <video
        ref={videoRef}
        id={id}
        className="cld-video-player cld-fluid"
        controls
        autoPlay
        data-cld-public-id="h1jvveryfmppkpu6bres"
        {...props}
      />
    </div>
    </div>
  )
}
VideoPlayer.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    publicId: PropTypes.string.isRequired,
  };

export default VideoPlayer;