import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { certificates } from '../data/certificates';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';

const CertificatesPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-white pt-32 pb-20 px-6"
        >
            <div className="max-w-6xl mx-auto">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center space-x-2 text-[#111111]/40 hover:text-[#2563EB] transition-colors mb-12 group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="text-xs font-bold uppercase tracking-widest">Back to Home</span>
                </button>

                <h1 className="text-5xl md:text-7xl font-black text-[#111111] mb-16 uppercase tracking-tighter">
                    All Certificates
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert) => (
                        <motion.div
                            key={cert.id}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            onClick={() => navigate(`/certificate/${cert.id}`)}
                            className="bg-white rounded-2xl p-8 shadow-[0_4px_30px_rgba(0,0,0,0.05)] border border-gray-50 cursor-pointer group"
                        >
                            <h3 className="text-xl font-bold text-[#111111] mb-2 group-hover:text-[#2563EB] transition-colors uppercase tracking-tight">
                                {cert.title}
                            </h3>
                            <p className="text-[#111111]/60 font-medium text-xs uppercase tracking-widest mb-4">
                                {cert.issuer}
                            </p>
                            <p className="text-[#111111]/40 text-[10px] font-bold uppercase tracking-widest">
                                {cert.date}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default CertificatesPage;
