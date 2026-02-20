import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { ArrowRight } from 'lucide-react';

const ProjectCard = ({ project }) => {
    const navigate = useNavigate();

    return (
        <motion.div
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={() => navigate(`/project/${project.id}`)}
            className="flex-shrink-0 w-[350px] md:w-[450px] bg-white rounded-2xl p-8 shadow-[0_4px_30px_rgba(0,0,0,0.05)] border border-gray-50 cursor-pointer group"
        >
            <h3 className="text-2xl font-bold text-[#111111] mb-4 group-hover:text-[#2563EB] transition-colors uppercase tracking-tight">
                {project.title}
            </h3>
            <p className="text-[#111111]/60 font-light mb-8 leading-relaxed h-20 overflow-hidden line-clamp-3">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
                {project.techStack.map(tag => (
                    <span
                        key={tag}
                        className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-[#2563EB]/5 text-[#2563EB] rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

const ProjectsSection = () => {
    const navigate = useNavigate();
    // Duplicate projects for infinite scroll
    const infiniteProjects = [...projects, ...projects];

    return (
        <section id="projects" className="py-20 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 mb-16 flex justify-between items-end">
                <div>
                    <h2 className="text-sm font-medium text-[#2563EB] uppercase tracking-[0.2em]">Projects</h2>
                </div>
                <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => navigate('/projects')}
                    className="flex items-center space-x-2 text-[#111111]/40 hover:text-[#2563EB] transition-colors group"
                >
                    <span className="text-xs font-bold uppercase tracking-widest">See All</span>
                    <ArrowRight size={16} />
                </motion.button>
            </div>

            <div className="mask-horizontal relative">
                <div className="flex gap-8 animate-marquee-left w-max py-4 px-8">
                    {infiniteProjects.map((project, index) => (
                        <ProjectCard key={`${project.id}-${index}`} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
