import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

import { navItems } from "../datas/navigation";

import { ThemeToggle } from "../components/ThemeToggle";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const closeMenu = () => setIsOpen(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 35) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const renderLinks = navItems.map(item => {
        return (
            <li key={item.label}>
                <a
                    href={item.href}
                    className="font-semibold text-zinc-700 hover:text-zinc-500 active:text-zinc-500 dark:text-zinc-100 dark:hover:text-zinc-300 dark:active:text-zinc-300"
                >
                    {item.label}
                </a>
            </li>
        );
    });
    return (
        <nav className="fixed top-0 z-50 w-full">
            <div className="max-w-full">
                <div
                    className={`flex flex-col px-4 py-2 md:px-10 md:py-4 transition-all duration-300 ${
                        isScrolled || isOpen
                            ? "bg-zinc-200 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 backdrop-blur-sm"
                            : "bg-transparent"
                    }`}
                >
                    <div className="flex flex-row items-center justify-between mb-4">
                        {/* logo */}
                        <a
                            href="#"
                            className="text-2xl md:text-3xl font-bold font-inter uppercase"
                        >
                            <strong className="text-zinc-700 dark:text-zinc-100">
                                xerra
                                <span className="text-[#1C8C57]">.</span>
                            </strong>
                        </a>

                        {/* desktop menu */}
                        <ul
                            className="
                        hidden
                        md:flex
                        items-center
                        justify-center
                        gap-4
                        md:text-2xl
                        md:font-semibold
                    "
                        >
                            {renderLinks}
                        </ul>

                        {/* theme button & hamburger button */}
                        <div className="flex flex-row justify-center items-center gap-4">
                            <ThemeToggle />
                            <button
                                type="button"
                                className="md:hidden text-zinc-700 hover:text-zinc-500 active:text-zinc-500 dark:text-zinc-100 dark:hover:text-zinc-300 dark:active:text-zinc-300"
                                onClick={() => setIsOpen(prev => !prev)}
                                aria-label="toggle navigation menu"
                            >
                                {isOpen ? (
                                    <X className="size-7 md:size-10" strokeWidth={2.25} />
                                ) : (
                                    <Menu className="size-7 md:size-10" strokeWidth={2.25} />
                                )}
                            </button>
                        </div>
                    </div>

                    <div
                        className={`
                        overflow-hidden transition-all duration-300 ease-in-out md:hidden border-t border-zinc-300 dark:border-zinc-700 ${isOpen ? "min-h-screen opacity-100 tranzinc-y-0" : "max-h-0 opacity-0 -tranzinc-y-2"}
                    `}
                    >
                        <ul className="flex flex-col gap-2 text-lg px-auto py-6">
                            {renderLinks}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
