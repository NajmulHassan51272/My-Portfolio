import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center min-h-[90vh]">
      <div className="max-w-3xl">
        <h2 className="text-accent-primary font-semibold tracking-wide uppercase text-sm mb-4">
          Computer Engineering Student
        </h2>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-purple-500">Najmul Hassan</span>.
        </h1>
        <p className="mt-4 text-xl sm:text-2xl text-gray-400 mb-8 leading-relaxed">
          I build scalable web applications and elegant user interfaces. Currently in my 6th Semester, passionate about React.js, Node.js, and modern databases.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent-primary hover:bg-accent-hover transition-colors shadow-lg hover:shadow-accent-primary/25 group"
          >
            View My Work
            <ArrowRight className="ml-2 -mr-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-dark-border text-base font-medium rounded-md text-gray-300 bg-dark-card hover:bg-dark-border hover:text-white transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute top-1/4 right-0 -z-10 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 -z-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
