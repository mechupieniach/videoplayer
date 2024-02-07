import { Button } from "./src/Button/Button"
import { Container } from "./src/Container/Container"
import { ContainerVideo } from "./src/ContainerVideo/ContainerVideo"
import { CurrentTimeInput } from "./src/CurrentTimeInput"
import { Description } from "./src/Description"
import { Form } from "./src/Form"
import { Label } from "./src/Label/Label"
import { RecordList } from "./src/RecordList/RecordList"
import './videoplayer.css'

const recordList = RecordList()
const formElement = Form()
const description = Description()
const submitButton = Button('submit', 'submit', () => {})
const currentTimeInput = CurrentTimeInput()
const labelForTime = Label('Current Time', currentTimeInput)
const labelForDesc = Label('Description', description)

const formArray = [labelForTime, labelForDesc, submitButton]
formArray.forEach((Element: HTMLLabelElement | HTMLButtonElement) => {
    formElement.appendChild(Element)
})


const ContainerLivechat = document.createElement('div')
ContainerLivechat.appendChild(formElement)
ContainerLivechat.appendChild(recordList)


Container({ children: [ ContainerVideo(currentTimeInput), ContainerLivechat ] })


const addList = (event: SubmitEvent) => {
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
    console.log(description.value)
}

formElement.addEventListener('submit', addList)
        