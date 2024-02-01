export const createProgressInput = () => {
    const progressInput = document.createElement('input') as HTMLInputElement
    progressInput.type = 'range'
    progressInput.min = '0'
    progressInput.max = '100'
    progressInput.value = '0'
    return progressInput
}

export const createLabel = (label: string, element: HTMLInputElement) => {
    const labelElement = document.createElement('label')
    labelElement.innerHTML = label
    labelElement.appendChild(element)
    return labelElement
}

export const createVolumeInput = () => {
    const volumeInput = document.createElement('input') as HTMLInputElement
    volumeInput.type = 'range'
    volumeInput.min = '0'
    volumeInput.max = '100'
    volumeInput.value = '0'
    return volumeInput
}

