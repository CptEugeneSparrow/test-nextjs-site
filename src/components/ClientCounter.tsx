"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "./Button";

export function ClientCounter() {
  const [count, setCount] = useState(0);
  const [displayCount, setDisplayCount] = useState(0);
  const [lastAction, setLastAction] = useState<"increment" | "decrement" | "reset" | null>(null);
  const animationRef = useRef<number | null>(null);

  // Animate count changes
  useEffect(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    const duration = 300;
    const start = displayCount;
    const end = count;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (end - start) * eased);
      setDisplayCount(current);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    }

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [count]);

  const handleIncrement = () => {
    setCount((c) => c + 1);
    setLastAction("increment");
  };

  const handleDecrement = () => {
    setCount((c) => c - 1);
    setLastAction("decrement");
  };

  const handleReset = () => {
    setCount(0);
    setLastAction("reset");
  };

  // Clear last action indicator after a delay
  useEffect(() => {
    if (lastAction) {
      const timer = setTimeout(() => setLastAction(null), 1000);
      return () => clearTimeout(timer);
    }
  }, [lastAction]);

  return (
    <div className="max-w-md mx-auto text-center">
      <div className="relative mb-6">
        <div
          className={`
            text-6xl lg:text-7xl font-bold font-mono tabular-nums transition-all duration-300
            ${lastAction === "increment" ? "text-green-600 dark:text-green-400 scale-105" : ""}
            ${lastAction === "decrement" ? "text-red-600 dark:text-red-400 scale-105" : ""}
            ${lastAction === "reset" ? "text-orange-600 dark:text-orange-400" : ""}
            ${!lastAction ? "text-brand-600 dark:text-brand-400" : ""}
          `}
          style={{ minHeight: "1.5em" }}
        >
          {displayCount}
        </div>
        {lastAction && (
          <div
            className={`
              absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-medium rounded-full
              animate-fade-in-down
              ${lastAction === "increment" ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300" : ""}
              ${lastAction === "decrement" ? "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300" : ""}
              ${lastAction === "reset" ? "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300" : ""}
            `}
          >
            {lastAction === "increment" && "+1"}
            {lastAction === "decrement" && "−1"}
            {lastAction === "reset" && "Сброс"}
          </div>
        )}
      </div>

      <div className="flex gap-3 justify-center flex-wrap">
        <Button
          onClick={handleIncrement}
          rightIcon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          }
          size="lg"
          className="group"
        >
          <span>Увеличить</span>
        </Button>
        <Button
          onClick={handleDecrement}
          variant="outline"
          rightIcon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          }
          size="lg"
        >
          Уменьшить
        </Button>
        <Button
          onClick={handleReset}
          variant="ghost"
          leftIcon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          }
          size="lg"
        >
          Сброс
        </Button>
      </div>

      <p className="mt-5 text-sm text-text-tertiary">
        Работает в браузере — никакого сервера для счётчика!
      </p>
    </div>
  );
}