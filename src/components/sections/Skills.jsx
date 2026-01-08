import React from 'react';
import Card from '../ui/Card';
import './Skills.css';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Core Data Analysis Tools',
      icon: '📊',
      skills: [
        { name: 'Excel', level: 95 },
        { name: 'Power BI', level: 90 },
        { name: 'SQL', level: 85 },
        { name: 'Python (Pandas, Numpy, Matplotlib)', level: 80 },
        { name: 'Tableau', level: 85 },
        { name: 'Google Sheets', level: 90 }
      ]
    },
    {
      title: 'Technical Competencies',
      icon: '🎯',
      skills: [
        { name: 'Data Storytelling', level: 90 },
        { name: 'Data Cleaning', level: 95 },
        { name: 'Quality Assessment', level: 92 },
        { name: 'Data Wrangling', level: 88 },
        { name: 'Data Visualization', level: 90 },
        { name: 'Exploratory Data Analysis', level: 85 },
        { name: 'Financial Analysis', level: 82 },
        { name: 'KPI Tracking', level: 85 },
        { name: 'Plotly', level: 75 }
      ]
    },
    {
      title: 'Business & Communication',
      icon: '💡',
      skills: [
        { name: 'Communication', level: 92 },
        { name: 'Team Collaboration', level: 88 },
        { name: 'Business Strategy', level: 82 },
        { name: 'MS Word', level: 90 },
        { name: 'MS PowerPoint', level: 88 }
      ]
    }
  ];

  return (
    <section className="skills-section">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-description">
            Comprehensive skill set in data analysis, visualization, and business intelligence
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <Card key={index} className="skill-category-card">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-info">
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

