"use client"
import { useEffect, useState, useRef } from "react"
import { CornersOut, PlayCircle } from "@phosphor-icons/react"

interface VideoProp{
    media_url: string
}

export const VideoPlayer: React.FC<VideoProp> = ({media_url}) =>{
    
    const videoRef = useRef<any>(null)

    const [ playing, setPlaying] = useState<boolean>(false)
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);

    const toggle = () => {

        if(videoRef.current){

            if(playing){
                videoRef.current.pause()
            }
            else{
                //pause all other video

                document.dispatchEvent(new Event("pauseOtherVideos"))

                videoRef.current.play()

            }

            setPlaying(prev => !prev)
        }
    }

    const handleClick = () => {
        toggle()
    }

    useEffect(() => {

        const pauseOtherVideos = () => {

            const allVideos = document.querySelectorAll("video")
    
            allVideos.forEach((video) => {
                if( video !== videoRef.current){
                    video.pause()
                    setPlaying(() => false)
                }
            })

        }

        document.addEventListener("pauseOtherVideos",pauseOtherVideos)

        const videoElement = videoRef.current

        videoElement.addEventListener('timeupdate', () => {
            setCurrentTime(videoElement.currentTime);
          });
      
        videoElement.addEventListener('durationchange', () => {
            setDuration(videoElement.duration);
        });

        return () => {
            document.removeEventListener("pauseOtherVideos", pauseOtherVideos)
            videoElement.removeEventListener('timeupdate', () => {});
            videoElement.removeEventListener('durationchange', () => {});
        }

    },[])

    const handleProgressChange = (e:any) => {
        const newTime = parseFloat(e.target.value);
        setCurrentTime(newTime);
    
        const videoElement = videoRef.current;
        videoElement.currentTime = newTime;
    };

    const progressPercentage = (currentTime / duration) * 100 + '%';

    const toggleFullScreen = () => {
        const videoElement = videoRef.current;
    
        if (videoElement.requestFullscreen) {
          videoElement.requestFullscreen();
        } else if (videoElement.mozRequestFullScreen) {
          videoElement.mozRequestFullScreen();
        } else if (videoElement.webkitRequestFullscreen) {
          videoElement.webkitRequestFullscreen();
        } else if (videoElement.msRequestFullscreen) {
          videoElement.msRequestFullscreen();
        }
    };

    return(
        <div className="relative bg-black w-full h-[400px]" >
            <video
            ref={videoRef}
            controls = {false}
            controlsList="nodownload"
            onClick={handleClick}
            onPause={() => setPlaying(() => false)}
            className="absolute top-0 left-0 w-full cursor-pointer h-full object-cover"
            >
            <source src={media_url} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
            {!playing && (
                <button
                onClick={handleClick}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-75 p-2"
                >
                <PlayCircle size={48} color="#4db7fe" weight="fill" />
                </button>
            )}
            
            {playing && (
                <button
                className="absolute top-2 right-2 p-2"
                onClick={toggleFullScreen}
                title="Full-Screen"
                >
                    <CornersOut size={28} color="white" weight="fill" />
                </button>
            )}

            {playing && (
                <input
                    type="range"
                    min="0"
                    max={duration}
                    step="1"
                    value={currentTime}
                    onChange={handleProgressChange}
                    className="absolute bottom-2 left-4 w-[80%] h-2 bg-gray-200 appearance-none rounded-md outline-none"
                    style={{
                        background: `linear-gradient(to right, #4db7fe ${progressPercentage}, transparent ${progressPercentage})`,
                    }}
                />
            )}
            
        </div>
    )
}