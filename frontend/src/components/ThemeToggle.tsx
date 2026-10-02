import { useTheme } from "../contexts/ThemeContext.tsx";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={`switch to ${theme === "light" ? "dark" : "light"} mode`}
            className="
                p-2
                text-slate-700
                hover:text-slate-500
                active:text-slate-500
                dark:text-slate-100
                dark:hover:text-slate-300
                dark:active:text-slate-300
            "
        >
            {theme === "light" ? (
                <Moon className="size-7 md:size-10" strokeWidth={2.25} />
            ) : (
                <Sun className="size-7 md:size-10" strokeWidth={2.25} />
            )}
        </button>
    );
}
