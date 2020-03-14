import React, { useEffect, useState, useCallback } from "react"

export const useWindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  const updateWindowDimensions = useCallback((width, height) => {
    setWidth(width)
    setHeight(height)
  }, [])

  useEffect(() => {
    window.addEventListener("resize", () =>
      updateWindowDimensions(window.innerWidth, window.innerHeight)
    )
    return () => {
      window.removeEventListener("resize", () =>
        updateWindowDimensions(window.innerWidth, window.innerHeight)
      )
    }
  }, [updateWindowDimensions])

  return {
    height,
    width,
  }
}
