import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-6">
            TaskMaster
            <span className="text-purple-400"> AI</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            AI-powered project management and task generation template.
            Ready to build your next amazing project!
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-white mb-4">
              🚀 Ready to Start
            </h2>
            <p className="text-gray-300 mb-6">
              This is your TaskMaster template. Customize it for your project needs.
            </p>
            <div className="space-y-2 text-left">
              <div className="flex items-center text-green-400">
                <span className="mr-2">✓</span>
                React 19 + TypeScript
              </div>
              <div className="flex items-center text-green-400">
                <span className="mr-2">✓</span>
                TailwindCSS v4
              </div>
              <div className="flex items-center text-green-400">
                <span className="mr-2">✓</span>
                Express Backend
              </div>
              <div className="flex items-center text-green-400">
                <span className="mr-2">✓</span>
                TaskMaster AI Integration
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; 