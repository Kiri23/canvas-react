const log = i => console.log(i) // log(info) instead of console.log(info)
import React from 'react'




class Circle extends React.Component {
  constructor(props) {
    super(props)
    log(props)
    this.context = this.props.context
    this.x = this.props.x
    this.y = this.props.y
    this.radius = this.props.radius
    this.start = this.props.start
    this.end = this.props.end
    this.clockwise = this.props.clockwise

  }

  draw() {
    const ctx = this.context
    ctx.beginPath()
    ctx.save()
    ctx.fillStyle = '#3AdA28'
    ctx.strokeStyle = '#6AFA88'
    ctx.lineWidth = '10'
    ctx.arc(this.x, this.y, this.radius, this.start, this.end, this.clockwise)
    ctx.stroke()
    ctx.fill()
    ctx.restore()
    ctx.closePath()
    return this
  }
  move(mouse) {
    this.x += 0.25

    return this
  }
  followMouse(mouse) {
    if (mouse) {
      this.x = mouse.x
      this.y = mouse.y
    }

    return this

  }
}

export default Circle