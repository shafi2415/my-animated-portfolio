import RainEffect from "./RainEffect";

const Footer = () => (
  <footer
    className="relative py-8 border-t border-white/[0.04] overflow-hidden"
    style={{
      background:
        "linear-gradient(180deg, #050505 0%, #060608 100%)",
    }}
  >
    <RainEffect intensity={15} speed={0.4} />
    <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
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
