import './VideoElement.css'

export const VideoElement = () => {
    const videoElement = document.createElement('video') as HTMLVideoElement 
    videoElement.src = './coolvideo.mp4'
    videoElement.className = 'video'
    return videoElement
}

