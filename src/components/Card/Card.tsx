import type { ReactNode } from "react";

export interface CardProps {
    children:ReactNode
    className?:string

}

export function Card({children, className= ""}:CardProps){
    return (
        <div className={`bg-gray-900 shadow-md rounded-2xl ${className}`}>
            {children}
        </div>
    )
}