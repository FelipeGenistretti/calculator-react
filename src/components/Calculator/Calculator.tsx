import { Button } from "../Button/Button";
import { CalculatorDisplay } from "../CalculatorDisplay/CalculatorDisplay";
import { Card } from "../Card/Card";
import { Text } from "../Text/Text";

export interface CalculatorProps {

}

export function Calculator(){
    return (
       <Card className={`flex flex-col gap-[26px] w-[400px] pt-[54px] px-[32px] pb-[32px]`}>
            <div className={
                `flex flex-col gap-2 px-[22px] cursor-default select-none`
            }>
                <CalculatorDisplay operation="1 + 1" result="2"/>

                <div className="flex flex-col gap-3">
                    <div className="flex gap-3">
                        <Button className="w-16 h-16">CE</Button>
                        <Button className="flex-1 h-16">C</Button>
                        <Button variants="primary" className="w-16 h-16">/</Button>
                    </div>

                    <div className="flex gap-3">
                        <Button className="w-16 h-16">7</Button>
                        <Button className="w-16 h-16">8</Button>
                        <Button className="w-16 h-16">9</Button>
                        <Button variants="primary" className="w-16 h-16">*</Button>
                    </div>

                    <div className="flex gap-3">
                        <Button className="w-16 h-16">4</Button>
                        <Button className="w-16 h-16">5</Button>
                        <Button className="w-16 h-16">6</Button>
                        <Button variants="primary" className="w-16 h-16">-</Button>
                    </div>

                    <div className="flex gap-3">
                        <Button className="w-16 h-16">1</Button>
                        <Button className="w-16 h-16">2</Button>
                        <Button className="w-16 h-16">3</Button>
                        <Button variants="primary" className="w-16 h-16">+</Button>
                    </div>

                    <div className="flex gap-3">
                        <Button className="flex-1 h-16">0</Button>
                        <Button className="w-16 h-16">,</Button>
                        <Button variants="primary" className="w-16 h-16">=</Button>
                    </div>

                </div>
            </div>
       </Card>
    )
}