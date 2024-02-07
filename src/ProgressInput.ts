export const ProgressInput = (onClick: () => void) => {
    const progressInput = document.createElement('input') as HTMLInputElement
    progressInput.type = 'range'
    progressInput.min = '0'
    progressInput.max = '100'
    progressInput.value = '0'
    progressInput.onclick = () => onClick()
    return progressInput
}