import Seo from "@/components/Seo";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Download, 
  ExternalLink, 
  Mail 
} from "lucide-react";
import { Link } from "react-router-dom";

export default function ResumePage() {
  return (
    <div className="min-h-screen pt-24 px-4 pb-20 md:px-32 lg:px-48">
      <Seo 
        title="Resume | Musa Jamaldeen" 
        description="Professional resume of Musa Jamaldeen - Frontend Developer and Software Engineer."
      />
      
      <div className="max-w-6xl mx-auto">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
          >
            <div className="p-2 rounded-full bg-white/5 group-hover:bg-chelsea/20">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </div>
            Back to Home
          </Link>
        </motion.div>

        {/* Profile Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-col lg:flex-row items-center gap-8 mb-12"
        >
          {/* Profile Picture Placeholder */}
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/10 shadow-lg shrink-0">
            <div className="w-full h-full bg-white/5 flex items-center justify-center">
              {/* Replace src with your actual image path */}
              <div className="text-4xl">👨‍💻</div>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Musa Jamaldeen
            </h1>
            <p className="text-xl text-gray-400 mb-4">
              Frontend Developer | React Ecosystem Specialist
            </p>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto lg:mx-0">
              Building intelligent, scalable platforms that combine modern backend systems
              and sleek, intuitive frontend experiences.
            </p>
            
            <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
              <button className="px-6 py-3 bg-white text-black rounded-xl font-bold hover:opacity-90 transition-opacity flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download Resume
              </button>
              <button className="px-6 py-3 border border-white/20 text-white rounded-xl font-medium hover:bg-white/10 transition-colors flex items-center gap-2">
                <ExternalLink className="w-5 h-5" />
                View Full Resume
              </button>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-chelsea pl-4">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "Firebase", "Git"].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-gray-200 hover:bg-white/10 hover:border-chelsea/50 transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Highlighted Projects */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-chelsea pl-4">Highlighted Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Portfolio V2",
                tech: "React, Framer Motion",
                desc: "A modern, high-performance portfolio website with interactive animations."
              },
              {
                title: "E-Commerce Dashboard",
                tech: "Next.js, Tailwind",
                desc: "Comprehensive dashboard for managing products, orders, and analytics."
              },
              {
                title: "Task Management App",
                tech: "React, Firebase",
                desc: "Real-time collaborative task manager with team workspaces."
              }
            ].map((project, index) => (
              <div 
                key={index}
                className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group"
              >
                <h3 className="font-bold text-white mb-2 text-lg group-hover:text-chelsea transition-colors">
                  {project.title}
                </h3>
                <span className="text-xs font-semibold text-chelsea-light mb-3 inline-block bg-chelsea/10 px-2 py-1 rounded">
                  {project.tech}
                </span>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Hackathon & Highlights */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-chelsea pl-4">Highlights</h2>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] transition-colors">
            <ul className="space-y-4">
              {[
                "Developed 3 production-ready web applications for international clients",
                "Mentored junior developers in React and modern frontend practices",
                "Implemented CI/CD pipelines reducing deployment time by 40%",
                "Built accessible and responsive component libraries"
              ].map((item, index) => (
                <li key={index} className="text-gray-300 flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 bg-chelsea rounded-full flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center py-12 border-t border-white/10"
        >
          <h2 className="text-3xl font-bold mb-6 text-white">Got questions?</h2>
          <p className="text-xl text-gray-400 mb-8">
            I'm always excited to collaborate on innovative and exciting projects!
          </p>
          <div className="flex justify-center">
            <a 
              href="mailto:musajamaldeen627@gmail.com" 
              className="px-8 py-3 bg-white text-black rounded-xl font-bold hover:scale-105 transition-transform flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
}