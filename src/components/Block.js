import React from 'react'




class Block extends React.Component {
  constructor(props) {
        super(props)
    this.x = this.props.x
    this.y = this.props.y
    this.dy = 2
    this.width = this.props.width
    this.height = this.props.height
    this.context = this.props.context
    this.up = false
    this.down = true
    this.vh = this.props.vh
    this.vw = this.props.vw
  }

  draw() {
    const ctx = this.context
    ctx.beginPath()
    ctx.save()
    ctx.fillStyle="#F7C395";
    ctx.fillRect(this.x, this.y, this.width, this.height)
    ctx.restore()
    ctx.closePath()
    return this
  }

  move() {
    this.y++
    return this
  }
}

export default Block