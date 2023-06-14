import { useEffect, useRef } from 'react';

const VideoPlayer = ({ id, publicId, width, height, aspectRatio, controls, autoplay, muted, loop, ...props }) => {
    const videoRef = useRef();
    const cloudinaryRef = useRef();
    const playerRef = useRef();

    useEffect(() => {
        if (cloudinaryRef.current) return;

        cloudinaryRef.current = window.cloudinary;

        playerRef.current = cloudinaryRef.current.videoPlayer(videoRef.current, {
            cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
            secure: true,
            controls: controls,
            autoplay: autoplay,
            muted: muted,
            loop: loop,
            aspect_ratio: aspectRatio,
            public_id: publicId,
            width: width,
            height: height,
            ...props,
        });
    }, [publicId, width, height, aspectRatio, controls, autoplay, muted, loop]);

    return (
        <div
            style={{
                width: '100%',
                maxWidth: '600px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '0 auto',
            }}
        >
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    paddingTop: `${(height / width) * 100}%`,
                }}
            >
                <video
                    ref={videoRef}
                    id={id}
                    className="cld-video-player cld-fluid"
                    data-cld-public-id={publicId}
                    {...props}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            </div>
        </div>
    );
};

export default VideoPlayer;
