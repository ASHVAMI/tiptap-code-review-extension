# Custom Tiptap Extension for React

This project demonstrates the implementation of a **Custom Tiptap Extension** in a React.js application. Tiptap is a rich-text editor built on top of ProseMirror, and this custom extension adds a new feature to extend the editor's default functionality. 

## Project Overview

The aim of this project is to build a creative and unique Tiptap extension, different from any pre-existing ones provided by Tiptap, such as emoji or highlighter extensions.

## Features of the Custom Extension

- Custom **Annotation** feature that allows users to add interactive, non-obtrusive annotations to any text segment.

- **User-Friendly Interface:** Seamlessly integrates with the existing editor interface.
  
- **Highly Configurable:** Easily customizable with various options (e.g., customizable annotation colors, notes, etc.).

### Key Files
- **`Editor.js`**: This file contains the React component for the Tiptap editor and initializes the custom extension.
- **`CustomExtension.js`**: This file contains the implementation of the custom extension logic.
  
## How to Run the Project

1. **Clone the repository:**
    git clone https://github.com/your-repo/custom-tiptap-extension.git

2. **Install dependencies:**
    cd custom-tiptap-extension
    npm install

3. **Start the development server:**
    npm start

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## How to Use the Extension

- Once the editor is loaded in the browser, you can access the new custom extension.
- 
Example:
- **Annotation Feature**: Select any text in the editor and click the new annotation button. You can then add an annotation that will appear when hovering over the selected text.

## Technical Details

- **React.js**: The extension is built as part of a React application.
- **Tiptap**: The editor and extension functionalities are powered by Tiptap and ProseMirror.
- **Custom Extension**: The custom extension extends Tiptap's capabilities.

## Code Quality and Best Practices

- **Component-based architecture**: The project follows a clean, modular structure with components for the editor and extension.
- **Type safety**: Type checking is included for better code quality and reliability.
- **Testing**: The code has been thoroughly tested to ensure a bug-free experience.

## Future Enhancements

- Additional features like custom shortcuts, new styling options, etc.

## Conclusion

This project showcases the ability to extend Tiptap's editor with a creative custom feature. The code follows best practices and has been thoroughly tested to ensure a bug-free implementation.



Developed by Ashvani S !!!!!!