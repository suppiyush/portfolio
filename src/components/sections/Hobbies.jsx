import { FaChess, FaMusic, FaBook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Section from '../Section';
import { hobbies } from '../../data/content';
import './Hobbies.css';

const ICONS = {
  chess: FaChess,
  music: FaMusic,
  books: FaBook,
  x: FaXTwitter,
};

function renderText(text, highlight) {
  if (!highlight) return text;
  const index = text.indexOf(highlight);
  if (index === -1) return text;
  const before = text.slice(0, index);
  const after = text.slice(index + highlight.length);
  return (
    <>
      {before}
      <em className="hobby-highlight">{highlight}</em>
      {after}
    </>
  );
}

export default function Hobbies() {
  return (
    <Section id="hobbies">
      <div className="hobbies-list">
        {hobbies.items.map((hobby) => {
          const Icon = ICONS[hobby.icon];
          return (
            <div className="hobby" key={hobby.title}>
              <div className="hobby-header">
                {Icon && <Icon className="hobby-icon" aria-hidden="true" />}
                <div className="hobby-title">{hobby.title}</div>
              </div>
              <p className="hobby-text">{renderText(hobby.text, hobby.highlight)}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
