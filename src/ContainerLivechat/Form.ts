import { Button } from "../Button/Button"
import { Label } from "../Label/Label"
import { RecordList } from "../RecordList/RecordList"
import { CurrentTimeInput } from "./CurrentTimeInput"
import { Description } from "./Description"

export const Form = (onSubmit: () => void) => {
    const formElement = document.createElement('form') as HTMLFormElement
    // const currentTimeInput = CurrentTimeInput()
    // const description = Description()
    // formElement.appendChild(Label('Current Time', currentTimeInput))
    // formElement.appendChild(Label('Description', description))
    // formElement.appendChild(Button('submit', 'submit', () => {}))
    formElement.onsubmit = () => onSubmit()
    return formElement
}
