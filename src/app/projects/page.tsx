import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Projects | Portfolio',
};

export default function ProjectsPage() {
  const allProjects = [
    {
      id: 1,
      title: 'SoulTrekker - Trekking Website',
      description: 'Full-stack platform for discovering and booking trekking adventures with user authentication, trek listings, booking management, and payment integration.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'HTML/CSS'],
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80',
      link: 'https://soul-trekker-the-trekking-website.vercel.app/',
    },
    {
      id: 2,
      title: 'Hospital Management System',
      description: 'Comprehensive system for managing hospital operations including patient records, appointment scheduling, staff management, and billing.',
      tech: ['React', 'Node.js', 'Express', 'MySQL', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1576091160399-1129b13e3dfa?w=500&q=80',
      link: '#',
    },
    {
      id: 3,
      title: 'Electronic Hub',
      description: 'E-commerce platform for electronic products with product catalog, shopping cart, user authentication, and order tracking.',
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Express'],
      image: 'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=500&q=80',
      link: '#',
    },
    {
      id: 4,
      title: 'Home Fit',
      description: 'Fitness and wellness web application with workout tracking, nutrition planning, and user progress monitoring.',
      tech: ['React', 'Node.js', 'MongoDB', 'CSS', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&q=80',
      link: '#',
    },
    {
      id: 5,
      title: 'Vehicle Challan System',
      description: 'Traffic violation management system built with Python for generating and tracking vehicle challans with automated notifications.',
      tech: ['Python', 'MySQL', 'Django', 'Flask'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80',
      link: '#',
    },
    {
      id: 6,
      title: 'School Management System',
      description: 'Comprehensive Python-based system for managing school operations including student records, attendance, and grades.',
      tech: ['Python', 'MySQL', 'Django'],
      image: 'https://images.unsplash.com/photo-1594735692000-a69e6777f0e4?w=500&q=80',
      link: '#',
    },
    {
      id: 7,
      title: 'Ride Sharing Application',
      description: 'Java-based ride sharing platform with driver-rider matching, real-time tracking, and payment processing.',
      tech: ['Java', 'MySQL', 'Spring Boot'],
      image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=500&q=80',
      link: '#',
    },
    {
      id: 8,
      title: 'Supply Chain Management System',
      description: 'Java-based system for managing supply chain operations including inventory, warehouse, and logistics tracking.',
      tech: ['Java', 'MySQL', 'Spring Framework'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80',
      link: '#',
    },
    {
      id: 9,
      title: 'Smart Dustbin (IoT)',
      description: 'IoT-based smart waste management system with sensors, real-time monitoring, and automatic notifications.',
      tech: ['IoT', 'Arduino', 'Python', 'Sensors'],
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&q=80',
      link: '#',
    },
    {
      id: 10,
      title: 'Rentwheels (Car Rental Management System)',
      description: 'A comprehensive car rental management platform that streamlines booking, fleet management, and customer relations.',
      tech: ['.NET MVC', 'C#', 'SQL Server'],
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=500&q=80',
      link: 'https://rentalwheels-1.onrender.com/',
    },
  ];

  return (
    <>
      <Navigation />
      <main>
        <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
          {/* Decorative blobs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="animate-fade-in">
              <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-400/30 rounded-full text-blue-300 text-sm font-semibold backdrop-blur-md mb-6">
                🚀 Portfolio
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">All Projects</h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                A collection of full-stack applications, Python projects, Java systems, and IoT solutions I&apos;ve built and worked on.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-b from-white via-slate-50 to-slate-100 relative">
          {/* Decorative blob */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-40 blur-3xl -z-10 animate-float"></div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 card-hover card-glow animate-scale-in stagger-item-${(index % 6) + 1}`}
                >
                  {/* Image Container with Overlay */}
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500">
                    <div
                      className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{
                        backgroundImage: `url(${project.image})`,
                        backgroundPosition: 'center',
                      }}
                    />

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 bg-blue-500/90 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold">
                      {index < 4 ? '⚛️ React' : index < 6 ? '🐍 Python' : index < 8 ? '☕ Java' : index < 9 ? '🔌 IoT' : '🌐 .NET'}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className={`text-xs font-semibold px-3 py-1 rounded-full transition-all duration-300 ${
                            techIndex === 0
                              ? 'bg-blue-100 text-blue-700 group-hover:bg-blue-600 group-hover:text-white'
                              : techIndex === 1
                              ? 'bg-purple-100 text-purple-700 group-hover:bg-purple-600 group-hover:text-white'
                              : 'bg-pink-100 text-pink-700 group-hover:bg-pink-600 group-hover:text-white'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    {project.link !== '#' ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold text-sm group/link"
                      >
                        <span>View Project</span>
                        <span className="transition-transform group-hover/link:translate-x-1">→</span>
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-gray-400 font-bold text-sm cursor-not-allowed" title="Link coming soon">
                        <span>No Link Available</span>
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* View More */}
            <div className="text-center mt-16 animate-slide-in-up">
              <p className="text-gray-600 mb-4">Want to see more projects or discuss collaborations?</p>
              <a href="#contact" className="btn-primary">
                Get In Touch
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
