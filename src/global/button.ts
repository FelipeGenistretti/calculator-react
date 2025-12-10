export type ButtonVariant = "primary" | "default";

export interface ButtonConfig {
  input: string;
  className?: string;
  variants?: ButtonVariant;
}


export const BUTTONS: ButtonConfig[][] = [
  [
    { input: "CE" },
    { input: "C", className: "flex-1 h-16" },
    { input: "/", variants: "primary" }
  ],
  [
    { input: "7" },
    { input: "8" },
    { input: "9" },
    { input: "*", variants: "primary" }
  ],
  [
    { input: "4" },
    { input: "5" },
    { input: "6" },
    { input: "-", variants: "primary" }
  ],
  [
    { input: "1" },
    { input: "2" },
    { input: "3" },
    { input: "+", variants: "primary" }
  ],
  [
    { input: "0", className: "flex-1 h-16" },
    { input: "," },
    { input: "=", className: "w-16 h-16 bg-[#7F45E2]" }
  ]
];
