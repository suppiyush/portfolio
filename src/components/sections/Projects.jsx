import { useState } from 'react';
import { FaGithub, FaChevronDown } from 'react-icons/fa';
import Section from '../Section';
import { projects } from '../../data/content';
import { useIsMobile } from '../../hooks/useIsMobile';
import './Projects.css';

const STACK_ROW_SIZE = 4;

function chunkStack(items) {
  const rows = [];
  for (let i = 0; i < items.length; i += STACK_ROW_SIZE) {
    rows.push(items.slice(i, i + STACK_ROW_SIZE));
  }
  return rows;
}

export default function Projects() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [expandedQuestion, setExpandedQuestion] = useState(null);
  const isMobile = useIsMobile();
  const selected = projects.items[selectedIndex];

  const questions = [
    { key: 'what', label: 'What does it do?', answer: selected?.whatItDoes },
    { key: 'why', label: 'Why did I build this?', answer: selected?.whyBuilt },
  ];

  return (
    <Section id="projects">
      <div className="projects-cards">
        {projects.items.map((project, index) => (
          <div
            key={project.name}
            className={`project-card${index === selectedIndex ? ' project-card--active' : ''}`}
            role="button"
            tabIndex={0}
            onClick={() => setSelectedIndex(index)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                setSelectedIndex(index);
              }
            }}
          >
            <div className="project-card-header">
              <span className="project-name">{project.name}</span>
              <a
                href={project.link}
                className="project-link"
                aria-label={`${project.name} on GitHub`}
                onClick={(event) => event.stopPropagation()}
              >
                <FaGithub className="project-link-icon" aria-hidden="true" />
              </a>
            </div>
            <div className="project-stack">
              {chunkStack(project.stack).map((row, i) => (
                <div className="project-stack-row" key={i}>
                  {row.join(' · ')}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="project-details">
          {questions.map((q) => {
            if (!isMobile) {
              return (
                <div className="project-qa" key={q.key}>
                  <div className="project-question">{q.label}</div>
                  <p className="project-answer">{q.answer}</p>
                </div>
              );
            }

            const isOpen = expandedQuestion === q.key;
            return (
              <div className="project-qa project-qa--collapsible" key={q.key}>
                <button
                  type="button"
                  className="project-question-toggle"
                  aria-expanded={isOpen}
                  onClick={() => setExpandedQuestion(isOpen ? null : q.key)}
                >
                  <span className="project-question">{q.label}</span>
                  <FaChevronDown
                    className={`project-question-arrow${isOpen ? ' project-question-arrow--open' : ''}`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && <p className="project-answer">{q.answer}</p>}
              </div>
            );
          })}
        </div>
      )}

      <p className="projects-note">
        <span className="projects-note-label">Note: </span>
        {projects.note.prefix}
        <a href={projects.note.linkHref} className="projects-note-link">
          {projects.note.linkText}
        </a>
        {projects.note.suffix}
      </p>
    </Section>
  );
}
