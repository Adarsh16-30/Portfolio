import { Card } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";
import { motion } from "framer-motion";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science Engineering",
      institution: "Vellore Institute of Technology, Vellore",
      period: "2023 – 2027",
      grade: "CGPA: 8.93",
      icon: GraduationCap
    },
    {
      degree: "Senior Secondary",
      institution: "DAV Public School Sreshtha Vihar, Delhi",
      period: "2023",
      grade: "94%",
      icon: Award
    },
    {
      degree: "Secondary",
      institution: "DAV Public School Sreshtha Vihar, Delhi",
      period: "2021",
      grade: "88%",
      icon: Award
    }
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <motion.div
        className="absolute right-0 top-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto px-6 lg:px-12 xl:px-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
            <p className="text-muted-foreground text-lg">Academic background</p>
          </motion.div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ x: 10, scale: 1.02 }}
              >
                <Card className="p-6 hover:shadow-hover transition-all duration-300 glass-effect">
                  <div className="flex gap-4">
                    <motion.div 
                      className="p-3 rounded-full bg-primary/10 h-fit"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <edu.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                        <h3 className="text-xl font-semibold">{edu.degree}</h3>
                        <motion.span 
                          className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                          whileHover={{ scale: 1.1 }}
                        >
                          {edu.grade}
                        </motion.span>
                      </div>
                      <p className="text-muted-foreground font-medium mb-1">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.period}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
