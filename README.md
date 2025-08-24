Screencast Dile Link :
https://drive.google.com/file/d/1NS--A8Uunj5GU5D-gVZe6p1ka1uSDxSE/view?usp=drive_link


# Claire & George - Accessible Switzerland Travel

A comprehensive web application for accessible tourism services in Switzerland, designed to help travelers with disabilities find suitable accommodations, tours, and support services.

## Features

- **Accessibility Assessment**: Interactive assessment to determine user accessibility needs
- **Disability-Specific UI**: Customized user interfaces for different disability types:
  - Wheelchair accessibility
  - Low vision support
  - Cognitive impairment assistance
  - Anxiety and travel fear support
  - Dyslexia-friendly design
  - Hearing impairment support
- **Hotel Management**: Curated selection of accessible hotels across Switzerland
- **Tour Services**: Accessible tour packages with specialized support
- **Care Services**: Additional support services for travelers with disabilities
- **Content Management System**: Admin interface for managing content and services

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Build Tool**: Vite
- **Routing**: React Router
- **State Management**: React Context API

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bern_hackathon_ai_frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   └── cms/            # CMS-specific components
├── contexts/           # React contexts (PersonaContext)
├── pages/              # Page components
│   └── public/         # Public-facing pages
├── services/           # API services
├── assets/             # Static assets
└── lib/                # Utility functions
```

## Accessibility Features

### Disability-Specific UI Adaptations

1. **Wheelchair Users**: Blue color scheme, accessibility-focused content
2. **Low Vision**: High contrast design, larger text, audio descriptions
3. **Cognitive Impairment**: Simple layouts, clear navigation, step-by-step processes
4. **Anxiety Support**: Calming blue design, flexible options, clear information
5. **Dyslexia**: Cream background, Arial font, lowercase text, audio support
6. **Hearing Impairment**: Visual emphasis, written communication focus

### Technical Accessibility

- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- High contrast ratios
- Responsive design for all devices

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Conventional commits for version control

## Deployment

The application can be deployed to any static hosting service:

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting service

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please contact:
- Email: contact@claireundgeorge.ch
- Phone: +41 31 301 55 65

## About Claire & George

Claire & George is dedicated to making Switzerland accessible to all travelers, regardless of their abilities. We provide comprehensive accessible tourism services including accommodation, tours, and support services tailored to individual needs.
