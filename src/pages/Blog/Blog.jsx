import React from 'react';
import './Blog.css';
import useTitle from '../../hooks/usetitle';

const Blog = () => {
  useTitle('Blog-MusicToys');
  return (
    <div className="blog-container">
      <div className="blog-header">
        <h1>Q&A</h1>
      </div>

      <div className="blog-content">
        <div className="blog-item">
          <h2>Question 1: What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
          <p>
            An access token is a credential used to authenticate and authorize a user. It is typically short-lived and grants access to protected resources. A refresh token is a long-lived credential used to obtain new access tokens once the original access token expires. Access tokens are usually stored in browser memory or cookies, while refresh tokens should be securely stored on the server-side.
          </p>
        </div>

        <div className="blog-item">
          <h2>Question 2: Compare SQL and NoSQL databases?</h2>
          <p>
            SQL databases are relational databases that use structured query language (SQL) to define and manipulate data. They have predefined schemas and are suitable for structured data with complex relationships. NoSQL databases, on the other hand, are non-relational databases that provide flexible schemas and are suitable for handling unstructured or semi-structured data. They offer scalability, high performance, and can handle large volumes of data with ease.
          </p>
        </div>

        <div className="blog-item">
          <h2>Question 3: What is Express.js? What is Nest JS?</h2>
          <p>
            Express.js is a minimal and flexible web application framework for Node.js. It provides a robust set of features for building web applications and APIs, such as routing, middleware support, and template engine integration. Nest JS, on the other hand, is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It combines elements of Object-Oriented Programming, Functional Programming, and Reactive Programming to provide a structured and modular approach to building applications.
          </p>
        </div>

        <div className="blog-item">
          <h2>Question 4: What is MongoDB aggregate and how does it work?</h2>
          <p>
            MongoDB's aggregation framework allows for the processing of data records and returns computed results. It provides a way to perform complex data operations, such as grouping, filtering, and transforming data, in a more efficient manner. Aggregation pipelines in MongoDB consist of stages, where each stage performs a specific data transformation. These stages can be used together to achieve powerful data aggregation and analysis. For more details on how MongoDB aggregation works, you can refer to the MongoDB documentation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
