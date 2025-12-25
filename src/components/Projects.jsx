import React from 'react'
import config from '../config/portfolio'
import './Projects.css'

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">
          Featured Projects
        </h2>
        <div className="projects-grid">
          {config.projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className={`project-gradient ${project.gradient}`}></div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.link} className="project-link">View Project →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

