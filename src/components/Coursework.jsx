import { BookOpen } from 'lucide-react';

const Coursework = () => {
  const courses = [
    { name: 'Data Structures & Algorithms', code: 'CS201', grade: 'A' },
    { name: 'Object-Oriented Programming', code: 'CS102', grade: 'A' },
    { name: 'Database Management Systems', code: 'CS304', grade: 'A' },
    { name: 'Web Engineering', code: 'CS411', grade: 'A' },
    { name: 'Software Engineering', code: 'CS301', grade: 'B+' },
    { name: 'Operating Systems', code: 'CS402', grade: 'A-' },
  ];

  return (
    <section id="coursework" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-dark-border/50">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Relevant Coursework</h2>
        <div className="w-20 h-1 bg-accent-primary mx-auto rounded-full"></div>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Key academic courses that have shaped my understanding of computer engineering and software development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course, index) => (
          <div key={index} className="glass-panel p-4 rounded-lg flex items-center gap-4 hover:border-accent-primary/50 transition-colors">
            <div className="p-2 bg-dark-bg rounded-md text-accent-primary">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-white font-medium text-sm sm:text-base">{course.name}</h3>
              <p className="text-gray-400 text-xs mt-1">{course.code}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Coursework;
