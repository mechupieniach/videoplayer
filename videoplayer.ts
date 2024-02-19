import './videoplayer.css'
import { Container } from "./src/Container/Container"
import { ContainerVideo } from "./src/ContainerVideo/ContainerVideo"
import { CurrentTimeInput } from "./src/ContainerLivechat/CurrentTimeInput"
import { ContainerLivechat } from './src/ContainerLivechat/ContainerLivechat'

const currentTimeInput = CurrentTimeInput()

Container({ children: [ ContainerVideo(currentTimeInput), ContainerLivechat(currentTimeInput) ] })





        