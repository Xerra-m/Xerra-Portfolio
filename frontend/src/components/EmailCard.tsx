import { socials } from "../datas/social";
import { Mail } from "lucide-react";

function GithubCard() {
    return (
        <a
            href={socials.github.href}
            className="size-7 text-zinc-700 hover:text-zinc-500 active:text-zinc-500 dark:text-zinc-100 dark:hover:text-zinc-300 dark:active:text-zinc-300 border-2 rounded-lg border-zinc-700 hover:border-zinc-500 active:border-zinc-500 dark:border-zinc-100 dark:hover:border-zinc-300 dark:active:border-zinc-300"
            aria-label={`${socials.github.label} Card`}
        >
            <Mail />
        </a>
    );
}

export default GithubCard;
