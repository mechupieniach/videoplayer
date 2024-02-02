export const Description = () => {
    const description = document.createElement('input') as HTMLInputElement
    description.type = 'text'
    description.placeholder = 'describe'
    return description
}