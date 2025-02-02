import React from 'react';
import { Editor } from '@tiptap/react';
import {
  AlertCircle,
  AlertTriangle,
  Info,
  Bold,
  Italic,
  List,
  ListOrdered,
  Undo,
  Redo,
  Code,
  Link,
  Image
} from 'lucide-react';

interface MenuBarProps {
  editor: Editor | null;
  darkMode?: boolean;
}

const MenuBar: React.FC<MenuBarProps> = ({ editor, darkMode = false }) => {
  if (!editor) {
    return null;
  }

  const Button = ({ onClick, active, disabled, children, className = '' }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`p-2 rounded-lg transition-all duration-200 flex items-center gap-1.5 ${
        active
          ? darkMode
            ? 'bg-indigo-900 text-indigo-200'
            : 'bg-indigo-100 text-indigo-700'
          : darkMode
            ? 'hover:bg-gray-700 text-gray-300'
            : 'hover:bg-gray-100 text-gray-700'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
    </button>
  );

  return (
    <div className={`border-b ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-gray-50'} p-2 flex flex-wrap gap-1`}>
      <div className="flex items-center gap-1 p-1">
        <Button
          onClick={() => editor.chain().focus().toggleBold().run()}
          active={editor.isActive('bold')}
        >
          <Bold className="w-4 h-4" />
          <span className="text-sm">Bold</span>
        </Button>
        
        <Button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          active={editor.isActive('italic')}
        >
          <Italic className="w-4 h-4" />
          <span className="text-sm">Italic</span>
        </Button>

        <Button
          onClick={() => editor.chain().focus().toggleCode().run()}
          active={editor.isActive('code')}
        >
          <Code className="w-4 h-4" />
          <span className="text-sm">Inline Code</span>
        </Button>
      </div>

      <div className={`w-px ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} mx-1`} />

      <div className="flex items-center gap-1 p-1">
        <Button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          active={editor.isActive('bulletList')}
        >
          <List className="w-4 h-4" />
          <span className="text-sm">Bullet List</span>
        </Button>
        
        <Button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          active={editor.isActive('orderedList')}
        >
          <ListOrdered className="w-4 h-4" />
          <span className="text-sm">Ordered List</span>
        </Button>
      </div>

      <div className={`w-px ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} mx-1`} />

      <div className="flex items-center gap-1 p-1">
        <Button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
        >
          <Undo className="w-4 h-4" />
          <span className="text-sm">Undo</span>
        </Button>
        
        <Button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
        >
          <Redo className="w-4 h-4" />
          <span className="text-sm">Redo</span>
        </Button>
      </div>

      <div className={`w-px ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} mx-1`} />

      <div className="flex items-center gap-1 p-1">
        <Button
          onClick={() => editor.chain().focus().setCodeReview('info').run()}
          active={editor.isActive('codeReview', { severity: 'info' })}
          className={darkMode ? 'text-blue-400 hover:bg-blue-900/50' : 'text-blue-700 hover:bg-blue-50'}
        >
          <Info className="w-4 h-4" />
          <span className="text-sm">Info</span>
        </Button>

        <Button
          onClick={() => editor.chain().focus().setCodeReview('warning').run()}
          active={editor.isActive('codeReview', { severity: 'warning' })}
          className={darkMode ? 'text-yellow-400 hover:bg-yellow-900/50' : 'text-yellow-700 hover:bg-yellow-50'}
        >
          <AlertTriangle className="w-4 h-4" />
          <span className="text-sm">Warning</span>
        </Button>

        <Button
          onClick={() => editor.chain().focus().setCodeReview('error').run()}
          active={editor.isActive('codeReview', { severity: 'error' })}
          className={darkMode ? 'text-red-400 hover:bg-red-900/50' : 'text-red-700 hover:bg-red-50'}
        >
          <AlertCircle className="w-4 h-4" />
          <span className="text-sm">Error</span>
        </Button>
      </div>
    </div>
  );
};

export default MenuBar;