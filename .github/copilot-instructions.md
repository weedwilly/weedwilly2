# BioPharmLab Website

BioPharmLab is a modern static HTML/CSS/JavaScript website showcasing pharmaceutical innovation and biochemical engineering research. It features a glassmorphism design with neon effects, dark mode toggle, animated interactions, and a contact form.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Development Setup
- NO build process required - this is a pure static website
- NO dependencies to install - no package.json, npm, or node_modules
- Start local development server:
  - `cd /home/runner/work/weedwilly2/weedwilly2`
  - `python3 -m http.server 8000 --directory .`
  - Access at: `http://localhost:8000`
- Server starts instantly (< 2 seconds)

### Manual Testing Requirements
ALWAYS test the following scenarios after making changes:

1. **Website Loading Test:**
   - Start HTTP server: `python3 -m http.server 8000 --directory .`
   - Verify site loads at `http://localhost:8000`
   - Confirm all CSS animations and neon effects render correctly
   - Check browser console for JavaScript errors (should be none)

2. **Dark Mode Toggle Test:**
   - Click the 🌙 button in the navigation
   - Verify the button becomes active/highlighted
   - Confirm dark mode styles are applied correctly
   - Test toggling back and forth multiple times

3. **Navigation Test:**
   - Click each navigation link (Home, Research, Publications, About, Contact)
   - Verify URL changes to corresponding anchor (e.g., `#research`)
   - Confirm smooth scrolling to each section
   - Test the "Explore Our Research" button navigates to research section

4. **Form Functionality Test:**
   - Fill in the contact form fields:
     - Name: "Test User"
     - Email: "test@example.com" 
     - Message: "This is a test message to verify form functionality."
   - Verify all form fields accept input correctly
   - Confirm form styling (glassmorphism effects) displays properly
   - Note: Form submission is visual only (no backend processing)

5. **Responsive Design Test:**
   - Test on different viewport sizes if possible
   - Verify mobile-friendly navigation and layout

### Deployment
- Automatically deployed via GitHub Pages
- Triggered by pushes to main branch
- `.nojekyll` file ensures proper static file serving
- NO manual deployment steps required
- Changes are live within 1-2 minutes of push to main

## File Structure

### Core Files
```
/
├── index.html          # Main HTML file with complete website structure
├── style.css           # CSS with glassmorphism design, neon effects, animations
├── script.js           # JavaScript for dark mode toggle functionality
├── README.md           # Basic project description
├── LICENSE             # MIT license
└── .nojekyll          # GitHub Pages configuration file
```

### Key Sections in index.html
- `<header>` - Navigation with dark mode toggle
- `#home` - Welcome section with animated button
- `#research` - Research areas with hover effects
- `#publications` - Latest publications list
- `#about` - Team information 
- `#contact` - Contact form with glassmorphism styling

### CSS Features (style.css)
- CSS variables for neon colors: `--neon-blue`, `--neon-purple`, `--neon-pink`, `--neon-green`
- Glassmorphism effects with `backdrop-filter: blur()`
- Animated gradients and rainbow text effects
- Hover animations and transitions
- Dark mode styling via `.dark` class

### JavaScript Functionality (script.js)
- Dark mode toggle: Adds/removes `dark` class from `<body>`
- Simple event listener for button click
- Minimal and focused code (9 lines total)

## Common Tasks

### Making Changes
1. Edit files directly (no compilation needed)
2. Test locally with HTTP server
3. Run through ALL manual testing scenarios
4. Commit and push to trigger deployment

### Troubleshooting
- **Website not loading:** Check if HTTP server is running on port 8000
- **Styles not applying:** Verify `style.css` path in `index.html`
- **Dark mode not working:** Check JavaScript console for errors in `script.js`
- **Navigation broken:** Verify anchor links match section IDs in HTML
- **Form not accepting input:** Check HTML form field attributes

### Performance Notes
- Website loads instantly (static files only)
- No external dependencies or CDN requirements
- All assets (CSS/JS) are inline or local files
- Optimized for GitHub Pages hosting

## Validation Commands
```bash
# Start development server
python3 -m http.server 8000 --directory .

# Check file structure
ls -la

# Verify HTML structure
head -20 index.html

# Check CSS variables
grep -n "neon-" style.css

# Verify JavaScript functionality
cat script.js
```

## Important Notes
- NO build tools, package managers, or dependencies
- NO testing framework (manual testing only)
- NO linting tools (validate manually)
- Changes are immediately visible after server restart
- GitHub Pages deployment is automatic on push to main
- Website works entirely with client-side technologies

Always prioritize manual testing over automated tools for this static website project.