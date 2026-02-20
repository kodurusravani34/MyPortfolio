import Hero from '../components/Hero';
import ProjectsSection from '../components/ProjectsSection';
import CertificatesSection from '../components/CertificatesSection';
import TechStack from '../components/TechStack';
import Contact from '../components/Contact';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Hero />
            <ProjectsSection />
            <CertificatesSection />
            <TechStack />
            <Contact />
        </motion.div>
    );
};

export default Home;
