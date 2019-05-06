import React from "react"
import styles from "./switch.module.css"
const Switch = ({ checked, onToggle }) => {
  return (
    <label class={styles.switch}>
      <input onChange={onToggle} type="checkbox" checked={checked} />
      <span className={`${styles.slider} ${styles.round}`} />
    </label>
  )
}

export default Switch
