import { useEffect, useRef } from "react"

export const FundoEstrela = () => {
  const canvasRef = useRef(null)
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const estrelas = []
    const cometas = []

    const numStars = Math.floor(width * height / 3500)

    for (let i = 0; i < numStars; i++){
      estrelas.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.3 + 0.2,
        alpha: Math.random() * 0.8 + 0.2,
        twinkle: Math.random() * 0.04 + 0.005,
        depth: Math.random() * 0.6 + 0.4
      })
    }

    for (let i = 0; i < 6; i++){
      cometas.push({
        x: Math.random() * width,
        y: Math.random() * height / 2,
        speedX: 0.3 + Math.random() * 0.4,
        speedY: 0.1 + Math.random() * 0.2,
        length: 150 + Math.random() * 100,
        opacity: 0.4 + Math.random() * 0.3
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = "black"
      ctx.fillRect(0, 0, width, height)

      for (const estrela of estrelas){
        estrela.alpha += estrela.twinkle * (Math.random() > 0.5 ? 1 : -1)
        estrela.alpha = Math.min(Math.max(estrela.alpha, 0.15), 1)

        const offsetX = (mouse.current.x - width / 2) * estrela.depth * 0.02
        const offsetY = (mouse.current.y - height / 2) * estrela.depth * 0.02

        const x = estrela.x + offsetX
        const y = estrela.y + offsetY

        ctx.beginPath()
        ctx.arc(x, y, estrela.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${estrela.alpha})`
        ctx.shadowBlur = 8
        ctx.shadowColor = "white"
        ctx.fill()
      }

      for (const cometa of cometas){
        const gradiente = ctx.createLinearGradient(
          cometa.x,
          cometa.y,
          cometa.x - cometa.length,
          cometa.y - cometa.length / 3
        )
        gradiente.addColorStop(0, `rgba(255,255,255,${cometa.opacity})`)
        gradiente.addColorStop(1, "rgba(255,255,255,0)")
        ctx.strokeStyle = gradiente
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(cometa.x, cometa.y)
        ctx.lineTo(cometa.x - cometa.length, cometa.y - cometa.length / 3)
        ctx.stroke()

        cometa.x += cometa.speedX
        cometa.y += cometa.speedY

        if (cometa.x - cometa.length > width || cometa.y - cometa.length > height){
          cometa.x = -100
          cometa.y = Math.random() * height / 2
        }
      }

      requestAnimationFrame(draw)
    }

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    const resize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", resize)
    draw()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />
}
