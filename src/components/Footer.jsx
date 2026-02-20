const Footer = () => {
    return (
        <footer className="py-12 bg-white px-6">
            <div className="max-w-6xl mx-auto">
                <div className="h-[1px] bg-[#2563EB]/10 w-full mb-8"></div>
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#111111]/40">
                    <p>© {new Date().getFullYear()} KODURU SRAVANI. ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
