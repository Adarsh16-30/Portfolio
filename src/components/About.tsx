import { GraduationCap, Award, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const About = () => {
  const stats = [
    { icon: GraduationCap, label: "CGPA", value: "8.93" },
    { icon: Award, label: "Certifications", value: "5+" },
    { icon: Globe, label: "Languages", value: "4" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Parallax background effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"
        style={{ y: -50 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      
      <div className="container mx-auto px-6 lg:px-12 xl:px-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground text-lg">Get to know me better</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <motion.p 
                className="text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                I'm a third-year Computer Science student at <span className="font-semibold text-primary">VIT Vellore</span>, 
                passionate about building scalable systems and exploring emerging technologies.
              </motion.p>
              <motion.p 
                className="text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Currently diving into <span className="font-semibold text-primary">Cybersecurity</span> and 
                modern AI technologies like <span className="font-semibold text-primary">LangChain and RAG</span>, 
                while working on full-stack projects with React, Node.js, and ML models.
              </motion.p>
              <motion.p 
                className="text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                I believe in continuous learning and love tackling challenges across 
                web development, machine learning, and cloud technologies.
              </motion.p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-3 gap-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                >
                  <Card className="p-6 text-center hover:shadow-glow transition-all duration-300 cursor-default glass-effect">
                    <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
