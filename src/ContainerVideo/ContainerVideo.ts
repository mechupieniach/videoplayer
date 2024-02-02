import { Button } from "../Button/Button"
import { Controls } from "../Controls/Controls"
import { Label } from "../Label/Label"
import { ProgressInput } from "../ProgressInput"
import { VolumeInput } from "../VolumeInput"
import { VideoElement } from "../VideoElement/VideoElement"
import { getFormattedTime } from "./helpers"
import { changeProgress, pauseVideo, playVideo, stopVideo } from "./actions"

export const ContainerVideo = (currentTimeInput: HTMLInputElement) => {
    const onTimeChange = (event: Event) => {
        const eventElement = event.target as HTMLVideoElement
        if (eventElement){
            currentTimeInput.value = getFormattedTime(eventElement.currentTime)
        }
    }

    const onVoulmeChange = (event: Event) => {
        const { target } = event
        videoElement.volume = +(target as HTMLInputElement).value/100
    }

    const containerVideo = document.createElement('div') as HTMLDivElement
    const videoElement = VideoElement()
    const progressInput = ProgressInput(() => changeProgress(videoElement, progressInput))
    const volumeInput = VolumeInput(onVoulmeChange)
    const pauseButton = Button('pause', 'button', () => pauseVideo(videoElement))
    const stopButton = Button('stop', 'button', () => stopVideo(videoElement, currentTimeInput, onTimeChange))
    const playButton = Button('play', 'button', () => playVideo(videoElement, onTimeChange))

    containerVideo.appendChild(videoElement)
    containerVideo.appendChild(Controls([
        playButton,
        pauseButton,
        stopButton,
        Label('Volume', volumeInput),
        Label('Progress', progressInput)
    ]))

    return containerVideo
}