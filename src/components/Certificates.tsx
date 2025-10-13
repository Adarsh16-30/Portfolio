import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, CheckCircle2, Clock, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { certificatesData } from "@/data/certificatesData";

const Certificates = () => {

  return (
    <section id="certificates" className="py-24 relative overflow-hidden">
      <motion.div
        className="absolute left-0 bottom-1/4 w-96 h-96 bg-primary-glow/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Certifications</h2>
            <p className="text-muted-foreground text-lg">Professional credentials and continuous learning</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {certificatesData.map((cert, index) => {
              const isCompleted = !cert.date.includes("Ongoing");
              return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="p-6 hover:shadow-hover transition-all duration-300 glass-effect h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div 
                      className="p-2 rounded-full bg-primary/10"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Award className="w-5 h-5 text-primary" />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-lg font-semibold leading-tight">{cert.title}</h3>
                        {isCompleted ? (
                          <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
                          >
                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                          </motion.div>
                        ) : (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          >
                            <Clock className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                          </motion.div>
                        )}
                      </div>
                      <p className="text-sm text-primary font-medium mb-3">{cert.issuer}</p>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {cert.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {cert.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skillIndex}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            <Badge variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                      {cert.certificateUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                          onClick={() => window.open(cert.certificateUrl, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Certificate
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
