import React, { useState, useRef, useEffect } from 'react'
import config from '../config/portfolio'
import './ProfilePhoto.css'

const ProfilePhoto = () => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const size = 320

    canvas.width = size
    canvas.height = size

    // Check if a custom photo path is provided
    if (config.personal.photo) {
      const img = new Image()
      img.onload = () => {
        // Calculate crop to make it square and centered
        const minDimension = Math.min(img.width, img.height)
        const sourceX = (img.width - minDimension) / 2
        const sourceY = (img.height - minDimension) / 2

        // Draw cropped and resized image
        ctx.drawImage(
          img,
          sourceX,
          sourceY,
          minDimension,
          minDimension,
          0,
          0,
          size,
          size
        )
        setImageLoaded(true)
      }
      img.onerror = () => {
        // If image fails to load, show default gradient
        drawDefaultGradient(ctx, size)
        setImageLoaded(true)
      }
      img.src = config.personal.photo
    } else {
      // Create a default gradient image
      drawDefaultGradient(ctx, size)
      setImageLoaded(true)
    }
  }, [])

  const drawDefaultGradient = (ctx, size) => {
    // Create a beautiful gradient background
    const gradient = ctx.createLinearGradient(0, 0, size, size)
    gradient.addColorStop(0, '#ff6b9d')
    gradient.addColorStop(0.5, '#c77dff')
    gradient.addColorStop(1, '#e0b0ff')

    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, size, size)

    // Add some decorative elements
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)'
    ctx.beginPath()
    ctx.arc(size * 0.3, size * 0.3, size * 0.15, 0, Math.PI * 2)
    ctx.fill()

    ctx.beginPath()
    ctx.arc(size * 0.7, size * 0.7, size * 0.2, 0, Math.PI * 2)
    ctx.fill()
  }

  return (
    <div className="profile-photo-container">
      <div className="photo-wrapper">
        <canvas
          ref={canvasRef}
          className={`profile-photo ${imageLoaded ? 'loaded' : ''}`}
        />
        <div className="photo-border"></div>
      </div>
    </div>
  )
}

export default ProfilePhoto

