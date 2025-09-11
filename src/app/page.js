'use client'

import { useState, useEffect, useRef } from 'react'
import Image from "next/image";

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isVisible, setIsVisible] = useState({})
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Mouse tracking for interactive background
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Three.js initialization
  useEffect(() => {
    let scene, camera, renderer, geometry, material, mesh, animationId

    const initThreeJS = async () => {
      try {
        const THREE = await import('three')

        const canvas = document.getElementById('threejs-canvas')
        if (!canvas) return

        scene = new THREE.Scene()
        camera = new THREE.PerspectiveCamera(75, canvas.offsetWidth / canvas.offsetHeight, 0.1, 1000)
        renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
        renderer.setSize(canvas.offsetWidth, canvas.offsetHeight)
        renderer.setClearColor(0x000000, 0)

        const torusGeometry = new THREE.TorusGeometry(1, 0.4, 16, 100)
        const torusMaterial = new THREE.MeshBasicMaterial({
          color: 0x6366f1,
          wireframe: true,
          transparent: true,
          opacity: 0.7
        })
        const torus = new THREE.Mesh(torusGeometry, torusMaterial)
        scene.add(torus)

        const particlesGeometry = new THREE.BufferGeometry()
        const particlesCount = 500
        const posArray = new Float32Array(particlesCount * 3)

        for (let i = 0; i < particlesCount * 3; i++) {
          posArray[i] = (Math.random() - 0.5) * 5
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
        const particlesMaterial = new THREE.PointsMaterial({
          size: 0.005,
          color: 0x8b5cf6,
          transparent: true,
          opacity: 0.8
        })
        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
        scene.add(particlesMesh)

        camera.position.z = 3

        const animate = () => {
          animationId = requestAnimationFrame(animate)
          torus.rotation.x += 0.01
          torus.rotation.y += 0.01
          particlesMesh.rotation.y += 0.002
          renderer.render(scene, camera)
        }

        animate()

        const handleResize = () => {
          if (canvas) {
            camera.aspect = canvas.offsetWidth / canvas.offsetHeight
            camera.updateProjectionMatrix()
            renderer.setSize(canvas.offsetWidth, canvas.offsetHeight)
          }
        }

        window.addEventListener('resize', handleResize)

        return () => {
          window.removeEventListener('resize', handleResize)
          if (animationId) cancelAnimationFrame(animationId)
          if (renderer) renderer.dispose()
        }
      } catch (error) {
        console.log('Three.js not available, using fallback')
      }
    }

    const timeoutId = setTimeout(() => {
      initThreeJS()
    }, 1000)

    return () => {
      clearTimeout(timeoutId)
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [])

  // Intersection Observer for animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '-50px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: true
          }))
        }
      })
    }, observerOptions)

    document.querySelectorAll('section[id]').forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const projects = [
    {
      title: "Coordinate XY",
      description: "Web application platform built with PERN stack, permitting users to import CSV files directly, visualize their content, manipulate data, and generate graphs. The application supports simultaneous interaction among multiple users and provides functionality to export CSV data into alternative formats like JPG, JPEG, or PDF files.",
      tech: ["ThreeJS", "ReactJS", "Express", "PostgreSQL", "SequelizeJS", "AWS EC2"],
      link: "#"
    },
    {
      title: "To do list",
      description: "Developed a to-do list web application using vanilla JavaScript, enabling users to add tasks and track completion with a click.",
      tech: ["VanillaJS", "JasmineJS"],
      link: "#"
    },
    {
      title: "Voice Assistant AI",
      description: "Created an interactive web application that takes user input and transforms it into dynamic, spoken responses using AI-generated voice. This project blends functionality with creativity, showcasing how simple text inputs can evolve into engaging, conversational experiences.",
      tech: ["TensorFlowJS"],
      link: "#"
    }
  ]

  const experiences = [
    {
      title: "Permanent Mission of the Republic of Korea to the United Nations",
      period: "2022, 2023",
      description: "Aided Korean government officials in the General Assembly of the United Nations for the Annual UNGA Event. Collaborated in reconciling the Korean government's demands with external partners. Proficiently handled managing multiple tasks simultaneously in dynamic, fast-paced settings. Established a secure workspace and network infrastructure."
    },
    {
      title: "Fullstack Academy",
      period: "2020 - 2023",
      description: "Delivered and deployed full-stack web and mobile apps using modern services. Familiarity with continuous integration and continuous deployment pipelines. Experience in software design principles and documenting technical specifications."
    },
    {
      title: "Private IT Service Provider",
      period: "2019 - 2021",
      description: "Performed on-site commercial and residential computer diagnostics, software and hardware installation, network installation, and optimization. Upgraded hardware and software for the business work environment. Assisting in setting up and repairing computers, routers, phones, printers, and establishing internet connections."
    }
  ]

  const nonTechExperiences = [
    {
      title: "Partners Coffee Roaster",
      description: "Responsible for supervising and leading a team on daily tasks during shifts, supporting staff, and meeting customers' needs. Trained new employees and provided on-the-job coaching. Evaluated coffee quality through tastings to ensure consistency and satisfaction. Represented the brand by organizing and leading coffee tasting events to drive promotion and outreach. Certified Food Handlers License."
    },
    {
      title: "Hair IB",
      description: "Managed workload and deadlines to deliver assets in a fast-paced environment. Developed and designed graphical assets for agency clients. Organized and helped the company grow its business using strategic social media marketing campaigns."
    },
    {
      title: "Gotan Tribeca",
      description: "Joined a newly founded cafe as an early employee, where personally played a key role in building foundation of the business by managing supply chain orders reducing costs by 25%, optimizing day-today operations, and collaborating closely with the CEO to develop systems that supported the cafe's successful growth into a franchise model."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white relative">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.3s ease-out'
          }}
        />
        <div
          className="absolute w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            right: `${100 - mousePosition.x}%`,
            bottom: `${100 - mousePosition.y}%`,
            transform: 'translate(50%, 50%)',
            transition: 'all 0.5s ease-out'
          }}
        />
      </div>

      {/* Fixed Navigation */}
      <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-8 py-4 transition-all duration-300">
        <div className="flex items-center space-x-8">
          {[
            { id: 'hero', label: 'Home' },
            { id: 'about', label: 'About' },
            { id: 'experience', label: 'Experience' },
            { id: 'projects', label: 'Projects' },
            { id: 'contact', label: 'Contact' }
          ].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`text-sm font-medium transition-all duration-300 hover:text-purple-300 ${
                activeSection === id ? 'text-white' : 'text-slate-400'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex flex-col justify-center items-center px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-300 bg-clip-text text-transparent animate-pulse">
                David Choi
              </h1>
              <p className="text-2xl md:text-3xl text-purple-300 font-semibold">
                Software Developer / Designer
              </p>
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                Software engineer who loves turning ideas into code and is always eager to learn new technologies.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/25"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border border-white/30 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>

            <div className="flex justify-center gap-6 mt-8">
              <a
                href="https://github.com/davidjchoi"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-0.5 hover:scale-105 transition-all duration-300"
              >
                <span className="block rounded-md bg-slate-950 px-6 py-3 text-sm font-medium group-hover:bg-transparent transition-all duration-300">
                  <Image
                  src="/github.png"
                  width={50}
                  height={50}
                  alt="github" />
                </span>
              </a>
              <a
                href="https://linkedin.com/in/davidj-choi"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-0.5 hover:scale-105 transition-all duration-300"
              >
                <span className="block rounded-md bg-slate-950 px-6 py-3 text-sm font-medium group-hover:bg-transparent transition-all duration-300">
                  <Image
                  src="/linkedin.png"
                  width={50}
                  height={50}
                  alt="linkedin" />
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className={`min-h-screen flex flex-col justify-center px-6 py-24 transition-all duration-1000 ${
            isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-8'
          }`}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  I&apos;m a passionate Software Engineer with a strong foundation in building scalable, user-friendly applications. My background combines programming expertise with problem-solving skills, allowing me to create solutions that are both efficient and impactful.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Beyond coding, I thrive in collaborative environments where I can learn from others and share my own knowledge. I&apos;m always looking to grow, whether that&apos;s  by exploring new technologies, refining my technical skills, or tackling challenging projects.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-6 text-center">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", "PostgreSQL", "MongoDB", "AWS", "Docker"].map((skill, index) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-purple-600/30 border border-purple-500/50 rounded-full text-sm font-medium hover:bg-purple-600/50 transition-all duration-300 cursor-default"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className={`min-h-screen flex flex-col justify-center px-6 py-24 transition-all duration-1000 delay-200 ${
            isVisible.experience ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-8'
          }`}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Experience
            </h2>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={exp.title}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-500 hover:scale-[1.02]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                    <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors flex-1">
                      {exp.title}
                    </h3>
                    <span className="text-sm font-medium text-purple-300 bg-purple-900/30 px-4 py-2 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Non-tech Experience */}
            <div className="mt-16">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-purple-300">
                Additional Experience
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {nonTechExperiences.map((exp, index) => (
                  <div
                    key={exp.title}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300"
                  >
                    <h4 className="font-semibold text-white mb-3">{exp.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className={`min-h-screen flex flex-col justify-center px-6 py-24 transition-all duration-1000 delay-400 ${
            isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-8'
          }`}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-500 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-6">
                    <div className="h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                      {/* <span className="text-4xl"></span> */}
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-sm text-gray-400 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium text-purple-300 bg-purple-900/30 border border-purple-700/50 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className={`min-h-screen flex flex-col justify-center px-6 py-24 transition-all duration-1000 delay-600 ${
            isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-8'
          }`}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Let&apos;s Work Together
            </h2>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                I&apos;m always interested in new opportunities and exciting projects. Let&apos;s create something amazing together!
              </p>

              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="mailto:your.email@gmail.com"
                  className="group flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all duration-300 hover:scale-105"
                >
                  <span className="text-2xl">📧</span>
                  <span className="font-medium">Email Me</span>
                </a>
                <a
                  href="https://linkedin.com/in/davidj-choi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all duration-300 hover:scale-105"
                >
                  <span className="text-2xl">💼</span>
                  <span className="font-medium">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/davidjchoi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all duration-300 hover:scale-105"
                >
                  <span className="text-2xl">🐙</span>
                  <span className="font-medium">GitHub</span>
                </a>
              </div>
            </div>

            {/* Footer */}
            <footer className="mt-16 text-sm text-slate-400 leading-relaxed">
              <p>
                Designed in <span className="font-bold text-pink-400 underline decoration-pink-500">Figma</span> and
                coded in <span className="font-bold text-sky-400 underline decoration-sky-500">Visual Studio Code</span>.
                Built using <span className="font-bold text-yellow-400 underline decoration-wavy decoration-yellow-300">Next.js</span> and{' '}
                <span className="font-bold text-indigo-400 underline decoration-wavy decoration-indigo-300">Tailwind CSS.</span>
              </p>
            </footer>
          </div>
        </section>
      </main>
    </div>
  )
}
