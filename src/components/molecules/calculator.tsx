// Modules
import React from "react"
// Components
import { Label } from "../atoms/label"
import { Input } from "../atoms/input"

// *************** Type *************** //
type Props = {
  setState: Function
}

export const Calculator: React.VFC<Props> = (
  props: Props
) => {
  // *************** JSX *************** //
  return (
    <ul>
      <li>
        <Label
          htmlFor="price"
          text="単価金額"
        />
        <Input
          name="price"
          type="number"
          function={(e: React.ChangeEvent<HTMLInputElement>) =>
            props.setState(e.target.value)
          }
        />
      </li>
    </ul>
  )
}
