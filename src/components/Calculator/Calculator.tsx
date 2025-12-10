import { Button } from "../Button/Button";
import { CalculatorDisplay } from "../CalculatorDisplay/CalculatorDisplay";
import { Card } from "../Card/Card";
import { BUTTONS } from "../../global/button";
import { useState } from "react";

export interface CalculatorProps {}

export function Calculator() {

  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("")

  function handleButtonClick(input: string) {
  if (input === "=") {
    try {
      const sanitized = operation.replace(/,/g, ".").replace(/\s+/g, "");
      const operationResult = eval(sanitized);
      setResult(operationResult.toString().replace(/\./, ","));
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


  return (
    <Card className="flex flex-col gap-[26px] w-[400px] pt-[54px] px-[32px] pb-[32px]">
      <div className="flex flex-col gap-2 px-[22px] cursor-default select-none">
        <CalculatorDisplay operation={operation && operation} result={result} />

        <div className="flex flex-col gap-3">
          {BUTTONS.map((row, idx) => (
            <div key={`row-${idx}`} className="flex gap-3">
              {row.map((button) => (
                <Button
                  onClick={() => handleButtonClick(button.input)}
                  className={button.className || "w-16 h-16"}
                  variants={button.variants}
                >
                  {button.input}
                </Button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
