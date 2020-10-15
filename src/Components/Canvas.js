import React, { useRef, useEffect } from 'react'

const Canvas = props => {
  const canvasRef = useRef(null)

  const drawStars = c => {
    // Draw less or more stores depending on screen size
    const count = window.innerWidth < 640 ? 300 : 700
    for (let i = 0; i < count; i++) {
      const x = Math.random() * window.innerWidth
      const y = Math.random() * window.innerHeight
      const radius = Math.random() * Math.floor(1)
      c.beginPath()
      c.arc(x, y, radius, 0, Math.PI * 2, false)
      c.strokeStyle = '#FFF'
      c.stroke()
      c.fillStyle = '#FFF'
      c.fill()
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    const c = canvas.getContext('2d')
    drawStars(c)
  }, [])

  return <canvas id='bg-canvas' ref={canvasRef} {...props} />
}

export default Canvas
