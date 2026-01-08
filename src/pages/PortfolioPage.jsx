import PageLayout from '../components/layout/PageLayout';
import Card, { CardContent, CardHeader } from '../components/ui/Card';
import './PortfolioPage.css';

export default function PortfolioPage() {
  const workExperience = [
    {
      company: "JorsasTech Limited",
      program: "Data Analyst (Remote)",
      position: "Data Analyst",
      date: "Nov 2025 - Present",
      details: [
        "Data governance, integrity, and privacy compliance",
        "Advanced data preparation, analysis, and visualization using SQL and PowerBI"
      ]
    },
    {
      company: "Deloitte",
      program: "Deloitte Data Analytics Virtual Internship",
      position: "Data Analyst Intern",
      date: "May 2025",
      details: [
        "Built interactive dashboard to present data audit insights",
        "Participated in a simulated project on data governance and business analytics",
        "Gained exposure to professional consulting workflows and client reporting"
      ]
    },
    {
      company: "HNG Internship Program",
      program: "Data Intern (Remote)",
      position: "Data Intern",
      date: "Mar 2025",
      details: [
        "Worked in a fast-paced, team-based environment to complete data analytics tasks",
        "Used tools like Excel and SQL to clean and manipulate datasets",
        "Participated in weekly evaluations and completed real-life business case studies",
        "Presented findings in dashboards and reports to mentors and peers"
      ]
    },
    {
      company: "CognifyZ Technologies",
      program: "Data Analyst Intern (Remote)",
      position: "Data Analyst Intern",
      date: "Dec 2024",
      details: [
        "Analyzed large datasets using Excel and Power Query, leading to an improvement in operational efficiency",
        "Created data visualizations and reports to simplify complex business insights",
        "Analyzed financial and sales data to identify key business metrics and trends",
        "Built visualizations with Power BI to communicate results to non-technical stakeholders"
      ]
    }
  ];

  const projects = [
    {
      title: "Netflix Title Project",
      type: "Data Project",
      date: "April 2025",
      image: "/projects/netflix.jpeg",
      details: [
        "Built a dynamic dashboard with filters and visualizations to explore global content trends",
        "Used ipywidgets and plotly in python to provide user-interactive storytelling",
        "Filtered and visualized data by genre, release year, country and ratings to analyze trends",
        "Deployed using ngrok and Python for easy sharing and accessibility",
        "Documented with markdown and PDF for comprehensive project overview"
      ]
    },
    {
      title: "Mikano Sales Project",
      type: "Data Project",
      date: "April 2025",
      image: "/projects/mikano sales.jpeg",
      details: [
        "Cleaned and analyzed sales data using Excel functions, pivot tables and charts",
        "Investigated sales trends, customer patterns, and product performance",
        "Automated data transformation using Power Query for reusability and efficiency",
        "Created comprehensive sales dashboard with KPIs and trend analysis"
      ]
    },
    {
      title: "Bike Sales Analysis",
      type: "Data Project",
      date: "April 2025",
      image: "/projects/bike sales.jpeg",
      details: [
        "Designed a dynamic Power BI dashboard using DAX measures for tracking sales performance",
        "Created KPIs like sales growth %, customer acquisition, and regional performance",
        "Enabled automated filtering by time period and product category",
        "Provided actionable insights for business decision making"
      ]
    }
  ];

  const certifications = [
    {
      name: "Google Data Analytics Professional Certificate",
      file: "/certifications/Google Data Analytics Professional Certificate.pdf",
      issuer: "Google",
      preview: "/certifications/Google Data Analytics Professional Certificate.pdf"
    },
    {
      name: "Accenture & Forage Training Certificate",
      file: "/certifications/Accenture North America Forage Certificate.pdf",
      issuer: "Accenture",
      preview: "/certifications/Accenture North America Forage Certificate.pdf"
    },
    {
      name: "Data For Health And Climate Africa Certificate",
      file: "/certifications/CAN Certificate.pdf",
      issuer: "Climate Action Network",
      preview: "/certifications/CAN Certificate.pdf"
    },
    {
      name: "Deloitte Internship Certificate",
      file: "/certifications/Delloitte Internship certificate.pdf",
      issuer: "Deloitte",
      preview: "/certifications/Delloitte Internship certificate.pdf"
    },
    {
      name: "CognifyZ Internship Certificate",
      file: "/certifications/Cognify Internship Certificate.pdf",
      issuer: "CognifyZ Technologies",
      preview: "/certifications/Cognify Internship Certificate.pdf"
    }
  ];

  const openCertificate = (cert, event) => {
    event.preventDefault();
    event.stopPropagation();
    window.open(cert.file, '_blank');
  };


  const technicalSkills = [
    "Data Storytelling",
    "Data Cleaning",
    "Quality Assessment",
    "Data Wrangling",
    "MS Word",
    "MS PowerPoint",
    "Data Visualization",
    "Exploratory Data Analysis",
    "Financial Analysis",
    "Business Strategy",
    "Communication",
    "Team Collaboration",
    "KPI Tracking",
    "Plotly",
    "Google Colab"
  ];

  return (
    <PageLayout>
      <div className="portfolio-page">
        <div className="portfolio-container">
          <div className="page-header">
            <h1 className="page-title">Portfolio</h1>
            <p className="page-subtitle">
              Professional experience, certifications, and technical expertise
            </p>
          </div>

          {/* Work Experience Section */}
          <section className="portfolio-section">
            <h2 className="section-heading">Work Experience</h2>
            <div className="experience-grid">
              {workExperience.map((exp, index) => (
                <Card key={index} className="experience-card">
                  <CardHeader>
                    <div className="experience-header">
                      <div>
                        <h3 className="experience-position">{exp.position}</h3>
                        <p className="experience-company">{exp.company}</p>
                        <p className="experience-program">{exp.program}</p>
                      </div>
                      <span className="experience-date">{exp.date}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="experience-details">
                      {exp.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section className="portfolio-section">
            <h2 className="section-heading">Key Projects</h2>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <Card key={index} className="project-card">
                  <div className="project-image-container">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="project-image"
                    />
                    <div className="project-overlay">
                      <span className="project-type">{project.type}</span>
                    </div>
                  </div>
                  <CardContent>
                    <div className="project-header">
                      <h3 className="project-title">{project.title}</h3>
                      <span className="project-date">{project.date}</span>
                    </div>
                    <ul className="project-details">
                      {project.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Certifications Section */}
          <section className="portfolio-section">
            <h2 className="section-heading">Certifications</h2>
            <div className="certifications-grid-new">
              {certifications.map((cert, index) => (
                <Card key={index} className="certification-card">
                  <div className="cert-preview-container" onClick={(e) => openCertificate(cert, e)}>
                    <iframe
                      src={`${cert.preview}#toolbar=0&navpanes=0&scrollbar=0&page=1`}
                      className="cert-preview-iframe"
                      title={cert.name}
                    />
                    <div className="cert-overlay">
                      <span className="cert-view-text">Click to View Full PDF</span>
                    </div>
                  </div>
                  <CardContent>
                    <h3 className="cert-title">{cert.name}</h3>
                    <p className="cert-issuer">{cert.issuer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>



          {/* Technical Skills Section */}
          <section className="portfolio-section">
            <h2 className="section-heading">Technical Skills & Competencies</h2>
            <Card className="skills-card">
              <CardContent>
                <div className="skills-tags">
                  {technicalSkills.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Key Achievements Section */}
          <section className="portfolio-section">
            <h2 className="section-heading">Key Achievements</h2>
            <Card className="achievements-card">
              <CardContent>
                <div className="achievements-list">
                  <div className="achievement-item">
                    <span className="achievement-icon">⚡</span>
                    <span className="achievement-text">Automated data cleaning processes, reducing manual effort by 40%</span>
                  </div>
                  <div className="achievement-item">
                    <span className="achievement-icon">📈</span>
                    <span className="achievement-text">Analyzed large datasets using Excel and Power Query, leading to an improvement in operational efficiency</span>
                  </div>
                  <div className="achievement-item">
                    <span className="achievement-icon">🔍</span>
                    <span className="achievement-text">Conducted market research and competitive analysis to identify emerging industry trends</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}

