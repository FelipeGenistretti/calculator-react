import { Card } from "../Card/Card"
import { Text } from "../Text/Text"

export function OperationHistory() {
  return (
    <Card className="py-[40px] px-[32px]">
      <Text variants="heading" as="h1" className="mb-4 text-white">
        Historico de operações
      </Text>
      <ul className="text-white flex flex-col gap-3">
        <Text as="li">1 + 1 = 2</Text>
        <Text as="li">1 + 1 = 2</Text>
        <Text as="li">1 + 1 = 2</Text>
      </ul>
    </Card>
  )
}
