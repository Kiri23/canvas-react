import React from 'react'
import Block from './Block'
import Circle from './Circle'
import Rectangle from './Rectangle'
import MouseEvent from '../inputs/Mouse'
const mouse = new MouseEvent()




class Canvas extends React.Component {
  componentDidMount() {
    this.updateCanvas()
  }
  updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d')
    const canvas = this.refs.canvas
    const vw = canvas.width  = window.innerWidth
    const vh = canvas.height = window.innerHeight
    
    canvas.addEventListener('mousemove', mouse.move, false);

    const block = new Block({
      x: 10,
      y: 10,
      width: vw / 2,
      height: 10,
      context: ctx,
      vw: vw,
      vh: vh
    })
    
    const circle = new Circle({
      x: 160,
      y: 100,
      radius: 50,
      context: ctx,
      start: 0,
      end: Math.PI * 2,
      clockwise: true
    })
    const rectangle = new Rectangle({
      context:ctx,
      x:(vw / 2) - 50,
      y:0,
      width:100,
      height:100
    })
    

    requestAnimationFrame(function gameLoop() {


      ctx.clearRect(0, 0, vw, vh)
      circle.draw().move()
      block.draw().move()
      rectangle.draw()
      requestAnimationFrame(gameLoop)
    })
  }
  render() {
    return (
      <canvas ref="canvas"/>
    );
  }
}



export default Canvas
