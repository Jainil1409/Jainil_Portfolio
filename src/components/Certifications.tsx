export default function Certifications() {
  const certs = [
    {
      id: 1,
      title: 'Exploratory Data for Machine Learning',
      issuer: 'Coursera',
      date: '2025',
      link: '/Exploratory_Data_ML_Certificate.pdf',
      icon: '📊',
    },
    {
      id: 2,
      title: 'Introduction to HTML, CSS & JavaScript',
      issuer: 'Coursera',
      date: '2025',
      link: '/HTML_CSS_JavaScript_Certificate.pdf',
      icon: '🌐',
    },
    {
      id: 3,
      title: 'Introduction to Java',
      issuer: 'Coursera',
      date: '2024',
      link: '/Introduction_To_Java_Certificate.pdf',
      icon: '☕',
    },
    {
      id: 4,
      title: 'Inheritance and Data Structures in Java',
      issuer: 'Certificate',
      date: '2024',
      link: '/Inheritance%20of%20java.pdf',
      icon: '🧬',
    },
    {
      id: 5,
      title: '.NET',
      issuer: 'Certificate',
      date: '2026',
      link: '/DotNet.pdf',
      icon: '🟣',
    },
  ];

  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full opacity-40 blur-3xl -z-10 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-gray-600 text-lg">Professional credentials and recognized accomplishments</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certs.map((cert, index) => (
            <div
              key={cert.id}
              className={`bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 border-2 border-blue-200 p-8 rounded-2xl hover:shadow-2xl card-hover animate-scale-in stagger-item-${index + 1} group relative overflow-hidden`}
            >
              {/* Animated background shine */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)', backgroundSize: '200% 200%' }}></div>

              <div className="relative z-10">
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">{cert.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-blue-600 font-semibold text-sm mb-2">
                  {cert.issuer}
                </p>
                <p className="text-gray-600 text-sm mb-4 flex items-center">
                  <span className="inline-block w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mr-2"></span>
                  Issued: {cert.date}
                </p>
                <a
                  href={cert.link}
                  className="text-blue-600 hover:text-blue-700 font-semibold text-sm link-underline"
                >
                  View Certificate →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
