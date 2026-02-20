import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { ArrowLeft, ExternalLink, Github, CheckCircle2, X, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const ProjectDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find(p => p.id === id);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handlePrev = (e) => {
        e?.stopPropagation();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : project.screenshots.length - 1));
    };

    const handleNext = (e) => {
        e?.stopPropagation();
        setSelectedIndex((prev) => (prev < project.screenshots.length - 1 ? prev + 1 : 0));
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedIndex === null) return;
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'Escape') setSelectedIndex(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedIndex, project]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-[#111111] mb-4">Project Not Found</h2>
                    <button
                        onClick={() => navigate('/')}
                        className="text-[#2563EB] font-bold uppercase tracking-widest text-sm"
                    >
                        Go Back Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-white pt-32 pb-20 px-6"
        >
            <div className="max-w-5xl mx-auto">
                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center space-x-2 text-[#111111]/40 hover:text-[#2563EB] transition-colors mb-12 group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="text-xs font-bold uppercase tracking-widest">Back to Projects</span>
                </button>

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-8xl font-black text-[#111111] uppercase tracking-tighter leading-[0.9]">
                            {project.title}
                        </h1>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        {project.liveDemo && (
                            <a
                                href={project.liveDemo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 px-8 py-4 bg-[#2563EB] text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#111111] transition-colors"
                            >
                                <span>Live Demo</span>
                                <ExternalLink size={14} />
                            </a>
                        )}
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-8 py-4 border border-[#111111] text-[#111111] rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#111111] hover:text-white transition-colors"
                        >
                            <span>GitHub</span>
                            <Github size={14} />
                        </a>
                    </div>
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-2 mb-20 pb-12 border-b border-[#111111]/5">
                    {project.techStack.map(tag => (
                        <span
                            key={tag}
                            className="px-4 py-2 border border-[#2563EB]/10 text-[#2563EB] rounded-full text-[10px] font-bold uppercase tracking-widest"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 mb-20">
                    <div className="md:col-span-12">
                        <div className="space-y-12">
                            <section>
                                <h2 className="text-sm font-medium text-[#2563EB] uppercase tracking-[0.2em] mb-6">Introduction</h2>
                                <p className="text-xl md:text-2xl text-[#111111] font-light leading-relaxed">
                                    {project.problemStatement}
                                </p>
                            </section>

                            <section>
                                <h2 className="text-sm font-medium text-[#2563EB] uppercase tracking-[0.2em] mb-6">About the Project</h2>
                                <p className="text-xl md:text-2xl text-[#111111] font-light leading-relaxed max-w-4xl">
                                    {project.fullDescription}
                                </p>
                            </section>
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <section className="mb-20">
                    <h2 className="text-sm font-medium text-[#2563EB] uppercase tracking-[0.2em] mb-12">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {project.features?.map((feature, idx) => {
                            const [title, desc] = feature.split(':');
                            return (
                                <div key={idx} className="p-6 bg-white rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.05)] border border-gray-50 group transition-all duration-300">
                                    <CheckCircle2 className="text-[#2563EB] mb-4" size={20} />
                                    <h3 className="text-lg font-bold text-[#111111] mb-2 group-hover:text-[#2563EB] transition-colors uppercase tracking-tight">
                                        {title}
                                    </h3>
                                    {desc && (
                                        <p className="text-xs text-[#111111]/60 font-light leading-relaxed">
                                            {desc.trim()}
                                        </p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Screenshots Gallery */}
                <section>
                    <h2 className="text-sm font-medium text-[#2563EB] uppercase tracking-[0.2em] mb-12">Visual Gallery</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {project.screenshots?.map((url, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                onClick={() => setSelectedIndex(idx)}
                                className="w-full aspect-video rounded-2xl overflow-hidden border border-[#111111]/5 shadow-lg relative group cursor-pointer"
                            >
                                <img
                                    src={url}
                                    alt={`${project.title} Screenshot ${idx + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-[#111111]/0 group-hover:bg-[#111111]/20 transition-colors flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white p-2 rounded-full shadow-xl">
                                        <ExternalLink size={16} className="text-[#2563EB]" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedIndex(null)}
                        className="fixed inset-0 z-[100] bg-[#111111]/95 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
                    >
                        <motion.button
                            className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors z-[110]"
                            onClick={() => setSelectedIndex(null)}
                        >
                            <X size={32} />
                        </motion.button>

                        <div className="relative w-full h-full flex items-center justify-center px-12 md:px-24">
                            {/* Navigation Buttons */}
                            {project.screenshots?.length > 1 && (
                                <>
                                    <button
                                        onClick={handlePrev}
                                        className="absolute left-4 md:left-8 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-[110] cursor-pointer"
                                    >
                                        <ArrowLeft size={24} />
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        className="absolute right-4 md:right-8 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-[110] cursor-pointer"
                                    >
                                        <ArrowRight size={24} />
                                    </button>
                                </>
                            )}

                            <motion.img
                                key={selectedIndex}
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -50, opacity: 0 }}
                                src={project.screenshots[selectedIndex]}
                                alt="Full view"
                                className="max-w-full max-h-full rounded-xl shadow-2xl object-contain pointer-events-none"
                            />

                            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 font-bold text-[10px] uppercase tracking-[0.4em]">
                                {selectedIndex + 1} / {project.screenshots.length}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default ProjectDetails;
