import { Text } from "../Text/Text";

export interface CalculatorDisplayProps {
    operation:string
    result:string
}

export function CalculatorDisplay({operation, result}:CalculatorDisplayProps){
    return (
        <div>
            <Text as="div" variants="muted" className="flex items-center justify-end">
                    {operation}
                </Text>
                <div className="flex items-center justify-between">
                    <Text variants="muted">=</Text>
                    <Text variants="blast">{result}</Text>

                </div>
        </div>
    )
}