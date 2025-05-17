import { createContext, useContext, useState } from 'react';

type Theme = 'light' | 'dark';

// 1. Создаем контекст с дефолтным значением (для TypeScript)
const ThemeContext = createContext<Theme>('light');

// 2. Реализуем провайдер
export function ThemeProvider({
    theme,
    children,
}: {
    theme: Theme;
    children: React.ReactNode;
}) {
    return (
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    );
}

// 3. Хук для получения темы
export function useTheme(): Theme {
    return useContext(ThemeContext);
}
