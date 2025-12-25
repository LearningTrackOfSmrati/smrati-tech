import React from 'react'
import config from '../config/portfolio'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">
          About Me
        </h2>
        <div className="about-content">
          <div className="about-text">
            {config.about.description.map((paragraph, index) => (
              <p key={index} className="about-description">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        
        <div className="skills-section">
          <h3 className="skills-main-title">Skills & Technologies</h3>
          <div className="skills-categories">
            {config.about.skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="skill-category">
                <h4 className="category-title">{category.category}</h4>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item-bar">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

