import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { certificates } from '../data/certificates';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { useEffect } from 'react';

const CertificateDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const cert = certificates.find(c => c.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!cert) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-[#111111] mb-4">Certificate Not Found</h2>
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
            <div className="max-w-4xl mx-auto text-center">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center space-x-2 text-[#111111]/40 hover:text-[#2563EB] transition-colors mb-12 mx-auto group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="text-xs font-bold uppercase tracking-widest">Back</span>
                </button>

                <h1 className="text-4xl md:text-6xl font-black text-[#111111] mb-4 uppercase tracking-tighter">
                    {cert.title}
                </h1>
                <p className="text-[#2563EB] font-bold uppercase tracking-[0.2em] text-sm mb-12">
                    Issued by {cert.issuer} • {cert.date}
                </p>

                <p className="text-xl text-[#111111]/60 font-light max-w-2xl mx-auto mb-16 leading-relaxed">
                    {cert.description}
                </p>

                {cert.link && (
                    <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-10 py-5 bg-[#2563EB] text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#111111] transition-all hover:scale-105 shadow-lg shadow-[#2563EB]/20"
                    >
                        <span>Verify Original Credential</span>
                        <ExternalLink size={14} />
                    </a>
                )}
            </div>
        </motion.div>
    );
};

export default CertificateDetails;
