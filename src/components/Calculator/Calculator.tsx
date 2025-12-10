import { Button } from "../Button/Button";
import { CalculatorDisplay } from "../CalculatorDisplay/CalculatorDisplay";
import { Card } from "../Card/Card";
import { BUTTONS } from "../../global/button";
import { useContext, useState } from "react";
import { useCalculator } from "../../context/CalculatorContext/CalculatorContext";
import { useHandleCalculator } from "../../hooks/UseHandleCalculator";

export interface CalculatorProps {}

export function Calculator() {
  const {operation, result, doOperation} = useHandleCalculator()

  function handleButtonClick(input: string) {
    doOperation(input)
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
