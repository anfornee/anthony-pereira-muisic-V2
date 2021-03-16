import React, { useRef, useEffect } from 'react'

const Canvas = props => {
  const canvasRef = useRef(null)

  const drawCanvas = (c, canvas) => {
    const clear = () => {
      c.fillStyle = '#000'
      c.fillRect(0, 0, canvas.width, canvas.height)
    }

    const makeStars = count => {
      const out = []
      for (let i = 0; i < count; i++) {
        const s = {
          x: Math.random() * 1600 - 800,
          y: Math.random() * 900 - 450,
          z: Math.random() * 1000
        }
        out.push(s)
      }
      return out
    }

    const stars = makeStars(10000)

    const putPixel = (c, x, y, brightness) => {
      const intensity = brightness * 255
      const rgb = 'rgb(' + intensity + ',' + intensity + ',' + intensity + ')'
      c.fillStyle = rgb
      c.fillRect(x, y, 1.25, 1.25)
    }

    const moveStars = distance => {
      const count = stars.length
      for (let i = 0; i < count; i++) {
        const s = stars[i]
        s.z -= distance
        while (s.z <= 1) {
          s.z += 1000
        }
      }
    }

    let prevTime
    const init = time => {
      prevTime = time
      window.requestAnimationFrame(tick)
    }

    window.requestAnimationFrame(init)

    const tick = time => {
      const elapsed = time - prevTime
      prevTime = time

      moveStars(elapsed * 0.03)

      clear()

      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2

      const count = stars.length
      for (let i = 0; i < count; i++) {
        const star = stars[i]

        const x = cx + star.x / (star.z * 0.00125)
        const y = cy + star.y / (star.z * 0.00125)

        if (x < 0 || x >= window.innerWidth || y < 0 || y >= window.innerHeight) {
          continue
        }

        const d = (star.z / 1000.0)
        const b = 1 - d * d

        putPixel(c, x, y, b)
      }

      window.requestAnimationFrame(tick)
    }
  }

  const setCanvasExtents = canvas => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  useEffect(() => {
    const canvas = canvasRef.current
    setCanvasExtents(canvas)
    const c = canvas.getContext('2d')
    drawCanvas(c, canvas)
    window.onresize = () => {
      setCanvasExtents(canvas)
    }
  }, [])

  return <canvas id='bg-canvas' ref={canvasRef} {...props} />
}

export default Canvas
