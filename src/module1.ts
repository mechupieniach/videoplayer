export const createContainer = () => {
    const container = document.getElementById('container') as HTMLDivElement
    container.className = 'container'
    return container
}

export const createVideoElement = () => {
    const videoElement = document.createElement('video') as HTMLVideoElement 
    videoElement.src = './coolvideo.mp4'
    return videoElement
}

export const createButton = (info: string, type: 'submit' | 'button') => {
    const Button = document.createElement('button') as HTMLButtonElement
    Button.innerHTML = info
    Button.type = type
    return Button
}

export const createRecordList = () => {
    const recordList = document.createElement('ul') as HTMLUListElement
    recordList. innerHTML = 'Live description:'
    return recordList
}



