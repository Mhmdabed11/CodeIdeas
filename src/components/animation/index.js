import React, { useEffect, useRef } from "react"
import * as THREE from "three"
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls"
import { Canvas } from "./animation.style"
import { generateRandomNumber } from "../../utils/generateRandomNumber"

export default function Animation() {
  const myCanvas = useRef(null)

  useEffect(() => {
    let renderer,
      camera,
      controls,
      scene,
      cube,
      width = window.innerWidth,
      height = window.innerHeight

    const drawShapes = () => {
      //CUBE

      const geometry = new THREE.BoxGeometry(10, 10, 10)
      const material = new THREE.MeshBasicMaterial({
        color: 0x00ff00,
      })
      cube = new THREE.Mesh(geometry, material)
      scene.add(cube)

      camera.position.z = 5
    }
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
      controls.handleResize()
    }
    const init = () => {
      //SCENE
      scene = new THREE.Scene()

      //CAMERA
      camera = new THREE.PerspectiveCamera(70, width / height, 0.1, 1000)

      renderer = new THREE.WebGLRenderer({
        canvas: myCanvas.current,
        antialias: true,
      })
      renderer.setClearColor(0x111111)
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(width, height)

      //CONTROLS
      controls = new TrackballControls(camera, renderer.domElement)
      controls.addEventListener("change", render)
      window.addEventListener("resize", onWindowResize, false)
    }
    const animate = () => {
      requestAnimationFrame(animate)
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
      render()
      controls.update()
    }
    const render = () => {
      renderer.render(scene, camera)
    }
    init()
    drawShapes()
    animate()
    render()
  }, [])

  return <Canvas ref={myCanvas} />
}
