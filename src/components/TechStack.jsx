import { motion } from 'framer-motion';
import { techStack } from '../data/techStack';

const TechStack = () => {
    return (
        <section id="tech-stack" className="py-20 bg-white px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-sm font-medium text-[#2563EB] uppercase tracking-[0.2em] mb-16">Tech Stack</h2>

                <div className="flex flex-wrap justify-center gap-4">
                    {techStack.map((tech, index) => (
                        <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{
                                backgroundColor: "#2563EB",
                                color: "#FFFFFF",
                                scale: 1.05
                            }}
                            className="px-6 py-3 border border-[#2563EB] text-[#111111] rounded-full text-sm font-bold uppercase tracking-widest cursor-default transition-colors duration-300"
                        >
                            {tech}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
