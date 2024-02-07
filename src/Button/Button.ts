import './Button.css'

export const Button = (label: string, type: 'submit' | 'button', onClick: () => void) => {
    const Button = document.createElement('button') as HTMLButtonElement
    Button.innerHTML = label
    Button.type = type
    Button.className = 'button'
    Button.onclick = () => onClick()
    return Button
}