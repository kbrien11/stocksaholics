import React from 'react';

function Accordion(props) {
  return (
    <div className="accordion-container">
      <button className="accordion">
        <p className="accordion-title">{props.title}</p>
      </button>
      <div className="accordion-content">
        <div
          className="accordion-text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        ></div>
      </div>
    </div>
  );
}

export default Accordion;
