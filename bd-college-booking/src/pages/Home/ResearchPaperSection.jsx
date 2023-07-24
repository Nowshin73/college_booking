import React from 'react';

const ResearchPapersSection = ({ collegeName, researchPapers }) => {
  return (
    <div className="py-8 bg-blue-950 text-white p-4 h-[250px]">
      <h2 className="text-2xl font-bold mb-4">Research Papers for {collegeName}</h2>
      <ul className="list-decimal text-blue-300 pl-8">
        {researchPapers.map((paper, index) => (
          <li key={index}>
            <a href={paper.link} target="_blank" rel="noopener noreferrer" className="text-blue-300 font-semibold text-lg underline">
              {paper.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResearchPapersSection;
