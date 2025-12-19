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
