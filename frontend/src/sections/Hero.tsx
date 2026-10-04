import {
    GithubCard,
    InstagramCard,
    EmailCard
} from "../components/SocialCards";

function Hero() {
    return (
        <section
            id="home"
            aria-labelledby="hero-heading"
            className="relative flex min-h-screen items-center overflow-hidden px-10 py-10 md:px-10 md:p-24 bg-zinc-50 dark:bg-zinc-900 transition-all duration-300"
        >
            <div className="absolute pointer-events-none inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(28,140,87,0.15),transparent)]" />
            <div className="animate-fade-up mx-auto w-full max-w-5xl top-30 font-inter">
                <p className="inline-flex w-fit mb-4 bg-zinc-100 dark:bg-zinc-700 border border-zinc-200 dark:border-zinc-600 rounded-full px-3 py-1 text-md md:text-xl text-zinc-700 dark:text-zinc-100">
                    Welcome To My Portfolio
                </p>

                <h1
                    id="hero-heading"
                    className="text-4xl md:text-6xl text-zinc-700 dark:text-zinc-100 tracking-tight font-bold"
                >
                    Hi, I'm
                    <span className="text-[#1C8C57] font-italic"> Xerra</span>
                </h1>
                <p className="text-2xl md:text-4xl text-zinc-700 dark:text-zinc-100 tracking-tight font-bold">
                    I create things I enjoy.
                </p>

                <p className="mt-10 text-lg md:text-xl leading-relaxed text-zinc-700 dark:text-zinc-100 font-medium">
                    I create Minecraft skins, 3D models, and web interfaces,
                    combining creativity with code to bring ideas to life.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                    <a
                        href="#project"
                        className="inline-flex items-center rounded-lg bg-[#1C8C57] border border-zinc-800 px-4 py-2 text-lg md:text-xl text-zinc-100 transition-transform duration-400 hover:scale-85 active:scale-85"
                    >
                        View Projects
                    </a>
                    <a className="inline-flex items-center rounded-lg bg-transparent border border-[#1C8C57] px-4 py-2 text-zinc-700 dark:text-zinc-100 active:bg-[#1C8C57] hover:bg-[#1C8C57] active:text-zinc-100 hover:text-zinc-100 active:scale-85 hover:scale-85 text-lg md:text-xl transition-all duration-400">
                        Contact Me
                    </a>
                </div>

                <ul className="my-8 flex flex-wrap gap-6">
                    <GithubCard />
                    <InstagramCard />
                    <EmailCard />
                </ul>
            </div>
        </section>
    );
}

export default Hero;
