import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code2 } from 'lucide-react';

const Contact = () => {
    const socialLinks = [
        { name: 'GitHub', icon: <Github size={24} />, href: 'https://github.com/kodurusravani34' },
        { name: 'LinkedIn', icon: <Linkedin size={24} />, href: 'https://www.linkedin.com/in/kodurusravani/' },
        { name: 'LeetCode', icon: <Code2 size={24} />, href: 'https://leetcode.com/u/Xa0H7AmpJm/' },
        { name: 'Email', icon: <Mail size={24} />, href: 'mailto:kodurusravani34@gmail.com' },
    ];

    return (
        <section id="contact" className="py-20 bg-white px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-sm font-medium text-[#2563EB] uppercase tracking-[0.2em] mb-16">Get In Touch</h2>

                <div className="flex justify-center flex-wrap gap-12">
                    {socialLinks.map((link) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            target={link.name === 'Email' ? "_self" : "_blank"}
                            rel="noopener noreferrer"
                            whileHover={{ y: -5, color: "#2563EB" }}
                            className="flex flex-col items-center space-y-4 text-[#111111] transition-colors"
                        >
                            <div className="p-4 border border-[#2563EB]/10 rounded-full">
                                {link.icon}
                            </div>
                            <span className="text-xs font-bold uppercase tracking-widest">{link.name}</span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;
