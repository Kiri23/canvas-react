const log = i => console.log(i) // log(info) instead of console.log(info)
import React from 'react'
import Head from './Head'
import Body from './Body'




class BathroomMan extends React.Component {
  constructor(props) {
        super(props)
    log(props)
    this.context = props
   


  }

  draw() {
    const head = new Path2D(Head);
    const body = new Path2D(Body);
    const ctx = this.context
    ctx.beginPath()
    ctx.save()
    ctx.fillStyle="#000000"
    ctx.scale(0.2, 0.2)
    ctx.stroke(head)
    ctx.stroke(body)
    ctx.fill(head)
    ctx.fill(body)
    ctx.restore()
    ctx.closePath()
    return this
  }

  move(){
    this.x++
    this.y += 2
    return this
  }
}

export default BathroomMan