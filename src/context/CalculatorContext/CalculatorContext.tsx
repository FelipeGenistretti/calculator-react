import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

interface CalculatorContextType {
  history: string[];
  updateHistory: (operation: string, parsedResult: string) => void;
}

export interface CalculatorProviderProps {
  children: ReactNode;
}

const CalculatorContext = createContext<CalculatorContextType | undefined>(undefined);

export function CalculatorProvider({ children }: CalculatorProviderProps) {
  const historyStorageKey = "history";
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(historyStorageKey);
    if (saved) {
      setHistory(JSON.parse(saved || "[]"));
    }
  }, []);

  function updateHistory(operation: string, parsedResult: string) {
    setHistory(prev => {
      const updated = [...prev, `${operation}=${parsedResult}`];
      localStorage.setItem(historyStorageKey, JSON.stringify(updated));
      return updated;
    });
  }

  return (
    <CalculatorContext.Provider value={{ history, updateHistory }}>
      {children}
    </CalculatorContext.Provider>
  );
}

export function useCalculator() {
  const ctx = useContext(CalculatorContext);
  if (!ctx) {
    throw new Error("useCalculator deve ser usado dentro de <CalculatorProvider>");
  }
  return ctx;
}
