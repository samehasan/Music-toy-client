import React, { useRef } from 'react';
import './Blog.css';
import { PDFExport } from '@progress/kendo-react-pdf';

const Blog = () => {
  const pdfRef = useRef(null);

  const handleDownload = () => {
    pdfRef.current.save();
  };

  return (
    <div className="blog-container">
      <div className="blog-header">
        <h1>Q&A</h1>
        <button onClick={handleDownload}>Download PDF</button>
      </div>
      <PDFExport ref={pdfRef}>
        <div className="blog-content">
          <div className="blog-item">
            <h2>Question 1: Differences between uncontrolled and controlled components</h2>
            <p>
              Uncontrolled components manage their own state internally, while controlled components have their state managed by React. With uncontrolled components, React does not keep track of the component's value, while with controlled components, the component's value is stored in state and updated via a change handler.
            </p>
          </div>
          <div className="blog-item">
            <h2>Question 2: How to validate React props using PropTypes</h2>
            <p>
              You can use the PropTypes library to specify the type and shape of props that a component expects. To require that a prop be a specific type, you can use the PropTypes module.
            </p>
          </div>
          <div className="blog-item">
            <h2>Question 3: Difference between Node.js and Express.js</h2>
            <p>
              Node.js is a runtime environment for executing JavaScript outside of a web browser, while Express.js is a web application framework built on top of Node.js. Node.js provides a way to execute JavaScript on the server side, while Express.js provides a set of tools and conventions for building web applications on top of Node.js.
            </p>
          </div>
          <div className="blog-item">
            <h2>Question 4: What is a custom hook, and why will you create a custom hook?</h2>
            <p>
              A custom hook is a JavaScript function that uses React's built-in hooks to encapsulate some specific behavior that can be reused across multiple components. Custom hooks can simplify complex logic, make it more reusable and easier to test. We create custom hooks to extract and share logic between components without having to rely on higher-order components, render props, or other patterns.
            </p>
          </div>
        </div>
      </PDFExport>
    </div>
  );
};

export default Blog;
