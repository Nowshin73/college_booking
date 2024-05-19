import React from 'react';

const ResearchPapersSection = ({ collegeName, researchPapers }) => {
  return (
    <div className="py-8 bg-blue-950 text-white p-4 h-[300px] overflow-y-scroll">
      <h2 className="text-2xl font-bold mb-4">Research Papers for {collegeName}</h2>
      <ul className="list-decimal text-blue-300 pl-8">
        {researchPapers.map((paper, index) => (
          <li key={index}>
            <a href={paper.link} target="_blank" rel="noopener noreferrer" className="text-blue-300 font-semibold text-lg underline">
              {paper.title}
            </a> <br/>
            <p className='text-white font-semibold text-lg'>{paper.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResearchPapersSection;
