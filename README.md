# TaskMaster AI Project Template

A comprehensive project template for AI-powered project management and task generation using TaskMaster AI.

## 🚀 Features

- **React 18** with TypeScript for modern frontend development
- **TailwindCSS v3** for utility-first styling
- **Express.js** backend with TypeScript
- **TaskMaster AI** integration for intelligent task generation
- **ESLint & Prettier** for code quality
- **Vite** for fast development and building
- **Zustand** for state management
- **Sentry** integration for error tracking

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- OpenRouter API key for TaskMaster AI

## 🛠️ Quick Start

### 1. Clone or Copy Template

```bash
# Copy this template to your new project directory
cp -r TaskMaster-Template your-project-name
cd your-project-name
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment

```bash
# Copy environment template
cp env.template .env

# Edit .env with your configuration
# At minimum, add your OPENROUTER_API_KEY
```

### 4. Configure TaskMaster AI

Edit `.cursor/mcp.json` and add your OpenRouter API key:

```json
{
  "mcpServers": {
    "taskmaster-ai": {
      "command": "npx",
      "args": ["taskmaster-ai"],
      "env": {
        "OPENROUTER_API_KEY": "your_actual_api_key_here"
      }
    }
  }
}
```

### 5. Update Project Configuration

Edit `.taskmasterconfig` to customize your project:

```json
{
  "project": {
    "name": "Your Project Name",
    "description": "Your project description",
    "version": "1.0.0"
  }
}
```

### 6. Start Development

```bash
# Start both frontend and backend
npm run dev

# Or start individually
npm run client:dev  # Frontend on http://localhost:3000
npm run server:dev  # Backend on http://localhost:3001
```

## 📁 Project Structure

```
your-project/
├── .cursor/
│   └── mcp.json              # TaskMaster AI configuration
├── backend/
│   └── src/
│       └── simple-server.ts  # Express server
├── src/
│   ├── components/           # React components
│   ├── lib/                  # Utility libraries
│   ├── store/                # Zustand stores
│   ├── utils/                # Helper functions
│   ├── App.tsx               # Main App component
│   ├── main.tsx              # React entry point
│   └── index.css             # TailwindCSS styles
├── scripts/                  # Project scripts and PRDs
├── tasks/                    # Generated task files
├── .taskmasterconfig         # TaskMaster configuration
├── package.json              # Dependencies and scripts
└── README.md                 # This file
```

## 🤖 Using TaskMaster AI

### 1. Create Your PRD

Place your Project Requirements Document (PRD) in the `scripts/` directory:

```bash
# Example: scripts/my-project-prd.md
```

### 2. Generate Tasks

Use TaskMaster AI in Cursor to:
- Parse your PRD
- Generate comprehensive task lists
- Create development workflows
- Analyze task complexity

### 3. Track Progress

The backend API provides endpoints to track task progress:
- `GET /api/v1/tasks` - Get all tasks with progress
- `GET /health` - Health check
- `GET /api/v1/test` - API test

## 🔧 Available Scripts

```bash
npm run dev          # Start both frontend and backend
npm run client:dev   # Start frontend only
npm run server:dev   # Start backend only
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format code with Prettier
npm run type-check   # TypeScript type checking
```

## 🎨 Customization

### Frontend
- Modify `src/App.tsx` for your main application
- Add components in `src/components/`
- Update styling in `src/index.css`
- Configure TailwindCSS in `tailwind.config.js`

### Backend
- Extend `backend/src/simple-server.ts` with your API routes
- Add middleware and authentication as needed
- Configure CORS and security settings

### TaskMaster AI
- Update `.taskmasterconfig` for your project needs
- Modify AI model settings and parameters
- Configure workflow phases and tool allocation

## 🔐 Environment Variables

Copy `env.template` to `.env` and configure:

```bash
# Required
OPENROUTER_API_KEY=your_openrouter_api_key

# Optional
PROJECT_NAME=Your Project Name
PORT=3001
NODE_ENV=development
SENTRY_DSN=your_sentry_dsn
```

## 📚 Tech Stack

- **Frontend**: React 18, TypeScript, TailwindCSS v3, Vite
- **Backend**: Express.js, TypeScript, CORS, Helmet
- **AI**: TaskMaster AI via OpenRouter
- **State**: Zustand
- **Styling**: TailwindCSS with custom design system
- **Tools**: ESLint, Prettier, Nodemon, Concurrently

## 🤝 Contributing

1. Fork the template
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

MIT License - see LICENSE file for details

## 🆘 Support

- Check the TaskMaster AI documentation
- Review the example HIVE project for reference
- Open issues for bugs or feature requests

---

**Happy Building with TaskMaster AI! 🚀** 