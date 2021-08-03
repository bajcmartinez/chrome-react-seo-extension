import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>SEO Extension built with React!</h1>

      <ul className="SEOForm">
        <li className="SEOValidation">
          <div className="SEOValidationField">
            <span className="SEOValidationFieldTitle">Title</span>
            <span className="SEOValidationFieldStatus Error">
              90 Characters
            </span>
          </div>
          <div className="SEOVAlidationFieldValue">
            The title of the page
          </div>
        </li>

        <li className="SEOValidation">
          <div className="SEOValidationField">
            <span className="SEOValidationFieldTitle">Number of Headings</span>
            <span className="SEOValidationFieldStatus Ok">
              Ok
            </span>
          </div>
          <div className="SEOVAlidationFieldValue">
            <ul>
              <li>1 H1</li>
              <li>3 H2</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default App;
