const Footer = () => (
  <footer className="py-8 bg-[#050505] border-t border-white/[0.04]">
    <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
      <p className="text-white/15 text-xs font-light">
        © {new Date().getFullYear()} Mohammed Shafi TP
      </p>
      <div className="flex items-center gap-5">
        <a
          href="https://wa.me/917994724015"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/15 text-xs font-light hover:text-blue-400/60 transition-colors"
        >
          WhatsApp
        </a>
        <a
          href="mailto:mshafisyd@gmail.com"
          className="text-white/15 text-xs font-light hover:text-blue-400/60 transition-colors"
        >
          Email
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
