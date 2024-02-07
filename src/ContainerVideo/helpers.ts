export const getFormattedTime = (time: number) => {
    const seconds = Math.floor(time);
    const minutes = seconds / 60 < 1 ? 0 : Math.floor(seconds / 60)
    const hours = minutes / 60 < 1 ? 0 : Math.floor(minutes / 60)
        return `${hours < 10 ? "0" + hours : hours}`
        + `:${minutes % 60 < 10 ? "0" + minutes % 60 : minutes % 60}`
        + `:${seconds % 60 < 10 ? "0" + seconds % 60 : seconds % 60}`
}