import './Container.css'

export const Container = ({ children }: { children: HTMLElement[]}) => {
    const container = document.getElementById('container') as HTMLDivElement
    container.className = 'container'
    children.forEach(child => {
        container.appendChild(child)
    })
    return container
}