import { Form } from './Form'
import { RecordList } from '../RecordList/RecordList'
import { Description } from './Description'
import { addList } from '../AddList'
import { Label } from '../Label/Label'
import { Button } from '../Button/Button'

export const ContainerLivechat = (currentTimeInput: HTMLInputElement) => {
    const description = Description()
    const recordList = RecordList()
    const submitEvent = new Event('submit')
    const formElement = Form(() => addList(submitEvent, recordList, currentTimeInput, description))
    const submitButton = Button('submit', 'submit', () => {})
    const labelForTime = Label('Current Time', currentTimeInput)
    const labelForDesc = Label('Description', description)

    formElement.appendChild(labelForTime)
    formElement.appendChild(labelForDesc)
    formElement.appendChild(submitButton)

    const ContainerLivechat = document.createElement('div')
    ContainerLivechat.appendChild(formElement)
    ContainerLivechat.appendChild(recordList)
    return ContainerLivechat
}
