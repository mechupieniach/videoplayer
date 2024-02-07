export const CurrentTimeInput = () => {
    const currentTimeInput = document.createElement('input') as HTMLInputElement
    currentTimeInput.readOnly
    currentTimeInput.value = "00:00:00"
    return currentTimeInput
}