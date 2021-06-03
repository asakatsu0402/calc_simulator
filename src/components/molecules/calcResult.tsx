// Modules
import React from "react"
// Components

// *************** Type *************** //
type Props = {
  sum?: any
}

export const CalcResult: React.VFC<Props> = (
  props: Props
) => {
  // *************** Const *************** //
  console.log (props.sum)

  // *************** JSX *************** //
  return (
    <div>
      <ul>
        { props.sum.map((sum: any, i: number) => (
          <li key={i}>
            <p>{sum.label}</p>
            <p>￥{sum.amount}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}