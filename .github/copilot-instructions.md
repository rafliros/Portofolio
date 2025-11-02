# AI Agent Instructions for Portfolio Project

## Project Overview
This is a React-based personal portfolio website project with the following key characteristics:
- Single page application built with Create React App
- Component-based architecture with clear separation of concerns
- CSS-based styling with responsive design

## Project Structure
```
src/
├── assets/         # Static assets like images
├── components/     # React components
│   ├── aboutme.jsx    # About section component
│   ├── jumbotron.jsx  # Hero section component
│   ├── lists.jsx      # List components
│   ├── navbar.jsx     # Navigation component
│   ├── porto.jsx      # Portfolio section
│   └── worked.jsx     # Work experience section
└── stylesheets/   # CSS styling
    └── styles.css     # Global styles
```

## Key Conventions

### Component Structure
- Components are class-based React components
- Each section (About, Portfolio, Work) has its own component
- Components use CSS classes for styling
- Images are imported from assets directory

### Styling Patterns
- Global styles in `styles.css`
- Mobile-first responsive design using media queries
- Color scheme uses:
  - Background: #112240
  - Accent color: #64ffda
- Common styling patterns:
  - Section padding: `0px 300px` (desktop)
  - Responsive breakpoints at 768px and 1200px
  - Hover animations for interactive elements

### Best Practices
1. Keep components focused on single responsibility
2. Use semantic HTML elements for better accessibility
3. Maintain consistent padding and spacing across sections
4. Include responsive design considerations
5. Optimize images before adding to assets

## Common Tasks

### Adding a New Section
1. Create new component in `src/components/`
2. Import required assets from `src/assets/`
3. Add corresponding styles in `styles.css`
4. Import and add component to main App.js

### Styling Updates
- Add new styles to `styles.css`
- Follow existing patterns for responsive design
- Use existing color variables and spacing patterns
- Test across different screen sizes

## Development Workflow
1. Run `npm start` for development server
2. Make component changes in `src/components/`
3. Update styles in `src/stylesheets/styles.css`
4. Build production version with `npm run build`

## Key Files to Reference
- `src/components/aboutme.jsx` - Example of component structure
- `src/stylesheets/styles.css` - Global styling patterns
- `src/components/porto.jsx` - Portfolio grid layout example