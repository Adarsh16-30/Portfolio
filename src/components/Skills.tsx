import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Cloud, Cpu, Brain, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      skills: ["Python", "Java", "C", "C++", "JavaScript", "TypeScript"]
    },
    {
      icon: Database,
      title: "Web Development",
      skills: ["React", "Node.js", "Flask", "Django", "Express", "HTML/CSS"]
    },
    {
      icon: Cloud,
      title: "Databases & Backend",
      skills: ["MySQL", "MongoDB", "REST APIs", "JWT"]
    },
    {
      icon: Wrench,
      title: "Tools & Technologies",
      skills: ["Git/Github", "Docker", "Kubernetes", "Linux", "VertexAI"]
    },
    {
      icon: Brain,
      title: "ML & Data Science",
      skills: ["TensorFlow", "Keras", "NumPy", "Pandas", "Matplotlib"]
    },
    {
      icon: Cpu,
      title: "CS Fundamentals",
      skills: ["DSA", "OOP", "DBMS", "OS", "System Design"]
    }
  ];

  const softSkills = [
    "Problem Solving",
    "Ownership Mindset",
    "Self-Driven",
    "Time Management",
    "Continuous Learning",
    "Adaptability"
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, hsl(262 83% 58% / 0.1) 0%, transparent 50%)"
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-muted-foreground text-lg">Technologies I work with</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="p-6 hover:shadow-hover transition-all duration-300 glass-effect h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div 
                      className="p-2 rounded-lg bg-primary/10"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <category.icon className="w-5 h-5 text-primary" />
                    </motion.div>
                    <h3 className="font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge variant="secondary" className="text-sm cursor-default">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 gradient-accent glass-effect">
              <h3 className="text-xl font-semibold mb-4 text-center">Soft Skills</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    <Badge 
                      variant="outline" 
                      className="text-sm py-2 px-4 border-primary/30 cursor-default"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
