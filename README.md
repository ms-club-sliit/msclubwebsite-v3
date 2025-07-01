# MS Club Website v3 - Development Guide

Welcome to the MS Club Website v3 development repository! This is a Next.js application built for the MS Club.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- Git

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd msclubwebsite-v3
```

2. Install dependencies:
```bash
npm install

```

3. Run the development server:
```bash
npm run dev

```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```
msclubwebsite-v3/
├── src/
│   ├── api/           # API calls using Axios
│   ├── components/    # Reusable React components
│   ├── data/          # Static JSON data files
│   ├── app/           # Next.js App Router pages
│   └── ...
├── public/            # Static assets
├── package.json
└── README.md
```

### Key Directories

#### `src/api/`
Contains all API-related functions using Axios for HTTP requests.
- Create separate files for different API endpoints
- Use consistent naming conventions
- Handle errors appropriately

Example structure:
```
src/api/
├── auth.js
├── events.js
├── members.js
└── index.js
```

#### `src/components/`
Houses all reusable React components.
- Use PascalCase for component names
- Create a separate folder for each component if it has multiple files
- Include PropTypes or TypeScript for type checking

Example structure:
```
src/components/
├── Header/
│   ├── Header.js
│   └── Header.module.css
├── Footer.js
├── EventCard.js
└── index.js
```

#### `src/data/`
Contains static JSON files used for frontend data.
- Use descriptive filenames
- Maintain consistent JSON structure
- Validate JSON syntax

Example structure:
```
src/data/
├── events.json
├── team.json
├── projects.json
└── navigation.json
```

## 🛠️ Development Guidelines

### Creating New Pages

To create a new page in Next.js 13+ App Router:

1. Navigate to the `src/app` directory
2. Create a new folder with your page name (use lowercase and hyphens)
3. Inside the folder, create a `page.js` file
4. Export your React component as default

Example:
```bash
# Create a new page called "about-us"
mkdir src/app/about-us
touch src/app/about-us/page.js
```

```javascript
// src/app/about-us/page.js
export default function AboutUs() {
  return (
    <div>
      <h1>About Us</h1>
      <p>Welcome to our About Us page!</p>
    </div>
  );
}
```

### Folder Naming Conventions

- **Pages**: Use kebab-case (e.g., `about-us`, `contact-form`)
- **Components**: Use PascalCase (e.g., `EventCard`, `NavigationMenu`)
- **API files**: Use camelCase (e.g., `userAuth.js`, `eventManagement.js`)

### Code Style Guidelines

1. **Components**:
   - Use functional components with hooks
   - Import React explicitly when using JSX
   - Use descriptive prop names

2. **API Calls**:
   - Use async/await syntax
   - Implement proper error handling
   - Create reusable API functions

3. **Data Files**:
   - Use consistent JSON formatting
   - Include all required fields
   - Add comments where necessary (in accompanying documentation)

### Example API Function

```javascript
// src/api/events.js
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export const getEvents = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/events`);
    return response.data;
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
};

export const createEvent = async (eventData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/events`, eventData);
    return response.data;
  } catch (error) {
    console.error('Error creating event:', error);
    throw error;
  }
};
```

### Example Component

```javascript
// src/components/EventCard.js
import React from 'react';

const EventCard = ({ title, date, description, image }) => {
  return (
    <div className="event-card">
      <img src={image} alt={title} />
      <div className="event-content">
        <h3>{title}</h3>
        <p className="event-date">{date}</p>
        <p className="event-description">{description}</p>
      </div>
    </div>
  );
};

export default EventCard;
```

### Example Data File

```json
// src/data/events.json
{
  "events": [
    {
      "id": 1,
      "title": "React Workshop",
      "date": "2024-02-15",
      "description": "Learn the fundamentals of React development",
      "image": "/images/react-workshop.jpg",
      "location": "Computer Lab 1",
      "registrationRequired": true
    }
  ]
}
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors automatically

## 🌟 Best Practices

1. **Performance**:
   - Use Next.js Image component for optimized images
   - Implement lazy loading for heavy components
   - Minimize bundle size

2. **SEO**:
   - Use proper meta tags
   - Implement structured data
   - Ensure proper heading hierarchy


3. **State Management**:
   - Use React hooks for local state
   - Consider Context API for global state
   - Implement proper data flow

## 🤝 Contributing

1. Switch to the dev branch: `git checkout dev`
2. Pull the latest changes: `git pull origin dev`
3. Make your changes following the guidelines above
4. **Build and check for errors**:
   ```bash
   npm run build
   npm run lint
   ```
   - Fix any build errors or linting issues before proceeding
   - Ensure the build completes successfully without warnings
5. Test your changes thoroughly in development mode: `npm run dev`
6. Add your changes: `git add .`
7. Commit your changes: `git commit -m "Add your feature description"`
8. Push to dev branch: `git push origin dev`

**Important**: 
- All development work should be pushed directly to the `dev` branch
- Always pull the latest changes before starting work to avoid conflicts
- **Never push code that fails to build or has linting errors**
- Test your changes locally before pushing

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Axios Documentation](https://axios-http.com/docs/intro)

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**: Change the port in `package.json` or kill the process using the port
2. **Module not found**: Ensure all dependencies are installed with `npm install`
3. **Build errors**: Check for syntax errors and unused imports


---