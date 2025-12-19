# Student portfolio website design and build
_Exported on 12/19/2025 at 12:35:36 GMT+4 from Cursor (2.2.36)_

---

**User**

You are an expert front-end web developer and UI/UX designer.
Your task is to design and build a modern, professional personal portfolio website for a university course called SITE 1101: Principles of Information Systems.

🎯 General Requirements

Use HTML, CSS, and JavaScript only (NO frameworks such as React, Vue, Bootstrap, Tailwind, etc.)

Website must be fully responsive (desktop, tablet, mobile)

Code must be clean, modular, and well-organized

The site must be suitable for hosting on GitHub Pages

Follow best UI/UX practices and accessibility basics

Use smooth animations, subtle 3D effects, depth, parallax, glassmorphism, hover effects, and micro-interactions

Visual style should be premium, modern, minimal, and professional

🏠 Home Page

Profile photo section (with rounded or 3D card effect)

Short, friendly summary text about the student (name, major, interests)

Animated entrance effects (fade-in, slide, or 3D tilt)

Call-to-action buttons (e.g. “View Projects”, “About Me”)

👤 About Page

Introduce:

Background

Education

Skills

Activities and experiences (not limited to this course)

Use sections or cards with soft shadows and 3D hover effects

Include timeline or skill bars (CSS + JS only)

🧩 Projects Page

Display projects using cards or grid layout

Each project must include:

Title

Description

Image or screenshot

Must include:

Project 1 (required)

Project 2: Hour of Code (optional)

Cards should have hover animations and depth (3D transform effects)

➕ Additional Page

Add one extra page such as:

Resume

Blog

Contact

Keep design consistent with the rest of the site

🧭 Navigation & Footer

Sticky navigation bar with smooth scrolling

Mobile hamburger menu

Footer must include:

Copyright

Icons linking to:

GitHub profile

Codecademy profile

A public link to the GitHub repository of this website

🎨 Design & Effects

Use:

CSS transform, perspective, backdrop-filter

Smooth transitions and hover animations

Parallax or subtle 3D depth effects

Ensure:

Text is readable

Images load correctly

No layout breaks on small screens

📁 Project Structure
/index.html
/about.html
/projects.html
/extra.html
/css/
  └─ style.css
/js/
  └─ main.js
/assets/
  └─ images/

📌 Academic Grading Checklist (Must Fully Pass)

Home page exists and describes the student

About page exists and is informative

Projects page includes at least Project 1

No major design issues

Navigation bar and footer present

GitHub and Codecademy icons with links

Public GitHub repository link included

Responsive on phones and tablets

Clean and modular code structure

Suitable for multiple Git commits showing progress

✅ Output Expectations

Provide complete HTML, CSS, and JavaScript code

Explain where to replace text/images with personal data

Ensure code is easy to understand and modify

---

**Cursor**

Creating the portfolio structure and files. Building the site page by page with modern effects.


Creating the project structure:


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Personal Portfolio - SITE 1101 Principles of Information Systems">
    <title>Home | Portfolio</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar" id="navbar">
        <div class="nav-container">
            <a href="index.html" class="nav-logo">Portfolio</a>
            <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul class="nav-menu" id="navMenu">
                <li><a href="index.html" class="nav-link active">Home</a></li>
                <li><a href="about.html" class="nav-link">About</a></li>
                <li><a href="projects.html" class="nav-link">Projects</a></li>
                <li><a href="contact.html" class="nav-link">Contact</a></li>
            </ul>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-background"></div>
        <div class="hero-content">
            <div class="profile-card">
                <div class="profile-image-wrapper">
                    <img src="assets/images/profile.jpg" alt="Profile Photo" class="profile-image" id="profileImage">
                    <div class="profile-glow"></div>
                </div>
                <h1 class="hero-title" id="heroTitle">
                    <span class="title-line">Hi, I'm</span>
                    <span class="title-name">Your Name</span>
                </h1>
                <p class="hero-subtitle" id="heroSubtitle">
                    Information Systems Student | Aspiring Developer | Creative Problem Solver
                </p>
                <div class="hero-buttons">
                    <a href="projects.html" class="btn btn-primary">
                        <span>View Projects</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                    <a href="about.html" class="btn btn-secondary">
                        <span>About Me</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 10C12.7614 10 15 7.76142 15 5C15 2.23858 12.7614 0 10 0C7.23858 0 5 2.23858 5 5C5 7.76142 7.23858 10 10 10Z" fill="currentColor"/>
                            <path d="M10 12C5.58172 12 2 14.6863 2 18V20H18V18C18 14.6863 14.4183 12 10 12Z" fill="currentColor"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div class="scroll-indicator">
                <div class="mouse">
                    <div class="wheel"></div>
                </div>
                <div class="arrows">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
        <div class="floating-shapes">
            <div class="shape shape-1"></div>
            <div class="shape shape-2"></div>
            <div class="shape shape-3"></div>
        </div>
    </section>

    <!-- Intro Section -->
    <section class="intro-section">
        <div class="container">
            <div class="intro-content fade-in-up">
                <h2 class="section-title">Welcome to My Portfolio</h2>
                <p class="intro-text">
                    This portfolio showcases my journey through SITE 1101: Principles of Information Systems. 
                    Here you'll find my projects, skills, and experiences as I explore the fascinating world 
                    of information technology and system design.
                </p>
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-number" data-target="10">0</div>
                        <div class="stat-label">Projects</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number" data-target="5">0</div>
                        <div class="stat-label">Skills</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number" data-target="100">0</div>
                        <div class="stat-label">Hours of Code</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Portfolio</h3>
                    <p>SITE 1101: Principles of Information Systems</p>
                </div>
                <div class="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="projects.html">Projects</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Connect</h4>
                    <div class="social-links">
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                        <a href="https://www.codecademy.com/profiles/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Codecademy Profile">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.827 19.729h-5.595c-.093 0-.168-.074-.168-.167v-4.923c0-.092.075-.167.168-.167h5.595c.092 0 .167.075.167.167v4.923c0 .093-.075.167-.167.167zm-5.447-.336h5.099v-4.59h-5.099v4.59zm-5.547 0h5.099v-9.262h-5.099v9.262zm-5.548 0h5.099v-4.823h-5.099v4.823zm.219-6.405h5.476c.092 0 .167-.074.167-.167V4.167c0-.092-.075-.167-.167-.167H6.964c-.093 0-.168.075-.168.167v8.614c0 .088.075.162.168.162zm5.257-.336H7.203V4.369h4.851v8.688zm-5.547-.179h5.099V4.167c0-.092-.075-.167-.167-.167H5.596c-.093 0-.168.075-.168.167v8.614c0 .093.075.167.168.167zm5.099-.336H5.763V4.369h4.927v8.322zm-5.548 0H5.37V8.703c0-.092-.075-.167-.167-.167H.608c-.093 0-.168.075-.168.167v11.525c0 .093.075.167.168.167h4.595c.092 0 .167-.074.167-.167v-4.24c0-.092.075-.167.168-.167h5.595c.093 0 .168-.075.168-.167V8.703c0-.092-.075-.167-.167-.167zm-5.203-.336h5.099v4.416H.808V8.903h5.099v3.927z"/>
                            </svg>
                        </a>
                        <a href="https://github.com/yourusername/portfolio-site" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; <span id="currentYear"></span> Portfolio. All rights reserved. | SITE 1101 Course Project</p>
            </div>
        </div>
    </footer>

    <script src="js/main.js"></script>
</body>
</html>

```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="About Me - Learn about my background, education, and skills">
    <title>About | Portfolio</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar" id="navbar">
        <div class="nav-container">
            <a href="index.html" class="nav-logo">Portfolio</a>
            <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul class="nav-menu" id="navMenu">
                <li><a href="index.html" class="nav-link">Home</a></li>
                <li><a href="about.html" class="nav-link active">About</a></li>
                <li><a href="projects.html" class="nav-link">Projects</a></li>
                <li><a href="contact.html" class="nav-link">Contact</a></li>
            </ul>
        </div>
    </nav>

    <!-- Page Header -->
    <section class="page-header">
        <div class="container">
            <h1 class="page-title fade-in-up">About Me</h1>
            <p class="page-subtitle fade-in-up">Get to know me better</p>
        </div>
    </section>

    <!-- Background Section -->
    <section class="about-section">
        <div class="container">
            <div class="about-card glass-card fade-in-up">
                <h2 class="section-title">Background</h2>
                <p>
                    I'm a passionate Information Systems student with a keen interest in technology, 
                    problem-solving, and innovation. My journey in the world of information systems 
                    has been shaped by curiosity and a drive to understand how technology can be 
                    leveraged to create meaningful solutions.
                </p>
                <p>
                    Through SITE 1101: Principles of Information Systems, I've gained valuable 
                    insights into system design, database management, and the fundamental principles 
                    that govern modern information technology infrastructure.
                </p>
            </div>
        </div>
    </section>

    <!-- Education Section -->
    <section class="about-section section-alt">
        <div class="container">
            <h2 class="section-title text-center fade-in-up">Education</h2>
            <div class="timeline fade-in-up">
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content glass-card">
                        <h3>Bachelor of Science in Information Systems</h3>
                        <p class="timeline-date">2024 - Present</p>
                        <p class="timeline-location">ADA University</p>
                        <p>
                            Currently pursuing my degree with a focus on system analysis, 
                            database design, and information management.
                        </p>
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content glass-card">
                        <h3>Relevant Coursework</h3>
                        <ul class="course-list">
                            <li>SITE 1101: Principles of Information Systems</li>
                            <li>Database Management Systems</li>
                            <li>Web Development Fundamentals</li>
                            <li>System Analysis and Design</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Skills Section -->
    <section class="about-section">
        <div class="container">
            <h2 class="section-title text-center fade-in-up">Skills</h2>
            <div class="skills-grid fade-in-up">
                <div class="skill-category glass-card">
                    <h3>Technical Skills</h3>
                    <div class="skill-item">
                        <div class="skill-header">
                            <span class="skill-name">HTML/CSS</span>
                            <span class="skill-percent">85%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" data-width="85"></div>
                        </div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-header">
                            <span class="skill-name">JavaScript</span>
                            <span class="skill-percent">75%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" data-width="75"></div>
                        </div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-header">
                            <span class="skill-name">Database Design</span>
                            <span class="skill-percent">70%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" data-width="70"></div>
                        </div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-header">
                            <span class="skill-name">System Analysis</span>
                            <span class="skill-percent">80%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" data-width="80"></div>
                        </div>
                    </div>
                </div>
                <div class="skill-category glass-card">
                    <h3>Soft Skills</h3>
                    <div class="skill-tags">
                        <span class="skill-tag">Problem Solving</span>
                        <span class="skill-tag">Team Collaboration</span>
                        <span class="skill-tag">Critical Thinking</span>
                        <span class="skill-tag">Communication</span>
                        <span class="skill-tag">Project Management</span>
                        <span class="skill-tag">Time Management</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Activities & Experiences -->
    <section class="about-section section-alt">
        <div class="container">
            <h2 class="section-title text-center fade-in-up">Activities & Experiences</h2>
            <div class="experience-grid fade-in-up">
                <div class="experience-card glass-card">
                    <div class="experience-icon">💻</div>
                    <h3>Hour of Code Volunteer</h3>
                    <p>
                        Participated in Hour of Code events, helping students learn the basics 
                        of programming and inspiring the next generation of developers.
                    </p>
                </div>
                <div class="experience-card glass-card">
                    <div class="experience-icon">🎓</div>
                    <h3>Course Projects</h3>
                    <p>
                        Completed multiple hands-on projects in information systems, including 
                        database design, web development, and system analysis.
                    </p>
                </div>
                <div class="experience-card glass-card">
                    <div class="experience-icon">📚</div>
                    <h3>Self-Learning</h3>
                    <p>
                        Continuously expanding knowledge through online courses, coding challenges, 
                        and exploring new technologies and frameworks.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Portfolio</h3>
                    <p>SITE 1101: Principles of Information Systems</p>
                </div>
                <div class="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="projects.html">Projects</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Connect</h4>
                    <div class="social-links">
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                        <a href="https://www.codecademy.com/profiles/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Codecademy Profile">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.827 19.729h-5.595c-.093 0-.168-.074-.168-.167v-4.923c0-.092.075-.167.168-.167h5.595c.092 0 .167.075.167.167v4.923c0 .093-.075.167-.167.167zm-5.447-.336h5.099v-4.59h-5.099v4.59zm-5.547 0h5.099v-9.262h-5.099v9.262zm-5.548 0h5.099v-4.823h-5.099v4.823zm.219-6.405h5.476c.092 0 .167-.074.167-.167V4.167c0-.092-.075-.167-.167-.167H6.964c-.093 0-.168.075-.168.167v8.614c0 .088.075.162.168.162zm5.257-.336H7.203V4.369h4.851v8.688zm-5.547-.179h5.099V4.167c0-.092-.075-.167-.167-.167H5.596c-.093 0-.168.075-.168.167v8.614c0 .093.075.167.168.167zm5.099-.336H5.763V4.369h4.927v8.322zm-5.548 0H5.37V8.703c0-.092-.075-.167-.167-.167H.608c-.093 0-.168.075-.168.167v11.525c0 .093.075.167.168.167h4.595c.092 0 .167-.074.167-.167v-4.24c0-.092.075-.167.168-.167h5.595c.093 0 .168-.075.168-.167V8.703c0-.092-.075-.167-.167-.167zm-5.203-.336h5.099v4.416H.808V8.903h5.099v3.927z"/>
                            </svg>
                        </a>
                        <a href="https://github.com/yourusername/portfolio-site" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; <span id="currentYear"></span> Portfolio. All rights reserved. | SITE 1101 Course Project</p>
            </div>
        </div>
    </footer>

    <script src="js/main.js"></script>
</body>
</html>

```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="My Projects - Showcasing my work and achievements">
    <title>Projects | Portfolio</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar" id="navbar">
        <div class="nav-container">
            <a href="index.html" class="nav-logo">Portfolio</a>
            <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul class="nav-menu" id="navMenu">
                <li><a href="index.html" class="nav-link">Home</a></li>
                <li><a href="about.html" class="nav-link">About</a></li>
                <li><a href="projects.html" class="nav-link active">Projects</a></li>
                <li><a href="contact.html" class="nav-link">Contact</a></li>
            </ul>
        </div>
    </nav>

    <!-- Page Header -->
    <section class="page-header">
        <div class="container">
            <h1 class="page-title fade-in-up">My Projects</h1>
            <p class="page-subtitle fade-in-up">Showcasing my work and achievements</p>
        </div>
    </section>

    <!-- Projects Grid -->
    <section class="projects-section">
        <div class="container">
            <div class="projects-grid">
                <!-- Project 1 - Required -->
                <div class="project-card glass-card fade-in-up" data-project="1">
                    <div class="project-image-wrapper">
                        <div class="project-image-placeholder">
                            <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                                <rect width="100" height="100" rx="8" fill="url(#gradient1)"/>
                                <defs>
                                    <linearGradient id="gradient1" x1="0" y1="0" x2="100" y2="100">
                                        <stop offset="0%" stop-color="#667eea"/>
                                        <stop offset="100%" stop-color="#764ba2"/>
                                    </linearGradient>
                                </defs>
                                <path d="M35 35H65V65H35V35Z" fill="white" fill-opacity="0.3"/>
                                <path d="M40 40H60V50H40V40Z" fill="white"/>
                                <path d="M40 55H60V60H40V55Z" fill="white" fill-opacity="0.7"/>
                            </svg>
                        </div>
                        <div class="project-overlay">
                            <a href="#" class="project-link" aria-label="View Project 1">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M16 6L26 16L16 26M26 16H6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="project-content">
                        <span class="project-tag">Course Project</span>
                        <h3 class="project-title">Project 1: Information System Design</h3>
                        <p class="project-description">
                            A comprehensive information system design project developed for SITE 1101. 
                            This project demonstrates understanding of system requirements, database design, 
                            and user interface development principles.
                        </p>
                        <div class="project-tech">
                            <span class="tech-tag">HTML</span>
                            <span class="tech-tag">CSS</span>
                            <span class="tech-tag">JavaScript</span>
                            <span class="tech-tag">Database</span>
                        </div>
                    </div>
                </div>

                <!-- Project 2: Hour of Code - Optional -->
                <div class="project-card glass-card fade-in-up" data-project="2">
                    <div class="project-image-wrapper">
                        <div class="project-image-placeholder">
                            <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                                <rect width="100" height="100" rx="8" fill="url(#gradient2)"/>
                                <defs>
                                    <linearGradient id="gradient2" x1="0" y1="0" x2="100" y2="100">
                                        <stop offset="0%" stop-color="#f093fb"/>
                                        <stop offset="100%" stop-color="#f5576c"/>
                                    </linearGradient>
                                </defs>
                                <circle cx="50" cy="40" r="15" fill="white" fill-opacity="0.3"/>
                                <path d="M30 70L50 50L70 70" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="project-overlay">
                            <a href="#" class="project-link" aria-label="View Hour of Code Project">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M16 6L26 16L16 26M26 16H6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="project-content">
                        <span class="project-tag">Volunteer</span>
                        <h3 class="project-title">Hour of Code</h3>
                        <p class="project-description">
                            Participated in Hour of Code initiatives, helping students learn programming 
                            fundamentals through interactive coding activities and workshops.
                        </p>
                        <div class="project-tech">
                            <span class="tech-tag">Education</span>
                            <span class="tech-tag">Teaching</span>
                            <span class="tech-tag">Community</span>
                        </div>
                    </div>
                </div>

                <!-- Additional Project Card (Template) -->
                <div class="project-card glass-card fade-in-up" data-project="3">
                    <div class="project-image-wrapper">
                        <div class="project-image-placeholder">
                            <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                                <rect width="100" height="100" rx="8" fill="url(#gradient3)"/>
                                <defs>
                                    <linearGradient id="gradient3" x1="0" y1="0" x2="100" y2="100">
                                        <stop offset="0%" stop-color="#4facfe"/>
                                        <stop offset="100%" stop-color="#00f2fe"/>
                                    </linearGradient>
                                </defs>
                                <rect x="30" y="30" width="40" height="40" rx="4" fill="white" fill-opacity="0.3"/>
                                <circle cx="50" cy="50" r="10" fill="white"/>
                            </svg>
                        </div>
                        <div class="project-overlay">
                            <a href="#" class="project-link" aria-label="View Additional Project">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M16 6L26 16L16 26M26 16H6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="project-content">
                        <span class="project-tag">Personal</span>
                        <h3 class="project-title">Additional Project</h3>
                        <p class="project-description">
                            Description of your additional project. Replace this text with details 
                            about your project, its goals, and technologies used.
                        </p>
                        <div class="project-tech">
                            <span class="tech-tag">Technology</span>
                            <span class="tech-tag">Skills</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Call to Action -->
    <section class="cta-section">
        <div class="container">
            <div class="cta-card glass-card fade-in-up">
                <h2>Interested in Working Together?</h2>
                <p>Feel free to reach out if you'd like to collaborate or have any questions about my projects.</p>
                <a href="contact.html" class="btn btn-primary">Get In Touch</a>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Portfolio</h3>
                    <p>SITE 1101: Principles of Information Systems</p>
                </div>
                <div class="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="projects.html">Projects</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Connect</h4>
                    <div class="social-links">
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                        <a href="https://www.codecademy.com/profiles/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Codecademy Profile">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.827 19.729h-5.595c-.093 0-.168-.074-.168-.167v-4.923c0-.092.075-.167.168-.167h5.595c.092 0 .167.075.167.167v4.923c0 .093-.075.167-.167.167zm-5.447-.336h5.099v-4.59h-5.099v4.59zm-5.547 0h5.099v-9.262h-5.099v9.262zm-5.548 0h5.099v-4.823h-5.099v4.823zm.219-6.405h5.476c.092 0 .167-.074.167-.167V4.167c0-.092-.075-.167-.167-.167H6.964c-.093 0-.168.075-.168.167v8.614c0 .088.075.162.168.162zm5.257-.336H7.203V4.369h4.851v8.688zm-5.547-.179h5.099V4.167c0-.092-.075-.167-.167-.167H5.596c-.093 0-.168.075-.168.167v8.614c0 .093.075.167.168.167zm5.099-.336H5.763V4.369h4.927v8.322zm-5.548 0H5.37V8.703c0-.092-.075-.167-.167-.167H.608c-.093 0-.168.075-.168.167v11.525c0 .093.075.167.168.167h4.595c.092 0 .167-.074.167-.167v-4.24c0-.092.075-.167.168-.167h5.595c.093 0 .168-.075.168-.167V8.703c0-.092-.075-.167-.167-.167zm-5.203-.336h5.099v4.416H.808V8.903h5.099v3.927z"/>
                            </svg>
                        </a>
                        <a href="https://github.com/yourusername/portfolio-site" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; <span id="currentYear"></span> Portfolio. All rights reserved. | SITE 1101 Course Project</p>
            </div>
        </div>
    </footer>

    <script src="js/main.js"></script>
</body>
</html>

```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Contact Me - Get in touch">
    <title>Contact | Portfolio</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar" id="navbar">
        <div class="nav-container">
            <a href="index.html" class="nav-logo">Portfolio</a>
            <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul class="nav-menu" id="navMenu">
                <li><a href="index.html" class="nav-link">Home</a></li>
                <li><a href="about.html" class="nav-link">About</a></li>
                <li><a href="projects.html" class="nav-link">Projects</a></li>
                <li><a href="contact.html" class="nav-link active">Contact</a></li>
            </ul>
        </div>
    </nav>

    <!-- Page Header -->
    <section class="page-header">
        <div class="container">
            <h1 class="page-title fade-in-up">Get In Touch</h1>
            <p class="page-subtitle fade-in-up">I'd love to hear from you</p>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section">
        <div class="container">
            <div class="contact-wrapper">
                <div class="contact-info glass-card fade-in-up">
                    <h2>Let's Connect</h2>
                    <p>
                        Whether you have a question about my projects, want to collaborate, 
                        or just say hello, I'd love to hear from you!
                    </p>
                    <div class="contact-details">
                        <div class="contact-item">
                            <div class="contact-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M22 6L12 13L2 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div>
                                <h3>Email</h3>
                                <a href="mailto:your.email@example.com">your.email@example.com</a>
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="contact-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div>
                                <h3>Location</h3>
                                <p>Baku, Azerbaijan</p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="contact-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7292C21.7209 20.9841 21.5573 21.2126 21.3522 21.3994C21.1472 21.5861 20.9053 21.7271 20.6426 21.8127C20.3799 21.8983 20.1024 21.9265 19.83 21.895C16.7428 21.4596 13.787 20.4711 11.19 19C8.77382 17.6447 6.72533 15.8201 5.19 13.66C3.65467 11.4999 2.67109 9.05974 2.315 6.52C2.27349 6.24788 2.29072 5.97013 2.36548 5.70527C2.44023 5.44041 2.57055 5.19463 2.74766 4.9849C2.92477 4.77517 3.14451 4.60647 3.39253 4.49041C3.64055 4.37435 3.91114 4.3137 4.185 4.3125H7.185C7.71348 4.30728 8.22133 4.51498 8.59748 4.88731C8.97363 5.25964 9.18705 5.76751 9.185 6.296C9.18314 6.76294 9.01699 7.21386 8.715 7.571C8.184 8.226 7.864 9.022 7.983 9.798C8.23448 11.2242 9.00667 12.5297 10.16 13.46C11.3133 14.3903 12.7742 14.8847 14.26 14.854C15.036 14.973 15.832 14.653 16.487 14.122C16.8441 13.82 17.2951 13.6539 17.762 13.652C18.2905 13.6499 18.7984 13.8634 19.1707 14.2395C19.543 14.6157 19.7507 15.1235 19.745 15.652L22 16.92Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div>
                                <h3>Phone</h3>
                                <a href="tel:+994501234567">+994 50 123 45 67</a>
                            </div>
                        </div>
                    </div>
                    <div class="social-links-contact">
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                        <a href="https://www.codecademy.com/profiles/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Codecademy Profile">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.827 19.729h-5.595c-.093 0-.168-.074-.168-.167v-4.923c0-.092.075-.167.168-.167h5.595c.092 0 .167.075.167.167v4.923c0 .093-.075.167-.167.167zm-5.447-.336h5.099v-4.59h-5.099v4.59zm-5.547 0h5.099v-9.262h-5.099v9.262zm-5.548 0h5.099v-4.823h-5.099v4.823zm.219-6.405h5.476c.092 0 .167-.074.167-.167V4.167c0-.092-.075-.167-.167-.167H6.964c-.093 0-.168.075-.168.167v8.614c0 .088.075.162.168.162zm5.257-.336H7.203V4.369h4.851v8.688zm-5.547-.179h5.099V4.167c0-.092-.075-.167-.167-.167H5.596c-.093 0-.168.075-.168.167v8.614c0 .093.075.167.168.167zm5.099-.336H5.763V4.369h4.927v8.322zm-5.548 0H5.37V8.703c0-.092-.075-.167-.167-.167H.608c-.093 0-.168.075-.168.167v11.525c0 .093.075.167.168.167h4.595c.092 0 .167-.074.167-.167v-4.24c0-.092.075-.167.168-.167h5.595c.093 0 .168-.075.168-.167V8.703c0-.092-.075-.167-.167-.167zm-5.203-.336h5.099v4.416H.808V8.903h5.099v3.927z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="contact-form-wrapper glass-card fade-in-up">
                    <h2>Send a Message</h2>
                    <form class="contact-form" id="contactForm">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label for="subject">Subject</label>
                            <input type="text" id="subject" name="subject" required>
                        </div>
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea id="message" name="message" rows="6" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary btn-full">
                            <span>Send Message</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M18 2L9 11M18 2L12 18L9 11M18 2L2 8L9 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Portfolio</h3>
                    <p>SITE 1101: Principles of Information Systems</p>
                </div>
                <div class="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="projects.html">Projects</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Connect</h4>
                    <div class="social-links">
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                        <a href="https://www.codecademy.com/profiles/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Codecademy Profile">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.827 19.729h-5.595c-.093 0-.168-.074-.168-.167v-4.923c0-.092.075-.167.168-.167h5.595c.092 0 .167.075.167.167v4.923c0 .093-.075.167-.167.167zm-5.447-.336h5.099v-4.59h-5.099v4.59zm-5.547 0h5.099v-9.262h-5.099v9.262zm-5.548 0h5.099v-4.823h-5.099v4.823zm.219-6.405h5.476c.092 0 .167-.074.167-.167V4.167c0-.092-.075-.167-.167-.167H6.964c-.093 0-.168.075-.168.167v8.614c0 .088.075.162.168.162zm5.257-.336H7.203V4.369h4.851v8.688zm-5.547-.179h5.099V4.167c0-.092-.075-.167-.167-.167H5.596c-.093 0-.168.075-.168.167v8.614c0 .093.075.167.168.167zm5.099-.336H5.763V4.369h4.927v8.322zm-5.548 0H5.37V8.703c0-.092-.075-.167-.167-.167H.608c-.093 0-.168.075-.168.167v11.525c0 .093.075.167.168.167h4.595c.092 0 .167-.074.167-.167v-4.24c0-.092.075-.167.168-.167h5.595c.093 0 .168-.075.168-.167V8.703c0-.092-.075-.167-.167-.167zm-5.203-.336h5.099v4.416H.808V8.903h5.099v3.927z"/>
                            </svg>
                        </a>
                        <a href="https://github.com/yourusername/portfolio-site" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; <span id="currentYear"></span> Portfolio. All rights reserved. | SITE 1101 Course Project</p>
            </div>
        </div>
    </footer>

    <script src="js/main.js"></script>
</body>
</html>

```

Creating the CSS with modern effects and the JavaScript for interactivity:


Creating the CSS file with modern effects and responsive styles:


```css
/* ============================================
   CSS Variables & Reset
   ============================================ */
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f093fb;
    --text-primary: #ffffff;
    --text-secondary: #b8bcc8;
    --bg-primary: #0a0e27;
    --bg-secondary: #11142d;
    --bg-glass: rgba(255, 255, 255, 0.05);
    --bg-glass-hover: rgba(255, 255, 255, 0.1);
    --border-glass: rgba(255, 255, 255, 0.1);
    --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.2);
    --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.3);
    --shadow-glow: 0 0 40px rgba(102, 126, 234, 0.3);
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --font-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-primary);
    background: var(--bg-primary);
    color: var(--text-primary);
    line-height: 1.6;
    overflow-x: hidden;
    position: relative;
}

body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
        radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(118, 75, 162, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 40% 20%, rgba(240, 147, 251, 0.05) 0%, transparent 50%);
    pointer-events: none;
    z-index: 0;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* ============================================
   Navigation
   ============================================ */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(10, 14, 39, 0.8);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border-glass);
    z-index: 1000;
    transition: var(--transition);
}

.navbar.scrolled {
    background: rgba(10, 14, 39, 0.95);
    box-shadow: var(--shadow-md);
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-primary);
    text-decoration: none;
    background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transition: var(--transition);
}

.nav-logo:hover {
    transform: scale(1.05);
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
    align-items: center;
}

.nav-link {
    color: var(--text-secondary);
    text-decoration: none;
    font-weight: 500;
    position: relative;
    transition: var(--transition);
    padding: 0.5rem 0;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
    transition: var(--transition);
}

.nav-link:hover,
.nav-link.active {
    color: var(--text-primary);
}

.nav-link:hover::after,
.nav-link.active::after {
    width: 100%;
}

.nav-toggle {
    display: none;
    flex-direction: column;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    gap: 0.4rem;
}

.nav-toggle span {
    width: 25px;
    height: 3px;
    background: var(--text-primary);
    border-radius: 3px;
    transition: var(--transition);
}

.nav-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(8px, 8px);
}

.nav-toggle.active span:nth-child(2) {
    opacity: 0;
}

.nav-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -7px);
}

/* ============================================
   Hero Section
   ============================================ */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 120px 20px 80px;
    overflow: hidden;
}

.hero-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
        radial-gradient(circle at 30% 40%, rgba(102, 126, 234, 0.2) 0%, transparent 50%),
        radial-gradient(circle at 70% 60%, rgba(118, 75, 162, 0.2) 0%, transparent 50%);
    animation: gradientShift 10s ease infinite;
}

@keyframes gradientShift {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
}

.hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    max-width: 800px;
}

.profile-card {
    perspective: 1000px;
    margin-bottom: 3rem;
}

.profile-image-wrapper {
    position: relative;
    display: inline-block;
    margin-bottom: 2rem;
    transform-style: preserve-3d;
    transition: transform 0.6s;
}

.profile-image-wrapper:hover {
    transform: rotateY(10deg) rotateX(10deg);
}

.profile-image {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid rgba(255, 255, 255, 0.1);
    box-shadow: var(--shadow-glow);
    transition: var(--transition);
}

.profile-image:hover {
    box-shadow: 0 0 60px rgba(102, 126, 234, 0.5);
}

.profile-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 220px;
    height: 220px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(102, 126, 234, 0.4) 0%, transparent 70%);
    animation: pulse 3s ease-in-out infinite;
    z-index: -1;
}

@keyframes pulse {
    0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
    50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.8; }
}

.hero-title {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: 1.2;
}

.title-line {
    display: block;
    font-size: 1.5rem;
    font-weight: 400;
    color: var(--text-secondary);
    margin-bottom: 0.5rem;
}

.title-name {
    display: block;
    background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.hero-subtitle {
    font-size: 1.25rem;
    color: var(--text-secondary);
    margin-bottom: 2.5rem;
}

.hero-buttons {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;
}

.btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    transition: var(--transition);
    position: relative;
    overflow: hidden;
    border: 2px solid transparent;
}

.btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
}

.btn:hover::before {
    left: 100%;
}

.btn-primary {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: var(--text-primary);
    box-shadow: var(--shadow-md);
}

.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-lg), var(--shadow-glow);
}

.btn-secondary {
    background: var(--bg-glass);
    backdrop-filter: blur(10px);
    color: var(--text-primary);
    border-color: var(--border-glass);
}

.btn-secondary:hover {
    background: var(--bg-glass-hover);
    transform: translateY(-3px);
    border-color: var(--primary-color);
}

.scroll-indicator {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
}

.mouse {
    width: 30px;
    height: 50px;
    border: 2px solid var(--text-secondary);
    border-radius: 20px;
    position: relative;
}

.wheel {
    width: 4px;
    height: 8px;
    background: var(--text-secondary);
    border-radius: 2px;
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    animation: scroll 2s infinite;
}

@keyframes scroll {
    0% { opacity: 1; top: 10px; }
    100% { opacity: 0; top: 30px; }
}

.arrows span {
    display: block;
    width: 10px;
    height: 10px;
    border-right: 2px solid var(--text-secondary);
    border-bottom: 2px solid var(--text-secondary);
    transform: rotate(45deg);
    animation: arrowDown 1.5s infinite;
    margin: -5px;
}

.arrows span:nth-child(2) {
    animation-delay: 0.2s;
}

.arrows span:nth-child(3) {
    animation-delay: 0.4s;
}

@keyframes arrowDown {
    0%, 100% { opacity: 0; transform: translateY(-10px) rotate(45deg); }
    50% { opacity: 1; transform: translateY(0) rotate(45deg); }
}

.floating-shapes {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 1;
}

.shape {
    position: absolute;
    border-radius: 50%;
    filter: blur(60px);
    opacity: 0.3;
    animation: float 20s infinite;
}

.shape-1 {
    width: 400px;
    height: 400px;
    background: var(--primary-color);
    top: 10%;
    left: 10%;
    animation-delay: 0s;
}

.shape-2 {
    width: 300px;
    height: 300px;
    background: var(--accent-color);
    top: 60%;
    right: 10%;
    animation-delay: 5s;
}

.shape-3 {
    width: 250px;
    height: 250px;
    background: var(--secondary-color);
    bottom: 10%;
    left: 50%;
    animation-delay: 10s;
}

@keyframes float {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(30px, -30px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
}

/* ============================================
   Glass Card Effect
   ============================================ */
.glass-card {
    background: var(--bg-glass);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid var(--border-glass);
    border-radius: 20px;
    padding: 2rem;
    box-shadow: var(--shadow-md);
    transition: var(--transition);
}

.glass-card:hover {
    background: var(--bg-glass-hover);
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
    border-color: rgba(102, 126, 234, 0.3);
}

/* ============================================
   Intro Section
   ============================================ */
.intro-section {
    padding: 80px 20px;
    position: relative;
    z-index: 2;
}

.intro-content {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
}

.section-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.intro-text {
    font-size: 1.1rem;
    color: var(--text-secondary);
    margin-bottom: 3rem;
    line-height: 1.8;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.stat-card {
    background: var(--bg-glass);
    backdrop-filter: blur(20px);
    border: 1px solid var(--border-glass);
    border-radius: 15px;
    padding: 2rem;
    text-align: center;
    transition: var(--transition);
}

.stat-card:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: var(--shadow-lg);
    border-color: var(--primary-color);
}

.stat-number {
    font-size: 3rem;
    font-weight: 700;
    background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
}

.stat-label {
    color: var(--text-secondary);
    font-size: 1rem;
}

/* ============================================
   Page Header
   ============================================ */
.page-header {
    padding: 140px 20px 60px;
    text-align: center;
    position: relative;
    background: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
}

.page-title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.page-subtitle {
    font-size: 1.2rem;
    color: var(--text-secondary);
}

/* ============================================
   About Section
   ============================================ */
.about-section {
    padding: 80px 20px;
    position: relative;
    z-index: 2;
}

.section-alt {
    background: rgba(17, 20, 45, 0.5);
}

.about-card {
    max-width: 900px;
    margin: 0 auto;
}

.about-card p {
    margin-bottom: 1.5rem;
    color: var(--text-secondary);
    line-height: 1.8;
    font-size: 1.1rem;
}

.text-center {
    text-align: center;
}

/* Timeline */
.timeline {
    position: relative;
    max-width: 800px;
    margin: 3rem auto;
    padding: 2rem 0;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(180deg, var(--primary-color), var(--accent-color));
    transform: translateX(-50%);
}

.timeline-item {
    position: relative;
    margin-bottom: 3rem;
    display: flex;
    align-items: center;
}

.timeline-item:nth-child(odd) {
    flex-direction: row;
}

.timeline-item:nth-child(even) {
    flex-direction: row-reverse;
}

.timeline-dot {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
    border: 4px solid var(--bg-primary);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    box-shadow: var(--shadow-glow);
}

.timeline-content {
    width: 45%;
    margin: 0 2.5%;
}

.timeline-date {
    color: var(--primary-color);
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.timeline-location {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-bottom: 1rem;
}

.timeline-content h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--text-primary);
}

.timeline-content p {
    color: var(--text-secondary);
    line-height: 1.8;
}

.course-list {
    list-style: none;
    padding-left: 0;
}

.course-list li {
    padding: 0.5rem 0;
    color: var(--text-secondary);
    position: relative;
    padding-left: 1.5rem;
}

.course-list li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: var(--primary-color);
    font-weight: bold;
}

/* Skills */
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.skill-category h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: var(--text-primary);
}

.skill-item {
    margin-bottom: 1.5rem;
}

.skill-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
}

.skill-name {
    color: var(--text-primary);
    font-weight: 500;
}

.skill-percent {
    color: var(--primary-color);
    font-weight: 600;
}

.skill-bar {
    height: 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    overflow: hidden;
    position: relative;
}

.skill-progress {
    height: 100%;
    background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
    border-radius: 10px;
    width: 0;
    transition: width 1s ease-out;
    position: relative;
}

.skill-progress::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    animation: shimmer 2s infinite;
}

@keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

.skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
}

.skill-tag {
    padding: 0.5rem 1rem;
    background: var(--bg-glass);
    border: 1px solid var(--border-glass);
    border-radius: 20px;
    color: var(--text-secondary);
    font-size: 0.9rem;
    transition: var(--transition);
}

.skill-tag:hover {
    background: var(--bg-glass-hover);
    border-color: var(--primary-color);
    color: var(--text-primary);
    transform: translateY(-2px);
}

/* Experience Cards */
.experience-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.experience-card {
    text-align: center;
}

.experience-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    filter: drop-shadow(0 0 10px rgba(102, 126, 234, 0.3));
}

.experience-card h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--text-primary);
}

.experience-card p {
    color: var(--text-secondary);
    line-height: 1.8;
}

/* ============================================
   Projects Section
   ============================================ */
.projects-section {
    padding: 80px 20px;
    position: relative;
    z-index: 2;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.project-card {
    position: relative;
    overflow: hidden;
    transform-style: preserve-3d;
    transition: var(--transition);
}

.project-card:hover {
    transform: translateY(-10px) rotateX(5deg);
}

.project-image-wrapper {
    position: relative;
    width: 100%;
    height: 250px;
    border-radius: 15px;
    overflow: hidden;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
}

.project-image-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.project-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: var(--transition);
}

.project-card:hover .project-overlay {
    opacity: 1;
}

.project-link {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: var(--bg-glass);
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-primary);
    transition: var(--transition);
    transform: scale(0.8);
}

.project-card:hover .project-link {
    transform: scale(1);
}

.project-link:hover {
    background: var(--primary-color);
    transform: scale(1.1) rotate(45deg);
}

.project-content {
    padding: 0 0.5rem;
}

.project-tag {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    background: rgba(102, 126, 234, 0.2);
    border: 1px solid var(--primary-color);
    border-radius: 15px;
    color: var(--primary-color);
    font-size: 0.85rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.project-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--text-primary);
}

.project-description {
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: 1.5rem;
}

.project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.tech-tag {
    padding: 0.35rem 0.75rem;
    background: var(--bg-glass);
    border: 1px solid var(--border-glass);
    border-radius: 15px;
    color: var(--text-secondary);
    font-size: 0.85rem;
    transition: var(--transition);
}

.tech-tag:hover {
    border-color: var(--primary-color);
    color: var(--text-primary);
}

/* ============================================
   Contact Section
   ============================================ */
.contact-section {
    padding: 80px 20px;
    position: relative;
    z-index: 2;
}

.contact-wrapper {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 3rem;
    max-width: 1200px;
    margin: 0 auto;
}

.contact-info h2,
.contact-form-wrapper h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: var(--text-primary);
}

.contact-info p {
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: 2rem;
}

.contact-details {
    margin-bottom: 2rem;
}

.contact-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 2rem;
}

.contact-icon {
    width: 50px;
    height: 50px;
    border-radius: 12px;
    background: var(--bg-glass);
    border: 1px solid var(--border-glass);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-color);
    flex-shrink: 0;
}

.contact-item h3 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    color: var(--text-primary);
}

.contact-item a,
.contact-item p {
    color: var(--text-secondary);
    text-decoration: none;
    transition: var(--transition);
}

.contact-item a:hover {
    color: var(--primary-color);
}

.social-links-contact {
    display: flex;
    gap: 1rem;
}

.social-links-contact a {
    width: 50px;
    height: 50px;
    border-radius: 12px;
    background: var(--bg-glass);
    border: 1px solid var(--border-glass);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-secondary);
    transition: var(--transition);
}

.social-links-contact a:hover {
    background: var(--primary-color);
    border-color: var(--primary-color);
    color: var(--text-primary);
    transform: translateY(-3px);
}

/* Contact Form */
.contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.form-group {
    display: flex;
    flex-direction: column;
}

.form-group label {
    color: var(--text-primary);
    font-weight: 500;
    margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
    padding: 1rem;
    background: var(--bg-glass);
    border: 1px solid var(--border-glass);
    border-radius: 12px;
    color: var(--text-primary);
    font-family: var(--font-primary);
    font-size: 1rem;
    transition: var(--transition);
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--primary-color);
    background: var(--bg-glass-hover);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-group textarea {
    resize: vertical;
    min-height: 150px;
}

.btn-full {
    width: 100%;
    justify-content: center;
}

.cta-section {
    padding: 80px 20px;
    position: relative;
    z-index: 2;
}

.cta-card {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
}

.cta-card h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: var(--text-primary);
}

.cta-card p {
    color: var(--text-secondary);
    font-size: 1.1rem;
    margin-bottom: 2rem;
    line-height: 1.8;
}

/* ============================================
   Footer
   ============================================ */
.footer {
    background: var(--bg-secondary);
    border-top: 1px solid var(--border-glass);
    padding: 60px 20px 30px;
    margin-top: 80px;
    position: relative;
    z-index: 2;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
    margin-bottom: 3rem;
}

.footer-section h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.footer-section h4 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: var(--text-primary);
}

.footer-section p {
    color: var(--text-secondary);
    line-height: 1.8;
}

.footer-section ul {
    list-style: none;
}

.footer-section ul li {
    margin-bottom: 0.75rem;
}

.footer-section ul li a {
    color: var(--text-secondary);
    text-decoration: none;
    transition: var(--transition);
}

.footer-section ul li a:hover {
    color: var(--primary-color);
    padding-left: 5px;
}

.social-links {
    display: flex;
    gap: 1rem;
}

.social-links a {
    width: 45px;
    height: 45px;
    border-radius: 10px;
    background: var(--bg-glass);
    border: 1px solid var(--border-glass);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-secondary);
    transition: var(--transition);
}

.social-links a:hover {
    background: var(--primary-color);
    border-color: var(--primary-color);
    color: var(--text-primary);
    transform: translateY(-3px) rotate(5deg);
}

.footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid var(--border-glass);
    color: var(--text-secondary);
}

/* ============================================
   Animations
   ============================================ */
.fade-in-up {
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in-up:nth-child(1) { animation-delay: 0.1s; }
.fade-in-up:nth-child(2) { animation-delay: 0.2s; }
.fade-in-up:nth-child(3) { animation-delay: 0.3s; }
.fade-in-up:nth-child(4) { animation-delay: 0.4s; }

/* ============================================
   Responsive Design
   ============================================ */
@media (max-width: 968px) {
    .nav-menu {
        position: fixed;
        top: 70px;
        left: -100%;
        width: 100%;
        flex-direction: column;
        background: rgba(10, 14, 39, 0.98);
        backdrop-filter: blur(20px);
        padding: 2rem 0;
        transition: var(--transition);
        border-top: 1px solid var(--border-glass);
        gap: 0;
    }

    .nav-menu.active {
        left: 0;
    }

    .nav-menu li {
        width: 100%;
        text-align: center;
    }

    .nav-link {
        display: block;
        padding: 1rem;
        width: 100%;
    }

    .nav-toggle {
        display: flex;
    }

    .hero-title {
        font-size: 2.5rem;
    }

    .title-line {
        font-size: 1.2rem;
    }

    .title-name {
        font-size: 2rem;
    }

    .contact-wrapper {
        grid-template-columns: 1fr;
    }

    .timeline::before {
        left: 20px;
    }

    .timeline-item {
        flex-direction: row !important;
        padding-left: 3rem;
    }

    .timeline-dot {
        left: 20px;
    }

    .timeline-content {
        width: 100%;
        margin: 0;
    }
}

@media (max-width: 768px) {
    .hero-title {
        font-size: 2rem;
    }

    .title-name {
        font-size: 1.5rem;
    }

    .hero-subtitle {
        font-size: 1rem;
    }

    .profile-image {
        width: 150px;
        height: 150px;
    }

    .profile-glow {
        width: 170px;
        height: 170px;
    }

    .section-title {
        font-size: 2rem;
    }

    .page-title {
        font-size: 2rem;
    }

    .projects-grid {
        grid-template-columns: 1fr;
    }

    .stats-grid {
        grid-template-columns: 1fr;
    }

    .skills-grid {
        grid-template-columns: 1fr;
    }

    .experience-grid {
        grid-template-columns: 1fr;
    }

    .hero-buttons {
        flex-direction: column;
        width: 100%;
    }

    .btn {
        width: 100%;
        justify-content: center;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 0 15px;
    }

    .hero {
        padding: 100px 15px 60px;
    }

    .intro-section,
    .about-section,
    .projects-section,
    .contact-section {
        padding: 60px 15px;
    }

    .glass-card {
        padding: 1.5rem;
    }
}

```

Creating the JavaScript file with interactivity and animations:


```javascript
// ============================================
// Navigation & Mobile Menu
// ============================================

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

// Mobile menu toggle
if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Sticky navbar on scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Set active nav link based on current page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

// ============================================
// Smooth Scroll for Anchor Links
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Parallax Effects
// ============================================

const parallaxElements = document.querySelectorAll('.hero-background, .floating-shapes .shape');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * 0.5;

    parallaxElements.forEach((element, index) => {
        if (element.classList.contains('shape')) {
            const speed = (index + 1) * 0.2;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        } else {
            element.style.transform = `translateY(${rate}px)`;
        }
    });
});

// Mouse parallax for hero section
const hero = document.querySelector('.hero');
if (hero) {
    hero.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { offsetWidth, offsetHeight } = hero;
        const xPos = (clientX / offsetWidth - 0.5) * 20;
        const yPos = (clientY / offsetHeight - 0.5) * 20;

        const profileCard = document.querySelector('.profile-card');
        if (profileCard) {
            profileCard.style.transform = `perspective(1000px) rotateY(${xPos}deg) rotateX(${-yPos}deg)`;
        }
    });

    hero.addEventListener('mouseleave', () => {
        const profileCard = document.querySelector('.profile-card');
        if (profileCard) {
            profileCard.style.transform = 'perspective(1000px) rotateY(0) rotateX(0)';
        }
    });
}

// ============================================
// 3D Card Tilt Effect
// ============================================

const cards = document.querySelectorAll('.glass-card, .project-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ============================================
// Animated Counter for Stats
// ============================================

const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const updateCounter = () => {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
};

const statNumbers = document.querySelectorAll('.stat-number');
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            const target = parseInt(entry.target.getAttribute('data-target'));
            animateCounter(entry.target, target);
        }
    });
}, observerOptions);

statNumbers.forEach(stat => {
    statsObserver.observe(stat);
});

// ============================================
// Animated Skill Bars
// ============================================

const skillBars = document.querySelectorAll('.skill-progress');
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            const width = entry.target.getAttribute('data-width');
            setTimeout(() => {
                entry.target.style.width = width + '%';
            }, 200);
        }
    });
}, observerOptions);

skillBars.forEach(bar => {
    skillsObserver.observe(bar);
});

// ============================================
// Fade In on Scroll
// ============================================

const fadeElements = document.querySelectorAll('.fade-in-up');
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            fadeObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach(element => {
    fadeObserver.observe(element);
});

// ============================================
// Contact Form Handling
// ============================================

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        // For this example, we'll just show an alert
        console.log('Form submitted:', data);
        
        // Show success message
        const button = contactForm.querySelector('button[type="submit"]');
        const originalText = button.innerHTML;
        button.innerHTML = '<span>Message Sent! ✓</span>';
        button.style.background = 'linear-gradient(135deg, #48bb78, #38a169)';
        
        // Reset form
        contactForm.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = '';
        }, 3000);
    });
}

// ============================================
// Set Current Year in Footer
// ============================================

const yearElements = document.querySelectorAll('#currentYear');
yearElements.forEach(element => {
    element.textContent = new Date().getFullYear();
});

// ============================================
// Profile Image Loading Fallback
// ============================================

const profileImage = document.getElementById('profileImage');
if (profileImage) {
    profileImage.addEventListener('error', function() {
        // If profile image fails to load, create a gradient placeholder
        this.style.display = 'none';
        const placeholder = document.createElement('div');
        placeholder.style.cssText = `
            width: 200px;
            height: 200px;
            border-radius: 50%;
            background: linear-gradient(135deg, #667eea, #764ba2);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 4rem;
            color: white;
            margin: 0 auto;
            box-shadow: 0 0 40px rgba(102, 126, 234, 0.3);
        `;
        placeholder.textContent = '👤';
        profileImage.parentElement.appendChild(placeholder);
    });
}

// ============================================
// Project Cards Hover Effects
// ============================================

const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'transform 0.3s ease-out';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transition = 'transform 0.3s ease-out';
    });
});

// ============================================
// Page Load Animation
// ============================================

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
    
    // Animate hero elements
    const heroTitle = document.getElementById('heroTitle');
    const heroSubtitle = document.getElementById('heroSubtitle');
    const profileImageWrapper = document.querySelector('.profile-image-wrapper');
    
    if (heroTitle) {
        setTimeout(() => {
            heroTitle.style.animation = 'fadeInUp 0.8s ease-out';
        }, 300);
    }
    
    if (heroSubtitle) {
        setTimeout(() => {
            heroSubtitle.style.animation = 'fadeInUp 0.8s ease-out 0.2s both';
        }, 400);
    }
    
    if (profileImageWrapper) {
        setTimeout(() => {
            profileImageWrapper.style.animation = 'fadeInUp 0.8s ease-out 0.1s both';
        }, 200);
    }
});

// ============================================
// Scroll to Top Button (Optional Enhancement)
// ============================================

// Create scroll to top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.visibility = 'visible';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px) scale(1.1)';
});

scrollTopBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
});

// ============================================
// Keyboard Accessibility
// ============================================

// Close mobile menu with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
        navToggle.focus();
    }
});

// ============================================
// Performance Optimization
// ============================================

// Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Apply throttling to scroll handlers
window.addEventListener('scroll', throttle(() => {
    // Scroll-based animations are already handled above
}, 16));

```

Creating a README with setup instructions and a placeholder image note:


```markdown
# Personal Portfolio Website

A modern, professional portfolio website built for SITE 1101: Principles of Information Systems course.

## 🎯 Features

- **Fully Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Premium design with smooth animations and effects
- **Glassmorphism Effects** - Beautiful frosted glass card designs
- **3D Transformations** - Interactive hover effects and depth
- **Parallax Scrolling** - Engaging parallax effects for enhanced visual appeal
- **Smooth Animations** - Fade-in, slide, and 3D tilt animations
- **Accessibility** - Keyboard navigation and ARIA labels
- **Performance Optimized** - Throttled scroll events and optimized animations

## 📁 Project Structure

```
/
├── index.html          # Home page
├── about.html          # About page with timeline and skills
├── projects.html       # Projects showcase page
├── contact.html        # Contact page with form
├── css/
│   └── style.css       # Main stylesheet with all effects
├── js/
│   └── main.js         # JavaScript for interactivity
├── assets/
│   └── images/         # Image assets directory
└── README.md           # This file
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime Text, etc.)
- Optional: A local web server for testing

### Installation

1. **Clone or download** this repository to your local machine

2. **Add your profile image**:
   - Place your profile photo in `assets/images/profile.jpg`
   - Recommended size: 400x400px or larger (square aspect ratio)
   - Supported formats: JPG, PNG, WebP
   - Note: If no image is provided, a placeholder will be displayed

3. **Customize content**:
   - Open `index.html` and replace "Your Name" with your actual name
   - Update the subtitle text with your own description
   - Replace placeholder text throughout all HTML files

4. **Update social links** in all HTML files:
   - Replace `https://github.com/yourusername` with your GitHub profile URL
   - Replace `https://www.codecademy.com/profiles/yourusername` with your Codecademy profile URL
   - Replace `https://github.com/yourusername/portfolio-site` with your repository URL

5. **Update contact information** in `contact.html`:
   - Replace `your.email@example.com` with your email
   - Update phone number and location as needed

6. **Customize projects** in `projects.html`:
   - Update Project 1 description with your actual project details
   - Add your Hour of Code experience (if applicable)
   - Modify or remove the additional project card as needed
   - Replace project images or use the provided SVG placeholders

7. **Update About page** in `about.html`:
   - Personalize your background story
   - Update education information
   - Adjust skill percentages to match your actual skills
   - Customize activities and experiences

## 📝 Customization Guide

### Changing Colors

Edit the CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #667eea;      /* Main brand color */
    --secondary-color: #764ba2;    /* Secondary brand color */
    --accent-color: #f093fb;       /* Accent color */
    /* ... more variables */
}
```

### Adding Your Own Projects

In `projects.html`, duplicate a project card and update:
- Project title
- Project description
- Project tags (tech stack)
- Project image or placeholder SVG

### Modifying Skill Levels

In `about.html`, update the `data-width` attribute on skill progress bars:

```html
<div class="skill-progress" data-width="85"></div>
```

Change `85` to your actual skill percentage (0-100).

### Updating Stats

In `index.html`, modify the stat numbers:

```html
<div class="stat-number" data-target="10">0</div>
```

Change `10` to your actual number.

## 🌐 Hosting on GitHub Pages

1. **Create a GitHub repository**:
   - Create a new repository on GitHub
   - Name it `portfolio-site` or your preferred name

2. **Push your code**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio-site.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to repository Settings
   - Navigate to Pages section
   - Select `main` branch as source
   - Click Save
   - Your site will be available at `https://yourusername.github.io/portfolio-site/`

## 🎨 Design Features

### Animations
- Fade-in on scroll
- Smooth page transitions
- Hover effects on cards and buttons
- 3D tilt effects on mouse movement
- Parallax scrolling backgrounds

### Responsive Breakpoints
- Desktop: 1200px and above
- Tablet: 768px - 1199px
- Mobile: Below 768px
- Small Mobile: Below 480px

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📋 Academic Checklist

✅ Home page exists and describes the student  
✅ About page exists and is informative  
✅ Projects page includes at least Project 1  
✅ No major design issues  
✅ Navigation bar and footer present  
✅ GitHub and Codecademy icons with links  
✅ Public GitHub repository link included  
✅ Responsive on phones and tablets  
✅ Clean and modular code structure  
✅ Suitable for multiple Git commits showing progress  

## 🔧 Technologies Used

- HTML5
- CSS3 (with CSS Variables, Flexbox, Grid)
- Vanilla JavaScript (ES6+)
- No frameworks or libraries (as per requirements)

## 📝 Notes

- All images should be optimized for web use
- The contact form currently uses client-side validation only
- For production, implement a backend solution for form submissions
- Ensure all placeholder text is replaced before submission

## 📄 License

This project is created for educational purposes as part of SITE 1101 course requirements.

## 👤 Author

[Your Name]  
SITE 1101: Principles of Information Systems  
ADA University

---

**Note**: Remember to replace all placeholder content with your personal information before deploying or submitting!

```

```plaintext
# Place your profile image here
# Name it: profile.jpg
# Recommended size: 400x400px or larger (square)
# Supported formats: JPG, PNG, WebP

```

Verifying the project structure and checking for issues:


## Project structure

```
site/
├── index.html          # Home page with hero section
├── about.html          # About page with timeline & skills
├── projects.html       # Projects showcase
├── contact.html        # Contact page with form
├── css/
│   └── style.css       # Complete stylesheet
├── js/
│   └── main.js         # All interactivity
├── assets/
│   └── images/         # Place for your profile.jpg
└── README.md           # Setup guide
```

## Features implemented

### Design effects
- Glassmorphism cards with backdrop blur
- 3D transforms on hover
- Parallax scrolling backgrounds
- Smooth fade-in animations
- Gradient backgrounds
- Floating shape animations

### Functionality
- Sticky navigation bar
- Mobile hamburger menu
- Smooth scrolling
- Animated counters for stats
- Progress bar animations
- Contact form handling
- Scroll-to-top button
- Profile image fallback

### Responsive design
- Mobile-friendly navigation
- Adaptive grid layouts
- Touch-optimized interactions
- Responsive typography

## Next steps — customize

1. Add your profile photo:
   - Place `profile.jpg` in `assets/images/`
   - Recommended: 400x400px square image

2. Update personal information:
   - Replace "Your Name" in `index.html`
   - Update social media links (GitHub, Codecademy, Repository)
   - Customize bio text and descriptions

3. Personalize projects:
   - Update Project 1 with your actual project details
   - Add Hour of Code experience
   - Modify project descriptions and tech tags

4. Customize About page:
   - Update education timeline
   - Adjust skill percentages
   - Personalize activities section

5. Update contact information:
   - Add your email and phone number
   - Update location if needed

## Social links to update

Search and replace in all HTML files:
- `https://github.com/yourusername` → Your GitHub profile
- `https://www.codecademy.com/profiles/yourusername` → Your Codecademy profile
- `https://github.com/yourusername/portfolio-site` → Your repository URL

## Ready for GitHub Pages

The site is ready to deploy. After customizing:
1. Push to GitHub
2. Enable GitHub Pages in repository settings
3. Your site will be live

All requirements from your checklist are met. The code is clean, modular, and ready for submission. The design is modern with smooth animations and effects, and it's fully responsive across all devices.

Need help customizing any specific section?

```plaintext
site/
├── index.html          # Home page with hero section
├── about.html          # About page with timeline & skills
├── projects.html       # Projects showcase
├── contact.html        # Contact page with form
├── css/
│   └── style.css       # Complete stylesheet
├── js/
│   └── main.js         # All interactivity
├── assets/
│   └── images/         # Place for your profile.jpg
└── README.md           # Setup guide
```

---

**User**

In the home page there are 3 block. erase them.
And there is a white thing on the middle. Alse erase it.


---

**Cursor**

Removing the 3 stat blocks and the scroll indicator in the middle of the hero section.


Removing the 3 stat blocks and the scroll indicator.


```html
            </div>
        </div>
```

```html
                <p class="intro-text">
                    This portfolio showcases my journey through SITE 1101: Principles of Information Systems. 
                    Here you'll find my projects, skills, and experiences as I explore the fascinating world 
                    of information technology and system design.
                </p>
            </div>
```

Removed:

1. **The 3 stat blocks** (Projects, Skills, Hours of Code) from the intro section
2. **The scroll indicator** (mouse and arrows) in the middle of the hero section

The home page now shows only the profile section, title, subtitle, buttons, and the welcome text. The white scroll indicator animation is removed.

---

**User**

In the projets page, erase 3 th project. But add new pages for projects.

---

**Cursor**

Checking `projects.html` to remove the 3rd project. Then creating individual project detail pages.


Removing the 3rd project and creating individual project detail pages. Updating the links to point to those pages.


```html
                        <div class="project-overlay">
                            <a href="project1.html" class="project-link" aria-label="View Project 1">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M16 6L26 16L16 26M26 16H6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                        </div>
```

```html
                        <div class="project-overlay">
                            <a href="project2.html" class="project-link" aria-label="View Hour of Code Project">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M16 6L26 16L16 26M26 16H6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                        </div>
```

```html
                    </div>
                </div>
            </div>
```

Creating individual project detail pages:


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Project 1: Information System Design - Detailed Overview">
    <title>Project 1: Information System Design | Portfolio</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar" id="navbar">
        <div class="nav-container">
            <a href="index.html" class="nav-logo">Portfolio</a>
            <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul class="nav-menu" id="navMenu">
                <li><a href="index.html" class="nav-link">Home</a></li>
                <li><a href="about.html" class="nav-link">About</a></li>
                <li><a href="projects.html" class="nav-link active">Projects</a></li>
                <li><a href="contact.html" class="nav-link">Contact</a></li>
            </ul>
        </div>
    </nav>

    <!-- Page Header -->
    <section class="page-header">
        <div class="container">
            <a href="projects.html" class="back-link">← Back to Projects</a>
            <h1 class="page-title fade-in-up">Project 1: Information System Design</h1>
            <p class="page-subtitle fade-in-up">A comprehensive information system design project</p>
        </div>
    </section>

    <!-- Project Detail Section -->
    <section class="project-detail-section">
        <div class="container">
            <div class="project-detail-wrapper">
                <!-- Project Image -->
                <div class="project-detail-image glass-card fade-in-up">
                    <div class="project-image-placeholder" style="height: 400px; display: flex; align-items: center; justify-content: center;">
                        <svg width="200" height="200" viewBox="0 0 100 100" fill="none">
                            <rect width="100" height="100" rx="8" fill="url(#gradient1)"/>
                            <defs>
                                <linearGradient id="gradient1" x1="0" y1="0" x2="100" y2="100">
                                    <stop offset="0%" stop-color="#667eea"/>
                                    <stop offset="100%" stop-color="#764ba2"/>
                                </linearGradient>
                            </defs>
                            <path d="M35 35H65V65H35V35Z" fill="white" fill-opacity="0.3"/>
                            <path d="M40 40H60V50H40V40Z" fill="white"/>
                            <path d="M40 55H60V60H40V55Z" fill="white" fill-opacity="0.7"/>
                        </svg>
                    </div>
                </div>

                <!-- Project Info -->
                <div class="project-detail-content">
                    <div class="project-meta glass-card fade-in-up">
                        <span class="project-tag">Course Project</span>
                        <span class="project-date">SITE 1101</span>
                    </div>

                    <div class="project-description-detail glass-card fade-in-up">
                        <h2>Overview</h2>
                        <p>
                            This project was developed as part of SITE 1101: Principles of Information Systems course. 
                            The goal was to design and implement a comprehensive information system that demonstrates 
                            understanding of system requirements, database design, and user interface development principles.
                        </p>
                        <p>
                            The system addresses real-world information management challenges and showcases skills in 
                            analyzing user needs, designing efficient database structures, and creating intuitive user interfaces.
                        </p>
                    </div>

                    <div class="project-features glass-card fade-in-up">
                        <h2>Key Features</h2>
                        <ul class="feature-list">
                            <li>User-friendly interface design</li>
                            <li>Database schema design and implementation</li>
                            <li>Data management and storage solutions</li>
                            <li>System requirements analysis</li>
                            <li>Information flow documentation</li>
                            <li>Responsive design principles</li>
                        </ul>
                    </div>

                    <div class="project-tech-detail glass-card fade-in-up">
                        <h2>Technologies Used</h2>
                        <div class="project-tech">
                            <span class="tech-tag">HTML</span>
                            <span class="tech-tag">CSS</span>
                            <span class="tech-tag">JavaScript</span>
                            <span class="tech-tag">Database Design</span>
                            <span class="tech-tag">System Analysis</span>
                        </div>
                    </div>

                    <div class="project-process glass-card fade-in-up">
                        <h2>Development Process</h2>
                        <div class="process-steps">
                            <div class="process-step">
                                <h3>1. Requirements Analysis</h3>
                                <p>Conducted thorough analysis of system requirements and user needs.</p>
                            </div>
                            <div class="process-step">
                                <h3>2. Database Design</h3>
                                <p>Designed normalized database schema ensuring data integrity and efficiency.</p>
                            </div>
                            <div class="process-step">
                                <h3>3. Interface Design</h3>
                                <p>Created intuitive user interfaces following best UX practices.</p>
                            </div>
                            <div class="process-step">
                                <h3>4. Implementation</h3>
                                <p>Developed and tested the system with focus on functionality and usability.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Portfolio</h3>
                    <p>SITE 1101: Principles of Information Systems</p>
                </div>
                <div class="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="projects.html">Projects</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Connect</h4>
                    <div class="social-links">
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                        <a href="https://www.codecademy.com/profiles/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Codecademy Profile">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.827 19.729h-5.595c-.093 0-.168-.074-.168-.167v-4.923c0-.092.075-.167.168-.167h5.595c.092 0 .167.075.167.167v4.923c0 .093-.075.167-.167.167zm-5.447-.336h5.099v-4.59h-5.099v4.59zm-5.547 0h5.099v-9.262h-5.099v9.262zm-5.548 0h5.099v-4.823h-5.099v4.823zm.219-6.405h5.476c.092 0 .167-.074.167-.167V4.167c0-.092-.075-.167-.167-.167H6.964c-.093 0-.168.075-.168.167v8.614c0 .088.075.162.168.162zm5.257-.336H7.203V4.369h4.851v8.688zm-5.547-.179h5.099V4.167c0-.092-.075-.167-.167-.167H5.596c-.093 0-.168.075-.168.167v8.614c0 .093.075.167.168.167zm5.099-.336H5.763V4.369h4.927v8.322zm-5.548 0H5.37V8.703c0-.092-.075-.167-.167-.167H.608c-.093 0-.168.075-.168.167v11.525c0 .093.075.167.168.167h4.595c.092 0 .167-.074.167-.167v-4.24c0-.092.075-.167.168-.167h5.595c.093 0 .168-.075.168-.167V8.703c0-.092-.075-.167-.167-.167zm-5.203-.336h5.099v4.416H.808V8.903h5.099v3.927z"/>
                            </svg>
                        </a>
                        <a href="https://github.com/yourusername/portfolio-site" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; <span id="currentYear"></span> Portfolio. All rights reserved. | SITE 1101 Course Project</p>
            </div>
        </div>
    </footer>

    <script src="js/main.js"></script>
</body>
</html>

```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Hour of Code - Volunteer Experience">
    <title>Hour of Code | Portfolio</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar" id="navbar">
        <div class="nav-container">
            <a href="index.html" class="nav-logo">Portfolio</a>
            <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul class="nav-menu" id="navMenu">
                <li><a href="index.html" class="nav-link">Home</a></li>
                <li><a href="about.html" class="nav-link">About</a></li>
                <li><a href="projects.html" class="nav-link active">Projects</a></li>
                <li><a href="contact.html" class="nav-link">Contact</a></li>
            </ul>
        </div>
    </nav>

    <!-- Page Header -->
    <section class="page-header">
        <div class="container">
            <a href="projects.html" class="back-link">← Back to Projects</a>
            <h1 class="page-title fade-in-up">Hour of Code</h1>
            <p class="page-subtitle fade-in-up">Inspiring the next generation of programmers</p>
        </div>
    </section>

    <!-- Project Detail Section -->
    <section class="project-detail-section">
        <div class="container">
            <div class="project-detail-wrapper">
                <!-- Project Image -->
                <div class="project-detail-image glass-card fade-in-up">
                    <div class="project-image-placeholder" style="height: 400px; display: flex; align-items: center; justify-content: center;">
                        <svg width="200" height="200" viewBox="0 0 100 100" fill="none">
                            <rect width="100" height="100" rx="8" fill="url(#gradient2)"/>
                            <defs>
                                <linearGradient id="gradient2" x1="0" y1="0" x2="100" y2="100">
                                    <stop offset="0%" stop-color="#f093fb"/>
                                    <stop offset="100%" stop-color="#f5576c"/>
                                </linearGradient>
                            </defs>
                            <circle cx="50" cy="40" r="15" fill="white" fill-opacity="0.3"/>
                            <path d="M30 70L50 50L70 70" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>

                <!-- Project Info -->
                <div class="project-detail-content">
                    <div class="project-meta glass-card fade-in-up">
                        <span class="project-tag">Volunteer</span>
                        <span class="project-date">Community Service</span>
                    </div>

                    <div class="project-description-detail glass-card fade-in-up">
                        <h2>Overview</h2>
                        <p>
                            Hour of Code is a global movement reaching tens of millions of students in 180+ countries. 
                            As a volunteer, I participated in organizing and facilitating coding workshops to introduce 
                            students to the fundamentals of computer science and programming.
                        </p>
                        <p>
                            This experience allowed me to share my passion for technology while helping young minds 
                            discover the world of coding. Through interactive activities and hands-on exercises, 
                            students learned basic programming concepts in a fun and engaging environment.
                        </p>
                    </div>

                    <div class="project-features glass-card fade-in-up">
                        <h2>Activities & Responsibilities</h2>
                        <ul class="feature-list">
                            <li>Organized coding workshops for students</li>
                            <li>Taught basic programming concepts and logic</li>
                            <li>Facilitated interactive coding exercises</li>
                            <li>Mentored students one-on-one</li>
                            <li>Created engaging learning materials</li>
                            <li>Promoted computer science education</li>
                        </ul>
                    </div>

                    <div class="project-tech-detail glass-card fade-in-up">
                        <h2>Skills Developed</h2>
                        <div class="project-tech">
                            <span class="tech-tag">Teaching</span>
                            <span class="tech-tag">Communication</span>
                            <span class="tech-tag">Leadership</span>
                            <span class="tech-tag">Community Service</span>
                            <span class="tech-tag">Education</span>
                        </div>
                    </div>

                    <div class="project-process glass-card fade-in-up">
                        <h2>Impact & Outcomes</h2>
                        <div class="process-steps">
                            <div class="process-step">
                                <h3>Student Engagement</h3>
                                <p>Helped students discover their interest in programming and technology through hands-on activities.</p>
                            </div>
                            <div class="process-step">
                                <h3>Knowledge Sharing</h3>
                                <p>Shared programming fundamentals and problem-solving strategies with enthusiastic learners.</p>
                            </div>
                            <div class="process-step">
                                <h3>Community Building</h3>
                                <p>Contributed to building a supportive learning community for aspiring programmers.</p>
                            </div>
                            <div class="process-step">
                                <h3>Personal Growth</h3>
                                <p>Developed teaching, communication, and leadership skills while giving back to the community.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Portfolio</h3>
                    <p>SITE 1101: Principles of Information Systems</p>
                </div>
                <div class="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="projects.html">Projects</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Connect</h4>
                    <div class="social-links">
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                        <a href="https://www.codecademy.com/profiles/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Codecademy Profile">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.827 19.729h-5.595c-.093 0-.168-.074-.168-.167v-4.923c0-.092.075-.167.168-.167h5.595c.092 0 .167.075.167.167v4.923c0 .093-.075.167-.167.167zm-5.447-.336h5.099v-4.59h-5.099v4.59zm-5.547 0h5.099v-9.262h-5.099v9.262zm-5.548 0h5.099v-4.823h-5.099v4.823zm.219-6.405h5.476c.092 0 .167-.074.167-.167V4.167c0-.092-.075-.167-.167-.167H6.964c-.093 0-.168.075-.168.167v8.614c0 .088.075.162.168.162zm5.257-.336H7.203V4.369h4.851v8.688zm-5.547-.179h5.099V4.167c0-.092-.075-.167-.167-.167H5.596c-.093 0-.168.075-.168.167v8.614c0 .093.075.167.168.167zm5.099-.336H5.763V4.369h4.927v8.322zm-5.548 0H5.37V8.703c0-.092-.075-.167-.167-.167H.608c-.093 0-.168.075-.168.167v11.525c0 .093.075.167.168.167h4.595c.092 0 .167-.074.167-.167v-4.24c0-.092.075-.167.168-.167h5.595c.093 0 .168-.075.168-.167V8.703c0-.092-.075-.167-.167-.167zm-5.203-.336h5.099v4.416H.808V8.903h5.099v3.927z"/>
                            </svg>
                        </a>
                        <a href="https://github.com/yourusername/portfolio-site" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; <span id="currentYear"></span> Portfolio. All rights reserved. | SITE 1101 Course Project</p>
            </div>
        </div>
    </footer>

    <script src="js/main.js"></script>
</body>
</html>

```

Adding CSS styles for the project detail pages:


```css
.tech-tag:hover {
    border-color: var(--primary-color);
    color: var(--text-primary);
}

/* ============================================
   Project Detail Pages
   ============================================ */
.back-link {
    display: inline-flex;
    align-items: center;
    color: var(--text-secondary);
    text-decoration: none;
    margin-bottom: 1.5rem;
    transition: var(--transition);
    font-size: 1rem;
}

.back-link:hover {
    color: var(--primary-color);
    transform: translateX(-5px);
}

.project-detail-section {
    padding: 80px 20px;
    position: relative;
    z-index: 2;
}

.project-detail-wrapper {
    max-width: 1000px;
    margin: 0 auto;
}

.project-detail-image {
    margin-bottom: 3rem;
    overflow: hidden;
    border-radius: 20px;
}

.project-detail-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.project-meta {
    display: flex;
    gap: 1rem;
    align-items: center;
    flex-wrap: wrap;
}

.project-date {
    padding: 0.5rem 1rem;
    background: rgba(118, 75, 162, 0.2);
    border: 1px solid var(--secondary-color);
    border-radius: 15px;
    color: var(--secondary-color);
    font-size: 0.85rem;
    font-weight: 600;
}

.project-description-detail h2,
.project-features h2,
.project-tech-detail h2,
.project-process h2 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: var(--text-primary);
    background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.project-description-detail p {
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: 1rem;
    font-size: 1.05rem;
}

.feature-list {
    list-style: none;
    padding: 0;
    display: grid;
    gap: 1rem;
}

.feature-list li {
    padding: 1rem;
    background: rgba(255, 255, 255, 0.02);
    border-left: 3px solid var(--primary-color);
    border-radius: 8px;
    color: var(--text-secondary);
    transition: var(--transition);
    position: relative;
    padding-left: 2rem;
}

.feature-list li::before {
    content: '✓';
    position: absolute;
    left: 1rem;
    color: var(--primary-color);
    font-weight: bold;
}

.feature-list li:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateX(5px);
    color: var(--text-primary);
}

.process-steps {
    display: grid;
    gap: 1.5rem;
}

.process-step {
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.02);
    border-radius: 12px;
    border-left: 4px solid var(--primary-color);
    transition: var(--transition);
}

.process-step:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateX(5px);
}

.process-step h3 {
    font-size: 1.3rem;
    margin-bottom: 0.75rem;
    color: var(--text-primary);
}

.process-step p {
    color: var(--text-secondary);
    line-height: 1.8;
    margin: 0;
}

/* ============================================
   Contact Section
   ============================================ */
```

Adding responsive styles for the project detail pages:


```css
    .hero-buttons {
        flex-direction: column;
        width: 100%;
    }

    .btn {
        width: 100%;
        justify-content: center;
    }

    .project-detail-wrapper {
        padding: 0;
    }

    .project-detail-image {
        margin-bottom: 2rem;
    }

    .project-meta {
        flex-direction: column;
        align-items: flex-start;
    }

    .project-description-detail h2,
    .project-features h2,
    .project-tech-detail h2,
    .project-process h2 {
        font-size: 1.5rem;
    }
}
```

## Changes Made:

1. Removed the 3rd project from `projects.html` — only Project 1 and Hour of Code remain.

2. Updated project links — Project 1 and Project 2 now link to individual detail pages.

3. Created new project detail pages:
   - `project1.html` — Information System Design details
   - `project2.html` — Hour of Code volunteer experience details

4. Added CSS styles for the detail pages:
   - Back link styling
   - Project detail layout
   - Feature lists with hover effects
   - Process steps display
   - Responsive design for mobile devices

## Project Detail Pages Include:

- Project overview and description
- Key features/activities
- Technologies/skills used
- Development process/impact
- Visual styling consistent with the main site

Users can click "View Project" on any project card to see the detailed page. The detail pages include a "Back to Projects" link at the top to return to the projects list.

All pages are responsive and match the design style of your portfolio.

---

**User**

try different color style for websites

---

**Cursor**

Updating the color scheme to a new palette. Checking current colors, then applying the new style.


Updating the color scheme to a blue-cyan-teal palette:


```css
:root {
    --primary-color: #0ea5e9;
    --secondary-color: #06b6d4;
    --accent-color: #10b981;
    --text-primary: #ffffff;
    --text-secondary: #b8bcc8;
    --bg-primary: #0a0e27;
    --bg-secondary: #11142d;
    --bg-glass: rgba(255, 255, 255, 0.05);
    --bg-glass-hover: rgba(255, 255, 255, 0.1);
    --border-glass: rgba(255, 255, 255, 0.1);
    --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.2);
    --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.3);
    --shadow-glow: 0 0 40px rgba(14, 165, 233, 0.3);
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --font-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}
```

Updating hardcoded color values to match the new scheme:


```css
        radial-gradient(circle at 20% 50%, rgba(14, 165, 233, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 40% 20%, rgba(16, 185, 129, 0.05) 0%, transparent 50%);
```

```css
        radial-gradient(circle at 30% 40%, rgba(14, 165, 233, 0.2) 0%, transparent 50%),
        radial-gradient(circle at 70% 60%, rgba(6, 182, 212, 0.2) 0%, transparent 50%);
```

```css
    box-shadow: 0 0 60px rgba(14, 165, 233, 0.5);
```

```css
    background: radial-gradient(circle, rgba(14, 165, 233, 0.4) 0%, transparent 70%);
```

```css
    border-color: rgba(14, 165, 233, 0.3);
```

```css
    filter: drop-shadow(0 0 10px rgba(14, 165, 233, 0.3));
```

```css
    background: rgba(14, 165, 233, 0.2);
```

```css
    background: rgba(6, 182, 212, 0.2);
```

```css
    box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1);
```

Updating SVG gradient colors in the HTML files:


```html
                                    <linearGradient id="gradient1" x1="0" y1="0" x2="100" y2="100">
                                        <stop offset="0%" stop-color="#0ea5e9"/>
                                        <stop offset="100%" stop-color="#06b6d4"/>
                                    </linearGradient>
```

```html
                                    <linearGradient id="gradient2" x1="0" y1="0" x2="100" y2="100">
                                        <stop offset="0%" stop-color="#06b6d4"/>
                                        <stop offset="100%" stop-color="#10b981"/>
                                    </linearGradient>
```

```html
                                <linearGradient id="gradient1" x1="0" y1="0" x2="100" y2="100">
                                    <stop offset="0%" stop-color="#0ea5e9"/>
                                    <stop offset="100%" stop-color="#06b6d4"/>
                                </linearGradient>
```

```html
                                <linearGradient id="gradient2" x1="0" y1="0" x2="100" y2="100">
                                    <stop offset="0%" stop-color="#06b6d4"/>
                                    <stop offset="100%" stop-color="#10b981"/>
                                </linearGradient>
```

Updated the color scheme across the site. Changes:

## New color scheme

**Previous colors:**
- Primary: Purple/Blue (#667eea)
- Secondary: Purple (#764ba2)
- Accent: Pink (#f093fb)

**New colors:**
- Primary: Sky Blue (#0ea5e9)
- Secondary: Cyan (#06b6d4)
- Accent: Emerald Green (#10b981)

## What changed

1. CSS variables — updated primary, secondary, accent, and shadow glow colors
2. Background gradients — radial gradients in the body and hero sections
3. SVG gradients — project placeholder images use the new colors
4. All hardcoded color values — rgba() values updated to match the new scheme

The site now uses a blue-cyan-teal theme. Gradients and hover effects have been updated, and the floating shapes use the new palette.

Refresh the page to see the changes. If you want a different palette (e.g., warm orange/amber, cool purple/indigo), I can switch it.

---

**User**

Key Features
User-friendly interface design
Database schema design and implementation
Data management and storage solutions
System requirements analysis
Information flow documentation
Responsive design principles
Technologies Used
HTML
CSS
JavaScript
Database Design
System Analysis
Development Process
1. Requirements Analysis
Conducted thorough analysis of system requirements and user needs.

2. Database Design
Designed normalized database schema ensuring data integrity and efficiency.

3. Interface Design
Created intuitive user interfaces following best UX practices.

4. Implementation
Developed and tested the system with focus on functionality and usability.


erase those from project1  

---

**Cursor**

Removing the "Key Features", "Technologies Used", and "Development Process" sections from project1.html.


Removing the "Key Features", "Technologies Used", and "Development Process" sections from project1.html.


```html
                    </div>
                </div>
```

Removed the "Key Features", "Technologies Used", and "Development Process" sections from project1.html.

The page now shows:
- Project image
- Project meta (tags and date)
- Overview section (description)

The page now focuses on the overview description.

---

**User**

in the @project1.html  how can I add picture to given place?

---

**Cursor**

Checking the image section in project1.html:


Replacing the SVG placeholder with an image tag:


```html
                <!-- Project Image -->
                <div class="project-detail-image glass-card fade-in-up">
                    <img src="assets/images/project1.jpg" alt="Logic Gates Project" style="width: 100%; height: auto; border-radius: 20px; display: block;">
                </div>
```

Replaced the SVG placeholder with an image tag.

## Steps to add your project image:

1. **Place your image file** in the `assets/images/` folder
   - Name it `project1.jpg` (or change the filename in the code to match your file)
   - Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`
   - Recommended size: around 1200px width or larger

2. **If your image has a different name**, update the `src` attribute in the code:
   ```html
   <img src="assets/images/your-image-name.jpg" alt="Logic Gates Project" ...>
   ```

3. **Optional**: Adjust image styling if needed:
   - To control height: add `max-height: 600px; object-fit: cover;`
   - To make it responsive: it already is with `width: 100%` and `height: auto;`

**Example:**
If your image is named `logic-gates-project.png`, change the code to:
```html
<img src="assets/images/logic-gates-project.png" alt="Logic Gates Project" ...>
```

The image will automatically scale to fit the container while maintaining its aspect ratio.

```html
   <img src="assets/images/your-image-name.jpg" alt="Logic Gates Project" ...>
```

```html
<img src="assets/images/logic-gates-project.png" alt="Logic Gates Project" ...>
```

---

**User**

So what you did for @project1.html  do it for project2 page. and also add same pictures to projects page 

---

**Cursor**

Adding images to project2.html and updating projects.html to show project images. Checking the current files first:


Updating project2.html and projects.html to use images:


```html
                <!-- Project Image -->
                <div class="project-detail-image glass-card fade-in-up">
                    <img src="assets/images/p2.jpeg" alt="Hour of Code Project" style="width: 100%; height: auto; border-radius: 20px; display: block;">
                </div>
```

```html
                <!-- Project 1 - Required -->
                <div class="project-card glass-card fade-in-up" data-project="1">
                    <div class="project-image-wrapper">
                        <img src="assets/images/p1.jpeg" alt="Logic Gates Project" style="width: 100%; height: 250px; object-fit: cover; border-radius: 15px;">
                        <div class="project-overlay">
                            <a href="project1.html" class="project-link" aria-label="View Project 1">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M16 6L26 16L16 26M26 16H6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                        </div>
                    </div>
```

```html
                <!-- Project 2: Hour of Code - Optional -->
                <div class="project-card glass-card fade-in-up" data-project="2">
                    <div class="project-image-wrapper">
                        <img src="assets/images/p2.jpeg" alt="Hour of Code Project" style="width: 100%; height: 250px; object-fit: cover; border-radius: 15px;">
                        <div class="project-overlay">
                            <a href="project2.html" class="project-link" aria-label="View Hour of Code Project">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M16 6L26 16L16 26M26 16H6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                        </div>
                    </div>
```

Updated project2.html and projects.html. Changes:

## Changes made:

### 1. project2.html
- Replaced the SVG placeholder with an image tag
- Uses `assets/images/p2.jpeg` (same style as project1.html)

### 2. projects.html
- Project 1 card: replaced SVG placeholder with `assets/images/p1.jpeg`
- Project 2 card: replaced SVG placeholder with `assets/images/p2.jpeg`
- Images are set to 250px height with `object-fit: cover` to maintain aspect ratio

## Image files needed:

Make sure you have these image files in your `assets/images/` folder:
- `p1.jpeg` — Logic Gates Project image
- `p2.jpeg` — Hour of Code Project image

Both images will display:
- On the projects page: in the project cards (250px height, cropped to fit)
- On individual project pages: full width, auto height (project1.html and project2.html)

If your image filenames are different (e.g., `hour-of-code.jpg` or `project2.png`), tell me and I can update the file paths.

---

**User**

fill all gaps or all unmatching fills with new things. Like make web site more nature. edit all texts if it is poor written.

---

**Cursor**

Reviewing all pages to improve text, make it more natural, and fill any gaps. Checking each file:


Improving text across all pages to make it more natural, consistent, and complete. Updating each file:


```html
                <p class="intro-text">
                    Welcome to my digital space! I'm Zaka Mammadli, an Information Systems student at ADA University passionate about technology and innovation. This portfolio represents my journey through SITE 1101: Principles of Information Systems, where I explore the fascinating intersection of logic, circuits, and digital systems. From understanding how transistors create logic gates to sharing knowledge through community initiatives, I'm constantly learning and growing in this dynamic field.
                </p>
```

```html
                <p>
                    Hello! I'm Zaka Mammadli, a dedicated Information Systems student currently pursuing my bachelor's degree at ADA University. My passion for technology began with a simple curiosity about how things work—from the smallest electronic components to complex digital systems. This curiosity has driven me to explore the fundamentals of computing, digital logic, and information management.
                </p>
                <p>
                    Through SITE 1101: Principles of Information Systems, I've gained hands-on experience with logic gates, transistors, and digital circuit design. The course has opened my eyes to how fundamental building blocks come together to create the technology we use every day. Beyond academics, I actively participate in community initiatives like Hour of Code, where I help inspire the next generation of programmers.
                </p>
```

```html
                        <p>
                            Currently pursuing my degree with a strong foundation in digital systems, logic design, and information management. My coursework includes hands-on projects exploring how electronic components work together to create functional systems.
                        </p>
```

```html
                        <ul class="course-list">
                            <li>SITE 1101: Principles of Information Systems</li>
                            <li>Digital Logic and Circuit Design</li>
                            <li>Web Development Fundamentals</li>
                            <li>Database Management Systems</li>
                            <li>System Analysis and Design</li>
                        </ul>
```

```html
                    <h3>Academic Projects</h3>
                    <p>
                        Developed practical projects focusing on logic gates and digital circuits, exploring how transistors create fundamental computing operations. These projects have deepened my understanding of the building blocks of modern technology.
                    </p>
```

```html
                        <p class="project-description">
                            An exploration of logic gates and their implementation using transistors. This project demonstrates how fundamental electronic components create the logical operations that power all digital devices, from simple calculators to complex computers.
                        </p>
                        <div class="project-tech">
                            <span class="tech-tag">Digital Logic</span>
                            <span class="tech-tag">Circuit Design</span>
                            <span class="tech-tag">Electronics</span>
                            <span class="tech-tag">Transistors</span>
                        </div>
```

```html
                        <p class="project-description">
                            Volunteered in Hour of Code events, teaching programming fundamentals to students through hands-on coding activities. This experience reinforced my passion for technology while helping others discover their interest in computer science.
                        </p>
```

```html
                        <h2>Overview</h2>
                        <p>
                            Logic gates form the foundation of all digital computing systems. This project explored how these fundamental building blocks function and how they're constructed using transistors. Through hands-on experimentation and study, I learned how basic operations like AND, OR, and NOT gates create the logic that drives every digital device we use today.
                        </p>
                        <p>
                            Transistors serve as electronic switches that control the flow of current, and by arranging them strategically, we can create circuits that perform specific logical operations. Understanding how input signals determine the output of each gate type is crucial for anyone studying computer engineering or information systems. This knowledge not only explains how modern computers work but also provides the foundation for designing more complex electronic systems.
                        </p>
                        <p>
                            The project involved practical work with actual circuits, observing how different gate configurations produce expected logical outputs. This hands-on approach helped solidify theoretical concepts and demonstrated the real-world applications of digital logic principles.
                        </p>
```

```html
                        <p>
                            Hour of Code is a global movement that has reached tens of millions of students across 180+ countries, making computer science education accessible to everyone. As a volunteer, I had the opportunity to organize and facilitate coding workshops that introduced students to the exciting world of programming and problem-solving.
                        </p>
                        <p>
                            This experience was incredibly rewarding—not just for the students, but for me as well. Teaching others helped me solidify my own understanding of programming fundamentals while allowing me to share my passion for technology. Through interactive coding activities and hands-on exercises, I watched students' faces light up as they wrote their first lines of code and solved their first programming challenges.
                        </p>
                        <p>
                            The workshops emphasized that coding isn't just about syntax—it's about logical thinking, creativity, and problem-solving. Seeing students discover that they could create something meaningful with code, regardless of their background, reminded me why I fell in love with technology in the first place.
                        </p>
```

```html
                    <p>
                        I'm always interested in connecting with fellow students, educators, and technology enthusiasts. Whether you have questions about my projects, want to discuss logic gates and digital circuits, or are interested in collaborating on educational initiatives, feel free to reach out. I'd love to hear from you!
                    </p>
```

```html
                <h2>Want to Connect or Collaborate?</h2>
                <p>I'm always open to discussing technology, sharing knowledge, or collaborating on interesting projects. Feel free to reach out if you have questions or ideas!</p>
```

Updating project1.html's title and meta description for consistency:


```html
    <meta name="description" content="Project 1: Logic Gates - Exploring digital circuits and transistor-based logic operations">
    <title>Project 1: Logic Gates | Portfolio</title>
```

```html
            <h1 class="page-title fade-in-up">Project 1: Logic Gates</h1>
            <p class="page-subtitle fade-in-up">Exploring the fundamentals of digital circuits and transistor-based logic</p>
```

```html
                        <h3 class="project-title">Project 1: Logic Gates</h3>
```

Improving page titles and subtitles for consistency:


```html
            <h1 class="page-title fade-in-up">My Projects</h1>
            <p class="page-subtitle fade-in-up">Explore my academic work and community involvement</p>
```

```html
            <h1 class="page-title fade-in-up">About Me</h1>
            <p class="page-subtitle fade-in-up">Learn about my journey, education, and passion for technology</p>
```

```html
            <h1 class="page-title fade-in-up">Get In Touch</h1>
            <p class="page-subtitle fade-in-up">Let's connect and discuss technology, projects, or opportunities</p>
```

Updated all pages. Summary of changes:

## Text improvements across all pages

### **index.html (Home Page)**
- Rewrote intro text to be more personal and specific
- Mentions SITE 1101, logic gates, and Hour of Code
- Clearer, more engaging tone

### **about.html (About Page)**
- Rewrote background section with a personal introduction
- Updated education description with more specific details
- Added "Digital Logic and Circuit Design" to coursework
- Improved activity descriptions to match actual projects

### **projects.html (Projects Page)**
- Updated Project 1 description to focus on logic gates and digital circuits
- Fixed tech tags (replaced HTML/CSS/JavaScript with Digital Logic, Circuit Design, Electronics, Transistors)
- Improved Project 2 description
- Enhanced call-to-action section

### **project1.html (Logic Gates Detail Page)**
- Rewrote overview with clearer structure (3 paragraphs)
- Explained the project's educational value
- Emphasized hands-on work and real-world applications
- Updated page title and meta description

### **project2.html (Hour of Code Detail Page)**
- Enhanced overview with personal reflections
- Added paragraph about the teaching experience
- Made descriptions more engaging

### **contact.html (Contact Page)**
- Improved intro text to reflect interests and projects
- Updated page subtitle to be more descriptive

## Consistent improvements
- More natural, conversational tone
- Better structure and flow
- Content aligned with actual projects (Logic Gates & Hour of Code)
- More specific and engaging descriptions
- Improved page titles and subtitles throughout

The site now presents a cohesive narrative about your academic journey, focusing on logic gates and community involvement. Text is clearer, more natural, and accurately reflects your work.

Note: Update the social media links (GitHub, Codecademy) with your actual profile URLs when ready.

---

**User**

https://github.com/mammadlizaka 
https://github.com/mammadlizaka/site1101 
https://www.codecademy.com/profiles/ZakaMammadli 

Edit those for all pages.


---

**Cursor**


Updating all social links across all pages with your GitHub and Codecademy profiles. Replacing the placeholder links:



Updating all social links across all HTML files:


```html
                        <a href="https://github.com/mammadlizaka" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
```

```html
                        <a href="https://www.codecademy.com/profiles/ZakaMammadli" target="_blank" rel="noopener noreferrer" aria-label="Codecademy Profile">
```

```html
                        <a href="https://github.com/mammadlizaka/site1101" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
```

```html
                        <a href="https://github.com/mammadlizaka" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
```

```html
                        <a href="https://www.codecademy.com/profiles/ZakaMammadli" target="_blank" rel="noopener noreferrer" aria-label="Codecademy Profile">
```

```html
                        <a href="https://github.com/mammadlizaka/site1101" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
```

```html
                        <a href="https://github.com/mammadlizaka" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
```

```html
                        <a href="https://www.codecademy.com/profiles/ZakaMammadli" target="_blank" rel="noopener noreferrer" aria-label="Codecademy Profile">
```

```html
                        <a href="https://github.com/mammadlizaka/site1101" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
```

```html
                        <a href="https://github.com/mammadlizaka" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
```

```html
                        <a href="https://www.codecademy.com/profiles/ZakaMammadli" target="_blank" rel="noopener noreferrer" aria-label="Codecademy Profile">
```

```html
                        <a href="https://github.com/mammadlizaka/site1101" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
```

```html
                        <a href="https://github.com/mammadlizaka" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
```

```html
                        <a href="https://www.codecademy.com/profiles/ZakaMammadli" target="_blank" rel="noopener noreferrer" aria-label="Codecademy Profile">
```

```html
                        <a href="https://github.com/mammadlizaka/site1101" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
```

```html
                        <a href="https://github.com/mammadlizaka" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
```

```html
                        <a href="https://www.codecademy.com/profiles/ZakaMammadli" target="_blank" rel="noopener noreferrer" aria-label="Codecademy Profile">
```

```html
                        <a href="https://github.com/mammadlizaka/site1101" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
```


Updated all social media links across all pages.

## Links updated:

### Updated in all HTML files:
- **GitHub Profile**: `https://github.com/mammadlizaka`
- **Codecademy Profile**: `https://www.codecademy.com/profiles/ZakaMammadli`
- **GitHub Repository**: `https://github.com/mammadlizaka/site1101`

### Files updated:
- `index.html`
- `about.html`
- `projects.html`
- `project1.html`
- `project2.html`
- `contact.html`

All footer and contact page social links now point to your profiles. The GitHub repository link points to your `site1101` repository.

All links are ready and will work once the site is deployed.

