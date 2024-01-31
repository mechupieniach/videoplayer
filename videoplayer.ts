const container = document.getElementById('container') as HTMLDivElement
container.className = 'container'
const videoElement = document.createElement('video') as HTMLVideoElement 
videoElement.src = './coolvideo.mp4'
let volumeLevel: number|string = 0 
const volumeInput = document.createElement('input') as HTMLInputElement
volumeInput.type = 'range'
volumeInput.min = '0'
volumeInput.max = '100'
volumeInput.value = '0'
const labelVolume = document.createElement('label')
const progressInput = document.createElement('input') as HTMLInputElement
progressInput.type = 'range'
progressInput.min = '0'
progressInput.max = '100'
progressInput.value = '0'
container?.appendChild(videoElement)

const pauseButton = document.createElement('button') as HTMLButtonElement
pauseButton.innerHTML = 'pause'
const stopButton = document.createElement('button') as HTMLButtonElement
stopButton.innerHTML = 'stop'
const playButton = document.createElement('button') as HTMLButtonElement
playButton.innerHTML = 'play'

const controls = document.createElement('div')
controls.appendChild(playButton)
controls.appendChild(pauseButton)
controls.appendChild(stopButton)
controls.appendChild(volumeInput)
controls.appendChild(progressInput)
container?.appendChild(controls)

const formElement = document.createElement('form') as HTMLFormElement
const currentTime = document.createElement('input') as HTMLInputElement
currentTime.readOnly
currentTime.value = "00:00:00"
const description = document.createElement('input') as HTMLInputElement
description.type = 'text'
description.placeholder = 'describe'
const submitButton = document.createElement('button') as HTMLButtonElement
submitButton.type = 'submit'
submitButton.innerHTML = 'submit'
formElement.appendChild(currentTime)
formElement.appendChild(description)
formElement.appendChild(submitButton)
container?.appendChild(formElement)

const recordList = document.createElement('ul') as HTMLUListElement
recordList. innerHTML = 'Live description:'


container?.appendChild(recordList)


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
    console.log('pauza')
    videoElement.pause()
}
const stopVideo = () => {
    console.log('stop')
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
        
let list = []
        
const addList = (event: SubmitEvent) => {
    event.preventDefault()

    let record = currentTime.value + " : " + description.value
    description.value = ''
    let li = document.createElement("li");
    li.innerHTML = record

    recordList.children.length === 0
        ?
        recordList.appendChild(li)
        :
        recordList.insertBefore(li, recordList.children[0])
}

        

formElement.addEventListener('submit', addList)
playButton.addEventListener('click', play)
pauseButton.addEventListener('click', pause)
stopButton.addEventListener('click', stopVideo)
progressInput.addEventListener('click', change)
        