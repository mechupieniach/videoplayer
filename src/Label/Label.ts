export const Label = (label: string, element: HTMLInputElement) => {
    const labelElement = document.createElement('label')
    labelElement.innerHTML = label
    labelElement.appendChild(element)
    return labelElement
}