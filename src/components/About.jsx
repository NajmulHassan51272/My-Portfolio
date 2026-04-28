import { Code2, Database, Layout } from 'lucide-react';

const About = () => {
  const skills = [
    {
      name: 'Frontend Development',
      icon: <Layout className="w-6 h-6 text-accent-primary" />,
      description: 'Building responsive, dynamic UIs with React.js and Tailwind CSS.',
    },
    {
      name: 'Backend Engineering',
      icon: <Code2 className="w-6 h-6 text-accent-primary" />,
      description: 'Developing scalable server-side applications using Node.js and Express.',
    },
    {
      name: 'Database Management',
      icon: <Database className="w-6 h-6 text-accent-primary" />,
      description: 'Designing and optimizing robust database schemas (SQL & NoSQL).',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-dark-border/50">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
        <div className="w-20 h-1 bg-accent-primary mx-auto rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-lg text-gray-300">
          <p>
            I am a <span className="text-white font-medium">6th-semester BS Computer Engineering student</span> with a strong foundation in software development and system architecture.
          </p>
          <p>
            My academic journey has been driven by a deep curiosity for how things work under the hood. I specialize in full-stack web development, bridging the gap between elegant frontend interfaces and robust backend systems.
          </p>
          <p>
            When I'm not coding, I'm usually exploring new technologies, participating in hackathons, or contributing to open-source projects.
          </p>
        </div>

        <div className="grid gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="glass-panel p-6 rounded-xl hover:-translate-y-1 transition-transform duration-300 group">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-dark-bg rounded-lg group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
              </div>
              <p className="text-gray-400">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
