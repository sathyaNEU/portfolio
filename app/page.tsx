import { Mail, Phone, Linkedin, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { portfolioData } from "@/lib/portfolio-data"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <div className="mx-auto max-w-4xl px-6 py-12 sm:px-8 lg:px-12">
        {/* Header */}
        <header className="mb-16 border-b-2 border-ink pb-8">
          <h1 className="mb-2 font-mono text-4xl font-bold tracking-tight sm:text-5xl">{portfolioData.name}</h1>
          <p className="mb-4 font-mono text-xl text-ink/80 sm:text-2xl">{portfolioData.title}</p>
          <div className="flex flex-col gap-2 font-mono text-sm sm:flex-row sm:gap-6">
            <a href={`tel:${portfolioData.contact.phone}`} className="flex items-center gap-2 hover:underline">
              <Phone className="h-4 w-4" />
              {portfolioData.contact.phone}
            </a>
            <a href={`mailto:${portfolioData.contact.email}`} className="flex items-center gap-2 hover:underline">
              <Mail className="h-4 w-4" />
              {portfolioData.contact.email}
            </a>
            <a
              href={portfolioData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={portfolioData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-12">
          <h2 className="mb-4 font-mono text-2xl font-bold uppercase tracking-wide">Summary</h2>
          <p className="font-mono leading-relaxed text-ink/90">{portfolioData.summary}</p>
        </section>

        {/* Professional Certifications */}
        <section className="mb-12">
          <h2 className="mb-4 font-mono text-2xl font-bold uppercase tracking-wide">Certifications</h2>
          <div className="space-y-3">
            {portfolioData.certifications.map((cert, index) => (
              <div key={index} className="border-l-4 border-ink pl-4">
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-2"
                >
                  <div className="flex-1">
                    <h3 className="font-mono font-semibold group-hover:underline">{cert.title}</h3>
                    <p className="font-mono text-sm text-ink/70">
                      {cert.issuer}
                      {cert.credentialId && ` | Credential ID: ${cert.credentialId}`}
                    </p>
                  </div>
                  <ExternalLink className="mt-1 h-4 w-4 flex-shrink-0" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="mb-6 font-mono text-2xl font-bold uppercase tracking-wide">Work Experience</h2>
          <div className="space-y-8">
            {portfolioData.experience.map((exp, index) => (
              <article key={index}>
                <div className="mb-3 flex flex-col justify-between sm:flex-row sm:items-start">
                  <div>
                    <h3 className="font-mono text-lg font-bold">{exp.title}</h3>
                    <p className="font-mono text-ink/80">
                      {exp.company}
                      {exp.location && ` - ${exp.location}`}
                    </p>
                  </div>
                  <p className="font-mono text-sm text-ink/70">
                    {exp.startDate} - {exp.endDate}
                  </p>
                </div>
                <ul className="ml-4 list-disc space-y-2 font-mono text-sm leading-relaxed text-ink/90">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex}>{resp}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-12">
          <h2 className="mb-6 font-mono text-2xl font-bold uppercase tracking-wide">Featured Projects</h2>
          <div className="space-y-8">
            {portfolioData.projects.map((project, index) => (
              <article key={index} className="border-2 border-ink p-6">
                <div className="mb-2 flex items-start justify-between gap-4">
                  <h3 className="font-mono text-xl font-bold">{project.title}</h3>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 font-mono text-sm hover:underline"
                    title="View on GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
                <p className="mb-4 font-mono text-sm leading-relaxed text-ink/90">{project.description}</p>
                <div className="mb-4">
                  <Image
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.imageAlt}
                    width={800}
                    height={600}
                    className="w-full border border-ink"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="border border-ink px-2 py-1 font-mono text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="mb-4 font-mono text-2xl font-bold uppercase tracking-wide">Education</h2>
          <div className="space-y-4">
            {portfolioData.education.map((edu, index) => (
              <div key={index} className="border-l-4 border-ink pl-4">
                <h3 className="font-mono font-bold">{edu.degree}</h3>
                <p className="font-mono text-sm text-ink/80">
                  {edu.institution}, {edu.location}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t-2 border-ink pt-8 text-center">
          <p className="font-mono text-sm text-ink/70">© 2025 {portfolioData.name}. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}
