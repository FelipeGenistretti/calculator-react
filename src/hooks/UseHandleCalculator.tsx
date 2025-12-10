import { useState } from "react";
import { useCalculator } from "../context/CalculatorContext/CalculatorContext";

export function useHandleCalculator(){
      const [operation, setOperation] = useState("");
      const [result, setResult] = useState("")
       const {updateHistory} = useCalculator()

       function doOperation(input:string){
            if (input === "=") {
            try {
            const sanitized = operation.replace(/,/g, ".").replace(/\s+/g, "");
            const operationResult = eval(sanitized);
            setResult(operationResult.toString().replace(/\./, ","));
            updateHistory(operation, operationResult)
            setResult("")
            setOperation("")
            } catch {
            setResult("Erro");
            }
            return;
        }

        if (input === "C") {
            setOperation("");
            setResult("");
            return;
        }

        if (input === "CE") {
            setOperation(prev => prev.slice(0, -1));
            return;
        }

        if (input === "," && !operation.endsWith(",")) {
            setOperation(prev => prev + ",");
            return;
        }

        setOperation(prev => prev + input);
       }
    return {
        operation,
        result,
        doOperation
    }
}