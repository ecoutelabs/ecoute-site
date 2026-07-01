import Image from "next/image";

const GITHUB_URL = "https://github.com/ecoutelabs/ecoute";

const Logo = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78.73 140.18">
        <polygon points="78.73 94.38 74.25 127.38 64.01 140.18 44.17 140.18 14.08 114.57 0 83.85 0 35.84 24.32 5.94 56.33 0 71.05 15.36 71.05 49.93 51.85 74.25 39.37 87.05 19.84 77.45 19.84 60.81 28.8 44.17 40.52 24.96 49.29 34.56 39.37 55.05 40.52 63.37 53.77 49.93 62.09 23.04 45.45 12.16 28.16 19.2 15.36 49.93 14.72 85.13 37.11 104.92 57.66 110.45 78.73 94.38" />
    </svg>
);

const features = [
    {
        title: "Album-first.",
        body: "Most players treat music as a flat track list. écoute is built around albums as the primary unit — browse by cover art, play front to back, stop at the end.",
    },
    {
        title: "Local files, no cloud.",
        body: "Your music, on your machine. No subscriptions, no accounts, no internet required.",
    },
    {
        title: "Broad format support.",
        body: "MP3, FLAC, ALAC, AAC, WAV, AIFF, OGG, Opus. If you have it, écoute can play it.",
    },
    {
        title: "Last.fm scrobbling.",
        body: "Plays well with the broader listening ecosystem. Connect your account and every play gets logged.",
    },
    {
        title: "Fullscreen viewer.",
        body: "Immersive playback with cover art front and center. Let the music fill the screen.",
    },
    {
        title: "macOS native.",
        body: "Built in Swift. Feels like it belongs on your Mac — not a web app in a wrapper.",
    },
];

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">

            {/* Hero */}
            <section
                className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat px-6 py-24"
                style={{ backgroundImage: "url('/bg.png')" }}
            >
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 flex flex-col items-center gap-6 text-center max-w-4xl w-full">
                    <Logo className="fill-white w-8" />
                    <h1 className="font-carbon text-5xl md:text-7xl text-white tracking-tight">
                        écoute
                    </h1>
                    <p className="font-carbon text-xl md:text-2xl text-white/70">
                        A music player for albums.
                    </p>
                    <a
                        href={GITHUB_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 font-carbon text-sm text-white/50 border border-white/20 px-5 py-2.5 hover:border-white/50 hover:text-white transition-colors"
                    >
                        View on GitHub →
                    </a>
                    <div className="mt-8 w-full rounded-sm overflow-hidden border border-white/10 shadow-2xl">
                        <Image
                            src="/mainview.png"
                            alt="écoute main view"
                            width={1280}
                            height={800}
                            className="w-full h-auto"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="bg-black px-6 py-24">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-carbon text-xs text-white/30 uppercase tracking-widest mb-16">
                        Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
                        {features.map((f) => (
                            <div key={f.title} className="bg-black p-8">
                                <h3 className="font-carbon text-lg text-white mb-3">{f.title}</h3>
                                <p className="text-sm text-white/50 leading-relaxed">{f.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section
                className="relative flex flex-col items-center justify-center py-32 px-6 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/bg.png')" }}
            >
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 flex flex-col items-center gap-6 text-center">
                    <Logo className="fill-white w-6 opacity-60" />
                    <p className="font-carbon text-2xl md:text-3xl text-white">
                        Open source. Free to use.
                    </p>
                    <p className="text-sm text-white/50 max-w-sm">
                        macOS only. Unsigned — right-click and open on first launch.
                    </p>
                    <a
                        href={GITHUB_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-carbon text-sm text-black bg-white px-6 py-3 hover:bg-white/80 transition-colors"
                    >
                        View on GitHub →
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black border-t border-white/5 py-8 px-6 text-center">
                <p className="text-xs text-white/30">
                    <a href="https://ecoutelabs.com" className="hover:text-white/60 transition-colors">écoute labs</a>
                    {" "}· © 2026
                </p>
            </footer>

        </div>
    );
}
