// Modules
import React, {
  useState
} from "react"
// Components
import { Layout } from "../layouts/layout"
import { PageHead } from "../layouts/pageHead"
import { Calculator } from "../components/molecules/calculator"
import { CalcResult } from "../components/molecules/calcResult"
import { Button } from "../components/atoms/button"
// Functions
import { SalaryFunctions } from "../functions/salaryFunctions"
// Styles
// import styles from '../styles/Home.module.scss'

export const Salary = () => {
  // *************** Const *************** //
  const { salary } = SalaryFunctions()
  const [value, setValue] = useState<number>()
  const [sum, setSum] = useState<any>([{}])
  console.log (sum)

  // *************** JSX *************** //
  return(
    <Layout>
      <PageHead
        title="給与計算"
      />
      <div>
        <Calculator
          setState={setValue}
        />
        <Button
          text="計算"
          function={() => salary.calcAll(
            value,
            setSum
          )}
        />
        <CalcResult
          sum={sum}
        />
      </div>
    </Layout>
  )
}

export default Salary