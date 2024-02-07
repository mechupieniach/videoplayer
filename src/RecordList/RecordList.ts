import './RecordList.css'

export const RecordList = () => {
    const recordList = document.createElement('ul') as HTMLUListElement
    recordList. innerHTML = 'Live description:'
    return recordList
}