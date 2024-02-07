import './Controls.css'

export const Controls = (children: HTMLElement[]) => {
    const controls = document.createElement('div')
    controls.className = 'controls'
    children.forEach(child => controls.appendChild(child))
    return controls
}