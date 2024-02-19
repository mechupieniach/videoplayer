export const addList = (event: Event,
    recordList: HTMLUListElement,
    currentTimeInput: HTMLInputElement,
    description: HTMLInputElement) => {
    event.preventDefault()
    let record = currentTimeInput.value + " : " + description.value
    let li = document.createElement("li");
    li.innerHTML = record
    description.value = ''

    recordList.children.length === 0
        ?
        recordList.appendChild(li)
        :
        recordList.insertBefore(li, recordList.children[0])
}