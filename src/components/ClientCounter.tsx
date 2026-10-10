"use client";

import { useState } from "react";

export function ClientCounter() {
  const [count, setCount] = useState(0);
  return (
    <div className="max-w-md mx-auto text-center">
      <div className="text-6xl font-bold text-indigo-600 dark:text-indigo-400 mb-4 font-mono">{count}</div>
      <div className="flex gap-3 justify-center flex-wrap">
        <button onClick={() => setCount(c => c + 1)} className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors">
          +1
        </button>
        <button onClick={() => setCount(c => c - 1)} className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
          -1
        </button>
        <button onClick={() => setCount(0)} className="px-6 py-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg font-medium hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors">
          Сброс
        </button>
      </div>
      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">Работает в браузере — никакого сервера для счётчика!</p>
    </div>
  );
}