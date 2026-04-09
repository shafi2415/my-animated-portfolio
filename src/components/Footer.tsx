const Footer = () => (
  <footer className="py-8 border-t border-border/30">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <p className="text-muted-foreground text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="font-display font-medium text-primary">
          Mohammed Shafi Hudawi
        </span>
        . All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
