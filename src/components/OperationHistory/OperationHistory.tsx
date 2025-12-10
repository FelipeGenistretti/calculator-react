import { useEffect } from "react"
import { useCalculator } from "../../context/CalculatorContext/CalculatorContext"
import { Card } from "../Card/Card"
import { Text } from "../Text/Text"

export function OperationHistory() {

  const {history} = useCalculator()

  return (
    <Card className="py-[40px] px-[32px]">
      <Text variants="heading" as="h1" className="mb-4 text-white">
        Historico de operações
      </Text>
      <ul className="text-white flex flex-col gap-3">
        {history.map((value, idx)=>
          <Text key={`item-${idx}`} as="li">{value}</Text>
        )
        }
        
      </ul>
    </Card>
  )
}
