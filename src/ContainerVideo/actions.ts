export const playVideo = async (
    videoElement: HTMLVideoElement,
    onTimeChange: (event: Event) => void
) =>  {
    videoElement.addEventListener("timeupdate", onTimeChange);
    videoElement.play() 
}
    
export const pauseVideo = (videoElement: HTMLVideoElement) => {
    videoElement.pause()
}

export const stopVideo = (
    videoElement: HTMLVideoElement,
    inputElement: HTMLInputElement,
    onTimeChange: (event: Event) => void
) => {
    videoElement.pause()
    videoElement.currentTime = 0
    inputElement.value = '00:00:00'
    videoElement.removeEventListener("timeupdate", onTimeChange)
} 

export const changeProgress = (
    videoElement: HTMLVideoElement,
    inputElement: HTMLInputElement
) => {
    const time = +inputElement.value / 100 * videoElement.duration
    videoElement.currentTime = time;
}