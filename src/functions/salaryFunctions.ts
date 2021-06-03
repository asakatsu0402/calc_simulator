// config
import {
  employConfig
} from "../config/commonConfig"

export const SalaryFunctions = () => {

  const salary = {
    calcAll: (
      value: any,
      setState: Function
    ) => {
      let array = []
      for (const config of employConfig) {
        const sum = Math.round(value * config.per / 100)
        array.push({
          name: config.name,
          label: config.label,
          amount: sum
        })
      }
      // const amount = array.reduce((prev: any, current: any) =>
      //   current.name.match(/Staff/) && prev + current.amount, 0
      // )
      // console.log (amount)
      setState(array)
    }
  }

  return {
    salary
  }
}