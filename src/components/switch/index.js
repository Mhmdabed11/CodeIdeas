import React from "react"
import { Input, Label, Span, Button, Toggler } from "./switch.style.js"
const Switch = ({ isOn, onToggle }) => {
  console.log(isOn)
  return (
    <Button>
      <Toggler checked={isOn} onClick={onToggle} />
    </Button>
  )
}

export default Switch
