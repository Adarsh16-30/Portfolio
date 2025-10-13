import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { projectsData } from "@/data/projectsData";

const AllProjects = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-8 hover:bg-primary/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
              My Work
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
              Explore my complete portfolio of projects showcasing full-stack development,
              machine learning, and modern web technologies
            </p>
            <Button
              variant="outline"
              onClick={() => window.open("https://github.com/Adarsh16-30/", "_blank")}
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Github className="w-4 h-4 mr-2" />
              View All My Projects on GitHub
            </Button>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: 10 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="group overflow-hidden hover:shadow-hover transition-all duration-300 h-full glass-effect">
                  <motion.div
                    className={`h-2 bg-gradient-to-r ${project.gradient}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  />
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-smooth">
                        {project.title}
                      </h3>
                      <motion.span
                        className="text-sm text-muted-foreground px-2 py-1 rounded bg-primary/10"
                        whileHover={{ scale: 1.1 }}
                      >
                        {project.year}
                      </motion.span>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>

                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
