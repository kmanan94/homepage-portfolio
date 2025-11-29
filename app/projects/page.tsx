export default function Projects() {
    const projects = [
      {
        id: 1,
        title: "Zoom Micromobilities",
        description: "Subscription based ride sharing platform for e-bikes, scooters, and other micromobility vehicles",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        git: "https://github.com/kmanan94/zoommicromobilities",
        demo: null,
        image: "/images/zoom_micromobilities.svg",
        inProgress: true,
      },
      {
        id: 2,
        title: "Kicks Trading Co",
        description: "Trading and verification platform for collectible sneakers",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        link: "https://github.com/yourusername/project2",
        demo: null,
        image: "/images/open_e_commerce.svg",
        inProgress: true
      },
      {
        id: 3,
        title: "Adbloq 2.0",
        description: "Utilizing a local AI model for advertisement blocking",
        technologies: ["Python", "Django", "LM Studio", "Docker"],
        link: null,
        demo: null, // No demo link
        image: "/images/adbloq.svg",
        inProgress: true
      },
      {
        id: 4,
        title: "Magnetic Cisco Design Systems - Cisco Security",
        description: "Component Library for web application standardization",
        technologies: ["React", "TypeScript", "Cypress e2e", "AWS ECR", "Docker", "Node", "TanStack Table", "Floating UI", "Storybook", "CI/CD", "Phosphor"],
        link: null,
        demo: null, // No demo link
        image: "/images/magnetic.png"
      },
      {
        id: 5,
        title: "Security Developer Portal - Cisco Security",
        description: "Developer integration and documentation portal for Cisco Security business",
        technologies: ["Next.js", "React", "TypeScript", "AWS EKS", "CI/CD"],
        link: null,
        demo: null, // No demo link
        image: "/images/security_developer_portal.svg"
      },
      {
        id: 6,
        title: "developer.webex.com - Cisco Webex",
        description: "Developer integration and documentation portal for Cisco Webex",
        technologies: ["Next.js", "React", "JavaScript", "jest", "Material UI", "AWS", "Kubernetes", "CI/CD"],
        link: null,
        demo: null, // No demo link
        image: "/images/developerwebex.png"
      },
      {
        id: 7,
        title: "apphub.webex.com - Cisco Webex",
        description: "Webex application store for integrated applications",
        technologies: ["Next.js", "React", "JavaScript", "jest", "Material UI", "AWS", "Kubernetes", "CI/CD"],
        link: null,
        demo: null, // No demo link
        image: "/images/apphubwebex.png"
      },
      {
        id: 8,
        title: "OS Upgrader - Cisco",
        description: "WebApp based IOS Network device software upgrade reducing network engineering time, security updates, and extend service life of legacy devices",
        technologies: ["Meteor", "Angular", "JavaScript", "Python", "NSO", "CI/CD"],
        link: null,
        demo: null, // No demo link
        image: "/images/cisco_nso.png"
      },
    ];
  
    return (
      <main className="min-h-screen bg-gray-950 py-16 px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">My Projects</h1>
            <p className="text-xl text-gray-400">
              Here is my portfolio of projects I've worked on or still progressing in
            </p>
          </div>
  
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden hover:border-gray-700 transition-colors"
              >
                {/* Project Image */}
                <div className="bg-gray-800 h-48 flex items-center justify-center">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-600 text-6xl">📦</span>
                  )}
                </div>
  
                {/* Project Content */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h2>
                  <p className="text-gray-400 mb-4">
                    {project.description}
                  </p>
  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
  
                  {/* Links */}
                  <div className="flex gap-3">
                    {project.git && (
                        <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                        >
                            View Code
                        </a>)}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white hover:bg-gray-200 text-gray-900 px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.inProgress && (
                        <p className="bg-gray-800 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium">
                            In Progress...
                        </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }