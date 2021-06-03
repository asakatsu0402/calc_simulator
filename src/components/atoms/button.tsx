// Modules
import React from "react"

// *************** Type *************** //
type Props = {
  className?: string
  text: any
  disabled?: boolean
  function?: any
}

export const Button: React.VFC<Props> = (
  props: Props
) => (
  // *************** JSX *************** //
  <button
    className={props.className}
    disabled={!!props.disabled}
    onClick={props.function}
  >
    {props.text}
  </button>
)