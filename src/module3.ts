export const createForm = () => {
    const formElement = document.createElement('form') as HTMLFormElement
    return formElement
}

export const CreateCurrentTime = () => {
    const currentTime = document.createElement('input') as HTMLInputElement
    currentTime.readOnly
    currentTime.value = "00:00:00"
    return currentTime
}

export const createDescription = () => {
    const description = document.createElement('input') as HTMLInputElement
    description.type = 'text'
    description.placeholder = 'describe'
    return description
}

export const createControls = () => {
    const controls = document.createElement('div')
    controls.className = 'controls'
    return controls
}
    