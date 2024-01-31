const http = require('http')
const fs = require('fs/promises')

const getFiles = async () => {
    const videoplayerJs = await fs.readFile('./dist/videoplayer.bundle.js')
    const videoplayerHtml = await fs.readFile('./videoplayer.html')
    const videoplayerCss = await fs.readFile('./videoplayer.css')
    const video = await fs.readFile('./coolvideo.mp4')

    return ({
        videoplayerJs,
        videoplayerHtml,
        videoplayerCss,
        video
    })
}

http.createServer( async (request, response) => {
    const {
        videoplayerJs,
        videoplayerHtml,
        videoplayerCss,
        video
    } = await getFiles()
    switch(request.url){
        case '/':
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.write(videoplayerHtml)
            response.end()
            break
        case '/videoplayer.css':
            response.writeHead(200, {'Content-Type': 'text/css'})
            response.write(videoplayerCss)
            response.end()
            break
        case '/dist/videoplayer.bundle.js':
            response.writeHead(200, {'Content-Type': 'text/javascript'})
            response.write(videoplayerJs)
            response.end()
            break
        case '/coolvideo.mp4':
            response.writeHead(200, {'Content-Type': 'video/mp4'})
            response.write(video)
            response.end()
            break
    }
}).listen(8888)