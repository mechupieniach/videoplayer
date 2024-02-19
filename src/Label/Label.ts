import './Label.css'

export const Label = (label: string, element: HTMLInputElement) => {
    const labelElement = document.createElement('label')
    labelElement.innerHTML = label
    labelElement.appendChild(element)
    labelElement.className = 'label'
    return labelElement
}