import React, { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { CodeReview } from './extensions/codeReview';
import MenuBar from './components/MenuBar';
import { BookOpen, Github, FileCode, Users, Settings, LogOut } from 'lucide-react';

function App() {
  const [currentFile, setCurrentFile] = useState('main.js');
  const [darkMode, setDarkMode] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeReview,
    ],
    content: `
      <h2>Code Review: ${currentFile}</h2>
      <p class="text-gray-600 mb-4">Last updated: ${new Date().toLocaleDateString()}</p>
      
      <pre><code>// Example code from ${currentFile}
function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price;
  }
  return total;
}

// Add tax calculation
function addTax(subtotal) {
  const TAX_RATE = 0.08;
  return subtotal * (1 + TAX_RATE);
}

// Format currency
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
}</code></pre>

      <h3>Review Comments:</h3>
      <ol>
        <li>Consider using reduce() method for better readability</li>
        <li>Tax rate should be configurable</li>
        <li>Add input validation</li>
      </ol>
    `,
  });

  const mockFiles = [
    { name: 'main.js', status: 'In Review' },
    { name: 'utils.ts', status: 'Approved' },
    { name: 'api.ts', status: 'Needs Changes' },
    { name: 'types.d.ts', status: 'In Review' },
  ];

  const mockTeam = [
    { name: 'Sarah Chen', role: 'Lead Developer', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100' },
    { name: 'Michael Park', role: 'Senior Engineer', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' },
    { name: 'Alex Rivera', role: 'Code Reviewer', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100' },
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50'}`}>
      {/* Top Navigation */}
      <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} fixed w-full top-0 z-10`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <BookOpen className={`w-8 h-8 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`} />
              <span className="font-bold text-xl">CodeReview Pro</span>
            </div>
            <div className="flex items-center gap-4">
              <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <Settings className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16 flex">
        {/* Sidebar */}
        <div className={`w-64 fixed h-full ${darkMode ? 'bg-gray-800' : 'bg-white'} border-r ${darkMode ? 'border-gray-700' : 'border-gray-200'} p-4`}>
          <div className="mb-8">
            <h3 className={`text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-500'} uppercase tracking-wider mb-4`}>Files</h3>
            <div className="space-y-2">
              {mockFiles.map((file) => (
                <button
                  key={file.name}
                  onClick={() => setCurrentFile(file.name)}
                  className={`w-full text-left px-3 py-2 rounded-lg flex items-center justify-between ${
                    currentFile === file.name
                      ? darkMode ? 'bg-indigo-900 text-indigo-200' : 'bg-indigo-50 text-indigo-700'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <FileCode className="w-4 h-4" />
                    <span>{file.name}</span>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    file.status === 'Approved' ? 'bg-green-100 text-green-800' :
                    file.status === 'Needs Changes' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {file.status}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className={`text-sm font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-500'} uppercase tracking-wider mb-4`}>Team</h3>
            <div className="space-y-3">
              {mockTeam.map((member) => (
                <div key={member.name} className="flex items-center gap-3">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <div className="font-medium">{member.name}</div>
                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{member.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Editor Area */}
        <div className="ml-64 flex-1 p-8">
          <div className={`max-w-4xl mx-auto ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg overflow-hidden`}>
            <MenuBar editor={editor} darkMode={darkMode} />
            <div className={`prose max-w-none p-6 ${darkMode ? 'prose-invert' : ''}`}>
              <EditorContent editor={editor} />
            </div>
          </div>

          {/* Stats Cards */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-sm`}>
              <h3 className={`font-semibold ${darkMode ? 'text-indigo-400' : 'text-indigo-600'} mb-2 flex items-center gap-2`}>
                <Github className="w-5 h-5" />
                Repository Stats
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Open PRs</span>
                  <span className="font-semibold">12</span>
                </div>
                <div className="flex justify-between">
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Reviews Pending</span>
                  <span className="font-semibold">5</span>
                </div>
              </div>
            </div>

            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-sm`}>
              <h3 className={`font-semibold ${darkMode ? 'text-indigo-400' : 'text-indigo-600'} mb-2 flex items-center gap-2`}>
                <Users className="w-5 h-5" />
                Team Activity
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Reviews Today</span>
                  <span className="font-semibold">8</span>
                </div>
                <div className="flex justify-between">
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Active Reviewers</span>
                  <span className="font-semibold">4</span>
                </div>
              </div>
            </div>

            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-sm`}>
              <h3 className={`font-semibold ${darkMode ? 'text-indigo-400' : 'text-indigo-600'} mb-2 flex items-center gap-2`}>
                <FileCode className="w-5 h-5" />
                Code Quality
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Coverage</span>
                  <span className="font-semibold">92%</span>
                </div>
                <div className="flex justify-between">
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Issues Found</span>
                  <span className="font-semibold">3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .ProseMirror {
          min-height: 300px;
          outline: none;
        }

        .ProseMirror pre {
          background: ${darkMode ? '#1e293b' : '#f8fafc'};
          border-radius: 0.5rem;
          padding: 0.75rem 1rem;
          overflow-x: auto;
        }

        .ProseMirror code {
          font-family: ui-monospace, monospace;
          font-size: 0.9em;
          color: ${darkMode ? '#e2e8f0' : '#1e293b'};
        }

        .code-review {
          padding: 2px 4px;
          border-radius: 4px;
          transition: all 0.2s ease;
        }

        .code-review-info {
          background-color: ${darkMode ? '#1e3a8a' : '#e0f2fe'};
          color: ${darkMode ? '#93c5fd' : '#0369a1'};
        }

        .code-review-warning {
          background-color: ${darkMode ? '#854d0e' : '#fef3c7'};
          color: ${darkMode ? '#fcd34d' : '#b45309'};
        }

        .code-review-error {
          background-color: ${darkMode ? '#991b1b' : '#fee2e2'};
          color: ${darkMode ? '#fca5a5' : '#b91c1c'};
        }

        .prose h1, .prose h2, .prose h3 {
          color: ${darkMode ? '#f1f5f9' : '#1e293b'};
        }

        .prose p {
          color: ${darkMode ? '#cbd5e1' : '#475569'};
        }
      `}</style>
    </div>
  );
}

export default App;