import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-6 relative"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="max-w-4xl"
            >
                <h1 className="text-6xl md:text-8xl font-black text-[#111111] mb-4 tracking-tighter uppercase">
                    KODURU SRAVANI
                </h1>

                <div className="flex flex-col items-center mb-12">
                    <p className="text-xl md:text-2xl text-[#111111] font-light mb-6 tracking-widest uppercase">
                        Software Engineer
                    </p>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "200px" }}
                        transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
                        className="h-[1px] bg-[#2563EB]"
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="mt-12 space-y-4"
                >
                    <h2 className="text-sm font-medium text-[#2563EB] uppercase tracking-[0.2em] mb-4">Education</h2>
                    <div className="space-y-2">
                        <p className="text-2xl md:text-3xl font-bold text-[#111111] uppercase tracking-tight">
                            B.Tech — Computer Science & Engineering
                        </p>
                        <a
                            href="https://www.vvitguntur.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg text-[#111111]/60 font-light italic hover:text-[#2563EB] transition-colors inline-flex items-center gap-1 group"
                        >
                            Vasireddy Venkatadri Institute of Technology
                            <ArrowUpRight size={18} className="text-[#2563EB] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </a>
                        <p className="text-[10px] font-bold text-[#2563EB] uppercase tracking-[0.3em]">
                            2022 — 2026
                        </p>
                    </div>
                </motion.div>
            </motion.div>

            {/* Decorative subtle element for winter vibe */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10 opacity-5">
                <div className="absolute top-[10%] left-[5%] w-64 h-64 border border-[#2563EB] rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[20%] right-[10%] w-80 h-80 border border-[#2563EB] rounded-full blur-[120px]"></div>
            </div>
        </section>
    );
};

export default Hero;
