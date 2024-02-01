import * as M1 from './src/module1'
import * as M2 from './src/module2'
import * as M3 from './src/module3'

const container = M1.createContainer()
const videoElement = M1.createVideoElement()
const pauseButton = M1.createButton('pause', 'button')
const stopButton = M1.createButton('stop', 'button')
const playButton = M1.createButton('play', 'button')
const recordList = M1.createRecordList()
const volumeInput = M2.createVolumeInput()
const progressInput = M2.createProgressInput()
const labelForVolume = M2.createLabel('Volume', volumeInput)
const labelForProgress = M2.createLabel('Progress', progressInput)
const formElement = M3.createForm()
const currentTime = M3.CreateCurrentTime()
const description = M3.createDescription()
const submitButton = M1.createButton('submit', 'submit')
const labelForTime = M2.createLabel('Current Time', currentTime)
const labelForDesc = M2.createLabel('Description', description)
const controls = M3.createControls()
let volumeLevel: number|string = 0 

const controlsArray = [playButton, pauseButton, stopButton, labelForVolume, labelForProgress]
controlsArray.forEach((Element: HTMLButtonElement | HTMLLabelElement) => {
    controls.appendChild(Element)
} )

const formArray = [labelForTime, labelForDesc, submitButton]
formArray.forEach((Element: HTMLLabelElement | HTMLButtonElement) => {
    formElement.appendChild(Element)
})

const Video = document.createElement('div')
Video.appendChild(videoElement)
Video.appendChild(controls)

const livechat = document.createElement('div')
livechat.appendChild(formElement)
livechat.appendChild(recordList)

container?.appendChild(Video)
container?.appendChild(livechat)


const onTimeChange = (event: Event) => {
    const eventElement = event.target as HTMLVideoElement
    if (eventElement){
        currentTime.value = getFormattedTime(eventElement.currentTime)
    }
}
const play = async () =>  {
    videoElement.addEventListener("timeupdate", onTimeChange);
    videoElement.play() 
}
    
const pause = () => {
    videoElement.pause()
}
const stopVideo = () => {
    videoElement.pause()
    videoElement.currentTime = 0
    currentTime.value = '00:00:00'
    videoElement.removeEventListener("timeupdate", onTimeChange)
} 

volumeInput.addEventListener('change', (event: Event) => {
    const {target} = event
    volumeLevel = (target as HTMLInputElement).value
    videoElement.volume = +volumeLevel/100
})

const change = () => {
    const time = progressInput.value as unknown as number / 100 * videoElement.duration
    videoElement.currentTime = time;
}

const getFormattedTime = (time: number) => {
    const seconds = Math.floor(time);
    const minutes = seconds / 60 < 1 ? 0 : Math.floor(seconds / 60)
    const hours = minutes / 60 < 1 ? 0 : Math.floor(minutes / 60)
        return `${hours < 10 ? "0" + hours : hours}`
        + `:${minutes % 60 < 10 ? "0" + minutes % 60 : minutes % 60}`
        + `:${seconds % 60 < 10 ? "0" + seconds % 60 : seconds % 60}`
}

const addList = (event: SubmitEvent) => {
    event.preventDefault()

    let record = currentTime.value + " : " + description.value
    
    let li = document.createElement("li");
    li.innerHTML = record
    description.value = ''

    recordList.children.length === 0
        ?
        recordList.appendChild(li)
        :
        recordList.insertBefore(li, recordList.children[0])
    console.log(description.value)
}

formElement.addEventListener('submit', addList)
playButton.addEventListener('click', play)
pauseButton.addEventListener('click', pause)
stopButton.addEventListener('click', stopVideo)
progressInput.addEventListener('click', change)
        