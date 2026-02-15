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
                <span className="skill skill-bounce">☁️ AWS</span>
                <span className="skill skill-bounce" style={{animationDelay: '0.1s'}}>🏗️ Terraform</span>
                <span className="skill skill-bounce" style={{animationDelay: '0.2s'}}>☸️ Kubernetes</span>                
                <span className="skill skill-bounce" style={{animationDelay: '0.3s'}}>🔧 Jenkins</span>
                <span className="skill skill-bounce" style={{animationDelay: '0.4s'}}>⚙️ Ansible</span>
                <span className="skill skill-bounce" style={{animationDelay: '0.5s'}}>🐍 Python</span>
                <span className="skill skill-bounce" style={{animationDelay: '0.6s'}}>⚡ PowerShell</span>
                <span className="skill skill-bounce" style={{animationDelay: '0.7s'}}>🐳 Docker</span>
                <span className="skill skill-bounce" style={{animationDelay: '0.8s'}}>⚙️ GitHub Actions</span>
                <span className="skill skill-bounce" style={{animationDelay: '0.9s'}}>📊 Zabbix</span>
                <span className="skill skill-bounce" style={{animationDelay: '1.0s'}}>🔄 Argo-CD</span>
                <span className="skill skill-bounce" style={{animationDelay: '1.1s'}}>🔥 Prometheus</span>
                <span className="skill skill-bounce" style={{animationDelay: '1.2s'}}>📈 Grafana</span>
                <span className="skill skill-bounce" style={{animationDelay: '1.3s'}}>🧙 Loki</span>
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
                  <a href="https://www.hogarth.com/" target="_blank" rel="noopener noreferrer" className="logo-link logo-link-hogarth">
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
                    <li className="indented-item"><strong>Impact:</strong> 4 hours → 30 minutes (87.5% faster), enabled frequent refreshes for developers, removed fragile, tribal-knowledge procedures.</li>
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
                  <a href="https://www.hogarth.com/" target="_blank" rel="noopener noreferrer" className="logo-link logo-link-hogarth">
                    <img src="hogarth-logo.avif" alt="Hogarth Worldwide" className="timeline-company-logo" />
                  </a>
                  <h3>Principal DevOps Engineer</h3>
                  <h4>Hogarth Worldwide | Dhaka, Bangladesh (Hybrid)</h4>
                  <p className="timeline-date">Jan 2024 - Apr 2025 · 1 year 4 months</p>
                  <p>Designed and implemented scalable, secure, and automated infrastructure solutions across AWS using Terraform, Jenkins, Ansible, Python, and PowerShell.</p>
                  <ul className="timeline-highlights">
                    <li>Built ECS zero-task architecture with SQS-triggered auto-scaling via Lambda and Step Scaling</li>
                    <li>Automated EC2 provisioning with Jenkins + Terraform + Ansible pipelines</li>
                    <li>Developed parameterized Terraform modules and Jenkins pipelines for ECS deployments and AMI operations</li>
                    <li>Built private networks using VPC peering and Private Link. Standardized IAM roles with permission boundaries</li>
                    <li>Managed RDS (MySQL backups via Lambda), Redshift (auto-patching, IP-bound access)</li>
                    <li>Migrated and enhanced Zabbix with advanced triggers for missed jobs, EC2 health, and S3 syncs</li>
                    <li>Replaced manual checklists (94 items) with Python automation</li>
                    <li>Automated freeware SSL renewals, Route 53 validation, and Windows Certificate Store updates via Jenkins</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <a href="https://www.wundermanthompson.com/" target="_blank" rel="noopener noreferrer" className="logo-link logo-link-hogarth">
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
                  <a href="https://www.vml.com/" target="_blank" rel="noopener noreferrer" className="logo-link logo-link-hogarth">
                    <img src="VML-logo.png" alt="VML" className="timeline-company-logo" />
                  </a>
                  <h3>Senior Information Technology Manager</h3>
                  <h4>VML | Dhaka, Bangladesh</h4>
                  <p className="timeline-date">Aug 2021 - May 2023 · 1 year 10 months</p>
                  <p className="role-overview"><strong>Role Overview:</strong> Managed enterprise virtualization, identity services, global file distribution, and internal business applications supporting both development and production teams. Acted as a bridge between infrastructure, security, and operations while modernizing automation, backup reliability, and asset governance.</p>
                  <p className="section-header"><strong>Key Contributions & Achievements</strong></p>
                  <ul className="timeline-highlights">
                    <li>Virtualization & Platform Operations</li>
                    <li className="indented-item">Designed, maintained, and troubleshot VMware vCenter with 7 ESX/vSphere hosts supporting 100+ virtual machines</li>
                    <li className="indented-item">Provided performance monitoring, capacity oversight, and lifecycle management</li>
                    <li className="indented-item">Protected workloads using vRanger Pro backups</li>
                    <li>Identity, Endpoint & Policy Management</li>
                    <li className="indented-item">Created and maintained corporate AD identities via enterprise directory services</li>
                    <li className="indented-item">Deployed software and enforced standards through Group Policy across the global network (Adobe stack, browsers, collaboration tools, etc.)</li>
                    <li className="indented-item">Implemented GPO-based restrictions and environment consistency</li>
                    <li>Secure Remote Work Enablement</li>
                    <li className="indented-item">Collaborated with IBM to establish a local VPN platform for work-from-home users</li>
                    <li className="indented-item">Supported secure file collaboration and synchronization via enterprise storage portals</li>
                    <li className="indented-item">Coordinated with security teams on permissions and access governance</li>
                    <li>Business Systems Development</li>
                    <li className="indented-item">Developed the BDIT Purchase & Inventory Management System for procurement and asset visibility</li>
                    <li className="indented-item">Built Invoice & Credit Note workflows for Finance</li>
                    <li className="indented-item">Stack: ASP.NET, VB.NET, SQL Server</li>
                    <li className="indented-item">Integrated Active Directory authentication, Crystal reporting, and access-card attendance tracking</li>
                    <li className="indented-item">Delivered web-based detail and summary reports for management</li>
                    <li>Backup, Recovery & Data Integrity</li>
                    <li className="indented-item">Supervised incremental and full backups using Symantec Backup Exec and SyncBack Pro</li>
                    <li className="indented-item">Ensured recovery readiness and audit traceability</li>
                    <li>Global Creative Infrastructure</li>
                    <li className="indented-item">Maintained Red Hat Enterprise Linux Xi-net landscape (primary, failover, portal)</li>
                    <li className="indented-item">Automated synchronization of Adobe InDesign files to regional headquarters using Rsync</li>
                    <li className="indented-item">Managed FlashNet backup routines</li>
                    <li className="indented-item">Enhanced and maintained scripting for file relinking and automation</li>
                    <li>Monitoring & Automation</li>
                    <li className="indented-item">Developed PowerShell monitoring for finance file shares</li>
                    <li className="indented-item">Implemented real-time alerts for deletions and modifications with full audit details</li>
                    <li>Support & IT Governance</li>
                    <li className="indented-item">Delivered macOS helpdesk support</li>
                    <li className="indented-item">Played a key role in IT procurement</li>
                    <li className="indented-item">Assisted the IT Director in budgeting through asset and utilization reporting</li>
                  </ul>
                  <p className="tools-header"><strong>Tools & Technologies</strong></p>
                  <div className="tech-stack" style={{marginTop: '10px'}}>
                    <span className="tech-tag">VMware vCenter</span>
                    <span className="tech-tag">ESX/vSphere</span>
                    <span className="tech-tag">vRanger</span>
                    <span className="tech-tag">Active Directory</span>
                    <span className="tech-tag">Group Policy</span>
                    <span className="tech-tag">ASP.NET</span>
                    <span className="tech-tag">VB.NET</span>
                    <span className="tech-tag">SQL Server</span>
                    <span className="tech-tag">Crystal Reports</span>
                    <span className="tech-tag">Red Hat Enterprise Linux</span>
                    <span className="tech-tag">Rsync</span>
                    <span className="tech-tag">FlashNet</span>
                    <span className="tech-tag">PowerShell</span>
                    <span className="tech-tag">Symantec Backup Exec</span>
                    <span className="tech-tag">SyncBack Pro</span>
                    <span className="tech-tag">VPN technologies</span>
                    <span className="tech-tag">Windows Server</span>
                    <span className="tech-tag">macOS</span>
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <a href="https://www.wundermanthompson.com/" target="_blank" rel="noopener noreferrer" className="logo-link logo-link-hogarth">
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
                  <a href="https://www.wundermanthompson.com/" target="_blank" rel="noopener noreferrer" className="logo-link logo-link-hogarth">
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
                  <a href="https://www.wundermanthompson.com/" target="_blank" rel="noopener noreferrer" className="logo-link logo-link-hogarth">
                    <img src="wunderman-thompson-log.png" alt="Wunderman Thompson" className="timeline-company-logo" />
                  </a>
                  <h3>Senior Network Administrator</h3>
                  <h4>Wunderman Thompson | Bangladesh</h4>
                  <p className="timeline-date">Sep 2010 - May 2012 · 1 year 9 months</p>
                  <p className="role-overview"><strong>Role Overview:</strong> Responsible for enterprise infrastructure operations, virtualization, backup strategy, identity management, and cross-region file synchronization. Supported creative production workflows, ensured high availability of critical systems, and maintained secure, scalable IT services across Windows, Linux, and macOS environments.</p>
                  <p className="section-header"><strong>Key Contributions & Achievements</strong></p>
                  <ul className="timeline-highlights">
                    <li>Virtualization & Data Protection</li>
                    <li className="indented-item">Administered VMware vCenter environment with five ESX/vSphere hosts and 80+ virtual machines</li>
                    <li className="indented-item">Monitored VM performance, allocation, and lifecycle using VMware Infrastructure Client</li>
                    <li className="indented-item">Implemented VM backup strategy with vRanger Pro</li>
                    <li className="indented-item">Scheduled differential and full backups using Symantec Backup Exec</li>
                    <li>Identity & Access Management</li>
                    <li className="indented-item">Created and maintained Active Directory accounts for the corporate domain</li>
                    <li className="indented-item">Supported authentication-integrated applications using AD membership services</li>
                    <li>Application Development</li>
                    <li className="indented-item">Designed and delivered the BDIT Purchase & Inventory Management System for IT and Finance</li>
                    <li className="indented-item">Built with ASP.NET / VB.NET / SQL Server 2005</li>
                    <li className="indented-item">Integrated Active Directory authentication and web-based Crystal reporting</li>
                    <li className="indented-item">Enabled accurate asset tracking and purchasing transparency</li>
                    <li>Global File Distribution & Linux Infrastructure</li>
                    <li className="indented-item">Maintained Red Hat Enterprise Linux 5 Xi-net ecosystem (primary, failover, and portal)</li>
                    <li className="indented-item">Ensured creative asset replication between regional offices</li>
                    <li className="indented-item">Automated file synchronization between Bangladesh and Denmark via Rsync</li>
                    <li className="indented-item">Managed FlashNet-based backup processes</li>
                    <li className="indented-item">Modified and maintained Adobe InDesign automation and relinking scripts</li>
                    <li>Enterprise Hardware & Network Support</li>
                    <li className="indented-item">Provided operational support for Rorke Data RAID controllers and tape libraries</li>
                    <li className="indented-item">Maintained WAN connectivity and Cisco routing infrastructure</li>
                    <li className="indented-item">Operated Debian-based Squid proxy services</li>
                    <li>Security & Endpoint Operations</li>
                    <li className="indented-item">Managed centralized antivirus and anti-spyware using McAfee ePO</li>
                    <li className="indented-item">Delivered desktop and macOS helpdesk support</li>
                    <li>Operational Excellence</li>
                    <li className="indented-item">Maintained three server rooms including hardware readiness and uptime</li>
                    <li className="indented-item">Developed file server maintenance and automated deletion scripting</li>
                    <li className="indented-item">Implemented hourly NT backup routines and FTP services</li>
                    <li className="indented-item">Assisted IT leadership with annual budgeting and capacity planning</li>
                  </ul>
                  <p className="tools-header"><strong>Tools & Technologies</strong></p>
                  <div className="tech-stack" style={{marginTop: '10px'}}>
                    <span className="tech-tag">VMware vCenter</span>
                    <span className="tech-tag">ESX/vSphere</span>
                    <span className="tech-tag">vRanger</span>
                    <span className="tech-tag">Symantec Backup Exec</span>
                    <span className="tech-tag">Active Directory</span>
                    <span className="tech-tag">ASP.NET</span>
                    <span className="tech-tag">VB.NET</span>
                    <span className="tech-tag">SQL Server 2005</span>
                    <span className="tech-tag">Crystal Reports</span>
                    <span className="tech-tag">Red Hat Enterprise Linux</span>
                    <span className="tech-tag">Rsync</span>
                    <span className="tech-tag">FlashNet</span>
                    <span className="tech-tag">Squid Proxy</span>
                    <span className="tech-tag">Cisco 2821</span>
                    <span className="tech-tag">McAfee ePO</span>
                    <span className="tech-tag">Windows Server</span>
                    <span className="tech-tag">macOS</span>
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <a href="https://www.wundermanthompson.com/" target="_blank" rel="noopener noreferrer" className="logo-link logo-link-hogarth">
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
                  <a href="https://www.wundermanthompson.com/" target="_blank" rel="noopener noreferrer" className="logo-link logo-link-hogarth">
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
                  <a href="https://navanarealestate.com" target="_blank" rel="noopener noreferrer" className="logo-link logo-link-hogarth">
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
                    <a href="https://github.com/sarowar-alam/ecs-multi-service-terraform-jenkins-pipeline.git" target="_blank" rel="noopener noreferrer" className="project-link" style={{display: 'inline-block', marginRight: '10px'}}>
                      View on GitHub →
                    </a>
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
                      <h4>Technical Innovation</h4>
                      <ul>
                        <li><strong>Single Groovy Pipeline (906 lines):</strong> Orchestrates multi-service deployments with independent failure tracking, security scanning (Trivy), and deployment summaries</li>
                        <li><strong>Dynamic JSON Configuration (493 lines):</strong> Centralized service definitions serving as single source of truth for 11 microservices with environment-specific settings</li>
                        <li><strong>Reusable Terraform Modules:</strong> Generic ECS service and autoscaling modules that adapt to each service via dynamic variable injection</li>
                        <li><strong>Key Achievement:</strong> Reduced deployment complexity by 91% (11 pipelines → 1) while improving maintainabilitynew services can be added in 5 minutes via JSON configuration without code changes</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>Architecture Highlights</h4>
                      <ul>
                        <li><strong>Per-Service State Isolation:</strong> Separate Terraform state files enable parallel deployments and independent lifecycle management</li>
                        <li><strong>Configuration-Driven:</strong> Single services-config.json defines all service specifications (CPU/memory allocations, autoscaling thresholds, networking, ALB rules)</li>
                        <li><strong>Dynamic tfvars Generation:</strong> Pipeline extracts service-specific configuration and generates Terraform variables on-the-fly</li>
                        <li><strong>SQS-Based Autoscaling:</strong> CloudWatch alarms monitor queue depth to trigger step scaling policies per service</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>Technical Stack</h4>
                      <ul>
                        <li><strong>Infrastructure:</strong> Terraform (AWS Provider 6.0+), S3 backend for state management</li>
                        <li><strong>CI/CD:</strong> Jenkins, Groovy Pipeline DSL with approval gates</li>
                        <li><strong>AWS Services:</strong> ECS Fargate, Application Load Balancer, CloudWatch, SQS, ECR, IAM</li>
                        <li><strong>Security:</strong> Trivy vulnerability scanning, IAM role assumption, multi-stage approval workflow</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>Impact & Results</h4>
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
                      <h4>Technical Deep-Dive</h4>
                      <ul>
                        <li><strong>State Management Strategy:</strong> Implemented per-service state files to prevent conflicts and enable parallel deployments</li>
                        <li><strong>Dynamic Variable Injection:</strong> Pipeline parses JSON and generates .tfvars files programmatically for each service</li>
                        <li><strong>Failure Isolation:</strong> Services processed independently with deployment summary tracking (deployed/skipped/aborted)</li>
                        <li><strong>Scalability:</strong> Adding new services requires only JSON configuration changes, no pipeline or Terraform modifications</li>
                        <li><strong>Security Integration:</strong> Trivy scanner gates deployments with approval workflow for vulnerable images</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>High-Level Flow Diagram</h4>
                      <img 
                        src="ecs-deployment-flow.png" 
                        alt="ECS Deployment Pipeline Architecture" 
                        className="project-diagram" 
                        onClick={() => setZoomedImage('ecs-deployment-flow.png')}
                        style={{cursor: 'pointer'}}
                      />
                    </div>
                    <div className="detail-section">
                      <h4>Architecture Pattern</h4>
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
                    <a href="https://github.com/sarowar-alam/terraform-sqlserver-restore-pipeline" target="_blank" rel="noopener noreferrer" className="project-link" style={{display: 'inline-block', marginRight: '10px'}}>
                      View on GitHub →
                    </a>
                    <button className="project-link" onClick={() => toggleProject('dr-testing')}>
                      {expandedProject === 'dr-testing' ? 'Show Less ↑' : 'View Details →'}
                    </button>
                  </div>
                  {!expandedProject || expandedProject !== 'dr-testing' ? (
                    <div className="project-thumbnail-container">
                      <img 
                        src="db-restore-testing-system_4.png" 
                        alt="Database Disaster Recovery Testing Architecture" 
                        className="project-thumbnail" 
                        onClick={() => setZoomedImage('db-restore-testing-system_4.png')}
                      />
                    </div>
                  ) : null}
                </div>
                {expandedProject === 'dr-testing' && (
                  <div className="project-details">
                    <div className="detail-section">
                      <h4>Project Overview</h4>
                      <p><strong>Business Problem Solved:</strong> Organizations often maintain database backups but rarely verify they can be successfully restored until an actual disaster occurs. This project eliminates that risk by automatically testing the complete restore process weekly, comparing restored data against production to ensure data integrity.</p>
                    </div>
                    <div className="detail-section">
                      <h4>Technical Architecture</h4>
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
                      <h4>Key Achievements</h4>
                      <ul>
                        <li>✅ 100% automated end-to-end testing (zero manual steps)</li>
                        <li>✅ Weekly execution ensures continuous DR readiness validation</li>
                        <li>✅ Cost optimized - infrastructure exists only during 30-minute test windows</li>
                        <li>✅ Cross-account security - production and test environments fully isolated</li>
                        <li>✅ Automated alerting - immediate email notifications on success or failure</li>
                        <li>✅ Random database selection - tests different databases each week for comprehensive coverage</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>Business Impact</h4>
                      <ul>
                        <li>Reduced disaster recovery verification time from days to 30 minutes</li>
                        <li>Eliminated manual testing overhead (previously 4-6 hours of manual effort per test)</li>
                        <li>Provided weekly confidence in backup integrity to stakeholders</li>
                        <li>Enabled compliance with recovery time objective (RTO) requirements</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>Technical Complexity Highlights</h4>
                      <ul>
                        <li>Multi-cloud account orchestration with IAM role chaining</li>
                        <li>Windows remote automation via WinRM from Linux Jenkins controller</li>
                        <li>Dynamic SQL Server file mapping for restore operations</li>
                        <li>Stateful infrastructure management with automatic cleanup</li>
                        <li>HTML templating and AWS SES integration for professional reporting</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>Technical Stack Details</h4>
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
                      <h4>System Architecture</h4>
                      <img 
                        src="db-restore-testing-system_4.png" 
                        alt="Database Disaster Recovery Testing System Architecture" 
                        className="project-diagram" 
                        onClick={() => setZoomedImage('db-restore-testing-system_4.png')}
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
                    <h3>Enterprise SSL/TLS Certificate Automation & Multi-Platform Deployment System</h3>
                    <p>End-to-end certificate automation platform that eliminates manual SSL/TLS certificate management across 10+ production servers spanning AWS and on-premises infrastructure. Autonomously handles certificate validation, renewal, multi-region deployment, and operational notifications—reducing certificate-related incidents from monthly fire drills to zero in 18 months.</p>
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
                    <a href="https://github.com/sarowar-alam/Automate_Certificate_Renewal.git" target="_blank" rel="noopener noreferrer" className="project-link" style={{display: 'inline-block', marginRight: '10px'}}>
                      View on GitHub →
                    </a>
                    <button className="project-link" onClick={() => toggleProject('ssl-automation')}>
                      {expandedProject === 'ssl-automation' ? 'Show Less ↑' : 'View Details →'}
                    </button>
                  </div>
                  {!expandedProject || expandedProject !== 'ssl-automation' ? (
                    <div className="project-thumbnail-container">
                      <img 
                        src="ssl-certificate-automation_1.png" 
                        alt="SSL Automation Architecture" 
                        className="project-thumbnail" 
                        onClick={() => setZoomedImage('ssl-certificate-automation_1.png')}
                      />
                    </div>
                  ) : null}
                </div>
                {expandedProject === 'ssl-automation' && (
                  <div className="project-details">
                    <div className="detail-section">
                      <h4>Executive Summary</h4>
                      <p>Designed and implemented an end-to-end certificate automation platform that eliminates manual SSL/TLS certificate management across 10+ production servers spanning AWS and on-premises infrastructure. The system autonomously handles certificate validation, renewal, multi-region deployment, and operational notifications—reducing certificate-related incidents from monthly fire drills to zero in 18 months.</p>
                    </div>
                    <div className="detail-section">
                      <h4>Architecture & Approach</h4>
                      <p>Built as a Jenkins-orchestrated pipeline leveraging PowerShell and Python automation modules in a hybrid cloud model. The platform integrates Let's Encrypt ACME protocol with AWS Route53 for DNS-01 validation, enabling wildcard certificate support without manual DNS changes. Implements push-based deployment with automatic rollback capabilities, treating certificates as versioned artifacts with full audit trails.</p>
                    </div>
                    <div className="detail-section">
                      <h4>Technology Stack</h4>
                      <ul>
                        <li><strong>Orchestration:</strong> Jenkins Pipeline (Groovy DSL), Git source control</li>
                        <li><strong>Automation:</strong> PowerShell 5.1+ (Posh-ACME module), Python 3.8+ (boto3, paramiko)</li>
                        <li><strong>Certificate Authority:</strong> Let's Encrypt (ACME v2 protocol)</li>
                        <li><strong>AWS Services:</strong> Route53 (DNS validation), ACM (multi-region), S3 (artifact storage), SES (notifications), EC2 (compute)</li>
                        <li><strong>Target Infrastructure:</strong> Windows Server IIS, Linux (RHEL/Rocky), Zabbix monitoring</li>
                        <li><strong>Protocols:</strong> WinRM (Windows remote management), SSH (Linux deployment), HTTPS/TLS</li>
                        <li><strong>Security:</strong> Jenkins Credentials Plugin, AWS IAM, OpenJDK keytool (JKS conversion)</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>Key Engineering Decisions</h4>
                      <ul>
                        <li><strong>Idempotency & Safety:</strong> Pre-deployment validation checks with &lt;15 days expiry threshold</li>
                        <li><strong>Timestamped Backups:</strong> Automatic backup before every operation for rollback capability</li>
                        <li><strong>Zero-Downtime Deployment:</strong> Sequential service restarts with health checks</li>
                        <li><strong>Agent-Less Execution:</strong> Remote execution to avoid dependency sprawl across target servers</li>
                        <li><strong>DNS-01 Validation:</strong> Let's Encrypt with Route53 integration enables wildcard certificates</li>
                        <li><strong>Versioned Artifacts:</strong> Certificates treated as immutable artifacts with full audit trails</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>Impact & Automation</h4>
                      <ul>
                        <li>✅ <strong>Operational Efficiency:</strong> Eliminated 40+ hours/quarter of manual certificate operations</li>
                        <li>✅ <strong>Speed Improvement:</strong> Reduced mean-time-to-renewal from 3-day change request cycles to 12-minute automated deployments</li>
                        <li>✅ <strong>Incident Prevention:</strong> Prevented 6+ potential outages in first year by catching expiring certificates 15+ days in advance</li>
                        <li>✅ <strong>Maintenance Windows:</strong> Eliminated coordinated maintenance windows previously required for certificate updates</li>
                        <li>✅ <strong>Zero Incidents:</strong> Certificate-related incidents reduced from monthly fire drills to zero in 18 months</li>
                        <li>✅ <strong>Multi-Platform Coverage:</strong> Automated deployment across Windows IIS, Jenkins (Windows/Linux), and Zabbix monitoring</li>
                        <li>✅ <strong>Wildcard Support:</strong> DNS-01 validation enables wildcard certificates without manual DNS changes</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>Ownership</h4>
                      <p><strong>Single-Handed Delivery:</strong> Complete ownership of architecture design, implementation, production deployment, and ongoing operational support. Established CI/CD patterns, security controls, disaster recovery procedures, and operational runbooks now used as templates for other automation initiatives.</p>
                      <ul>
                        <li>Designed Jenkins-orchestrated pipeline architecture</li>
                        <li>Developed PowerShell and Python automation modules</li>
                        <li>Integrated Let's Encrypt ACME v2 protocol with Route53</li>
                        <li>Implemented multi-region AWS ACM synchronization</li>
                        <li>Built push-based deployment with rollback capabilities</li>
                        <li>Established security controls and credential management</li>
                        <li>Created disaster recovery procedures and operational runbooks</li>
                        <li>Authored comprehensive documentation for team autonomy</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>Architecture & Workflow</h4>
                      <img 
                        src="ssl-certificate-automation_1.png" 
                        alt="SSL Certificate Automation Pipeline Architecture" 
                        className="project-diagram" 
                        onClick={() => setZoomedImage('ssl-certificate-automation_1.png')}
                        style={{cursor: 'pointer'}}
                      />
                    </div>
                    <div className="detail-section">
                      <h4>Technical Stack Details</h4>
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
              <div className="project-card card-animated featured-project" style={{animationDelay: '0.07s'}}>
                <div className="card-glow"></div>
                <div className="project-content-layout">
                  <div className="project-text-content">
                    <h3>Cost-Optimized ECS Auto-Scaling Platform</h3>
                    <p>Intelligent infrastructure automation system that reduces AWS compute costs by 70-90% for variable-demand workloads by automatically scaling ECS services to zero during idle periods. Eliminates manual intervention while maintaining sub-minute response times to incoming work.</p>
                    <div className="tech-stack">
                      <span className="tech-tag">Terraform</span>
                      <span className="tech-tag">Python</span>
                      <span className="tech-tag">AWS Lambda</span>
                      <span className="tech-tag">ECS Fargate</span>
                      <span className="tech-tag">SQS</span>
                      <span className="tech-tag">CloudWatch</span>
                      <span className="tech-tag">EventBridge</span>
                      <span className="tech-tag">Jenkins</span>
                    </div>
                    <a href="https://github.com/sarowar-alam/terraform-ecs-sqs-autoscaler.git" target="_blank" rel="noopener noreferrer" className="project-link" style={{display: 'inline-block', marginRight: '10px'}}>
                      View on GitHub →
                    </a>
                    <button className="project-link" onClick={() => toggleProject('ecs-autoscaler')}>
                      {expandedProject === 'ecs-autoscaler' ? 'Show Less ↑' : 'View Details →'}
                    </button>
                  </div>
                  {!expandedProject || expandedProject !== 'ecs-autoscaler' ? (
                    <div className="project-thumbnail-container">
                      <img 
                        src="Cost-Optimized-ECS-Auto-Scaling.png" 
                        alt="Cost-Optimized ECS Auto-Scaling Platform Architecture" 
                        className="project-thumbnail" 
                        onClick={() => setZoomedImage('Cost-Optimized-ECS-Auto-Scaling.png')}
                      />
                    </div>
                  ) : null}
                </div>
                {expandedProject === 'ecs-autoscaler' && (
                  <div className="project-details">
                    <div className="detail-section">
                      <h4>Executive Summary</h4>
                      <p>Designed and implemented an intelligent infrastructure automation system that reduces AWS compute costs by 70-90% for variable-demand workloads by automatically scaling ECS services to zero during idle periods. Eliminates manual intervention in capacity management while maintaining sub-minute response times to incoming work.</p>
                    </div>
                    <div className="detail-section">
                      <h4>Architectural Approach</h4>
                      <ul>
                        <li><strong>Event-Driven Dual-Trigger Design:</strong> Combining EventBridge scheduled polling with CloudWatch alarm-based shutdown ensures reliable 0↔1 task transitions without application code changes</li>
                        <li><strong>Terraform Modules via Jenkins Pipeline:</strong> Enable self-service adoption across multiple services using workspace isolation</li>
                        <li><strong>Bidirectional Automation:</strong> Rejected single-trigger approaches and traditional auto-scaling (which requires ≥1 running task) in favor of bidirectional automation with built-in resilience</li>
                        <li><strong>4-Check Validation Logic:</strong> Start Lambda implements comprehensive validation to prevent false positives</li>
                        <li><strong>Performance Metrics Capture:</strong> Stop Lambda captures pre-shutdown metrics for capacity right-sizing analysis</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>Engineering Decisions</h4>
                      <p>Rejected single-trigger approaches and traditional auto-scaling (which requires ≥1 running task) in favor of bidirectional automation with built-in resilience. Start Lambda implements 4-check validation logic to prevent false positives; stop Lambda captures performance metrics pre-shutdown for capacity right-sizing analysis.</p>
                      <ul>
                        <li>Why dual triggers? Single EventBridge schedule can miss shutdown windows; dual approach ensures cost optimization</li>
                        <li>Why Lambda over Step Functions? Lower latency (sub-second), simpler debugging, lower operational overhead</li>
                        <li>Why workspace isolation? Enables multi-service deployment without cross-contamination of Terraform state</li>
                        <li>Why 4-check validation? Prevents costly false starts when SQS has transient messages or service is already running</li>
                        <li>Why metrics capture? Enables data-driven capacity planning and cost optimization over time</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>Technology Stack</h4>
                      <ul>
                        <li><strong>Infrastructure as Code:</strong> Terraform with modular design, S3 state backend with DynamoDB locking</li>
                        <li><strong>Compute Platform:</strong> AWS ECS/Fargate for containerized workloads</li>
                        <li><strong>Automation Layer:</strong> Python 3.12 Lambda functions for start/stop orchestration</li>
                        <li><strong>Event Sources:</strong> EventBridge Scheduler (polling), CloudWatch Alarms (shutdown trigger)</li>
                        <li><strong>Queue System:</strong> AWS SQS for work distribution and queue depth monitoring</li>
                        <li><strong>Monitoring:</strong> CloudWatch metrics, alarms, and logs for operational visibility</li>
                        <li><strong>CI/CD:</strong> Jenkins pipeline orchestration with parameterized deployments</li>
                        <li><strong>Security:</strong> IAM automation with least-privilege principles</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>Automation Impact</h4>
                      <ul>
                        <li>✅ <strong>Cost Reduction:</strong> 70-90% reduction in AWS compute costs for variable-demand workloads</li>
                        <li>✅ <strong>Operational Efficiency:</strong> Eliminated manual on/off procedures requiring ~15 minutes per service daily</li>
                        <li>✅ <strong>Specific Savings:</strong> Reduced infrastructure operating cost from $35/month to $9/month per service</li>
                        <li>✅ <strong>Infrastructure Overhead:</strong> Only ~$2/month (Lambda invocations, alarms, logs)</li>
                        <li>✅ <strong>Self-Service Deployment:</strong> Enabled zero-touch deployment via parameterized Jenkins pipeline</li>
                        <li>✅ <strong>Response Time:</strong> Sub-minute response times to incoming work</li>
                        <li>✅ <strong>Scalability:</strong> Support for multiple services with workspace isolation</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>Key Achievement</h4>
                      <p><strong>Full-Stack Delivery:</strong> Complete ownership of the entire solution including infrastructure design, Terraform module development, Lambda function implementation, CI/CD pipeline creation, IAM automation, comprehensive documentation (7 guides totaling 4,500+ lines), and production operations runbook.</p>
                      <p><strong>Knowledge Transfer:</strong> Documented 13 architecture decisions with trade-off analysis for team understanding, maintainability, and future enhancements. Enabled self-service adoption by other teams without requiring DevOps intervention.</p>
                    </div>
                    <div className="detail-section">
                      <h4>Ownership Scope</h4>
                      <ul>
                        <li>Designed event-driven dual-trigger architecture for reliable zero-scaling</li>
                        <li>Built reusable Terraform modules with workspace isolation pattern</li>
                        <li>Developed Python Lambda functions with 4-check validation logic</li>
                        <li>Implemented CloudWatch alarm-based shutdown with metrics capture</li>
                        <li>Created Jenkins CI/CD pipeline with parameterized deployments</li>
                        <li>Architected IAM policies with least-privilege security model</li>
                        <li>Authored comprehensive documentation (4,500+ lines across 7 guides)</li>
                        <li>Documented 13 architecture decisions with trade-off analysis</li>
                        <li>Built production operations runbook for team autonomy</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>Cost-Benefit Analysis</h4>
                      <p><strong>Before Automation:</strong> $35/month per service (24/7 operation)</p>
                      <p><strong>After Automation:</strong> $9/month per service (demand-based operation) + $2/month automation overhead = $11/month total</p>
                      <p><strong>Savings:</strong> $24/month per service (69% reduction) or $288/year per service</p>
                      <p><strong>ROI:</strong> For 5 services: $1,440/year savings with one-time 2-week engineering investment</p>
                    </div>
                    <div className="detail-section">
                      <h4>GitHub Repository</h4>
                      <p>
                        <a href="https://github.com/sarowar-alam/terraform-ecs-sqs-autoscaler.git" target="_blank" rel="noopener noreferrer" className="github-link">
                          🔗 View on GitHub
                        </a>
                      </p>
                    </div>
                    <div className="detail-section">
                      <h4>System Architecture</h4>
                      <img 
                        src="Cost-Optimized-ECS-Auto-Scaling.png" 
                        alt="Cost-Optimized ECS Auto-Scaling Platform Architecture" 
                        className="project-diagram" 
                        onClick={() => setZoomedImage('Cost-Optimized-ECS-Auto-Scaling.png')}
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
                      <h4>Technical Overview</h4>
                      <ul>
                        <li><strong>Role:</strong> DevOps Engineer / Python Developer</li>
                        <li><strong>Code:</strong> 2000+ lines of production code</li>
                        <li><strong>Environment:</strong> AWS Multi-Account, Hybrid Windows/Linux Infrastructure</li>
                        <li><strong>Coverage:</strong> 100+ backup entities across 15+ categories</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>Key Responsibilities & Achievements</h4>
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
                      <h4>Key Features</h4>
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
                      <h4>Business Impact</h4>
                      <ul>
                        <li>Reduced backup verification time from manual daily checks to automated 15-minute parallel execution</li>
                        <li>Increased reliability by catching backup failures within 24 hours</li>
                        <li>Improved compliance with automated audit trails and email reporting</li>
                        <li>Enhanced visibility through detailed HTML reports for infrastructure team</li>
                        <li>Supports disaster recovery planning with comprehensive backup validation</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>Architecture & Data Flow</h4>
                      <img 
                        src="cloud-monitoring.png" 
                        alt="Multi-Cloud Monitoring System Architecture" 
                        className="project-diagram" 
                        onClick={() => setZoomedImage('cloud-monitoring.png')}
                        style={{cursor: 'pointer'}}
                      />
                    </div>
                    <div className="detail-section">
                      <h4>Technical Challenges Solved</h4>
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
                    <h3>Multi-Server Production Hotfix Deployment Automation Pipeline</h3>
                    <p>Enterprise-grade Jenkins pipeline that automates production hotfix deployments across multi-instance web applications serving multiple clients. Eliminated manual deployment procedures requiring 45+ minutes, reducing deployment time to 3-5 minutes with zero-downtime and comprehensive safety mechanisms.</p>
                    <div className="tech-stack">
                      <span className="tech-tag">Jenkins Pipeline</span>
                      <span className="tech-tag">Groovy</span>
                      <span className="tech-tag">PowerShell</span>
                      <span className="tech-tag">AWS S3</span>
                      <span className="tech-tag">Windows Server</span>
                      <span className="tech-tag">CI/CD</span>
                    </div>
                    <a href="https://github.com/sarowar-alam/jenkins-production-hotfix-automation.git" target="_blank" rel="noopener noreferrer" className="project-link" style={{display: 'inline-block', marginRight: '10px'}}>
                      View on GitHub →
                    </a>
                    <button className="project-link" onClick={() => toggleProject('hotfix-pipeline')}>
                      {expandedProject === 'hotfix-pipeline' ? 'Show Less ↑' : 'View Details →'}
                    </button>
                  </div>
                  {!expandedProject || expandedProject !== 'hotfix-pipeline' ? (
                    <div className="project-thumbnail-container">
                      <img 
                        src="hotfix-flow_2.png" 
                        alt="Hotfix Pipeline Architecture" 
                        className="project-thumbnail" 
                        onClick={() => setZoomedImage('hotfix-flow_2.png')}
                      />
                    </div>
                  ) : null}
                </div>
                {expandedProject === 'hotfix-pipeline' && (
                  <div className="project-details">
                    <div className="detail-section">
                      <h4>Executive Summary</h4>
                      <p>Designed and delivered an enterprise-grade Jenkins pipeline to automate production hotfix deployments across multi-instance web applications serving multiple clients. The system eliminated manual deployment procedures that previously required 45+ minutes of coordination, reducing deployment time to 3-5 minutes while introducing zero-downtime capabilities and comprehensive safety mechanisms.</p>
                    </div>
                    <div className="detail-section">
                      <h4>Architectural Approach</h4>
                      <p>Event-driven orchestration with Jenkins as the control plane and PowerShell remoting for execution. Implements a backup-first pattern with mandatory pre-deployment snapshots, enabling 2-minute emergency rollbacks. Supports selective deployment targeting—operators can deploy specific components (binaries, configurations) to specific portals independently, providing granular control over production changes.</p>
                    </div>
                    <div className="detail-section">
                      <h4>Key Engineering Decisions</h4>
                      <ul>
                        <li><strong>Safety-by-Design:</strong> Deployment stages gated by backup confirmation flags; no production changes without verified backups</li>
                        <li><strong>Remote Execution Model:</strong> PSRemoting eliminates need for persistent agents on production servers, reducing attack surface</li>
                        <li><strong>Artifact Centralization:</strong> AWS S3 as single source of truth for versioned deployment packages</li>
                        <li><strong>Multi-Server Orchestration:</strong> Automated deployment across load-balanced server pairs with consistent state management</li>
                        <li><strong>Backup-First Pattern:</strong> Mandatory pre-deployment snapshots enable 2-minute emergency rollbacks</li>
                        <li><strong>Selective Targeting:</strong> Granular control over which components deploy to which portals</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>Infrastructure & Delivery</h4>
                      <p>Production Windows Server environment (2 servers, 7 portal instances) with AWS S3 integration. Pipeline handles full deployment lifecycle: validation, artifact retrieval, automated backup, deployment, and verification. Date-stamped backup retention enables audit trails and compliance requirements.</p>
                    </div>
                    <div className="detail-section">
                      <h4>Technology Stack</h4>
                      <ul>
                        <li><strong>Orchestration:</strong> Jenkins (Groovy DSL)</li>
                        <li><strong>Automation:</strong> PowerShell 5.1 with PSRemoting</li>
                        <li><strong>Artifact Storage:</strong> AWS CLI and S3</li>
                        <li><strong>Remote Management:</strong> WinRM for Windows Server</li>
                        <li><strong>Infrastructure:</strong> Production Windows Server (2 servers, 7 portal instances)</li>
                        <li><strong>Security:</strong> Jenkins Credentials Plugin for secure credential handling</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>Automation Impact</h4>
                      <ul>
                        <li>✅ <strong>Deployment Speed:</strong> 45+ minutes → 3-5 minutes (90% reduction)</li>
                        <li>✅ <strong>Zero-Downtime:</strong> Selective deployments without full system downtime</li>
                        <li>✅ <strong>Emergency Rollback:</strong> 2-minute rollback capability where none existed previously</li>
                        <li>✅ <strong>Operational Efficiency:</strong> Multi-person operations → single-operator workflows</li>
                        <li>✅ <strong>Manual Elimination:</strong> Removed manual file copying, configuration updates, and backup procedures</li>
                        <li>✅ <strong>Continuous Availability:</strong> Selective hotfix deployments support client-facing portal uptime</li>
                        <li>✅ <strong>Systematic Rollback:</strong> Date-stamped backups enable audit trails and compliance</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>Ownership</h4>
                      <p><strong>Full-Stack Ownership:</strong> From architecture design through production operations. Authored all pipeline logic, PowerShell automation scripts, operational runbooks, and comprehensive documentation suite. Maintained system through 50+ production deployments with zero rollback incidents.</p>
                      <ul>
                        <li>Designed event-driven orchestration architecture</li>
                        <li>Developed backup-first pattern with rollback capabilities</li>
                        <li>Implemented selective deployment targeting system</li>
                        <li>Built PowerShell automation scripts for remote execution</li>
                        <li>Integrated AWS S3 for artifact centralization</li>
                        <li>Created operational runbooks for production support</li>
                        <li>Authored comprehensive documentation suite</li>
                        <li>Maintained 50+ production deployments with zero rollback incidents</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>Key Features</h4>
                      <ul>
                        <li>Multi-server orchestration across load-balanced server pairs</li>
                        <li>Selective component deployment (binaries, configurations)</li>
                        <li>Portal-specific targeting for granular control</li>
                        <li>Automated backup with date-stamped versioning</li>
                        <li>2-minute emergency rollback capability</li>
                        <li>AWS S3 artifact centralization</li>
                        <li>Remote execution via PSRemoting (no persistent agents)</li>
                        <li>Comprehensive input validation and error handling</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>Deployment Flow Diagram</h4>
                      <img 
                        src="hotfix-flow_2.png" 
                        alt="Hotfix Deployment Pipeline Architecture" 
                        className="project-diagram" 
                        onClick={() => setZoomedImage('hotfix-flow_2.png')}
                        style={{cursor: 'pointer'}}
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className="project-card card-animated featured-project" style={{animationDelay: '0.05s'}}>
                <div className="card-glow"></div>
                <div className="project-content-layout">
                  <div className="project-text-content">
                    <h3>AWS Security Group Open Ports Auditor</h3>
                    <p>Automated security compliance tool that monitors AWS Security Groups across multiple regions to identify internet-exposed ports (0.0.0.0/0). Intelligently traces network topology, validates HTTP-to-HTTPS redirects, and delivers professionally formatted Excel reports via AWS SES email.</p>
                    <div className="tech-stack">
                      <span className="tech-tag">Python</span>
                      <span className="tech-tag">boto3</span>
                      <span className="tech-tag">AWS EC2</span>
                      <span className="tech-tag">AWS SES</span>
                      <span className="tech-tag">pandas</span>
                      <span className="tech-tag">openpyxl</span>
                      <span className="tech-tag">Jenkins</span>
                    </div>
                    <a href="https://github.com/sarowar-alam/AWS-SG-Open-Ports-Auditor.git" target="_blank" rel="noopener noreferrer" className="project-link" style={{display: 'inline-block', marginRight: '10px'}}>
                      View on GitHub →
                    </a>
                    <button className="project-link" onClick={() => toggleProject('sg-auditor')}>
                      {expandedProject === 'sg-auditor' ? 'Show Less ↑' : 'View Details →'}
                    </button>
                  </div>
                  {!expandedProject || expandedProject !== 'sg-auditor' ? (
                    <div className="project-thumbnail-container">
                      <img 
                        src="aws-sg-auditor.png" 
                        alt="AWS Security Group Open Ports Auditor" 
                        className="project-thumbnail" 
                        onClick={() => setZoomedImage('aws-sg-auditor.png')}
                      />
                    </div>
                  ) : null}
                </div>
                {expandedProject === 'sg-auditor' && (
                  <div className="project-details">
                    <div className="detail-section">
                      <h4>What It Is</h4>
                      <p>Automated security compliance tool that continuously monitors AWS Security Groups across multiple regions to identify ports exposed to the internet (0.0.0.0/0). The system intelligently traces network topology (security groups → network interfaces → route tables → internet gateways), tests HTTP-to-HTTPS redirect functionality on port 80, maps exposed resources to their EC2 instances or load balancers, and automatically delivers professionally formatted Excel reports with color-coded headers and intelligent sorting to security teams via AWS SES email.</p>
                    </div>
                    <div className="detail-section">
                      <h4>Manual Problems Solved</h4>
                      <ul>
                        <li>⏱️ <strong>Time:</strong> Eliminated 4 hours/week of repetitive manual security audits where analysts had to click through hundreds of security groups across multiple AWS regions</li>
                        <li>🐌 <strong>Detection Delay:</strong> Reduced from 30-90 days (quarterly audits) to &lt;24 hours with automated weekly scans, catching misconfigurations before they become incidents</li>
                        <li>📊 <strong>Consistency:</strong> Standardized reporting format with automated Excel generation (previously ad-hoc spreadsheets with inconsistent columns and manual data entry errors)</li>
                        <li>🔍 <strong>Visibility:</strong> Automated resource-to-owner mapping by correlating security groups → network interfaces → EC2 instances with name tags, eliminating hours of manual investigation</li>
                        <li>🌍 <strong>Coverage:</strong> Multi-region scanning capability ensures 100% visibility (previously audits covered only one region at a time, missing critical exposures)</li>
                        <li>🔐 <strong>Validation:</strong> Automated HTTP redirect testing verifies port 80 properly redirects to HTTPS, ensuring web security best practices without manual browser testing</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>Value Added</h4>
                      <ul>
                        <li>$40K annual savings (eliminated 4 hrs/week × 50 weeks × $200/hr fully loaded security analyst cost)</li>
                        <li>95% faster detection of misconfigurations (4 hours → 5 minutes per audit cycle)</li>
                        <li>Weekly automated scans vs quarterly manual audits (12x increase in audit frequency)</li>
                        <li>100% coverage across all AWS regions and security groups (no blind spots)</li>
                        <li>Audit-ready compliance documentation with historical Excel reports for SOC2/ISO27001 evidence</li>
                        <li>Risk reduction: Proactive detection prevented potential security incidents that could cost $100K-$1M+ in remediation</li>
                        <li>Team productivity: Security analysts freed from repetitive tasks to focus on remediation and strategic security initiatives</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>Tech Stack & Architecture</h4>
                      <ul>
                        <li><strong>Python 3.7+:</strong> Core automation logic with sophisticated error handling and logging frameworks</li>
                        <li><strong>boto3 (AWS SDK):</strong> Multi-service API integration with retry logic</li>
                        <li><strong>pandas:</strong> Data aggregation and transformation from multiple AWS APIs</li>
                        <li><strong>openpyxl:</strong> Excel generation with professional styling, auto-sizing, and color formatting</li>
                        <li><strong>socket:</strong> Low-level TCP connections for HTTP redirect validation</li>
                        <li><strong>AWS Services:</strong> Multi-service orchestration with security best practices</li>
                        <li><strong>EC2 APIs:</strong> DescribeSecurityGroups, DescribeInstances, DescribeNetworkInterfaces, DescribeRouteTables</li>
                        <li><strong>SES:</strong> Raw email with MIME multipart attachments and HTML body</li>
                        <li><strong>STS:</strong> AssumeRole for temporary credentials (1-hour expiry, automatic rotation)</li>
                        <li><strong>IAM:</strong> Least-privilege roles with separation of concerns (scan vs email permissions)</li>
                        <li><strong>CI/CD:</strong> Jenkins pipeline with Groovy DSL for scheduled execution, workspace cleanup, and error handling</li>
                        <li><strong>Security Architecture:</strong> Multi-role IAM design with temporary session tokens (no static access keys), credential isolation between services</li>
                        <li><strong>Network Analysis:</strong> VPC topology parsing to distinguish truly public resources from private subnet resources</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>Key Achievement</h4>
                      <p>Solo-designed and built end-to-end automation covering the complete lifecycle: architecture design → IAM security model → AWS API integration → network topology analysis → HTTP protocol testing → data processing pipeline → Excel report formatting → email delivery infrastructure. Implemented enterprise-grade patterns including temporary credential rotation, separation of concerns across IAM roles, comprehensive error handling with graceful degradation, and production-ready logging. Delivered measurable ROI with quantified cost savings and efficiency gains within first quarter of deployment.</p>
                      <p><strong>Effort:</strong> ~80 hours from design to production deployment (2 weeks) with ongoing maintenance. Solo ownership of requirements gathering, architecture, development, testing, deployment, and operational support.</p>
                    </div>
                    <div className="detail-section">
                      <h4>GitHub Repository</h4>
                      <p>
                        <a href="https://github.com/sarowar-alam/AWS-SG-Open-Ports-Auditor.git" target="_blank" rel="noopener noreferrer" className="github-link">
                          🔗 View on GitHub
                        </a>
                      </p>
                    </div>
                    <div className="detail-section">
                      <h4>System Architecture</h4>
                      <img 
                        src="aws-sg-auditor.png" 
                        alt="AWS Security Group Open Ports Auditor Architecture" 
                        className="project-diagram" 
                        onClick={() => setZoomedImage('aws-sg-auditor.png')}
                        style={{cursor: 'pointer'}}
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className="project-card card-animated featured-project" style={{animationDelay: '0.06s'}}>
                <div className="card-glow"></div>
                <div className="project-content-layout">
                  <div className="project-text-content">
                    <h3>AWS Orphaned Snapshots Detector</h3>
                    <p>Production-grade cost optimization platform that autonomously identifies orphaned EBS snapshots across 8 AWS regions, delivering 15-30% reduction in snapshot storage costs and eliminating 8-10 hours/month of manual infrastructure auditing.</p>
                    <div className="tech-stack">
                      <span className="tech-tag">Python</span>
                      <span className="tech-tag">boto3</span>
                      <span className="tech-tag">Groovy</span>
                      <span className="tech-tag">Jenkins</span>
                      <span className="tech-tag">AWS EC2</span>
                      <span className="tech-tag">CloudTrail</span>
                      <span className="tech-tag">AWS SES</span>
                      <span className="tech-tag">STS</span>
                    </div>
                    <a href="https://github.com/sarowar-alam/AWS-Orphaned-Snapshots-Detector.git" target="_blank" rel="noopener noreferrer" className="project-link" style={{display: 'inline-block', marginRight: '10px'}}>
                      View on GitHub →
                    </a>
                    <button className="project-link" onClick={() => toggleProject('snapshots-detector')}>
                      {expandedProject === 'snapshots-detector' ? 'Show Less ↑' : 'View Details →'}
                    </button>
                  </div>
                  {!expandedProject || expandedProject !== 'snapshots-detector' ? (
                    <div className="project-thumbnail-container">
                      <img 
                        src="snapshots-detector.png" 
                        alt="AWS Orphaned Snapshots Detector Architecture" 
                        className="project-thumbnail" 
                        onClick={() => setZoomedImage('snapshots-detector.png')}
                      />
                    </div>
                  ) : null}
                </div>
                {expandedProject === 'snapshots-detector' && (
                  <div className="project-details">
                    <div className="detail-section">
                      <h4>Executive Summary</h4>
                      <p>Production-grade cost optimization platform that autonomously identifies orphaned EBS snapshots across 8 AWS regions, delivering 15-30% reduction in snapshot storage costs and eliminating 8-10 hours/month of manual infrastructure auditing.</p>
                    </div>
                    <div className="detail-section">
                      <h4>Business Problem & Solution</h4>
                      <p>EBS snapshots accumulate as infrastructure evolves, creating forgotten storage assets incurring continuous costs. Engineered automated detection and reporting system that scans multi-region AWS infrastructure weekly, attributes orphaned resources to creators via CloudTrail forensics, and delivers actionable intelligence through formatted stakeholder reports.</p>
                    </div>
                    <div className="detail-section">
                      <h4>Architecture & Key Decisions</h4>
                      <ul>
                        <li><strong>Security-First Multi-Tier Design:</strong> Dual IAM role pattern with temporary STS credentials (1-hour TTL) separating read-only scanning from email permissions—implementing zero-trust at architectural level</li>
                        <li><strong>Set-Based Detection Algorithm:</strong> Efficiently processes thousands of snapshots across multiple regions</li>
                        <li><strong>CloudTrail Event Correlation:</strong> Enables ownership attribution with graceful degradation for aged data</li>
                        <li><strong>Delivery Pipeline:</strong> Jenkins CI/CD with Groovy orchestration, scheduled weekly execution, automatic credential lifecycle management, and AWS SES integration for HTML reporting</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>Technology Stack</h4>
                      <ul>
                        <li><strong>Python 3.x:</strong> Core automation logic with comprehensive error handling</li>
                        <li><strong>boto3 (AWS SDK):</strong> Multi-service API integration for EC2, CloudTrail, SES, STS operations</li>
                        <li><strong>Groovy:</strong> Jenkins pipeline orchestration and scheduling</li>
                        <li><strong>Jenkins CI/CD:</strong> Automated weekly execution with credential management</li>
                        <li><strong>AWS Services:</strong> EC2 (snapshot analysis), CloudTrail (ownership forensics), SES (email delivery), STS (temporary credentials), IAM (security architecture)</li>
                        <li><strong>Testing Framework:</strong> Comprehensive test suite with AWS mocking and local development harness</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>Automation Impact</h4>
                      <p><strong>Eliminated Manual Process:</strong> Quarterly console-based audits requiring engineers to manually cross-reference snapshots against AMIs across regions, search CloudTrail logs, and compile stakeholder reports.</p>
                      <ul>
                        <li>✅ Continuous weekly monitoring (quarterly → weekly: 12x increase in audit frequency)</li>
                        <li>✅ 100% regional coverage across 8 AWS regions (no blind spots)</li>
                        <li>✅ Automatic creator attribution via CloudTrail forensics</li>
                        <li>✅ Zero manual intervention—transforming 8-10 hours/month of manual effort into 5-minute automated execution</li>
                        <li>✅ 15-30% reduction in snapshot storage costs</li>
                        <li>✅ Actionable HTML reports delivered to stakeholders via email</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>Key Achievement</h4>
                      <p><strong>End-to-End Individual Delivery:</strong> Requirements gathering with finance stakeholders, security architecture and IAM design, Python development, CI/CD engineering, AWS infrastructure configuration, production deployment, and comprehensive documentation (1,000+ lines) enabling team autonomy.</p>
                      <p><strong>Timeline:</strong> Production system delivered concept-to-deployment in 6 weeks; currently executing weekly with minimal maintenance burden.</p>
                    </div>
                    <div className="detail-section">
                      <h4>Ownership Scope</h4>
                      <ul>
                        <li>Solo-designed security architecture with dual IAM role pattern</li>
                        <li>Built CloudTrail forensics engine for ownership attribution</li>
                        <li>Implemented set-based detection algorithm for efficiency</li>
                        <li>Created Jenkins CI/CD pipeline with automated credential management</li>
                        <li>Delivered HTML email reporting system via AWS SES</li>
                        <li>Authored comprehensive documentation (1,000+ lines) for team autonomy</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>GitHub Repository</h4>
                      <p>
                        <a href="https://github.com/sarowar-alam/AWS-Orphaned-Snapshots-Detector.git" target="_blank" rel="noopener noreferrer" className="github-link">
                          🔗 View on GitHub
                        </a>
                      </p>
                    </div>
                    <div className="detail-section">
                      <h4>System Architecture</h4>
                      <img 
                        src="snapshots-detector.png" 
                        alt="AWS Orphaned Snapshots Detector Architecture" 
                        className="project-diagram" 
                        onClick={() => setZoomedImage('snapshots-detector.png')}
                        style={{cursor: 'pointer'}}
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className="project-card card-animated featured-project" style={{animationDelay: '0.08s'}}>
                <div className="card-glow"></div>
                <div className="project-content-layout">
                  <div className="project-text-content">
                    <h3>Automated Multi-Region AMI Backup Pipeline</h3>
                    <p>Enterprise-grade disaster recovery automation for AWS infrastructure spanning three production environments across multiple AWS accounts and regions. Orchestrates zero-downtime backups of 12+ critical EC2 instances, reducing recovery time objectives from hours to minutes.</p>
                    <div className="tech-stack">
                      <span className="tech-tag">Jenkins</span>
                      <span className="tech-tag">Python</span>
                      <span className="tech-tag">boto3</span>
                      <span className="tech-tag">Groovy</span>
                      <span className="tech-tag">AWS EC2</span>
                      <span className="tech-tag">AWS EBS</span>
                      <span className="tech-tag">Multi-Region</span>
                      <span className="tech-tag">Git</span>
                    </div>
                    <a href="https://github.com/sarowar-alam/jenkins-ami-backup-pipeline.git" target="_blank" rel="noopener noreferrer" className="project-link" style={{display: 'inline-block', marginRight: '10px'}}>
                      View on GitHub →
                    </a>
                    <button className="project-link" onClick={() => toggleProject('ami-backup')}>
                      {expandedProject === 'ami-backup' ? 'Show Less ↑' : 'View Details →'}
                    </button>
                  </div>
                  {!expandedProject || expandedProject !== 'ami-backup' ? (
                    <div className="project-thumbnail-container">
                      <img 
                        src="jenkins-ami-backup-scheduler.png" 
                        alt="Automated Multi-Region AMI Backup Pipeline Architecture" 
                        className="project-thumbnail" 
                        onClick={() => setZoomedImage('jenkins-ami-backup-scheduler.png')}
                      />
                    </div>
                  ) : null}
                </div>
                {expandedProject === 'ami-backup' && (
                  <div className="project-details">
                    <div className="detail-section">
                      <h4>System Purpose & Business Impact</h4>
                      <p>Enterprise-grade disaster recovery automation for AWS infrastructure spanning three production environments across multiple AWS accounts and regions (us-west-2, us-east-1, eu-west-1). The system orchestrates zero-downtime backups of 12+ critical EC2 instances, eliminating manual intervention and reducing recovery time objectives from hours to minutes.</p>
                    </div>
                    <div className="detail-section">
                      <h4>Architectural Approach</h4>
                      <p>Event-driven automation pipeline leveraging Jenkins for orchestration and Python/Boto3 for cloud API integration. The solution implements a declarative configuration model where infrastructure teams maintain simple text-based instance inventories under version control, while the automation handles credential management, multi-account switching, error resilience, and comprehensive tagging for cost allocation and compliance.</p>
                    </div>
                    <div className="detail-section">
                      <h4>Key Engineering Decisions</h4>
                      <ul>
                        <li><strong>NoReboot Strategy:</strong> Implemented non-disruptive AMI creation to maintain 100% uptime during backup operations, critical for production workloads</li>
                        <li><strong>Multi-Account Security Model:</strong> Architected secure credential vault integration with UUID-based mapping, eliminating hardcoded secrets and enabling seamless cross-account operations</li>
                        <li><strong>Intelligent Error Handling:</strong> Built resilient execution flow that continues processing remaining instances when individual failures occur (duplicate AMI detection, invalid instance IDs), preventing single-point backup failures</li>
                        <li><strong>Tag-Driven Governance:</strong> Automated application of 7 standardized tags (Owner, CostUnit, Environment, System, Client, CostApp) to both AMIs and snapshots for FinOps, compliance, and lifecycle management</li>
                        <li><strong>Declarative Configuration:</strong> Version-controlled text-based instance inventories enable infrastructure-as-code approach for backup targets</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>Technology Stack</h4>
                      <ul>
                        <li><strong>Orchestration:</strong> Jenkins with Groovy DSL for pipeline definition and scheduling</li>
                        <li><strong>Automation Logic:</strong> Python 3 with boto3 SDK for AWS API integration</li>
                        <li><strong>Cloud Platform:</strong> AWS EC2, EBS across multiple regions (us-west-2, us-east-1, eu-west-1)</li>
                        <li><strong>Security:</strong> Multi-account IAM with credential vault integration (UUID-based mapping)</li>
                        <li><strong>Configuration Management:</strong> Git-based version control for instance inventories</li>
                        <li><strong>Tagging & Governance:</strong> 7 standardized tags for cost allocation and compliance</li>
                        <li><strong>Multi-Region Support:</strong> Cross-region backup orchestration with region-specific handling</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>Automation Impact & Operational Efficiency</h4>
                      <ul>
                        <li>✅ <strong>Time Savings:</strong> Eliminated manual AMI creation workflow that previously required 30-45 minutes per environment</li>
                        <li>✅ <strong>Execution Speed:</strong> Engineers now execute scheduled or on-demand backups via parameterized Jenkins jobs in under 5 minutes</li>
                        <li>✅ <strong>Preparation Time Reduction:</strong> Reduced pre-maintenance preparation time by 85%</li>
                        <li>✅ <strong>Zero Downtime:</strong> NoReboot strategy maintains 100% uptime during backup operations</li>
                        <li>✅ <strong>Error Prevention:</strong> Eliminated error-prone manual processes with consistent naming conventions</li>
                        <li>✅ <strong>Comprehensive Audit Trails:</strong> Automatic logging and tagging for compliance and cost tracking</li>
                        <li>✅ <strong>Increased Reliability:</strong> Standardized backups across three business-critical client environments</li>
                        <li>✅ <strong>RTO Improvement:</strong> Recovery time objectives reduced from hours to minutes</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>Multi-Environment Coverage</h4>
                      <ul>
                        <li><strong>Production Environments:</strong> Three separate production environments with distinct AWS accounts</li>
                        <li><strong>Regions:</strong> us-west-2 (primary), us-east-1, eu-west-1 (multi-region disaster recovery)</li>
                        <li><strong>Instance Coverage:</strong> 12+ critical EC2 instances across all environments</li>
                        <li><strong>Business-Critical Clients:</strong> Three major client environments with enterprise SLAs</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>Scope of Ownership</h4>
                      <p><strong>End-to-End Responsibility:</strong> From design through production operation, including pipeline architecture, Python automation development, multi-region AWS IAM configuration, Jenkins job implementation, and operational runbook documentation for 24/7 support teams.</p>
                      <ul>
                        <li>Designed event-driven automation pipeline architecture</li>
                        <li>Developed Python automation with boto3 SDK integration</li>
                        <li>Configured multi-region AWS IAM security model</li>
                        <li>Implemented Jenkins pipeline with Groovy DSL</li>
                        <li>Built credential vault integration with UUID mapping</li>
                        <li>Created intelligent error handling and resilience patterns</li>
                        <li>Designed tag-driven governance system (7 standardized tags)</li>
                        <li>Authored operational runbook for 24/7 support teams</li>
                        <li>Established declarative configuration model with Git version control</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>Key Features</h4>
                      <ul>
                        <li>Scheduled and on-demand backup execution via Jenkins</li>
                        <li>Parameterized job configuration for flexibility</li>
                        <li>Consistent AMI naming conventions across environments</li>
                        <li>Automatic tagging for FinOps and compliance (Owner, CostUnit, Environment, System, Client, CostApp)</li>
                        <li>Multi-account credential management with secure vault integration</li>
                        <li>Graceful error handling (continues on individual instance failures)</li>
                        <li>NoReboot AMI creation for zero-downtime backups</li>
                        <li>Git-based instance inventory management</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>GitHub Repository</h4>
                      <p>
                        <a href="https://github.com/sarowar-alam/jenkins-ami-backup-pipeline.git" target="_blank" rel="noopener noreferrer" className="github-link">
                          🔗 View on GitHub
                        </a>
                      </p>
                    </div>
                    <div className="detail-section">
                      <h4>System Architecture</h4>
                      <img 
                        src="jenkins-ami-backup-scheduler.png" 
                        alt="Automated Multi-Region AMI Backup Pipeline Architecture" 
                        className="project-diagram" 
                        onClick={() => setZoomedImage('jenkins-ami-backup-scheduler.png')}
                        style={{cursor: 'pointer'}}
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className="project-card card-animated featured-project" style={{animationDelay: '0.09s'}}>
                <div className="card-glow"></div>
                <div className="project-content-layout">
                  <div className="project-text-content">
                    <h3>BMI Health Tracker - Production Infrastructure</h3>
                    <p>Designed and deployed a production-grade, three-tier health tracking application demonstrating pragmatic DevOps architecture on AWS. The system processes BMI/BMR calculations with full historical tracking while maintaining comprehensive observability and sub-3-minute automated deployments.</p>
                    <div className="tech-stack">
                      <span className="tech-tag">Docker Compose</span>
                      <span className="tech-tag">AWS EC2</span>
                      <span className="tech-tag">React</span>
                      <span className="tech-tag">Node.js</span>
                      <span className="tech-tag">PostgreSQL</span>
                      <span className="tech-tag">Prometheus</span>
                      <span className="tech-tag">Grafana</span>
                      <span className="tech-tag">Loki</span>
                      <span className="tech-tag">GitHub Actions</span>
                    </div>
                    <a href="https://github.com/sarowar-alam/3-tier-docker-compose-monitoring-ubuntu.git" target="_blank" rel="noopener noreferrer" className="project-link" style={{display: 'inline-block', marginRight: '10px'}}>
                      View on GitHub →
                    </a>
                    <button className="project-link" onClick={() => toggleProject('bmi-tracker')}>
                      {expandedProject === 'bmi-tracker' ? 'Show Less ↑' : 'View Details →'}
                    </button>
                  </div>
                  {!expandedProject || expandedProject !== 'bmi-tracker' ? (
                    <div className="project-thumbnail-container">
                      <img 
                        src="3-tier-docker-compose.png" 
                        alt="BMI Health Tracker - Three-Tier Architecture" 
                        className="project-thumbnail" 
                        onClick={() => setZoomedImage('3-tier-docker-compose.png')}
                      />
                    </div>
                  ) : null}
                </div>
                {expandedProject === 'bmi-tracker' && (
                  <div className="project-details">
                    <div className="detail-section">
                      <h4>Architectural Philosophy</h4>
                      <p>Selected Docker Compose over Kubernetes for single-host orchestration, optimizing for operational simplicity without sacrificing production rigor. This decision eliminated orchestration overhead, reduced infrastructure cost to ~$30/month, and maintained deployment velocity suitable for SMB production workloads.</p>
                    </div>
                    <div className="detail-section">
                      <h4>Infrastructure Design</h4>
                      <p>Nine containerized services across two logical stacks—application tier (React/Nginx frontend, Node.js/Express API, PostgreSQL database) and observability tier (Prometheus, Grafana, Loki, Promtail, cAdvisor, Node Exporter)—running on AWS EC2 (Ubuntu t2.medium). Implemented defense-in-depth network segmentation with three isolated Docker networks preventing direct frontend-to-database access.</p>
                    </div>
                    <div className="detail-section">
                      <h4>CI/CD Engineering</h4>
                      <p>Built self-hosted GitHub Actions runner eliminating external registry dependencies and SSH-based deployments. This architectural choice reduced deployment time from 7-10 minutes to 2-3 minutes while removing credential management complexity. Pipeline executes automated health checks, zero-downtime rolling updates, and container cleanup on every push to main.</p>
                    </div>
                    <div className="detail-section">
                      <h4>Automation Impact</h4>
                      <ul>
                        <li>✅ Eliminated manual SSH access for deployments (100% Git-driven)</li>
                        <li>✅ Removed manual Docker command execution (declarative YAML configuration)</li>
                        <li>✅ Automated database migrations (zero-touch schema updates)</li>
                        <li>✅ Pre-configured monitoring dashboards (instant observability)</li>
                        <li>✅ Self-service deployments for development team (no ops bottleneck)</li>
                        <li>✅ Reduced deployment time from 7-10 minutes to 2-3 minutes (60% reduction)</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>Observability Stack</h4>
                      <p>Implemented full-stack monitoring with Prometheus metrics collection, Grafana visualization (3 pre-built dashboards), and Loki-based centralized logging. Captures container resource utilization, application performance metrics, and aggregated logs across all services with 7-day retention.</p>
                      <ul>
                        <li><strong>Prometheus:</strong> Time-series metrics collection from all containers</li>
                        <li><strong>Grafana:</strong> 3 pre-built dashboards for instant visibility</li>
                        <li><strong>Loki + Promtail:</strong> Centralized log aggregation across 9 services</li>
                        <li><strong>cAdvisor:</strong> Container resource utilization metrics</li>
                        <li><strong>Node Exporter:</strong> Host-level system metrics</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>Network Security Architecture</h4>
                      <ul>
                        <li><strong>Frontend Network:</strong> Isolates React/Nginx from backend services</li>
                        <li><strong>Backend Network:</strong> Enables API-to-database communication only</li>
                        <li><strong>Monitoring Network:</strong> Segregates observability stack from application tier</li>
                        <li><strong>Defense-in-Depth:</strong> Prevents direct frontend-to-database access</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>Technology Stack</h4>
                      <ul>
                        <li><strong>Application Tier:</strong> React (frontend), Nginx (reverse proxy), Node.js/Express (API), PostgreSQL (database)</li>
                        <li><strong>Observability:</strong> Prometheus, Grafana, Loki, Promtail, cAdvisor, Node Exporter</li>
                        <li><strong>Infrastructure:</strong> AWS EC2 (Ubuntu t2.medium), Docker Compose</li>
                        <li><strong>CI/CD:</strong> Self-hosted GitHub Actions runner</li>
                        <li><strong>Security:</strong> Three isolated Docker networks, non-root containers, secrets management</li>
                      </ul>
                    </div>
                    <div className="detail-section">
                      <h4>Scope of Ownership</h4>
                      <p><strong>End-to-End System Ownership:</strong> Architecture design, infrastructure provisioning, application containerization, monitoring implementation, CI/CD pipeline engineering, security hardening (network isolation, non-root containers, secrets management), and production documentation (2,500+ lines).</p>
                    </div>
                    <div className="detail-section">
                      <h4>Business Value</h4>
                      <p>Production-ready infrastructure supporting immediate feature deployment, proactive issue detection, and Git-based audit trails—delivering enterprise reliability at startup operational cost (~$30/month).</p>
                    </div>
                    <div className="detail-section">
                      <h4>GitHub Repository</h4>
                      <p>
                        <a href="https://github.com/sarowar-alam/3-tier-docker-compose-monitoring-ubuntu.git" target="_blank" rel="noopener noreferrer" className="github-link">
                          🔗 View on GitHub
                        </a>
                      </p>
                    </div>
                    <div className="detail-section">
                      <h4>System Architecture & Data Flow</h4>
                      <img 
                        src="3-tier-docker-compose.png" 
                        alt="BMI Health Tracker - Three-Tier Production Architecture" 
                        className="project-diagram" 
                        onClick={() => setZoomedImage('3-tier-docker-compose.png')}
                        style={{cursor: 'pointer'}}
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className="project-card card-animated" style={{animationDelay: '0.1s'}}>
                <div className="card-glow"></div>
                
                <h3>Zabbix Migration & Enhancement</h3>
                <p>Upgraded Zabbix with comprehensive monitoring for server health, scheduled jobs, DB backups, S3 syncs. Custom triggers for missed tasks and integrated marketplace templates</p>
                <div className="tech-stack">
                  <span className="tech-tag">Zabbix</span>
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Monitoring</span>
                  <span className="tech-tag">Alerting</span>
                </div>
              </div>
              <div className="project-card card-animated" style={{animationDelay: '0.2s'}}>
                <div className="card-glow"></div>
                
                <h3>IAM Standardization & Security</h3>
                <p>Implemented standardized IAM roles with permission boundaries across environments. Created VPC peering, PrivateLink networks, and secure user naming conventions</p>
                <div className="tech-stack">
                  <span className="tech-tag">AWS IAM</span>
                  <span className="tech-tag">VPC</span>
                  <span className="tech-tag">Security</span>
                  <span className="tech-tag">Terraform</span>
                </div>
              </div>
              <div className="project-card card-animated" style={{animationDelay: '0.3s'}}>
                <div className="card-glow"></div>
                
                <h3>RDS & Redshift Management</h3>
                <p>Managed AWS RDS (MySQL backups via Lambda) and Redshift clusters (auto-patching, IP-bound access). Automated non-prod cluster shutdowns for cost optimization</p>
                <div className="tech-stack">
                  <span className="tech-tag">RDS</span>
                  <span className="tech-tag">Redshift</span>
                  <span className="tech-tag">Lambda</span>
                  <span className="tech-tag">mysqldump</span>
                </div>
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
              {/* Featured Production Projects */}
              <div className="repo-card card-animated">
                <div className="card-glow"></div>
                <div className="repo-header">
                  <h3>Multi-Server Production Hotfix Deployment</h3>
                </div>
                <p>Enterprise-grade Jenkins pipeline automating production hotfix deployments across multi-instance web applications, reducing deployment time from 45+ minutes to 3-5 minutes with zero-downtime</p>
                <div className="tech-stack">
                  <span className="tech-tag">Jenkins</span>
                  <span className="tech-tag">Groovy</span>
                  <span className="tech-tag">PowerShell</span>
                  <span className="tech-tag">AWS S3</span>
                </div>
                <a href="https://github.com/sarowar-alam/jenkins-production-hotfix-automation" target="_blank" rel="noopener noreferrer" className="repo-link">
                  View Repository →
                </a>
              </div>
              <div className="repo-card card-animated" style={{animationDelay: '0.05s'}}>
                <div className="card-glow"></div>
                <div className="repo-header">
                  <h3>Multi-Service ECS Deployment Pipeline</h3>
                </div>
                <p>Configuration-driven pipeline consolidating 11 separate Jenkins pipelines into one unified solution for managing ECS microservices, achieving 91% complexity reduction</p>
                <div className="tech-stack">
                  <span className="tech-tag">AWS ECS</span>
                  <span className="tech-tag">Terraform</span>
                  <span className="tech-tag">Jenkins</span>
                  <span className="tech-tag">Groovy</span>
                </div>
                <a href="https://github.com/sarowar-alam/ecs-multi-service-terraform-jenkins-pipeline" target="_blank" rel="noopener noreferrer" className="repo-link">
                  View Repository →
                </a>
              </div>
              <div className="repo-card card-animated" style={{animationDelay: '0.1s'}}>
                <div className="card-glow"></div>
                <div className="repo-header">
                  <h3>Enterprise SSL/TLS Certificate Automation</h3>
                  <div className="repo-stats">
                    <span>🍴 1</span>
                  </div>
                </div>
                <p>Automated SSL/TLS certificate renewal and deployment system managing 50+ domains across multiple AWS regions with zero manual intervention</p>
                <div className="tech-stack">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Let's Encrypt</span>
                  <span className="tech-tag">AWS ACM</span>
                  <span className="tech-tag">Automation</span>
                </div>
                <a href="https://github.com/sarowar-alam/Automate_Certificate_Renewal" target="_blank" rel="noopener noreferrer" className="repo-link">
                  View Repository →
                </a>
              </div>
              <div className="repo-card card-animated" style={{animationDelay: '0.15s'}}>
                <div className="card-glow"></div>
                <div className="repo-header">
                  <h3>AWS Security Group Open Ports Auditor</h3>
                </div>
                <p>Automated security compliance tool monitoring AWS Security Groups across multiple regions, identifying internet-exposed ports with intelligent network topology validation</p>
                <div className="tech-stack">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">boto3</span>
                  <span className="tech-tag">AWS EC2</span>
                  <span className="tech-tag">Security</span>
                </div>
                <a href="https://github.com/sarowar-alam/AWS-SG-Open-Ports-Auditor" target="_blank" rel="noopener noreferrer" className="repo-link">
                  View Repository →
                </a>
              </div>
              <div className="repo-card card-animated" style={{animationDelay: '0.2s'}}>
                <div className="card-glow"></div>
                <div className="repo-header">
                  <h3>AWS Orphaned Snapshots Detector</h3>
                </div>
                <p>Cost optimization tool identifying orphaned EBS snapshots across all AWS regions, leveraging CloudTrail forensics for ownership attribution and automated reporting</p>
                <div className="tech-stack">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">boto3</span>
                  <span className="tech-tag">AWS CloudTrail</span>
                  <span className="tech-tag">Cost Optimization</span>
                </div>
                <a href="https://github.com/sarowar-alam/AWS-Orphaned-Snapshots-Detector" target="_blank" rel="noopener noreferrer" className="repo-link">
                  View Repository →
                </a>
              </div>
              <div className="repo-card card-animated" style={{animationDelay: '0.25s'}}>
                <div className="card-glow"></div>
                <div className="repo-header">
                  <h3>Cost-Optimized ECS Auto-Scaling Platform</h3>
                </div>
                <p>Terraform-based ECS auto-scaling solution using SQS queue depth metrics for intelligent container scaling, optimizing compute costs while maintaining performance SLAs</p>
                <div className="tech-stack">
                  <span className="tech-tag">Terraform</span>
                  <span className="tech-tag">AWS ECS</span>
                  <span className="tech-tag">SQS</span>
                  <span className="tech-tag">Auto-Scaling</span>
                </div>
                <a href="https://github.com/sarowar-alam/terraform-ecs-sqs-autoscaler" target="_blank" rel="noopener noreferrer" className="repo-link">
                  View Repository →
                </a>
              </div>
              <div className="repo-card card-animated" style={{animationDelay: '0.3s'}}>
                <div className="card-glow"></div>
                <div className="repo-header">
                  <h3>Automated Multi-Region AMI Backup Pipeline</h3>
                </div>
                <p>Jenkins-based disaster recovery solution creating and managing multi-region AMI backups with automated lifecycle policies and compliance reporting</p>
                <div className="tech-stack">
                  <span className="tech-tag">Jenkins</span>
                  <span className="tech-tag">AWS EC2</span>
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Disaster Recovery</span>
                </div>
                <a href="https://github.com/sarowar-alam/jenkins-ami-backup-pipeline" target="_blank" rel="noopener noreferrer" className="repo-link">
                  View Repository →
                </a>
              </div>
              <div className="repo-card card-animated" style={{animationDelay: '0.35s'}}>
                <div className="card-glow"></div>
                <div className="repo-header">
                  <h3>Database Disaster Recovery Testing</h3>
                </div>
                <p>Automated weekly validation system proving SQL Server backups are restorable, using Terraform for ephemeral infrastructure and PowerShell for cross-account restoration testing</p>
                <div className="tech-stack">
                  <span className="tech-tag">Terraform</span>
                  <span className="tech-tag">PowerShell</span>
                  <span className="tech-tag">SQL Server</span>
                  <span className="tech-tag">AWS</span>
                </div>
                <a href="https://github.com/sarowar-alam/terraform-sqlserver-restore-pipeline" target="_blank" rel="noopener noreferrer" className="repo-link">
                  View Repository →
                </a>
              </div>

              {/* Teaching & Demo Projects */}
              <div className="repo-card card-animated" style={{animationDelay: '0.4s'}}>
                <div className="card-glow"></div>
                <div className="repo-header">
                  <h3>Automation Garage</h3>
                  <div className="repo-stats">
                    <span>⭐ 6</span>
                    <span>🍴 10</span>
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
              <div className="repo-card card-animated" style={{animationDelay: '0.45s'}}>
                <div className="card-glow"></div>
                <div className="repo-header">
                  <h3>3-Tier App Terraform Jenkins</h3>
                  <div className="repo-stats">
                    <span>⭐ 2</span>
                    <span>🍴 1</span>
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
              <div className="repo-card card-animated" style={{animationDelay: '0.5s'}}>
                <div className="card-glow"></div>
                <div className="repo-header">
                  <h3>3-Tier Web App Auto Scaling</h3>
                  <div className="repo-stats">
                    <span>⭐ 1</span>
                    <span>🍴 4</span>
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
              <div className="repo-card card-animated" style={{animationDelay: '0.55s'}}>
                <div className="card-glow"></div>
                <div className="repo-header">
                  <h3>Terraform ECS Autoscaling AWS</h3>
                  <div className="repo-stats">
                    <span>🍴 1</span>
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
              <div className="repo-card card-animated" style={{animationDelay: '0.6s'}}>
                <div className="card-glow"></div>
                <div className="repo-header">
                  <h3>Docker 3-Tier Applications</h3>
                  <div className="repo-stats">
                    <span>🍴 1</span>
                  </div>
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
              <div className="repo-card card-animated" style={{animationDelay: '0.65s'}}>
                <div className="card-glow"></div>
                <div className="repo-header">
                  <h3>Kubernetes 3-Tier WebApp</h3>
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
              <div className="repo-card card-animated" style={{animationDelay: '0.7s'}}>
                <div className="card-glow"></div>
                <div className="repo-header">
                  <h3>ArgoCD GitOps Rolling Deployment</h3>
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
                    View Credential →
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
                    View Credential →
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
                    View Certificate →
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
                    View Certificate →
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'education' && (
          <section className="education fade-in">
            <h2 className="section-title">Education & Academic Background</h2>
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
                    <span className="result">27 Credits Completed</span>
                    <span className="grade">First Class</span>
                  </div>
                  <a href="https://www.northsouth.edu/academic/grading-policy.html" target="_blank" rel="noopener noreferrer" className="edu-link">
                    View Grading Policy →
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
                    <span className="result">120 Credits Completed</span>
                    <span className="grade">First Class</span>
                  </div>
                  <a href="https://www.northsouth.edu/academic/grading-policy.html" target="_blank" rel="noopener noreferrer" className="edu-link">
                    View Grading Policy →
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
                    <span className="board">Board: Dhaka</span>
                    <span className="grade">First Division</span>
                  </div>
                </div>
              </div>

              <div className="education-card">
                <div className="education-logo">
                  <img src="TejgaonGovt-Logo.png" alt="Tejgaon Government Boys High School" />
                </div>
                <div className="education-content">
                  <h3>Secondary School Certificate (S.S.C.)</h3>
                  <p className="institution">Science Group<br/><a href="https://www.tghs.edu.bd/" target="_blank" rel="noopener noreferrer" className="university-link">Tejgaon Government Boys High School</a>, Dhaka</p>
                  <div className="education-details">
                    <span className="board">Board: Dhaka</span>
                    <span className="grade">First Division with Star Marks</span>
                    <span className="achievements">📜 Three Letters</span>
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
                  <div className="contact-icon">📧</div>
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
                  <div className="contact-icon">📍</div>
                  <div>
                    <h4>Location</h4>
                    <p><a href="https://www.google.com/maps/@23.7500658,90.373439,16.75z/data=!5m2!1e4!1e1?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Dhanmondi, Dhaka, Bangladesh</a></p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">💼</div>
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
                <button type="submit" className="submit-button">Send Message →</button>
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
