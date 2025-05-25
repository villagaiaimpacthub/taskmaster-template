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
- Anthropic API key (for TaskMaster AI)
- Perplexity API key (for complexity analysis)

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

Edit `.cursor/mcp.json` and add your API keys:

```json
{
  "mcpServers": {
    "taskmaster-ai": {
      "command": "npx",
      "args": ["-y", "--package=task-master-ai", "task-master-ai"],
      "env": {
        "ANTHROPIC_API_KEY": "your_anthropic_api_key",
        "PERPLEXITY_API_KEY": "your_perplexity_api_key",
        "MODEL": "claude-3-7-sonnet-20250219",
        "PERPLEXITY_MODEL": "sonar-pro",
        "MAX_TOKENS": 64000,
        "TEMPERATURE": 0.2,
        "DEFAULT_SUBTASKS": 5,
        "DEFAULT_PRIORITY": "medium"
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

## 📝 Complete Project Planning & Development Workflow

### Step 1: Writing Requirements (10-15 minutes)

1. **Copy the requirements template:**
   ```bash
   cp scripts/your-requirements.md scripts/my-project-requirements.md
   ```

2. **Fill out your specific requirements** including:
   - **App name** - What you're calling your application
   - **Tech stack** - Specific frameworks, libraries, and tools
   - **Core features** - Detailed functionality descriptions
   - **Database** - Data models and storage requirements
   - **API integrations** - External services and authentication
   - **Design style** - Visual design and UX principles
   - **Things NOT to build** - Explicit scope limitations
   - **Research request** - Ask AI to research comparable apps

3. **Example requirements prompt for AI:**
   ```
   I would like to create concise functional requirements for the following application:

   The app is called ImgxAI and is a midjourney clone, but using OpenAI's image model.
   Research midjourney to get a better understanding of the app.

   My Requirements:
   - It should integrate with the OpenAI APIs. The image model used is gpt-image-1
   - The app should have a unified interface with a chat input and a timeline of results
   - The timeline should be scrollable and have infinite loading with pagination
   - The timeline should be responsive, a grid of 1 on mobile, 2 on tablet and 4 on desktop
   [... continue with all your requirements]

   Output as markdown code.
   ```

4. **Use ChatGPT o3 or Claude** to convert your requirements into structured functional requirements

### Step 2: Creating a PRD File

1. **Copy the PRD template:**
   ```bash
   cp scripts/your-prd-template.md scripts/my-project-prd.md
   ```

2. **Use this prompt with Claude 3.7 Sonnet** to create a comprehensive PRD:

   ```
   You are an expert technical product manager specializing in feature development and creating comprehensive product requirements documents (PRDs). Your task is to generate a detailed and well-structured PRD based on the following instructions:

   <prd_instructions>
   [PASTE YOUR FUNCTIONAL REQUIREMENTS FROM STEP 1 HERE]
   </prd_instructions>

   Follow these steps to create the PRD:

   1. Begin with a brief overview explaining the project and the purpose of the document.

   2. Use sentence case for all headings except for the title of the document, which should be in title case.

   3. Organize your PRD into the following sections:
      a. Introduction
      b. Product Overview
      c. Goals and Objectives
      d. Target Audience
      e. Features and Requirements
      f. User Stories and Acceptance Criteria
      g. Technical Requirements / Stack
      h. Design and User Interface

   4. For each section, provide detailed and relevant information based on the PRD instructions. Ensure that you:
      - Use clear and concise language
      - Provide specific details and metrics where required
      - Maintain consistency throughout the document
      - Address all points mentioned in each section

   5. When creating user stories and acceptance criteria:
      - List ALL necessary user stories including primary, alternative, and edge-case scenarios
      - Assign a unique requirement ID (e.g., ST-101) to each user story for direct traceability
      - Include at least one user story specifically for secure access or authentication if the application requires user identification
      - Include at least one user story specifically for Database modelling if the application requires a database
      - Ensure no potential user interaction is omitted
      - Make sure each user story is testable

   6. Format your PRD professionally:
      - Use consistent styles
      - Include numbered sections and subsections
      - Use bullet points and tables where appropriate to improve readability
      - Ensure proper spacing and alignment throughout the document

   7. Review your PRD to ensure all aspects of the project are covered comprehensively and that there are no contradictions or ambiguities.

   Present your final PRD within <PRD> tags. Begin with the title of the document in title case, followed by each section with its corresponding content. Use appropriate subheadings within each section as needed.

   Remember to tailor the content to the specific project described in the PRD instructions, providing detailed and relevant information for each section based on the given context.
   ```

3. **Review the output** and ensure it covers everything you want to build

### Step 3: Setting up TaskMaster AI via MCP

1. **Configure MCP Server** in Cursor (Settings > MCP > Add new global MCP server):
   ```json
   {
     "mcpServers": {
       "taskmaster-ai": {
         "command": "npx",
         "args": ["-y", "--package=task-master-ai", "task-master-ai"],
         "env": {
           "ANTHROPIC_API_KEY": "your_anthropic_api_key",
           "PERPLEXITY_API_KEY": "your_perplexity_api_key",
           "MODEL": "claude-3-7-sonnet-20250219",
           "PERPLEXITY_MODEL": "sonar-pro",
           "MAX_TOKENS": 64000,
           "TEMPERATURE": 0.2,
           "DEFAULT_SUBTASKS": 5,
           "DEFAULT_PRIORITY": "medium"
         }
       }
     }
   }
   ```

2. **Set up Cursor Rules** (optional but recommended):
   - Use `/Generate Cursor Rules` in Cursor Chat
   - Analyze your existing files with `@MyFile.tsx`
   - Prompt: "I want to generate cursor rules for writing UI components. Please analyze the file and outline all the conventions found."

3. **Initialize TaskMaster AI:**
   - Save your PRD as `scripts/prd.txt`
   - In Cursor Chat (Agent mode + Claude 3.7 Sonnet):
   ```
   I've initialized a new project with Claude Task Master. I have a PRD at scripts/prd.txt.
   Can you parse it and set up initial tasks?
   ```

4. **Analyze Complexity:**
   ```
   Can you analyze the complexity of our tasks to help me understand which ones need to be broken down further?
   ```

5. **Break down complex tasks:**
   ```
   Please break down the identified tasks into subtasks.
   ```

   Or for specific tasks:
   ```
   Task 3 seems complex. Can you break it down into subtasks?
   ```

### Step 4: Building the App (Prompt Loop)

1. **Show current tasks:**
   ```
   Show tasks
   ```

2. **Get next task recommendation:**
   ```
   What's the next task I should work on? Please consider dependencies and priorities.
   ```

3. **Implement tasks:**
   ```
   Implement task 2 and all of its subtasks.
   ```

   Or for individual subtasks:
   ```
   Implement subtask 2.1
   ```

4. **Iterate:**
   - Test the implemented features
   - Start a new chat
   - Repeat steps 1-3 until all tasks are complete

### Additional TaskMaster AI Commands

**Add new tasks:**
```
Let's add a new task. We should implement sorting of the timeline.
Here are the requirements:
- you should be able to sort the timeline by date
- a dropdown should be available to select the sorting direction
- the sorting should be persisted when a new page is loaded
```

**Change task direction:**
```
There should be a change in the image generation task.
Can you update task 3 with this and set it back to pending?

The image generation should use gpt-image-1 as the model.
```

**Remove tasks:**
```
Task 8 is not needed anymore. You can remove it.
```

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
# Required for TaskMaster AI
ANTHROPIC_API_KEY=your_anthropic_api_key
PERPLEXITY_API_KEY=your_perplexity_api_key

# Optional
PROJECT_NAME=Your Project Name
PORT=3001
NODE_ENV=development
SENTRY_DSN=your_sentry_dsn
```

## 📚 Tech Stack

- **Frontend**: React 18, TypeScript, TailwindCSS v3, Vite
- **Backend**: Express.js, TypeScript, CORS, Helmet
- **AI**: TaskMaster AI via MCP
- **State**: Zustand
- **Styling**: TailwindCSS with custom design system
- **Tools**: ESLint, Prettier, Nodemon, Concurrently

## 🔄 Recommended Workflow Summary

1. **Requirements (10-15 min)** - Fill out `your-requirements.md` template
2. **Functional Requirements** - Use AI to convert to structured requirements
3. **PRD Creation** - Use AI to create comprehensive PRD
4. **TaskMaster Setup** - Configure MCP and initialize tasks
5. **Complexity Analysis** - Break down complex tasks
6. **Implementation Loop** - Build iteratively with AI assistance

## ⚠️ Important Notes

- **Never start from empty codebase** - Always use a template or CLI
- **Use Agent mode** in Cursor with Claude 3.7 Sonnet
- **Break down complex tasks** before implementation
- **Test frequently** during the build process
- **Commit tasks to git** to prevent loss

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
- Follow the complete workflow for best results
- Open issues for bugs or feature requests

---

**Happy Building with TaskMaster AI! 🚀** 