import React from "react"
import { Input, Label, Span } from "./switch.style.js"
const Switch = ({ isOn, onToggle }) => {
  return (
    <>
      <Input
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
        checked={isOn}
        onChange={onToggle}
      />
      <Label className="react-switch-label" htmlFor={`react-switch-new`}>
        <span className={`react-switch-button`} />
      </Label>
    </>
  )
}

export default Switch
