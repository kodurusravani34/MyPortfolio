import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { certificates } from '../data/certificates';
import { ArrowRight } from 'lucide-react';

const CertificateCard = ({ cert }) => {
    const navigate = useNavigate();

    return (
        <motion.div
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={() => navigate(`/certificate/${cert.id}`)}
            className="flex-shrink-0 w-[300px] md:w-[400px] bg-white rounded-2xl p-8 shadow-[0_4px_30px_rgba(0,0,0,0.05)] border border-gray-50 cursor-pointer group"
        >
            <h3 className="text-xl font-bold text-[#111111] mb-2 group-hover:text-[#2563EB] transition-colors uppercase tracking-tight">
                {cert.title}
            </h3>
            <p className="text-[#111111]/60 font-medium text-xs uppercase tracking-widest mb-4">
                {cert.issuer}
            </p>
            <p className="text-[#111111]/40 text-[10px] font-bold uppercase tracking-widest mt-auto">
                {cert.date}
            </p>
        </motion.div>
    );
};

const CertificatesSection = () => {
    const navigate = useNavigate();
    // Duplicate for infinite scroll
    const infiniteCerts = [...certificates, ...certificates];

    return (
        <section id="certificates" className="py-20 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 mb-16 flex justify-between items-end">
                <div>
                    <h2 className="text-sm font-medium text-[#2563EB] uppercase tracking-[0.2em]">Certificates</h2>
                </div>
                <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => navigate('/certificates')}
                    className="flex items-center space-x-2 text-[#111111]/40 hover:text-[#2563EB] transition-colors group"
                >
                    <span className="text-xs font-bold uppercase tracking-widest">See All</span>
                    <ArrowRight size={16} />
                </motion.button>
            </div>

            <div className="mask-horizontal relative">
                <div className="flex gap-8 animate-marquee-right w-max py-4 px-8">
                    {infiniteCerts.map((cert, index) => (
                        <CertificateCard key={`${cert.id}-${index}`} cert={cert} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificatesSection;
