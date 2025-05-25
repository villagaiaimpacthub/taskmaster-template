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
- **Requirements & PRD Templates** for structured project planning

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
│   └── mcp.json                    # TaskMaster AI configuration
├── backend/
│   └── src/
│       └── simple-server.ts        # Express server
├── src/
│   ├── components/                 # React components
│   ├── lib/                        # Utility libraries
│   ├── store/                      # Zustand stores
│   ├── utils/                      # Helper functions
│   ├── App.tsx                     # Main App component
│   ├── main.tsx                    # React entry point
│   └── index.css                   # TailwindCSS styles
├── scripts/                        # Project scripts and PRDs
│   ├── your-requirements.md        # Requirements template
│   └── your-prd-template.md        # PRD template
├── tasks/                          # Generated task files
├── .taskmasterconfig               # TaskMaster configuration
├── package.json                    # Dependencies and scripts
└── README.md                       # This file
```

## 📝 Project Planning Workflow

### Step 1: Requirements Gathering

1. **Copy the requirements template:**
   ```bash
   cp scripts/your-requirements.md scripts/my-project-requirements.md
   ```

2. **Fill out your specific requirements:**
   - Replace all `[bracketed placeholders]` with your project details
   - Remove sections that don't apply
   - Add project-specific sections as needed

3. **Review with stakeholders** and get initial approval

### Step 2: Create Detailed PRD

1. **Copy the PRD template:**
   ```bash
   cp scripts/your-prd-template.md scripts/my-project-prd.md
   ```

2. **Convert requirements into detailed specifications:**
   - Use your requirements document as the foundation
   - Fill in technical architecture details
   - Define user stories and acceptance criteria
   - Specify implementation phases

3. **Get stakeholder sign-offs** on the completed PRD

### Step 3: Generate Tasks with TaskMaster AI

1. **Use TaskMaster AI** to parse your completed PRD
2. **Generate comprehensive task breakdown** with subtasks
3. **Create development workflows** and phase planning
4. **Analyze task complexity** and dependencies

### Step 4: Begin Development

1. **Start with the generated tasks** from TaskMaster AI
2. **Use the template codebase** as your foundation
3. **Track progress** using the built-in task management API

## 🤖 Using TaskMaster AI

### 1. Create Your Requirements Document

Start with the provided template in `scripts/your-requirements.md`:
- Fill in all project-specific details
- Define functional and technical requirements
- Specify constraints and success criteria

### 2. Develop Your PRD

Use the template in `scripts/your-prd-template.md`:
- Convert requirements into detailed specifications
- Define technical architecture and implementation plan
- Create comprehensive feature specifications

### 3. Generate Tasks

Use TaskMaster AI in Cursor to:
- Parse your completed PRD
- Generate comprehensive task lists with subtasks
- Create development workflows and phase planning
- Analyze task complexity and dependencies

### 4. Track Progress

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

## 🔄 Recommended Workflow

1. **Start with Requirements** (`your-requirements.md`)
   - Define what you want to build
   - Gather all functional and technical requirements
   - Get stakeholder alignment

2. **Create Detailed PRD** (`your-prd-template.md`)
   - Convert requirements into specifications
   - Define technical architecture
   - Plan implementation phases

3. **Generate Tasks with TaskMaster AI**
   - Parse your PRD with TaskMaster AI
   - Generate comprehensive task breakdown
   - Create development workflows

4. **Begin Development**
   - Use this template as your codebase foundation
   - Follow the generated task sequence
   - Track progress with the built-in API

5. **Iterate and Improve**
   - Update requirements and PRD as needed
   - Re-generate tasks for new features
   - Maintain documentation throughout development

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
- Use the provided templates for structured planning
- Open issues for bugs or feature requests

---

**Happy Building with TaskMaster AI! 🚀** 