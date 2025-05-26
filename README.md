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
        "MODEL": "anthropic/claude-sonnet-4",
        "PERPLEXITY_MODEL": "sonar-pro",
        "MAX_TOKENS": 120000,
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
  "models": {
    "main": {
      "provider": "openrouter",
      "modelId": "anthropic/claude-sonnet-4",
      "maxTokens": 120000,
      "temperature": 0.2
    }
  },
  "global": {
    "logLevel": "info",
    "debug": false,
    "defaultSubtasks": 5,
    "defaultPriority": "medium",
    "projectName": "Your Project Name"
  }
}
```

### 6. Start Development

```bash
# Make sure you're in the TaskMaster-Template directory
cd TaskMaster-Template

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
           "MODEL": "anthropic/claude-sonnet-4",
           "PERPLEXITY_MODEL": "sonar-pro",
           "MAX_TOKENS": 120000,
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

## 💡 Pro Tips for Advanced TaskMaster AI Usage

### 1. Provide Additional Context for Each Task

When prompting the AI to work on tasks, always provide extra context to guide implementation:

```
Implement task 2 and all of its subtasks.

Additional context:
- Use Shadcn UI components for all form elements
- Follow the Material Design color palette from our design system
- Ensure all buttons have hover states and loading indicators
- API documentation is available at @api-docs.md
- Reference the design mockups I'm attaching: [attach image files]
```

**Benefits:**
- Guides AI toward your preferred implementation approach
- Ensures consistency with your design system
- Reduces back-and-forth iterations
- You can attach images, API docs, and other reference materials

### 2. Break Down Large Files (>500 lines)

AI struggles with large files. When a file grows beyond 500 lines, break it down:

```
Break down this file into logical modules so it's easier to read.
Create directories if needed and move utils and interfaces to separate files, maintaining a domain-driven file structure.
```

**Example file structure after breakdown:**
```
src/
├── components/
│   ├── Timeline/
│   │   ├── Timeline.tsx
│   │   ├── TimelineItem.tsx
│   │   ├── TimelineFilters.tsx
│   │   └── types.ts
│   └── shared/
│       ├── Button/
│       └── Modal/
├── utils/
│   ├── dateUtils.ts
│   ├── apiUtils.ts
│   └── storageUtils.ts
└── types/
    ├── api.ts
    └── common.ts
```

**Benefits:**
- Easier for AI to understand and modify code
- Better maintainability and readability
- Follows domain-driven design principles
- Reduces cognitive load for both AI and developers

### 3. Treat Bugs as Tasks

When you encounter complex bugs that require architectural changes, create dedicated tasks:

```
The filter feature is not working as expected. Create a new task to fix it:
- the filter should be case insensitive
- it should work with pagination
- it should work with the debounce
- it should persist across page refreshes
- it should handle special characters properly

This is a bug that affects the core filtering system and may require refactoring the search logic.
```

**Why this works:**
- Prevents AI from applying superficial fixes
- Ensures proper analysis of the underlying issue
- Creates a structured approach to bug resolution
- Maintains task tracking and documentation
- Avoids going in circles with quick fixes

**Bug task template:**
```
Bug: [Brief description]
Impact: [How it affects users/system]
Root cause: [If known]
Requirements for fix:
- [Specific requirement 1]
- [Specific requirement 2]
- [Specific requirement 3]
Acceptance criteria:
- [ ] [Testable criteria 1]
- [ ] [Testable criteria 2]
```

### 4. Always Start Fresh Chats for New Tasks

**Important:** Start a new chat for each task implementation to avoid context pollution.

**Why this matters:**
- Too much context can confuse the AI
- Previous task context might influence current implementation
- Fresh context ensures focused attention on current task
- Reduces token usage and improves response quality

**Workflow:**
1. Complete current task
2. Test the implementation
3. **Start new chat** ← Critical step
4. Run `Show tasks`
5. Get next task recommendation
6. Implement with fresh context

**Exception:** Only maintain chat context when working on closely related subtasks within the same feature.

### 5. Use Task Dependencies Strategically

Structure your tasks to build foundational components first:

```
Show tasks

# Review dependencies and ask:
What's the next task I should work on? Please consider dependencies and priorities.

# If dependencies aren't clear:
Can you analyze the task dependencies and suggest an optimal implementation order?
```

### 6. Leverage TaskMaster's Complexity Analysis

Use complexity analysis to identify tasks that need more attention:

```
Can you analyze the complexity of our remaining tasks and identify any that should be broken down further before implementation?
```

**Follow up with:**
```
For any tasks with complexity > 7, please break them down into smaller, more manageable subtasks.
```

### 7. Document Implementation Decisions

After completing complex tasks, document key decisions:

```
After implementing task X, please create a brief technical note documenting:
- Key implementation decisions made
- Any deviations from the original plan
- Potential future improvements
- Dependencies created for other tasks
```

### 8. Task Management Prompt Recipes

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

### 9. Generate Perfect Cursor Rules

**Pro tip for generating Cursor rules:**
1. Head to Cursor Chat and type `/Generate Cursor Rules`
2. Then `@MyFile.tsx` or whatever file you want to analyze
3. Prompt: `I want to generate cursor rules for writing UI components. Please analyze the file and outline all the conventions found.`

This creates spot-on Cursor rule `.mdx` files based on your actual code patterns!

### 10. Essential Codebase Requirements

**⚠️ NEVER start from an empty codebase!** Use a CLI, template, or tool like Shipixen.

**Required foundation:**
- **Type checks**: TypeScript ✅
- **Linter**: ESLint ✅
- **Formatter**: Prettier ✅
- **UI components**: React/Shadcn UI ✅
- **CSS library**: TailwindCSS ✅ (AI works better with it)
- **State management**: Zustand ✅

**This template includes all requirements above!**

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

## 🔄 Complete Workflow (Based on Olympic-Level Vibe Coding)

### Step 1: Writing Requirements (10-15 minutes)
Spend quality time writing detailed requirements. Include:
- App name and tech stack
- Core features and database needs
- API integrations and design style
- Things you DON'T want to build
- Research comparable existing apps

**Use this prompt with ChatGPT o3+ or Claude:**
```
I would like to create concise functional requirements for the following application:

[Your detailed requirements here]

Output as markdown code.
```

### Step 2: Creating a PRD File
Take your functional requirements and create a comprehensive PRD using this prompt:

```
You are an expert technical product manager specializing in feature development and creating comprehensive product requirements documents (PRDs). Your task is to generate a detailed and well-structured PRD based on the following instructions:

<prd_instructions>
{{YOUR_FUNCTIONAL_REQUIREMENTS}}
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

### Step 3: Setting Up TaskMaster AI via MCP

#### 3.1 Install TaskMaster AI MCP Server
Add this to your MCP settings in Cursor (Settings > MCP > Add new global MCP server):

```json
{
  "mcpServers": {
    "taskmaster-ai": {
      "command": "npx",
      "args": [
        "-y",
        "--package=task-master-ai",
        "task-master-ai"
      ],
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

#### 3.2 Initialize TaskMaster AI
1. Save your PRD as `scripts/prd.txt`
2. In Cursor Chat (Agent mode + Claude 3.7 Sonnet):

```
I've initialized a new project with Claude Task Master. I have a PRD at scripts/prd.txt.
Can you parse it and set up initial tasks?
```

3. Analyze complexity:
```
Can you analyze the complexity of our tasks to help me understand which ones need to be broken down further?
```

4. Break down complex tasks:
```
Please break down the identified tasks into subtasks.
```

### Step 4: Building the App (Implementation Loop)

#### The Perfect Implementation Loop:
1. **Start fresh chat** (important for context management)
2. **Show tasks**: `Show tasks`
3. **Get next task**: `What's the next task I should work on? Please consider dependencies and priorities.`
4. **Implement**: `Implement task X and all of its subtasks.`
5. **Test** the implementation
6. **Repeat** with new chat

#### Pro Implementation Tips:
- **Always start new chats** for each task to avoid context pollution
- **Provide extra context** for each task (attach images, API docs, UI preferences)
- **Break down large files** (>500 lines) into smaller modules
- **Treat bugs as tasks** - create new tasks for complex bugs instead of quick fixes

## 🏆 Olympic-Level Vibe Coding Methodology

This template implements the complete workflow from the viral blog post that revolutionized AI-assisted development. The methodology focuses on:

1. **Detailed Requirements** (10-15 min investment upfront)
2. **Comprehensive PRD Creation** (using proven prompts)
3. **TaskMaster AI Integration** (via MCP for seamless workflow)
4. **Iterative Implementation** (with fresh context for each task)

**Key Insights:**
- **Context Management**: Fresh chats prevent AI confusion
- **Task Granularity**: Break down complex tasks into manageable pieces
- **Structured Approach**: PRD → Tasks → Implementation → Testing
- **Pro Tips**: File size limits, bug-as-task strategy, dependency management

## ⚠️ Critical Success Factors

- **✅ Never start from empty codebase** - Always use a template or CLI (this template provides everything!)
- **✅ Use Agent mode** in Cursor with Claude 3.7 Sonnet
- **✅ Break down complex tasks** before implementation (complexity analysis helps)
- **✅ Test frequently** during the build process
- **✅ Commit tasks to git** to prevent loss
- **✅ Start fresh chats** for each new task implementation (most important rule!)
- **✅ Provide context** with each task to guide AI implementation
- **✅ Break down files** larger than 500 lines for better AI handling
- **✅ Treat bugs as tasks** instead of applying quick fixes
- **✅ Use TaskMaster AI** for proper task management and complexity analysis

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
- Apply the pro tips for advanced usage
- Open issues for bugs or feature requests

---

**Happy Building with TaskMaster AI! 🚀** 