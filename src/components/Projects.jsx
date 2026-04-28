import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with user authentication, product management, and Stripe integration.',
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
      github: '#',
      live: '#',
    },
    {
      title: 'Task Management System',
      description: 'A collaborative project management tool featuring real-time updates and drag-and-drop kanban boards.',
      tech: ['React', 'Firebase', 'Tailwind', 'Redux'],
      github: '#',
      live: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive personal portfolio built to showcase my skills, projects, and academic achievements.',
      tech: ['React', 'Tailwind CSS', 'Vite'],
      github: '#',
      live: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-dark-border/50">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
        <div className="w-20 h-1 bg-accent-primary mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="glass-panel rounded-xl overflow-hidden flex flex-col group hover:-translate-y-2 transition-transform duration-300">
            {/* Placeholder Image Area */}
            <div className="h-48 bg-dark-border/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent z-10"></div>
              <div className="w-full h-full bg-accent-primary/5 group-hover:bg-accent-primary/10 transition-colors flex items-center justify-center">
                 <span className="text-dark-border font-bold text-4xl opacity-50">{project.title.substring(0,2).toUpperCase()}</span>
              </div>
            </div>
            
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-primary transition-colors">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-medium text-accent-primary bg-accent-primary/10 rounded-full border border-accent-primary/20">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4 pt-4 border-t border-dark-border/50">
                <a href={project.github} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                  <Github className="w-4 h-4" />
                  Code
                </a>
                <a href={project.live} className="text-gray-400 hover:text-accent-primary transition-colors flex items-center gap-2 text-sm font-medium ml-auto">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
