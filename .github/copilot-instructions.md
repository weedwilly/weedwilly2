# BioPharmLab Static Website

BioPharmLab is a modern, responsive static website built with pure HTML5, CSS3, and vanilla JavaScript. The website features advanced glassmorphism design, neon effects, smooth animations, and dark mode functionality.

**ALWAYS reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Working Effectively

### Quick Setup and Development
- **NO BUILD PROCESS REQUIRED** - This is a pure static website with no compilation, bundling, or dependency management
- Serve locally for development:
  ```bash
  cd /path/to/repository
  python3 -m http.server 8000
  ```
  - Access at: http://localhost:8000/
  - **Timing**: Server starts instantly (< 1 second)
- Alternative local servers:
  ```bash
  # Using Node.js (if available, requires package installation)
  npx serve . --listen 8080
  # Note: First run installs serve package automatically
  
  # Using PHP (if available) 
  php -S localhost:8081
  ```

### File Structure and Key Components
```
Repository root:
├── .github/                  # GitHub configuration
│   └── copilot-instructions.md
├── .nojekyll                # GitHub Pages configuration (empty file)
├── LICENSE                  # MIT License
├── README.md               # Basic project description
├── index.html              # Main website (68 lines)
├── script.js              # Dark mode toggle (9 lines)
└── style.css              # Complete styling (559 lines)
```

### Core Website Features
- **Single Page Application**: All content in index.html with anchor navigation
- **Sections**: Home, Research, Publications, About, Contact
- **Interactive Elements**: Dark mode toggle, navigation menu, contact form
- **Styling**: Modern glassmorphism with neon effects, responsive design
- **Animations**: CSS keyframe animations, hover effects, background morphing

## Validation and Testing

### ALWAYS Test These Scenarios After Making Changes:
1. **Website Loading**:
   ```bash
   python3 -m http.server 8000 &
   curl -I http://localhost:8000/
   # Should return: HTTP/1.0 200 OK
   kill %1  # Stop server when done
   ```

2. **Dark Mode Functionality**:
   - Load website in browser
   - Click the 🌙 button in navigation
   - Verify the `dark` class is toggled on body element
   - Verify visual changes occur

3. **Navigation Testing**:
   - Click each navigation link (Home, Research, Publications, About, Contact)
   - Verify URL changes to corresponding anchor (#home, #research, etc.)
   - Verify smooth scrolling to sections

4. **Form Functionality**:
   - Fill out contact form fields: name, email, message
   - Verify input validation (required fields)
   - Note: Form submission is client-side only (no backend)

5. **Responsive Design**:
   - Test on different viewport sizes
   - Verify mobile layout changes at 768px breakpoint
   - Check that navigation becomes vertical on mobile

### Manual Testing Checklist
- [ ] Server starts successfully on localhost:8000
- [ ] Website loads without errors in browser
- [ ] Dark mode toggle works correctly
- [ ] All navigation links scroll to correct sections
- [ ] Contact form accepts input in all fields
- [ ] Responsive design adapts to mobile viewport
- [ ] CSS animations and hover effects work
- [ ] No console errors in browser developer tools

## Development Guidelines

### Making Changes
- **HTML Changes**: Edit index.html directly
- **Styling Changes**: Edit style.css (contains all styling including responsive design)
- **JavaScript Changes**: Edit script.js (currently only dark mode toggle)

### CSS Architecture
- **CSS Variables**: Defined at root level for colors (--neon-blue, --neon-purple, etc.)
- **Sections**: Each major section has dedicated CSS rules
- **Animations**: Multiple @keyframes for background morphing, text effects, hover states
- **Responsive**: Mobile-first approach with @media queries

### Color Scheme
```css
--neon-blue: #00d4ff
--neon-purple: #9d4edd  
--neon-pink: #ff006e
--neon-green: #39ff14
--glass-bg: rgba(255, 255, 255, 0.1)
--glass-border: rgba(255, 255, 255, 0.2)
```

### Common File Contents Reference

#### package.json: NOT PRESENT
This project has no package.json as it requires no dependencies or build process.

#### .gitignore: NOT PRESENT  
No build artifacts or dependencies to ignore.

#### Repository Root Contents:
```bash
$ ls -la
total 44
drwxr-xr-x 3 runner docker  4096 .
drwxr-xr-x 3 runner docker  4096 ..
drwxr-xr-x 7 runner docker  4096 .git
-rw-r--r-- 1 runner docker     1 .nojekyll
-rw-r--r-- 1 runner docker  1066 LICENSE
-rw-r--r-- 1 runner docker    22 README.md
-rw-r--r-- 1 runner docker  2142 index.html
-rw-r--r-- 1 runner docker   278 script.js
-rw-r--r-- 1 runner docker 12169 style.css
```

## Deployment

### GitHub Pages
- **Automatic Deployment**: Configured for GitHub Pages (presence of .nojekyll file)
- **Branch**: Deploys from main branch
- **URL**: https://weedwilly.github.io/weedwilly2/ (when Pages is enabled)
- **Configuration**: No special setup required - just commit and push

### Manual Deployment
- Upload all files to any static web hosting service
- Ensure index.html is served as the default document
- No server-side processing required

## Troubleshooting

### Common Issues
1. **"Server not responding"**: 
   - Ensure port 8000 is available: `lsof -i :8000`
   - Try alternative port: `python3 -m http.server 8080`

2. **"Dark mode not working"**:
   - Check browser console for JavaScript errors
   - Verify script.js is loaded correctly
   - Confirm button element has id="darkToggle"

3. **"Styling looks broken"**:
   - Verify style.css is accessible at /style.css
   - Check browser developer tools for CSS loading errors
   - Ensure no syntax errors in CSS

### Browser Compatibility
- **Modern Browsers**: Chrome, Firefox, Safari, Edge (all recent versions)
- **CSS Features**: Uses modern CSS features (CSS Grid, Flexbox, CSS Variables)
- **JavaScript**: ES6+ features (const, arrow functions)

## Performance Notes
- **Load Time**: < 1 second (all assets total ~16KB)
- **No Dependencies**: Zero external libraries or frameworks
- **Optimization**: CSS uses efficient selectors and minimal repaints

## Key Sections to Check When Making Changes
- **After editing index.html**: Test all navigation links and form functionality
- **After editing style.css**: Test responsive design and dark mode appearance  
- **After editing script.js**: Test dark mode toggle functionality
- **Before committing**: Run full validation checklist above

## File Size Reference
```bash
$ wc -l *.css *.js *.html
559 style.css
  9 script.js  
 68 index.html
636 total
```

This website is designed for maximum simplicity and effectiveness - no build tools, no dependencies, just clean, modern web technologies working together.