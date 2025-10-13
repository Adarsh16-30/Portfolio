import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/AdarshTripathi_Resume.pdf";
    link.download = "AdarshTripathi_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewResume = () => {
    window.open("/AdarshTripathi_Resume.pdf", "_blank");
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">My Resume</h1>
            <p className="text-muted-foreground text-lg mb-8">
              Download my complete resume or view it online
            </p>
            
            <div className="flex gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={handleViewResume}
                  size="lg"
                  className="gradient-bg hover:shadow-glow transition-smooth"
                >
                  View Resume
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={handleDownload}
                  size="lg"
                  variant="outline"
                  className="transition-smooth hover:bg-primary/10"
                >
                  Download PDF
                  <Download className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Overview Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="p-8 md:p-12 shadow-card hover-lift transition-smooth">
              <h2 className="text-3xl font-bold text-center mb-8">Quick Overview</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Education</h3>
                  <p className="text-muted-foreground">
                    Computer Science Engineering • VIT Vellore • 3rd Year
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">Core Skills</h3>
                  <p className="text-muted-foreground">
                    Full Stack Development • Machine Learning • Data Structures & Algorithms
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">Technologies</h3>
                  <p className="text-muted-foreground">
                    React • Node.js • Python • Java • MongoDB • PostgreSQL • AWS
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
