import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.div 
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold gradient-text mb-2">Adarsh Tripathi</h3>
              <p className="text-muted-foreground">Full Stack Developer & ML Engineer</p>
            </motion.div>

            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {[
                { href: "https://github.com/Adarsh16-30/", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/adarshtripathi0912/", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:adarsh.utkarsh09@gmail.com", icon: Mail, label: "Email" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-3 rounded-full glass-effect hover:border-primary hover:bg-primary/10 transition-smooth"
                  aria-label={social.label}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div 
            className="mt-8 pt-8 border-t border-border text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
              © {currentYear} Adarsh Tripathi. Built with 
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart className="w-4 h-4 text-primary fill-primary" />
              </motion.span>
              and React
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
