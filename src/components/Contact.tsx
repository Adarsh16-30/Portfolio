import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "adarsh.utkarsh09@gmail.com",
      href: "mailto:adarsh.utkarsh09@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 89207 67748",
      href: "tel:+918920767478"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Vellore, Tamil Nadu, India",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Adarsh16-30/",
      color: "hover:text-foreground"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/adarshtripathi0912/",
      color: "hover:text-blue-500"
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, hsl(262 83% 58% / 0.1) 0%, transparent 70%)"
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
            <p className="text-muted-foreground text-lg">
              Let's discuss how we can work together
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-8 gradient-accent glass-effect">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="p-2 rounded-full bg-primary/10">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="font-medium hover:text-primary transition-smooth"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-medium">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-full glass-effect hover:border-primary hover:bg-primary/10 transition-smooth ${social.color}`}
                        aria-label={social.label}
                        whileHover={{ y: -5, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-8 glass-effect h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                <p className="text-muted-foreground mb-6">
                  Interested in working together or have a question? Feel free to reach out!
                </p>
                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="w-full gradient-bg shadow-glow hover:scale-105 hover:shadow-hover transition-all duration-300"
                    onClick={() => window.location.href = "mailto:adarsh.utkarsh09@gmail.com"}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Email
                  </Button>
                  <p className="text-sm text-center text-muted-foreground">
                    I typically respond within 24 hours
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 text-center gradient-accent glass-effect">
              <p className="text-lg font-medium mb-2">
                Open to opportunities and collaborations
              </p>
              <p className="text-muted-foreground">
                Currently seeking internships and full-time roles in Full Stack Development and Machine Learning
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
