import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-dark-border/50 bg-dark-bg mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          
          {/* Brand & Description */}
          <div className="space-y-4">
            <span className="text-2xl font-bold bg-gradient-to-r from-accent-primary to-purple-500 bg-clip-text text-transparent">
              Najmul Hassan
            </span>
            <p className="text-gray-400 text-sm">
              Computer Engineering Student building modern web applications and elegant digital experiences.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white hover:scale-110 transition-all">
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-accent-primary hover:scale-110 transition-all">
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all">
              <Twitter className="w-6 h-6" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>

          {/* Contact Info */}
          <div className="md:text-right">
            <a href="mailto:contact@example.com" className="inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full glass-panel hover:border-accent-primary/50 text-gray-300 hover:text-white transition-all">
              <Mail className="w-4 h-4" />
              Say Hello
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-dark-border text-center text-sm text-gray-500">
          <p>&copy; {currentYear} Najmul Hassan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
