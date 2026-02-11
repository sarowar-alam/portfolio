import { useState } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [expandedProject, setExpandedProject] = useState(null)
  const [zoomedImage, setZoomedImage] = useState(null)

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    if (e) e.preventDefault()
    const { name, email, message } = formData
    if (!name || !email || !message) {
      alert('Please fill in all fields')
      return
    }
    const mailtoLink = `mailto:sarowar@hotmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`
    window.location.href = mailtoLink
    setFormData({ name: '', email: '', message: '' })
  }

  const toggleProject = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId)
  }

  return (
    <div className="portfolio">
      {/* Animated Background */}
      <div className="bg-animation">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
      </div>

      {/* Header */}
      <header className="header">
        <h1 className="logo-animated">Md Sarowar Alam</h1>
        <nav>
          <button 
            className={activeSection === 'home' ? 'active' : ''}
            onClick={() => setActiveSection('home')}
          >
            Home
          </button>
          <button 
            className={activeSection === 'projects' ? 'active' : ''}
            onClick={() => setActiveSection('projects')}
          >
            Projects
          </button>
          <button 
            className={activeSection === 'github' ? 'active' : ''}
            onClick={() => setActiveSection('github')}
          >
            GitHub
          </button>
          <button 
            className={activeSection === 'certifications' ? 'active' : ''}
            onClick={() => setActiveSection('certifications')}
          >
            Certifications
          </button>
          <button 
            className={activeSection === 'education' ? 'active' : ''}
            onClick={() => setActiveSection('education')}
          >
            Education
          </button>
          <button 
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={() => setActiveSection('contact')}
          >
            Contact
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main">
        {activeSection === 'home' && (
          <section className="hero fade-in">
            <div className="profile-image-container">
              <img src="Profile2.png" alt="Md Sarowar Alam" className="profile-image" />
            </div>
            <div className="hero-content">
              <h2 className="glowing-text">Lead DevOps Engineer</h2>
              <p className="subtitle">Leading automation & cloud infrastructure at Hogarth Worldwide | Teaching AWS, Kubernetes, Jenkins & DevOps at Ostad | 20+ years in IT</p>
              <div className="skills">
                <span className="skill skill-bounce">?? AWS</span>
                <span className="skill skill-bounce" style={{animationDelay: '0.1s'}}>??? Terraform</span>
                <span className="skill skill-bounce" style={{animationDelay: '0.2s'}}>?? Jenkins</span>
                <span className="skill skill-bounce" style={{animationDelay: '0.3s'}}>?? Ansible</span>
                <span className="skill skill-bounce" style={{animationDelay: '0.4s'}}>?? Python</span>
                <span className="skill skill-bounce" style={{animationDelay: '0.5s'}}>?? PowerShell</span>
                <span className="skill skill-bounce" style={{animationDelay: '0.6s'}}>?? Docker</span>
                <span className="skill skill-bounce" style={{animationDelay: '0.7s'}}>?? Kubernetes</span>
                <span className="skill skill-bounce" style={{animationDelay: '0.8s'}}>?? Zabbix</span>
                <span className="skill skill-bounce" style={{animationDelay: '0.9s'}}>?? Argo-CD</span>
                <span className="skill skill-bounce" style={{animationDelay: '1.0s'}}>?? Prometheus</span>
                <span className="skill skill-bounce" style={{animationDelay: '1.1s'}}>?? Grafana</span>
                <span className="skill skill-bounce" style={{animationDelay: '1.2s'}}>?? IAM</span>
                <span className="skill skill-bounce" style={{animationDelay: '1.3s'}}>?? CloudFront</span>
                <span className="skill skill-bounce" style={{animationDelay: '1.4s'}}>?? RDS</span>
                <span className="skill skill-bounce" style={{animationDelay: '1.5s'}}>?? Redshift</span>
              </div>
              <button className="cta-button" onClick={() => setActiveSection('projects')}>
                <span>View My Work</span>
                <span className="arrow">→</span>
              </button>
            </div>
            <div className="hero-illustration">
              <div className="floating-circle circle1"></div>
              <div className="floating-circle circle2"></div>
              <div className="floating-circle circle3"></div>
            </div>
          </section>
        )}

        {activeSection === 'home' && (
          <section className="experience-section fade-in">
            <h2 className="section-title">Professional Journey</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <a href="https://www.hogarth.com/" target="_blank" rel="noopener noreferrer" className="logo-link">
                    <img src="hogarth-logo.avif" alt="Hogarth Worldwide" className="timeline-company-logo" />
                  </a>
                  <h3>Lead DevOps Engineer</h3>
                  <h4><a href="https://www.hogarth.com/" target="_blank" rel="noopener noreferrer" className="company-link">Hogarth Worldwide</a> | Road 11, House 76/A, Banani, Dhaka, Bangaldesh</h4>
                  <p className="timeline-date">May 2025 - Present</p>
                  <p className="role-overview"><strong>Role Overview:</strong> Own end-to-end DevOps strategy, automation, and cloud infrastructure across production and non-production environments. I design scalable, secure, and repeatable delivery patterns using AWS, Terraform, Jenkins, PowerShell, and Python, consistently replacing manual, high-risk procedures with resilient pipelines. My focus: zero downtime, strong security, measurable efficiency gains, and platform standardization.</p>
                  <p className="section-header"><strong>Key Projects & Achievements</strong></p>
                  <ul className="timeline-highlights">
                    <li>Configuration-Driven ECS Microservice Deployment Platform</li>
                    <li className="indented-item"><strong>Project Summary:</strong> Consolidated 11 independent pipelines into one using JSON-driven configuration and reusable Terraform modules.</li>
                    <li className="indented-item"><strong>Innovation:</strong> Single orchestrator pipeline, dynamic tfvars generation, per-service state isolation, vulnerability scanning gates, intelligent skip logic when no change detected.</li>
                    <li className="indented-item"><strong>Impact:</strong> 91% complexity reduction, new services onboarded in minutes, independent failure domains, cleaner governance & maintainability.</li>
                    <li>Automated Database Disaster Recovery Validation</li>
                    <li className="indented-item"><strong>Project Summary:</strong> A weekly, fully automated system that proves backups can actually be restored  not just stored.</li>
                    <li className="indented-item"><strong>Key Mechanics:</strong> Terraform provisions ephemeral environments, Python transfers latest backups cross-account, PowerShell restores via WinRM, automated comparison between restored and live data, email reporting to stakeholders, automatic teardown to control cost.</li>
                    <li className="indented-item"><strong>Impact:</strong> Verification time reduced from days to ~30 minutes, zero manual involvement, continuous readiness assurance.</li>
                    <li>Enterprise SSL/TLS Certificate Lifecycle Automation</li>
                    <li className="indented-item"><strong>Project Summary:</strong> Designed a fully automated framework for renewing and deploying certificates across IIS, Jenkins (Windows & Linux), and monitoring platforms  with zero downtime and full auditability.</li>
                    <li className="indented-item"><strong>What Made It Complex:</strong> Multiple platforms, formats (PFX, JKS, PEM, KEY), cross-region cloud distribution, strict security controls, and the need for seamless service continuity.</li>
                    <li className="indented-item"><strong>Capabilities Delivered:</strong> Automated expiry monitoring and renewal triggers, DNS validation and issuance through Let's Encrypt, conversion & deployment to each platform automatically, pre-change backups and rapid rollback, secure distribution via time-limited access, HTML reporting & failure diagnostics.</li>
                    <li className="indented-item"><strong>Business Results:</strong> Cut quarterly manual work (~8 hours) to fully unattended, eliminated expiration incidents, improved compliance with automated traceability, enabled frequent, secure rotation policies.</li>
                    <li>Multi-Server Production Hotfix Deployment Automation Pipeline</li>
                    <li className="indented-item"><strong>Project Summary:</strong> Built a CI/CD system that automates hotfix deployment to multiple Windows production servers in parallel. What previously took hours of coordinated manual effort now completes in minutes with automatic backup and rollback.</li>
                    <li className="indented-item"><strong>Technical Implementation:</strong> Jenkins Pipeline orchestration in Groovy with conditional stages, PowerShell remoting via PSSession for remote execution, centralized artifact distribution from AWS S3, pre-deployment backup with timestamped versioning, selective deployments (binaries, configs, or both), hardened validation, logging, and failure handling.</li>
                    <li className="indented-item"><strong>Impact:</strong> 75% reduction in deployment time, removed human error from production releases, standardized release mechanics across environments, enabled safe, repeatable emergency fixes.</li>
                    <li>Non-Production Environment Refresh Automation</li>
                    <li className="indented-item"><strong>Project Summary:</strong> A Jenkins-driven orchestration that refreshes playground environments with sanitized production data.</li>
                    <li className="indented-item"><strong>Engineering Depth:</strong> Multi-server workflow across web and DB tiers, automated binary and DB backups, intelligent S3 retrieval (weekday/weekend logic), permission preservation & safe restore patterns, data sanitization to prevent accidental outbound communication.</li>
                    <li className="indented-item"><strong>Impact:</strong> 4 hours ? 30 minutes (87.5% faster), enabled frequent refreshes for developers, removed fragile, tribal-knowledge procedures.</li>
                    <li>Additional Leadership Contributions</li>
                    <li className="indented-item">Building private connectivity patterns using VPC peering and PrivateLink to strengthen security and reduce data-path costs</li>
                    <li className="indented-item">Replaced manual operations checklists (94 tasks) with automated Python reporting integrated with secure credential retrieval</li>
                    <li className="indented-item">Implemented automated lifecycle management for unused compute resources with proactive alerts</li>
                  </ul>
                  <p className="tools-header"><strong>Core Technologies</strong></p>
                  <div className="tech-stack" style={{marginTop: '10px'}}>
                    <span className="tech-tag">AWS</span>
                    <span className="tech-tag">Terraform</span>
                    <span className="tech-tag">Jenkins</span>
                    <span className="tech-tag">Groovy</span>
                    <span className="tech-tag">PowerShell</span>
                    <span className="tech-tag">Python</span>
                    <span className="tech-tag">Windows Server</span>
                    <span className="tech-tag">Linux</span>
                    <span className="tech-tag">S3</span>
                    <span className="tech-tag">IAM</span>
                    <span className="tech-tag">ECS</span>
                    <span className="tech-tag">CloudWatch</span>
                    <span className="tech-tag">WinRM</span>
                    <span className="tech-tag">Git</span>
                    <span className="tech-tag">Trivy</span>
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <a href="https://www.hogarth.com/" target="_blank" rel="noopener noreferrer" className="logo-link">
                    <img src="hogarth-logo.avif" alt="Hogarth Worldwide" className="timeline-company-logo" />
                  </a>
                  <h3>Principal DevOps Engineer</h3>
                  <h4>Hogarth Worldwide | Dhaka, Bangladesh (Hybrid)</h4>
                  <p className="timeline-date">Jan 2024 - Apr 2025 · 1 year 4 months</p>
                  <p>Designed and implemented scalable, secure, and automated infrastructure solutions across AWS using Terraform, Jenkins, Ansible, Python, and PowerShell.</p>
                  <ul className="timeline-highlights">
                    <li>?? Built ECS zero-task architecture with SQS-triggered auto-scaling via Lambda and Step Scaling</li>
                    <li>?? Automated EC2 provisioning with Jenkins + Terraform + Ansible pipelines</li>
                    <li>??? Developed parameterized Terraform modules and Jenkins pipelines for ECS deployments and AMI operations</li>
                    <li>?? Built private networks using VPC peering and Private Link. Standardized IAM roles with permission boundaries</li>
                    <li>?? Managed RDS (MySQL backups via Lambda), Redshift (auto-patching, IP-bound access)</li>
                    <li>?? Migrated and enhanced Zabbix with advanced triggers for missed jobs, EC2 health, and S3 syncs</li>
                    <li>?? Replaced manual checklists (94 items) with Python automation</li>
                    <li>?? Automated freeware SSL renewals, Route 53 validation, and Windows Certificate Store updates via Jenkins</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <a href="https://www.wundermanthompson.com/" target="_blank" rel="noopener noreferrer" className="logo-link">
                    <img src="wunderman-thompson-log.png" alt="Wunderman Thompson" className="timeline-company-logo" />
                  </a>
                  <h3>Senior DevOps Engineer</h3>
                  <h4>Wunderman Thompson | Dhaka, Bangladesh</h4>
                  <p className="timeline-date">Oct 2022 - Dec 2023 · 1 year 3 months</p>
                  <p>Managed AWS infrastructure, CI/CD pipelines, IAM configurations, and cloud security implementations across development and production environments.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <a href="https://www.vml.com/" target="_blank" rel="noopener noreferrer" className="logo-link">
                    <img src="VML-logo.png" alt="VML" className="timeline-company-logo" />
                  </a>
                  <h3>Senior Information Technology Manager</h3>
                  <h4>VML | Dhaka, Bangladesh</h4>
                  <p className="timeline-date">Aug 2021 - May 2023 · 1 year 10 months</p>
                  <ul className="timeline-highlights">
                    <li>??? Designed, developed, and maintained VMware vCenter Server with 7 ESX vSphere hosts managing 100+ VMs</li>
                    <li>?? Used vRanger Pro for VM backups. Managed AD accounts, GPO-based software deployment (Adobe, browsers, Skype)</li>
                    <li>?? Worked with IBM for creating Local VPN server for remote employees</li>
                    <li>?? Managed Egnyte storage sync and user/security management</li>
                    <li>?? Developed Purchase & Inventory Management system, Invoice and Credit Note system using ASP.NET, VB.NET, SQL Server with AD integration</li>
                    <li>?? Built web-based Access Card Management system for employee attendance tracking with Crystal Reports</li>
                    <li>?? Created PowerShell scripts for file monitoring alerts on finance file share servers</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <a href="https://www.wundermanthompson.com/" target="_blank" rel="noopener noreferrer" className="logo-link">
                    <img src="wunderman-thompson-log.png" alt="Wunderman Thompson" className="timeline-company-logo" />
                  </a>
                  <h3>Information Technology Manager</h3>
                  <h4>Wunderman Thompson | Bangladesh</h4>
                  <p className="timeline-date">Mar 2016 - Sep 2021 · 5 years 7 months</p>
                  <p>Comprehensive IT infrastructure management, virtualization, network administration, and custom application development.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <a href="https://www.wundermanthompson.com/" target="_blank" rel="noopener noreferrer" className="logo-link">
                    <img src="wunderman-thompson-log.png" alt="Wunderman Thompson" className="timeline-company-logo" />
                  </a>
                  <h3>Senior System Administrator</h3>
                  <h4>Wunderman Thompson | Bangladesh</h4>
                  <p className="timeline-date">Jun 2012 - Feb 2016 · 3 years 9 months</p>
                  <p>System administration, server management, and infrastructure support.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <a href="https://www.wundermanthompson.com/" target="_blank" rel="noopener noreferrer" className="logo-link">
                    <img src="wunderman-thompson-log.png" alt="Wunderman Thompson" className="timeline-company-logo" />
                  </a>
                  <h3>Senior Network Administrator</h3>
                  <h4>Wunderman Thompson | Bangladesh</h4>
                  <p className="timeline-date">Sep 2010 - May 2012 · 1 year 9 months</p>
                  <p>Network infrastructure management and administration.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <a href="https://www.wundermanthompson.com/" target="_blank" rel="noopener noreferrer" className="logo-link">
                    <img src="wunderman-thompson-log.png" alt="Wunderman Thompson" className="timeline-company-logo" />
                  </a>
                  <h3>Network Administrator</h3>
                  <h4>Wunderman Thompson | Bangladesh</h4>
                  <p className="timeline-date">Sep 2009 - Aug 2010 · 1 year</p>
                  <p>Network configuration, monitoring, and support.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <a href="https://www.wundermanthompson.com/" target="_blank" rel="noopener noreferrer" className="logo-link">
                    <img src="wunderman-thompson-log.png" alt="Wunderman Thompson" className="timeline-company-logo" />
                  </a>
                  <h3>Information Technology Supporter</h3>
                  <h4>Wunderman Thompson | Bangladesh</h4>
                  <p className="timeline-date">Jun 2008 - Aug 2009 · 1 year 3 months</p>
                  <p>IT support and helpdesk operations.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <a href="https://navanarealestate.com" target="_blank" rel="noopener noreferrer" className="logo-link">
                    <img src="navan-real-estate-logo.png" alt="Navana Real Estate" className="timeline-company-logo" />
                  </a>
                  <h3>Senior Executive  MIS</h3>
                  <h4><a href="https://navanarealestate.com" target="_blank" rel="noopener noreferrer" className="company-link">Navana Real Estate & Construction Ltd.</a> | Gulshan-02, Dhaka, Bangladesh</h4>
                  <p className="timeline-date">Jun 2004 - May 2008 · 4 years</p>
                  <p className="role-overview"><strong>Role Overview:</strong> Led the design, implementation, and maintenance of enterprise software systems and IT infrastructure. Supported cross-departmental operations including Procurement, Estimation, Accounts, Logistics, and HR, while ensuring secure and efficient network services across the organization.</p>
                  <p className="section-header"><strong>Key Contributions & Achievements</strong></p>
                  <ul className="timeline-highlights">
                    <li>Enterprise Systems Development</li>
                    <li className="indented-item">Designed and supported an integrated Budget & Inventory Management System covering project estimation, purchasing, consumption tracking, and expenditure control</li>
                    <li className="indented-item">Contributed to additional internal platforms including Daily Transactions and Payroll systems</li>
                    <li className="indented-item">Developed modules such as Bank Status and Utility Management System to manage corporate banking activities and deliver management reports for leadership</li>
                    <li>IT Infrastructure & Network Administration</li>
                    <li className="indented-item">Managed a corporate LAN serving 85+ desktops, 15 shared laser printers, and an external print server</li>
                    <li className="indented-item">Administered three servers, including: IBM X Series database server, Windows Server 2003 with Active Directory for authentication, authorization, and centralized policy control, and Fedora Corebased proxy server for regulated internet access</li>
                    <li className="indented-item">Ensured high availability, resource optimization, and secure access to organizational systems</li>
                    <li>Security & Access Control</li>
                    <li className="indented-item">Implemented Group Policy to restrict removable media (CD/DVD, USB, floppy) based on departmental needs</li>
                    <li className="indented-item">Enforced application access limitations via Active Directory, ensuring users operated only authorized software</li>
                    <li>Training & Capacity Building</li>
                    <li className="indented-item">Strengthened computer literacy and operational efficiency by training staff across departments in effective system usage</li>
                  </ul>
                  <p className="tools-header"><strong>Tools & Technologies</strong></p>
                  <div className="tech-stack" style={{marginTop: '10px'}}>
                    <span className="tech-tag">Windows Server 2003</span>
                    <span className="tech-tag">Active Directory</span>
                    <span className="tech-tag">Group Policy</span>
                    <span className="tech-tag">Fedora Core Linux</span>
                    <span className="tech-tag">LAN/WAN Administration</span>
                    <span className="tech-tag">Database Management</span>
                    <span className="tech-tag">MIS Reporting Systems</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'projects' && (
          <section className="projects fade-in">
            <h2 className="section-title">Key Achievements & Projects</h2>
            <p className="projects-intro">Automation initiatives that reduced operational overhead by 80% and optimized AWS costs by 40-50%</p>
            <div className="project-grid">
              <div className="project-card card-animated featured-project">
                <div className="card-glow"></div>
                <div className="project-content-layout">
                  <div className="project-text-content">
                    <div className="project-icon">??</div>
                    <h3>Enterprise Multi-Cloud Backup Verification & Monitoring System</h3>
                    <p>Comprehensive automated backup verification system monitoring 100+ backup entities across hybrid cloud infrastructure, ensuring business continuity and disaster recovery readiness for enterprise production environments.</p>
                    <div className="tech-stack">
                      <span className="tech-tag">Python</span>
                      <span className="tech-tag">AWS Multi-Account</span>
                      <span className="tech-tag">boto3</span>
                      <span className="tech-tag">Paramiko</span>
                      <span className="tech-tag">PowerShell</span>
                      <span className="tech-tag">Jenkins</span>
                    </div>
                    <button className="project-link" onClick={() => toggleProject('cloud-backup')}>
                      {expandedProject === 'cloud-backup' ? 'Show Less ↑' : 'View Details →'}
                    </button>
                  </div>
                  {!expandedProject || expandedProject !== 'cloud-backup' ? (
                    <div className="project-thumbnail-container">
                      <img 
                        src="cloud-monitoring.png" 
                        alt="Multi-Cloud Monitoring Architecture" 
                        className="project-thumbnail" 
                        onClick={() => setZoomedImage('cloud-monitoring.png')}
                      />
                    </div>
                  ) : null}
                </div>
                {expandedProject === 'cloud-backup' && (
                  <div className="project-details">
                    <div className="detail-section">
                      <h4>?? Technical Overview</h4>
                      <ul>
                        <li><strong>Role:</strong> DevOps Engineer / Python Developer</li>
                        <li><strong>Code:</strong> 2000+ lines of production code</li>
                        <li><strong>Environment:</strong> AWS Multi-Account, Hybrid Windows/Linux Infrastructure</li>
                        <li><strong>Coverage:</strong> 100+ backup entities across 15+ categories</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>?? Key Responsibilities & Achievements</h4>
                      <ul>
                        <li>Architected enterprise-grade backup monitoring validating backup integrity across AWS S3, EC2 AMIs, Windows/Linux servers, and multiple database systems</li>
                        <li>Integrated AWS services (S3, EC2, AWS Backup, SES) across multiple accounts (JustFace, VMLYR, Zanity)</li>
                        <li>Automated verification of 15+ backup categories: S3 syncs, MongoDB, MySQL, SQL Server, ETL pipelines, Crystal Reports</li>
                        <li>Implemented intelligent scheduling logic: daily, weekly (Saturday), monthly (last Saturday), yearly patterns</li>
                        <li>Developed remote server monitoring using Paramiko (SSH) for Linux and PowerShell remoting for Windows</li>
                        <li>Built dynamic date calculation system with 10+ format patterns and timezone handling (Asia/Dhaka)</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>?? Key Features</h4>
                      <ul>
                        <li><strong>S3 Object Validation:</strong> Automated detection of latest backup files with size and timestamp verification</li>
                        <li><strong>AMI Backup Verification:</strong> Cross-references running EC2 instances against completed backup jobs</li>
                        <li><strong>Log Pattern Matching:</strong> Intelligent log parsing with configurable patterns, date offsets, match types</li>
                        <li><strong>HTML Email Reporting:</strong> Color-coded success/failure reports via AWS SES to stakeholders</li>
                        <li><strong>JSON Configuration:</strong> 900+ line configuration file for easy maintenance and scalability</li>
                        <li><strong>Multi-Account Support:</strong> Handles 4 different AWS accounts with separate credentials</li>
                        <li><strong>Error Handling:</strong> Comprehensive exception handling for AWS errors, network failures, authentication issues</li>
                        <li><strong>Date Intelligence:</strong> Auto-calculates backup windows based on business rules (skips Sundays, special handling for Saturdays)</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>?? Business Impact</h4>
                      <ul>
                        <li>Reduced backup verification time from manual daily checks to automated 15-minute parallel execution</li>
                        <li>Increased reliability by catching backup failures within 24 hours</li>
                        <li>Improved compliance with automated audit trails and email reporting</li>
                        <li>Enhanced visibility through detailed HTML reports for infrastructure team</li>
                        <li>Supports disaster recovery planning with comprehensive backup validation</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>??? Architecture & Data Flow</h4>
                      <img 
                        src="cloud-monitoring.png" 
                        alt="Multi-Cloud Monitoring System Architecture" 
                        className="project-diagram" 
                        onClick={() => setZoomedImage('cloud-monitoring.png')}
                        style={{cursor: 'pointer'}}
                      />
                    </div>
                    <div className="detail-section">
                      <h4>?? Technical Challenges Solved</h4>
                      <ul>
                        <li>Coordinated authentication across multiple AWS accounts with temporary session tokens</li>
                        <li>Handled mixed Windows/Linux environment with unified Python interface</li>
                        <li>Implemented pagination for AWS API calls to handle large resource sets</li>
                        <li>Managed complex date calculations for various backup schedules and timezones</li>
                        <li>Created reusable configuration system supporting 15+ backup pattern types</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              <div className="project-card card-animated featured-project">
                <div className="card-glow"></div>
                <div className="project-content-layout">
                  <div className="project-text-content">
                    <div className="project-icon">??</div>
                    <h3>Multi-Server Production Hotfix Deployment Automation Pipeline</h3>
                    <p>Engineered a comprehensive CI/CD pipeline for automating zero-downtime production hotfix deployments across multiple Windows servers. Eliminated manual deployment errors and reduced deployment time from hours to minutes with safe rollback capabilities.</p>
                    <div className="tech-stack">
                      <span className="tech-tag">Jenkins Pipeline</span>
                      <span className="tech-tag">Groovy</span>
                      <span className="tech-tag">PowerShell</span>
                      <span className="tech-tag">AWS S3</span>
                      <span className="tech-tag">Windows Server</span>
                      <span className="tech-tag">CI/CD</span>
                    </div>
                    <button className="project-link" onClick={() => toggleProject('hotfix-pipeline')}>
                      {expandedProject === 'hotfix-pipeline' ? 'Show Less ↑' : 'View Details →'}
                    </button>
                  </div>
                  {!expandedProject || expandedProject !== 'hotfix-pipeline' ? (
                    <div className="project-thumbnail-container">
                      <img 
                        src="hotfix-flow.png" 
                        alt="Hotfix Pipeline Architecture" 
                        className="project-thumbnail" 
                        onClick={() => setZoomedImage('hotfix-flow.png')}
                      />
                    </div>
                  ) : null}
                </div>
                {expandedProject === 'hotfix-pipeline' && (
                  <div className="project-details">
                    <div className="detail-section">
                      <h4>?? Technical Implementation</h4>
                      <ul>
                        <li><strong>Jenkins Pipeline Orchestration:</strong> Designed using Groovy with conditional stage execution</li>
                        <li><strong>PowerShell Automation:</strong> Remote server management via PSSession</li>
                        <li><strong>AWS S3 Integration:</strong> Centralized deployment package distribution</li>
                        <li><strong>Automated Backup System:</strong> Pre-deployment backup with date-stamped versioning</li>
                        <li><strong>Multi-Portal Support:</strong> Deployment with selective targeting capabilities</li>
                        <li><strong>Error Handling:</strong> Comprehensive input validation and error handling mechanisms</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>?? Key Features</h4>
                      <ul>
                        <li><strong>Multi-Server Orchestration:</strong> Parallel deployment to multiple production servers</li>
                        <li><strong>Selective Deployment:</strong> Choose between binary deployments, configuration updates, or both</li>
                        <li><strong>Safety-First Design:</strong> Automated backup before any changes with rollback capability</li>
                        <li><strong>AWS Integration:</strong> Downloads and extracts deployment packages from S3 buckets</li>
                        <li><strong>Remote Management:</strong> PowerShell remoting with secure credential handling via Jenkins</li>
                        <li><strong>Portal-Specific Configs:</strong> Maps and deploys environment-specific configuration files</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>?? Business Impact</h4>
                      <ul>
                        <li><strong>75% Reduction</strong> in deployment time (hours to minutes)</li>
                        <li><strong>Zero Human Errors</strong> in production deployments through automation</li>
                        <li><strong>Rapid Hotfix Rollout</strong> with built-in safety mechanisms</li>
                        <li><strong>Standardized Process</strong> across all production environments</li>
                        <li><strong>Improved Reliability</strong> with automated rollback capabilities</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>??? Technology Stack</h4>
                      <ul>
                        <li>Jenkins Pipeline (Groovy DSL)</li>
                        <li>PowerShell 5.1+ with PSRemoting</li>
                        <li>AWS S3 CLI for package distribution</li>
                        <li>Windows Server administration</li>
                        <li>Git version control</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>??? Deployment Flow Diagram</h4>
                      <img 
                        src="hotfix-flow.png" 
                        alt="Hotfix Deployment Pipeline Architecture" 
                        className="project-diagram" 
                        onClick={() => setZoomedImage('hotfix-flow.png')}
                        style={{cursor: 'pointer'}}
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className="project-card card-animated featured-project">
                <div className="card-glow"></div>
                <div className="project-content-layout">
                  <div className="project-text-content">
                    <div className="project-icon">??</div>
                    <h3>Multi-Service ECS Deployment Pipeline: Configuration-Driven Infrastructure Automation</h3>
                    <p>Architected and implemented a unified deployment pipeline that consolidates 11 separate Jenkins pipelines into a single configuration-driven automation solution for managing Brandshare non-production ECS microservices across AWS environments (STG and Mainline).</p>
                    <div className="tech-stack">
                      <span className="tech-tag">AWS ECS Fargate</span>
                      <span className="tech-tag">Terraform</span>
                      <span className="tech-tag">Jenkins</span>
                      <span className="tech-tag">Groovy</span>
                      <span className="tech-tag">CloudWatch</span>
                      <span className="tech-tag">SQS</span>
                      <span className="tech-tag">Trivy</span>
                      <span className="tech-tag">ALB</span>
                    </div>
                    <button className="project-link" onClick={() => toggleProject('ecs-deployment')}>
                      {expandedProject === 'ecs-deployment' ? 'Show Less ↑' : 'View Details →'}
                    </button>
                  </div>
                  {!expandedProject || expandedProject !== 'ecs-deployment' ? (
                    <div className="project-thumbnail-container">
                      <img 
                        src="ecs-deployment-flow.png" 
                        alt="ECS Deployment Architecture" 
                        className="project-thumbnail" 
                        onClick={() => setZoomedImage('ecs-deployment-flow.png')}
                      />
                    </div>
                  ) : null}
                </div>
                {expandedProject === 'ecs-deployment' && (
                  <div className="project-details">
                    <div className="detail-section">
                      <h4>?? Technical Innovation</h4>
                      <ul>
                        <li><strong>Single Groovy Pipeline (906 lines):</strong> Orchestrates multi-service deployments with independent failure tracking, security scanning (Trivy), and deployment summaries</li>
                        <li><strong>Dynamic JSON Configuration (493 lines):</strong> Centralized service definitions serving as single source of truth for 11 microservices with environment-specific settings</li>
                        <li><strong>Reusable Terraform Modules:</strong> Generic ECS service and autoscaling modules that adapt to each service via dynamic variable injection</li>
                        <li><strong>Key Achievement:</strong> Reduced deployment complexity by 91% (11 pipelines ? 1) while improving maintainabilitynew services can be added in 5 minutes via JSON configuration without code changes</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>??? Architecture Highlights</h4>
                      <ul>
                        <li><strong>Per-Service State Isolation:</strong> Separate Terraform state files enable parallel deployments and independent lifecycle management</li>
                        <li><strong>Configuration-Driven:</strong> Single services-config.json defines all service specifications (CPU/memory allocations, autoscaling thresholds, networking, ALB rules)</li>
                        <li><strong>Dynamic tfvars Generation:</strong> Pipeline extracts service-specific configuration and generates Terraform variables on-the-fly</li>
                        <li><strong>SQS-Based Autoscaling:</strong> CloudWatch alarms monitor queue depth to trigger step scaling policies per service</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>?? Technical Stack</h4>
                      <ul>
                        <li><strong>Infrastructure:</strong> Terraform (AWS Provider 6.0+), S3 backend for state management</li>
                        <li><strong>CI/CD:</strong> Jenkins, Groovy Pipeline DSL with approval gates</li>
                        <li><strong>AWS Services:</strong> ECS Fargate, Application Load Balancer, CloudWatch, SQS, ECR, IAM</li>
                        <li><strong>Security:</strong> Trivy vulnerability scanning, IAM role assumption, multi-stage approval workflow</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>?? Impact & Results</h4>
                      <ul>
                        <li>Manages 11 microservices (API handlers, media generation services, portals) across 2 environments</li>
                        <li>Independent failure isolationone service failure doesn't block others</li>
                        <li>Intelligent deploymentskips services with no infrastructure changes</li>
                        <li>Production-ready features: circuit breaker rollback, health checks, cost optimization (FARGATE_SPOT)</li>
                        <li>91% reduction in deployment complexity</li>
                        <li>New services deployable in 5 minutes via configuration changes only</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>?? Technical Deep-Dive</h4>
                      <ul>
                        <li><strong>State Management Strategy:</strong> Implemented per-service state files to prevent conflicts and enable parallel deployments</li>
                        <li><strong>Dynamic Variable Injection:</strong> Pipeline parses JSON and generates .tfvars files programmatically for each service</li>
                        <li><strong>Failure Isolation:</strong> Services processed independently with deployment summary tracking (deployed/skipped/aborted)</li>
                        <li><strong>Scalability:</strong> Adding new services requires only JSON configuration changes, no pipeline or Terraform modifications</li>
                        <li><strong>Security Integration:</strong> Trivy scanner gates deployments with approval workflow for vulnerable images</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>??? High-Level Flow Diagram</h4>
                      <img 
                        src="ecs-deployment-flow.png" 
                        alt="ECS Deployment Pipeline Architecture" 
                        className="project-diagram" 
                        onClick={() => setZoomedImage('ecs-deployment-flow.png')}
                        style={{cursor: 'pointer'}}
                      />
                    </div>
                    <div className="detail-section">
                      <h4>?? Architecture Pattern</h4>
                      <p>Multi-tenancy infrastructure design where generic Terraform modules are parameterized through JSON configuration, demonstrating enterprise DevOps practices for scalable microservice management. This pattern enables:</p>
                      <ul>
                        <li>Consistent infrastructure across all services</li>
                        <li>Easy service onboarding with minimal configuration</li>
                        <li>Centralized change management through version-controlled JSON</li>
                        <li>Independent service lifecycle management</li>
                        <li>Infrastructure as Code best practices with DRY principles</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              <div className="project-card card-animated featured-project">
                <div className="card-glow"></div>
                <div className="project-content-layout">
                  <div className="project-text-content">
                    <div className="project-icon">??</div>
                    <h3>Enterprise SSL/TLS Certificate Automation & Multi-Platform Deployment System</h3>
                    <p>Comprehensive automated certificate management system that eliminates manual SSL/TLS certificate renewal and deployment processes across 10+ production servers spanning multiple platforms (Windows IIS, Jenkins CI/CD, Linux monitoring systems) with zero downtime.</p>
                    <div className="tech-stack">
                      <span className="tech-tag">Groovy</span>
                      <span className="tech-tag">PowerShell</span>
                      <span className="tech-tag">Python</span>
                      <span className="tech-tag">Jenkins</span>
                      <span className="tech-tag">Posh-ACME</span>
                      <span className="tech-tag">AWS ACM</span>
                      <span className="tech-tag">Let's Encrypt</span>
                      <span className="tech-tag">OpenSSL</span>
                    </div>
                    <button className="project-link" onClick={() => toggleProject('ssl-automation')}>
                      {expandedProject === 'ssl-automation' ? 'Show Less ↑' : 'View Details →'}
                    </button>
                  </div>
                  {!expandedProject || expandedProject !== 'ssl-automation' ? (
                    <div className="project-thumbnail-container">
                      <img 
                        src="ssl-certificate-automation.png" 
                        alt="SSL Automation Architecture" 
                        className="project-thumbnail" 
                        onClick={() => setZoomedImage('ssl-certificate-automation.png')}
                      />
                    </div>
                  ) : null}
                </div>
                {expandedProject === 'ssl-automation' && (
                  <div className="project-details">
                    <div className="detail-section">
                      <h4>?? Technical Overview</h4>
                      <ul>
                        <li><strong>Role:</strong> DevOps Engineer / Automation Architect</li>
                        <li><strong>Scope:</strong> 10+ production servers across 4 distinct platforms</li>
                        <li><strong>Environment:</strong> Hybrid Cloud (AWS + On-Premise Windows/Linux)</li>
                        <li><strong>Challenge:</strong> Automate SSL certificate renewal across multi-platform infrastructure with zero downtime</li>
                        <li><strong>Solution:</strong> 6-stage deployment pipeline with multi-cloud integration</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>?? Key Features & Achievements</h4>
                      <ul>
                        <li><strong>Intelligent Certificate Monitoring:</strong> Automated SSL expiry checking with 15-day threshold alerts, pre-emptive renewal workflow triggering</li>
                        <li><strong>Automated Certificate Provisioning:</strong> Let's Encrypt integration, DNS-based domain validation, automatic backup with rate-limit handling</li>
                        <li><strong>Multi-Cloud Integration:</strong> AWS ACM synchronization across multiple regions, S3-based secure distribution with time-limited access</li>
                        <li><strong>Cross-Platform Deployment:</strong> Windows IIS, Jenkins (Windows/Linux), Monitoring Systems with automated service restarts</li>
                        <li><strong>Security & Compliance:</strong> Encrypted certificate storage, secure credential management, comprehensive audit logging, backup and rollback capabilities</li>
                        <li><strong>Notification System:</strong> Email alerts with secure download links, failure alerting with diagnostics, pre-signed URLs (7-day expiry)</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>?? Technical Highlights</h4>
                      <ul>
                        <li><strong>Windows IIS Servers:</strong> Certificate store import, HTTPS binding updates, automated cleanup of expired certificates</li>
                        <li><strong>Jenkins (Windows):</strong> PFX to JKS conversion, keystore deployment, service restart coordination with build queue management</li>
                        <li><strong>Jenkins (Linux):</strong> SSH-based deployment, permission management, service health verification</li>
                        <li><strong>Monitoring Systems:</strong> Multi-file certificate deployment (chain, key, fullchain), web server configuration</li>
                        <li><strong>5 Certificate Formats:</strong> Integrated PFX, CER, KEY, JKS, PEM formats across platforms</li>
                        <li><strong>Pipeline Architecture:</strong> 6-stage workflow with conditional execution, error handling, parallel deployment, workspace cleanup</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>?? Business Impact</h4>
                      <ul>
                        <li>Reduced manual effort from 8 hours per quarter to fully automated</li>
                        <li>Eliminated certificate expiration incidents (previously 2-3 per year)</li>
                        <li>Zero-downtime deployments across all platforms</li>
                        <li>Improved security posture with 90-day certificate rotation</li>
                        <li>Enhanced compliance with automated audit trails</li>
                        <li>Cost savings via Let's Encrypt (free certificates)</li>
                        <li>Achieved 100% automation with zero manual intervention</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>??? Architecture & Workflow</h4>
                      <img 
                        src="ssl-certificate-automation.png" 
                        alt="SSL Certificate Automation Pipeline Architecture" 
                        className="project-diagram" 
                        onClick={() => setZoomedImage('ssl-certificate-automation.png')}
                        style={{cursor: 'pointer'}}
                      />
                    </div>
                    <div className="detail-section">
                      <h4>?? Technical Stack Details</h4>
                      <ul>
                        <li><strong>Orchestration:</strong> Jenkins CI/CD with Groovy Pipeline DSL</li>
                        <li><strong>Windows Automation:</strong> PowerShell with Posh-ACME module</li>
                        <li><strong>Linux Automation:</strong> Python 3.x with Paramiko (SSH) and Boto3 (AWS SDK)</li>
                        <li><strong>Certificate Tools:</strong> OpenSSL, Keytool for format conversion</li>
                        <li><strong>Cloud Services:</strong> AWS EC2, ACM, S3, SES, Route53</li>
                        <li><strong>Security:</strong> Jenkins credential store, encrypted storage, file permission enforcement</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              <div className="project-card card-animated featured-project">
                <div className="card-glow"></div>
                <div className="project-content-layout">
                  <div className="project-text-content">
                    <div className="project-icon">??</div>
                    <h3>Automated Database Disaster Recovery Testing Pipeline</h3>
                    <p>Enterprise-grade automated testing system that validates database backup integrity and disaster recovery procedures on a weekly schedule, ensuring business continuity readiness without manual intervention. Automatically tests complete restore processes and compares restored data against production.</p>
                    <div className="tech-stack">
                      <span className="tech-tag">Jenkins</span>
                      <span className="tech-tag">Terraform</span>
                      <span className="tech-tag">AWS</span>
                      <span className="tech-tag">Python</span>
                      <span className="tech-tag">PowerShell</span>
                      <span className="tech-tag">SQL Server</span>
                      <span className="tech-tag">boto3</span>
                      <span className="tech-tag">WinRM</span>
                    </div>
                    <a href="https://github.com/sarowar-alam/terraform-sqlserver-restore-pipeline" target="_blank" rel="noopener noreferrer" className="project-link" style={{display: 'inline-block', marginBottom: '10px'}}>
                      View on GitHub →
                    </a>
                    <button className="project-link" onClick={() => toggleProject('dr-testing')}>
                      {expandedProject === 'dr-testing' ? 'Show Less ↑' : 'View Details →'}
                    </button>
                  </div>
                  {!expandedProject || expandedProject !== 'dr-testing' ? (
                    <div className="project-thumbnail-container">
                      <img 
                        src="db-restore-testing-system.png" 
                        alt="Database Disaster Recovery Testing Architecture" 
                        className="project-thumbnail" 
                        onClick={() => setZoomedImage('db-restore-testing-system.png')}
                      />
                    </div>
                  ) : null}
                </div>
                {expandedProject === 'dr-testing' && (
                  <div className="project-details">
                    <div className="detail-section">
                      <h4>?? Project Overview</h4>
                      <p><strong>Business Problem Solved:</strong> Organizations often maintain database backups but rarely verify they can be successfully restored until an actual disaster occurs. This project eliminates that risk by automatically testing the complete restore process weekly, comparing restored data against production to ensure data integrity.</p>
                    </div>
                    <div className="detail-section">
                      <h4>??? Technical Architecture</h4>
                      <ul>
                        <li><strong>Infrastructure Automation:</strong></li>
                        <li>Built ephemeral testing environments using Terraform modules (VPC, EC2, Security Groups)</li>
                        <li>Provisioned Windows Server 2019 + SQL Server 2022 instances on-demand</li>
                        <li>Implemented automatic teardown to minimize AWS costs (infrastructure exists only during tests)</li>
                        <li><strong>Cross-Account Backup Management:</strong></li>
                        <li>Developed Python automation using boto3 to transfer multi-gigabyte database backups between isolated AWS accounts</li>
                        <li>Implemented IAM role assumption for secure cross-account S3 operations</li>
                        <li>Automated identification and transfer of latest backup files based on timestamps</li>
                        <li><strong>Remote Database Restoration:</strong></li>
                        <li>Created PowerShell automation for remote database restoration via WinRM</li>
                        <li>Implemented SQLCMD-based restore with dynamic logical file mapping</li>
                        <li>Built error handling and retry logic for network resilience</li>
                        <li><strong>Automated Validation & Reporting:</strong></li>
                        <li>Executed parallel queries on restored test database and live production database</li>
                        <li>Compared results to verify data consistency</li>
                        <li>Generated HTML email reports with side-by-side comparison tables sent to operations teams</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>?? Key Achievements</h4>
                      <ul>
                        <li>? 100% automated end-to-end testing (zero manual steps)</li>
                        <li>? Weekly execution ensures continuous DR readiness validation</li>
                        <li>? Cost optimized - infrastructure exists only during 30-minute test windows</li>
                        <li>? Cross-account security - production and test environments fully isolated</li>
                        <li>? Automated alerting - immediate email notifications on success or failure</li>
                        <li>? Random database selection - tests different databases each week for comprehensive coverage</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>?? Business Impact</h4>
                      <ul>
                        <li>Reduced disaster recovery verification time from days to 30 minutes</li>
                        <li>Eliminated manual testing overhead (previously 4-6 hours of manual effort per test)</li>
                        <li>Provided weekly confidence in backup integrity to stakeholders</li>
                        <li>Enabled compliance with recovery time objective (RTO) requirements</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>?? Technical Complexity Highlights</h4>
                      <ul>
                        <li>Multi-cloud account orchestration with IAM role chaining</li>
                        <li>Windows remote automation via WinRM from Linux Jenkins controller</li>
                        <li>Dynamic SQL Server file mapping for restore operations</li>
                        <li>Stateful infrastructure management with automatic cleanup</li>
                        <li>HTML templating and AWS SES integration for professional reporting</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>??? Technical Stack Details</h4>
                      <ul>
                        <li><strong>CI/CD:</strong> Jenkins Pipeline (Groovy DSL)</li>
                        <li><strong>Infrastructure as Code:</strong> Terraform with modular design</li>
                        <li><strong>Cloud Platform:</strong> AWS (EC2, VPC, S3, IAM, SES)</li>
                        <li><strong>Scripting:</strong> PowerShell, Python (boto3), Bash</li>
                        <li><strong>Database:</strong> Microsoft SQL Server 2022</li>
                        <li><strong>Protocols:</strong> WinRM for remote Windows automation</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>??? System Architecture</h4>
                      <img 
                        src="db-restore-testing-system.png" 
                        alt="Database Disaster Recovery Testing System Architecture" 
                        className="project-diagram" 
                        onClick={() => setZoomedImage('db-restore-testing-system.png')}
                        style={{cursor: 'pointer'}}
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className="project-card card-animated" style={{animationDelay: '0.1s'}}>
                <div className="card-glow"></div>
                <div className="project-icon">??</div>
                <h3>SQL Backup Restore Automation</h3>
                <p>Monthly end-to-end MS SQL restore using Terraform and AWS Glacier ? S3 ? EC2 workflows with role-based authentication, saving 6+ hours per operation</p>
                <div className="tech-stack">
                  <span className="tech-tag">Terraform</span>
                  <span className="tech-tag">AWS Glacier</span>
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">PowerShell</span>
                </div>
              </div>
              <div className="project-card card-animated" style={{animationDelay: '0.2s'}}>
                <div className="card-glow"></div>
                <div className="project-icon">??</div>
                <h3>Patch Management Automation</h3>
                <p>Ansible-based OS patch pipelines for Linux & Windows with pre/post AMI backups, rollback readiness, health checks, and automated HTML reports</p>
                <div className="tech-stack">
                  <span className="tech-tag">Ansible</span>
                  <span className="tech-tag">Jenkins</span>
                  <span className="tech-tag">AWS AMI</span>
                  <span className="tech-tag">Groovy</span>
                </div>
              </div>
              <div className="project-card card-animated" style={{animationDelay: '0.3s'}}>
                <div className="card-glow"></div>
                <div className="project-icon">??</div>
                <h3>Cost & Resource Governance</h3>
                <p>EC2 start/stop scheduling, CloudWatch-based monitoring, auto-tagging, orphaned snapshot cleanup, and AWS cost comparison reports  reducing waste by 40-50%</p>
                <div className="tech-stack">
                  <span className="tech-tag">AWS Lambda</span>
                  <span className="tech-tag">CloudWatch</span>
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">DocumentDB</span>
                </div>
              </div>
              <div className="project-card card-animated" style={{animationDelay: '0.4s'}}>
                <div className="card-glow"></div>
                <div className="project-icon">??</div>
                <h3>ECS Zero Task Architecture</h3>
                <p>Designed ECS with zero tasks by default, SQS-triggered auto-scaling via Lambda and Step Scaling. Dynamic Terraform modules integrated with Jenkins for N number of services</p>
                <div className="tech-stack">
                  <span className="tech-tag">ECS Fargate</span>
                  <span className="tech-tag">SQS</span>
                  <span className="tech-tag">Lambda</span>
                  <span className="tech-tag">Terraform</span>
                </div>
              </div>
              <div className="project-card card-animated" style={{animationDelay: '0.5s'}}>
                <div className="card-glow"></div>
                <div className="project-icon">??</div>
                <h3>Environment Refresh & Hotfix</h3>
                <p>One-click deployments for production hotfixes and environment refreshes (binaries + DBs), cutting release cycles by several hours and minimizing human error</p>
                <div className="tech-stack">
                  <span className="tech-tag">Jenkins</span>
                  <span className="tech-tag">Terraform</span>
                  <span className="tech-tag">Ansible</span>
                  <span className="tech-tag">CI/CD</span>
                </div>
              </div>
              <div className="project-card card-animated" style={{animationDelay: '0.6s'}}>
                <div className="card-glow"></div>
                <div className="project-icon">??</div>
                <h3>CloudFront Access Control</h3>
                <p>AWS CloudFront function to control access based on HTTP headers (Referer, request-origin). Blocks unauthorized requests with 403 and logs client IPs for audit</p>
                <div className="tech-stack">
                  <span className="tech-tag">CloudFront</span>
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">Security</span>
                </div>
              </div>
              <div className="project-card card-animated" style={{animationDelay: '0.7s'}}>
                <div className="card-glow"></div>
                <div className="project-icon">??</div>
                <h3>Zabbix Migration & Enhancement</h3>
                <p>Upgraded Zabbix with comprehensive monitoring for server health, scheduled jobs, DB backups, S3 syncs. Custom triggers for missed tasks and integrated marketplace templates</p>
                <div className="tech-stack">
                  <span className="tech-tag">Zabbix</span>
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Monitoring</span>
                  <span className="tech-tag">Alerting</span>
                </div>
              </div>
              <div className="project-card card-animated" style={{animationDelay: '0.9s'}}>
                <div className="card-glow"></div>
                <div className="project-icon">??</div>
                <h3>IAM Standardization & Security</h3>
                <p>Implemented standardized IAM roles with permission boundaries across environments. Created VPC peering, PrivateLink networks, and secure user naming conventions</p>
                <div className="tech-stack">
                  <span className="tech-tag">AWS IAM</span>
                  <span className="tech-tag">VPC</span>
                  <span className="tech-tag">Security</span>
                  <span className="tech-tag">Terraform</span>
                </div>
              </div>
              <div className="project-card card-animated" style={{animationDelay: '1.0s'}}>
                <div className="card-glow"></div>
                <div className="project-icon">???</div>
                <h3>RDS & Redshift Management</h3>
                <p>Managed AWS RDS (MySQL backups via Lambda) and Redshift clusters (auto-patching, IP-bound access). Automated non-prod cluster shutdowns for cost optimization</p>
                <div className="tech-stack">
                  <span className="tech-tag">RDS</span>
                  <span className="tech-tag">Redshift</span>
                  <span className="tech-tag">Lambda</span>
                  <span className="tech-tag">mysqldump</span>
                </div>
              </div>
              <div className="project-card card-animated featured-project">
                <div className="card-glow"></div>
                <div className="project-icon">??</div>
                <h3>Custom Enterprise Systems</h3>
                <p>Developed Purchase & Inventory, Invoice & Credit Note, and Access Card Attendance systems using ASP.NET, SQL Server with AD integration and Crystal Reports</p>
                <div className="tech-stack">
                  <span className="tech-tag">ASP.NET</span>
                  <span className="tech-tag">SQL Server</span>
                  <span className="tech-tag">Active Directory</span>
                  <span className="tech-tag">Crystal Reports</span>
                </div>
                <button className="project-link" onClick={() => toggleProject('enterprise-systems')}>
                  {expandedProject === 'enterprise-systems' ? 'Show Less ↑' : 'View Details →'}
                </button>
                {expandedProject === 'enterprise-systems' && (
                  <div className="project-details">
                    <div className="detail-section">
                      <h4>?? Systems Overview</h4>
                      <ul>
                        <li><strong>Role:</strong> Developer / System Administrator</li>
                        <li><strong>Company:</strong> Wunderman Thompson / VML</li>
                        <li><strong>Environment:</strong> Windows Server, Active Directory</li>
                        <li><strong>Period:</strong> 2016-2023</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>?? Purchase & Inventory Management System</h4>
                      <ul>
                        <li>Comprehensive purchase order tracking and inventory control</li>
                        <li>Real-time stock level monitoring and automated reorder alerts</li>
                        <li>Vendor management and purchase history tracking</li>
                        <li>Multi-location inventory tracking with transfer management</li>
                        <li>Cost analysis and budgeting reports</li>
                        <li>Active Directory integration for role-based access control</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>?? Invoice & Credit Note System</h4>
                      <ul>
                        <li>Automated invoice generation with customizable templates</li>
                        <li>Credit note processing and tracking for returns/adjustments</li>
                        <li>Payment tracking and reconciliation</li>
                        <li>Tax calculation and compliance reporting</li>
                        <li>Client account management with payment history</li>
                        <li>Integration with finance department workflows</li>
                        <li>Crystal Reports for detailed financial statements</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>?? Access Card Attendance Management System</h4>
                      <ul>
                        <li>Web-based employee attendance tracking via access card swipes</li>
                        <li>Real-time attendance monitoring dashboard</li>
                        <li>Automated late arrival and early departure alerts</li>
                        <li>Leave management integration</li>
                        <li>Monthly attendance reports with Crystal Reports</li>
                        <li>Department-wise and employee-wise attendance analytics</li>
                        <li>Export functionality for payroll processing</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>?? Technical Features</h4>
                      <ul>
                        <li><strong>ASP.NET Framework:</strong> Web-based applications with responsive UI</li>
                        <li><strong>SQL Server:</strong> Robust database design with stored procedures and optimization</li>
                        <li><strong>Active Directory Integration:</strong> Single sign-on and role-based permissions</li>
                        <li><strong>Crystal Reports:</strong> Professional reporting with charts, graphs, and export options</li>
                        <li><strong>Security:</strong> AD authentication, SQL injection prevention, encrypted connections</li>
                        <li><strong>User Management:</strong> Role-based access with department-level permissions</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>?? Business Impact</h4>
                      <ul>
                        <li>Eliminated manual paper-based tracking processes</li>
                        <li>Reduced inventory discrepancies by 90%</li>
                        <li>Improved financial accuracy with automated calculations</li>
                        <li>Streamlined attendance reporting from days to minutes</li>
                        <li>Enhanced compliance with automated audit trails</li>
                        <li>Improved decision-making with real-time analytics</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {activeSection === 'github' && (
          <section className="github-section fade-in">
            <h2 className="section-title">GitHub Projects</h2>
            <p className="section-subtitle">Open-source repositories and teaching materials for DevOps practices</p>
            <div className="github-stats-large">
              <img 
                src="https://github-readme-stats.vercel.app/api?username=sarowar-alam&show_icons=true&theme=radical&hide_border=true&bg_color=0d1117&title_color=667eea&icon_color=f093fb&text_color=94a3b8&ring_color=667eea" 
                alt="GitHub Stats" 
                loading="lazy"
                onError={(e) => e.target.style.display = 'none'}
              />
              <img 
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=sarowar-alam&layout=compact&theme=radical&hide_border=true&bg_color=0d1117&title_color=667eea&text_color=94a3b8&langs_count=8" 
                alt="Top Languages" 
                loading="lazy"
                onError={(e) => e.target.style.display = 'none'}
              />
            </div>
            <div className="github-stats">
              <a href="https://github.com/sarowar-alam" target="_blank" rel="noopener noreferrer">
                <img src="https://img.shields.io/github/followers/sarowar-alam?label=Followers&style=for-the-badge&logo=github&color=667eea" alt="GitHub Followers" />
              </a>
              <a href="https://github.com/sarowar-alam" target="_blank" rel="noopener noreferrer">
                <img src="https://img.shields.io/badge/Repos-16-764ba2?style=for-the-badge&logo=github" alt="GitHub Repos" />
              </a>
              <a href="https://github.com/sarowar-alam/sarowar" target="_blank" rel="noopener noreferrer">
                <img src="https://img.shields.io/github/stars/sarowar-alam?label=Stars&style=for-the-badge&logo=github&color=f093fb" alt="GitHub Stars" />
              </a>
            </div>
            <div className="github-repos">
              <div className="repo-card card-animated">
                <div className="card-glow"></div>
                <div className="repo-header">
                  <h3>?? Automation Garage</h3>
                  <div className="repo-stats">
                    <span>? 6</span>
                    <span>?? 10</span>
                  </div>
                </div>
                <p>Comprehensive automation scripts and Jenkins pipelines for DevOps workflows. Most popular repository!</p>
                <div className="tech-stack">
                  <span className="tech-tag">Groovy</span>
                  <span className="tech-tag">Jenkins</span>
                  <span className="tech-tag">Automation</span>
                </div>
                <a href="https://github.com/sarowar-alam/sarowar" target="_blank" rel="noopener noreferrer" className="repo-link">
                  View Repository →
                </a>
              </div>
              <div className="repo-card card-animated" style={{animationDelay: '0.1s'}}>
                <div className="card-glow"></div>
                <div className="repo-header">
                  <h3>??? 3-Tier App Terraform Jenkins</h3>
                  <div className="repo-stats">
                    <span>? 2</span>
                    <span>?? 1</span>
                  </div>
                </div>
                <p>Complete CI/CD pipeline integrating Terraform and Jenkins for automated 3-tier application deployment</p>
                <div className="tech-stack">
                  <span className="tech-tag">Terraform</span>
                  <span className="tech-tag">Jenkins</span>
                  <span className="tech-tag">Shell</span>
                  <span className="tech-tag">AWS</span>
                </div>
                <a href="https://github.com/sarowar-alam/3-tier-app-terraform-jenkins" target="_blank" rel="noopener noreferrer" className="repo-link">
                  View Repository →
                </a>
              </div>
              <div className="repo-card card-animated" style={{animationDelay: '0.2s'}}>
                <div className="card-glow"></div>
                <div className="repo-header">
                  <h3>?? 3-Tier Web App Auto Scaling</h3>
                  <div className="repo-stats">
                    <span>? 1</span>
                    <span>?? 4</span>
                  </div>
                </div>
                <p>Demonstrates AWS Auto Scaling features with complete 3-tier web application architecture</p>
                <div className="tech-stack">
                  <span className="tech-tag">AWS</span>
                  <span className="tech-tag">Auto Scaling</span>
                  <span className="tech-tag">Shell</span>
                  <span className="tech-tag">Load Balancer</span>
                </div>
                <a href="https://github.com/sarowar-alam/3-tier-web-app-auto-scalling" target="_blank" rel="noopener noreferrer" className="repo-link">
                  View Repository →
                </a>
              </div>
              <div className="repo-card card-animated" style={{animationDelay: '0.3s'}}>
                <div className="card-glow"></div>
                <div className="repo-header">
                  <h3>?? Terraform ECS Autoscaling AWS</h3>
                  <div className="repo-stats">
                    <span>?? 1</span>
                  </div>
                </div>
                <p>Infrastructure as Code for AWS ECS with comprehensive autoscaling configurations</p>
                <div className="tech-stack">
                  <span className="tech-tag">Terraform</span>
                  <span className="tech-tag">AWS ECS</span>
                  <span className="tech-tag">HCL</span>
                  <span className="tech-tag">Autoscaling</span>
                </div>
                <a href="https://github.com/sarowar-alam/terraform-ecs-autoscaling-aws" target="_blank" rel="noopener noreferrer" className="repo-link">
                  View Repository →
                </a>
              </div>
              <div className="repo-card card-animated" style={{animationDelay: '0.4s'}}>
                <div className="card-glow"></div>
                <div className="repo-header">
                  <h3>?? Docker 3-Tier Applications</h3>
                </div>
                <p>Multiple implementations of 3-tier applications using Docker and containerization best practices</p>
                <div className="tech-stack">
                  <span className="tech-tag">Docker</span>
                  <span className="tech-tag">Containers</span>
                  <span className="tech-tag">Shell</span>
                  <span className="tech-tag">Multi-tier</span>
                </div>
                <a href="https://github.com/sarowar-alam/3-tier-with-docker" target="_blank" rel="noopener noreferrer" className="repo-link">
                  View Repository →
                </a>
              </div>
              <div className="repo-card card-animated" style={{animationDelay: '0.5s'}}>
                <div className="card-glow"></div>
                <div className="repo-header">
                  <h3>?? Kubernetes 3-Tier WebApp</h3>
                </div>
                <p>Complete Kubernetes deployment manifests for scalable 3-tier web application architecture</p>
                <div className="tech-stack">
                  <span className="tech-tag">Kubernetes</span>
                  <span className="tech-tag">K8s</span>
                  <span className="tech-tag">Shell</span>
                  <span className="tech-tag">Orchestration</span>
                </div>
                <a href="https://github.com/sarowar-alam/k8s-3tier-webapp" target="_blank" rel="noopener noreferrer" className="repo-link">
                  View Repository →
                </a>
              </div>
              <div className="repo-card card-animated" style={{animationDelay: '0.6s'}}>
                <div className="card-glow"></div>
                <div className="repo-header">
                  <h3>?? Automate Certificate Renewal</h3>
                  <div className="repo-stats">
                    <span>?? 1</span>
                  </div>
                </div>
                <p>Automated SSL/TLS certificate renewal system using Let's Encrypt and Python</p>
                <div className="tech-stack">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">SSL</span>
                  <span className="tech-tag">Let's Encrypt</span>
                  <span className="tech-tag">Automation</span>
                </div>
                <a href="https://github.com/sarowar-alam/Automate_Certificate_Renewal" target="_blank" rel="noopener noreferrer" className="repo-link">
                  View Repository →
                </a>
              </div>
              <div className="repo-card card-animated" style={{animationDelay: '0.7s'}}>
                <div className="card-glow"></div>
                <div className="repo-header">
                  <h3>?? ArgoCD GitOps Rolling Deployment</h3>
                </div>
                <p>GitOps workflow implementation with ArgoCD for continuous deployment and rolling updates</p>
                <div className="tech-stack">
                  <span className="tech-tag">ArgoCD</span>
                  <span className="tech-tag">GitOps</span>
                  <span className="tech-tag">Kubernetes</span>
                  <span className="tech-tag">CI/CD</span>
                </div>
                <a href="https://github.com/sarowar-alam/argocd-nginx-git-ops-rolling-deployment" target="_blank" rel="noopener noreferrer" className="repo-link">
                  View Repository →
                </a>
              </div>
            </div>
            <div className="view-all-repos">
              <a href="https://github.com/sarowar-alam?tab=repositories" target="_blank" rel="noopener noreferrer" className="cta-button">
                <span>View All Repositories</span>
                <span className="arrow">→</span>
              </a>
            </div>
          </section>
        )}

        {activeSection === 'certifications' && (
          <section className="certifications fade-in">
            <h2 className="section-title">Certifications & Credentials</h2>
            <p className="section-subtitle">Professional certifications demonstrating expertise in cloud technologies and DevOps practices</p>
            <div className="certifications-grid">
              <div className="certification-card">
                <img src="cka-badge.png" alt="CKA Certification" className="cert-badge-img" />
                <div className="cert-details">
                  <h3>CKA: Certified Kubernetes Administrator</h3>
                  <p className="cert-issuer">Issued by The Linux Foundation</p>
                  <p className="cert-date">Issued: December 30, 2025 | Expires: December 31, 2027</p>
                  <p>Earners of this designation demonstrated the skills, knowledge and competencies to perform the responsibilities of a Kubernetes Administrator. Earners demonstrated proficiency in Application Lifecycle Management, Installation, Configuration & Validation, Core Concepts, Networking, Scheduling, Security, Cluster Maintenance, Logging / Monitoring, Storage, and Troubleshooting.</p>
                  <div className="cert-skills">
                    <span className="skill-tag">API Objects</span>
                    <span className="skill-tag">Cloud</span>
                    <span className="skill-tag">Custom Resource Definitions</span>
                    <span className="skill-tag">Helm</span>
                    <span className="skill-tag">Ingress</span>
                    <span className="skill-tag">Kubernetes</span>
                    <span className="skill-tag">Logging and Troubleshooting</span>
                    <span className="skill-tag">Open Source Software</span>
                    <span className="skill-tag">Orchestration</span>
                    <span className="skill-tag">Scheduling</span>
                    <span className="skill-tag">Security Policies</span>
                    <span className="skill-tag">Services</span>
                    <span className="skill-tag">Site Reliability Engineer</span>
                    <span className="skill-tag">System Administrator</span>
                    <span className="skill-tag">Volumes</span>
                  </div>
                  <div className="cert-id">Certificate ID: LF-e7zhm1roc3</div>
                  <a 
                    href="https://www.credly.com/earner/earned/badge/578dbb91-fdee-4b08-8eae-89a3764008cb" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="cert-link"
                  >
                    View Credential ?
                  </a>
                </div>
              </div>
              <div className="certification-card">
                <img src="generative-ai-badge.png" alt="AWS Generative AI Badge" className="cert-badge-img" />
                <div className="cert-details">
                  <h3>AWS Educate Introduction to Generative AI - Training Badge</h3>
                  <p className="cert-issuer">Issued by Amazon Web Services Training and Certification</p>
                  <p className="cert-date">Issued: September 25, 2024</p>
                  <p>Completed the Introduction to Generative Artificial Intelligence training and achieved required scores on the post-course assessment. Demonstrated fundamental understanding in generative AI concepts, AI and ML on AWS foundational knowledge.</p>
                  <div className="cert-skills">
                    <span className="skill-tag">AI</span>
                    <span className="skill-tag">AI and ML on AWS</span>
                    <span className="skill-tag">AWS Cloud</span>
                    <span className="skill-tag">Generative AI</span>
                  </div>
                  <a 
                    href="https://www.credly.com/earner/earned/badge/d77ecdf0-68ff-4180-8bec-270179107deb" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="cert-link"
                  >
                    View Credential ?
                  </a>
                </div>
              </div>
              <div className="certification-card">
                <img src="UC-f54891d7-2d37-43a5-9470-22b38293e7af.jpg" alt="AWS Solutions Architect Associate Certificate" className="cert-badge-img" />
                <div className="cert-details">
                  <h3>Ultimate AWS Certified Solutions Architect Associate 2026</h3>
                  <p className="cert-issuer">Issued by Udemy</p>
                  <p className="cert-date">Completed: December 12, 2024</p>
                  <p>Successfully completed comprehensive AWS Solutions Architect training covering 27 hours of content with 398 lectures. Gained expertise in AWS architecture, cloud infrastructure design, services integration, and best practices for building scalable, secure, and highly available systems on AWS.</p>
                  <div className="cert-skills">
                    <span className="skill-tag">AWS Solutions Architecture</span>
                    <span className="skill-tag">Amazon EC2</span>
                    <span className="skill-tag">Amazon S3</span>
                    <span className="skill-tag">AWS IAM</span>
                    <span className="skill-tag">VPC & Networking</span>
                    <span className="skill-tag">AWS Lambda</span>
                    <span className="skill-tag">RDS & DynamoDB</span>
                    <span className="skill-tag">CloudFormation</span>
                    <span className="skill-tag">High Availability</span>
                    <span className="skill-tag">Cost Optimization</span>
                  </div>
                  <div className="cert-instructor">Instructor: Stephane Maarek | AWS Certified Cloud Practitioner, Solutions Architect, Developer</div>
                  <a 
                    href="https://www.udemy.com/certificate/UC-f54891d7-2d37-43a5-9470-22b38293e7af/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="cert-link"
                  >
                    View Certificate ?
                  </a>
                </div>
              </div>
              <div className="certification-card">
                <img src="UC-359023df-822b-4991-a850-538cae70c8a9.jpg" alt="HashiCorp Terraform Associate Certificate" className="cert-badge-img" />
                <div className="cert-details">
                  <h3>HashiCorp Certified: Terraform Associate 2026</h3>
                  <p className="cert-issuer">Issued by Udemy</p>
                  <p className="cert-date">Completed: August 15, 2023</p>
                  <p>Successfully completed comprehensive HashiCorp Terraform certification training covering 25.5 hours of content with 190 lectures. Mastered infrastructure as code principles, Terraform workflows, state management, modules, and best practices for provisioning and managing cloud infrastructure across multiple providers.</p>
                  <div className="cert-skills">
                    <span className="skill-tag">Terraform</span>
                    <span className="skill-tag">Infrastructure as Code</span>
                    <span className="skill-tag">HashiCorp</span>
                    <span className="skill-tag">AWS Provisioning</span>
                    <span className="skill-tag">Terraform Modules</span>
                    <span className="skill-tag">State Management</span>
                    <span className="skill-tag">HCL</span>
                    <span className="skill-tag">Cloud Automation</span>
                    <span className="skill-tag">Multi-Cloud</span>
                    <span className="skill-tag">Resource Management</span>
                  </div>
                  <div className="cert-instructor">Instructor: Zeal Vora</div>
                  <a 
                    href="https://www.udemy.com/certificate/UC-359023df-822b-4991-a850-538cae70c8a9/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="cert-link"
                  >
                    View Certificate ?
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'education' && (
          <section className="education fade-in">
            <h2 className="section-title">?? Education & Academic Background</h2>
            <p className="section-subtitle">Academic foundation spanning Computer Science and Telecommunications Engineering</p>
            <div className="education-timeline">
              <div className="education-card">
                <div className="education-logo">
                  <img src="NorthSouthUniversity-Logo.png" alt="North South University" />
                </div>
                <div className="education-content">
                  <h3>M.Sc. in Electronics & Telecommunication Engineering</h3>
                  <p className="institution">Department of Electrical & Computer Engineering (ECE)<br/><a href="https://www.northsouth.edu/" target="_blank" rel="noopener noreferrer" className="university-link">North South University</a>, Dhaka</p>
                  <div className="education-details">
                    <span className="result">?? 27 Credits Completed</span>
                    <span className="grade">?? First Class</span>
                  </div>
                  <a href="https://www.northsouth.edu/academic/grading-policy.html" target="_blank" rel="noopener noreferrer" className="edu-link">
                    View Grading Policy ?
                  </a>
                </div>
              </div>

              <div className="education-card">
                <div className="education-logo">
                  <img src="NorthSouthUniversity-Logo.png" alt="North South University" />
                </div>
                <div className="education-content">
                  <h3>B.Sc. (Hons.) in Computer Science</h3>
                  <p className="institution">Department of Electrical & Computer Engineering (ECE)<br/><a href="https://www.northsouth.edu/" target="_blank" rel="noopener noreferrer" className="university-link">North South University</a>, Dhaka</p>
                  <div className="education-details">
                    <span className="result">?? 120 Credits Completed</span>
                    <span className="grade">?? First Class</span>
                  </div>
                  <a href="https://www.northsouth.edu/academic/grading-policy.html" target="_blank" rel="noopener noreferrer" className="edu-link">
                    View Grading Policy ?
                  </a>
                </div>
              </div>

              <div className="education-card">
                <div className="education-logo">
                  <img src="bangladesh-rifles-school-college-logo.png" alt="Bangladesh Rifles School & College" />
                </div>
                <div className="education-content">
                  <h3>Higher Secondary Certificate (H.S.C.)</h3>
                  <p className="institution">Science Group<br/><a href="https://www.abdurroufcollege.ac.bd/" target="_blank" rel="noopener noreferrer" className="university-link">Birshrestha Munshi Abdur Rouf Public College</a><br/><span className="former-name">(formerly Bangladesh Rifles School & College)</span>, Dhaka</p>
                  <div className="education-details">
                    <span className="board">??? Board: Dhaka</span>
                    <span className="grade">?? First Division</span>
                  </div>
                </div>
              </div>

              <div className="education-card">
                <div className="education-logo">
                  <img src="TejgaonGovt-Logo.png" alt="Tejgaon Government Boys High School" />
                </div>
                <div className="education-content">
                  <h3>Secondary School Certificate (S.S.C.)</h3>
                  <p className="institution">Science Group<br/><a href="https://www.tghs.edu.bd/" target="_blank" rel="noopener noreferrer" className="university-link">Tejgaon Government Boys High School</a><br/><span className="bengali-name">??????? ?????? ???? ?????????</span>, Dhaka</p>
                  <div className="education-details">
                    <span className="board">??? Board: Dhaka</span>
                    <span className="grade">?? First Division with Star Marks</span>
                    <span className="achievements">? Three Letters</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'contact' && (
          <section className="contact fade-in">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-container">
              <div className="contact-info">
                <div className="contact-item hogarth-highlight">
                  <img 
                    src="hogarth-logo.avif" 
                    alt="Hogarth Logo" 
                    className="company-logo"
                  />
                  <div>
                    <h4>Current Position</h4>
                    <p>Lead DevOps Engineer</p>
                    <p className="contact-detail"><a href="https://www.hogarth.com/" target="_blank" rel="noopener noreferrer">Hogarth Worldwide, Dhaka</a></p>
                  </div>
                </div>
                <div className="contact-item ostad-highlight">
                  <img 
                    src="https://play-lh.googleusercontent.com/iharsQKNsMkyC07joRy7wriHZkSdwnDle1Fnd-DQDcXuEXkVOS3pmJMjmsz9i6Eu" 
                    alt="Ostad Logo" 
                    className="ostad-logo"
                  />
                  <div>
                    <h4>Lead Instructor at Ostad</h4>
                    <p><a href="https://ostad.app/course/mastering-devops" target="_blank" rel="noopener noreferrer">Mastering DevOps: From Fundamentals to Advanced Practices</a></p>
                    <p className="contact-detail">Teaching: AWS, Jenkins, Kubernetes, Ansible, Zabbix, Argo-CD, Prometheus, Grafana</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">??</div>
                  <div>
                    <h4>Email</h4>
                    <p><a href="mailto:sarowar@hotmail.com">sarowar@hotmail.com</a></p>
                  </div>
                </div>
                <div className="contact-item">
                  <img 
                    src="GitHub-Logo.svg" 
                    alt="GitHub" 
                    className="company-logo"
                  />
                  <div>
                    <h4>GitHub</h4>
                    <p><a href="https://github.com/sarowar-alam" target="_blank" rel="noopener noreferrer">github.com/sarowar-alam</a></p>
                  </div>
                </div>
                <div className="contact-item">
                  <img 
                    src="linkedin-logo.png" 
                    alt="LinkedIn" 
                    className="company-logo"
                  />
                  <div>
                    <h4>LinkedIn</h4>
                    <p><a href="https://www.linkedin.com/in/sarowar" target="_blank" rel="noopener noreferrer">linkedin.com/in/sarowar</a></p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">??</div>
                  <div>
                    <h4>Location</h4>
                    <p><a href="https://www.google.com/maps/@23.7500658,90.373439,16.75z/data=!5m2!1e4!1e1?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Dhanmondi, Dhaka, Bangladesh</a></p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">?</div>
                  <div>
                    <h4>Experience</h4>
                    <p><a href="#" onClick={(e) => { e.preventDefault(); setActiveSection('home'); }} className="experience-link">20+ Years in IT Infrastructure & DevOps</a></p>
                  </div>
                </div>
              </div>
              <form className="contact-form" onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  className="form-input" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  className="form-input" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <textarea 
                  name="message"
                  placeholder="Your Message" 
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
                <button type="submit" className="submit-button">Send Message ?</button>
              </form>
            </div>
          </section>
        )}
      </main>

      {/* Image Zoom Modal */}
      {zoomedImage && (
        <div className="image-modal" onClick={() => setZoomedImage(null)}>
          <div className="modal-content">
            <span className="modal-close">&times;</span>
            <img src={zoomedImage} alt="Zoomed Architecture Diagram" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
