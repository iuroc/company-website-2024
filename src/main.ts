/// <reference types="vite/client" />
import van from 'vanjs-core'
import { getRandBGColor } from './colors'
import './main.sass'

const { a, canvas, div, img } = van.tags

const App = () => {
    const canvasEle = canvas({ width: 500, height: 200 })
    const context = canvasEle.getContext('2d')
    handleCanvas(context as CanvasRenderingContext2D, canvasEle)
    const footerEle = div({ class: 'footer' },
        a({ href: 'http://beian.miit.gov.cn/', target: '_blank' }, '赣ICP备2023013639号-1'),
        div({ class: 'vr' }),
        img({ src: 'beian_icon.png' }),
        a({ href: 'https://beian.mps.gov.cn/#/query/webSearch?code=36010802000940', target: '_blank' }, '赣公网安备36010802000940')
    )

    return div({ class: 'box' },
        canvasEle,
        div({ class: 'title' }, '爱优鹏专业软著代理'),
        div({ class: 'link' },
            a({ href: 'https://work.weixin.qq.com/kfid/kfc1a9168eac5a0e7fd', target: '_blank', style: 'background-color: #2775b6;' }, '联系客服'),
            a({ href: 'https://item.taobao.com/item.htm?id=725774265597', target: '_blank', style: 'background-color: #43b244; margin-left: 10px;' }, '淘宝下单'),
        ),
        footerEle
    )
}

const handleCanvas = (ctx: CanvasRenderingContext2D, ele: HTMLCanvasElement) => {
    const myFill = () => {
        for (let i = 0; i < 10; i++) {
            const space = 5
            const width = (ele.width - 11 * space) / 10
            const height = Math.random() * ele.height - 10
            const x = i * (width + space) + space
            const y = ele.height - height
            ctx.fillStyle = `rgb(${getRandBGColor()})`
            ctx.fillRect(x, y - 1, width, height)
            ctx.beginPath()
            ctx.moveTo(x, y)
            ctx.arc(x + 10, y, 10, Math.PI, -0.5 * Math.PI)
            ctx.lineTo(x + width - 10, y - 10)
            ctx.arc(x + width - 10, y, 10, -0.5 * Math.PI, 0)
            ctx.fill()
            ctx.closePath()
        }
    }
    setInterval(() => {
        ctx.clearRect(0, 0, ele.width, ele.height)
        myFill()
    }, 500)
    myFill()
}

van.add(document.body, App())