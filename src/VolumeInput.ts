export const VolumeInput = (onChange: (event: Event) => void) => {
    const volumeInput = document.createElement('input') as HTMLInputElement
    volumeInput.type = 'range'
    volumeInput.min = '0'
    volumeInput.max = '100'
    volumeInput.value = '0'
    volumeInput.onchange = onChange
    return volumeInput
}