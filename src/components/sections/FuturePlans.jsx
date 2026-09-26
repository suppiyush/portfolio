import { FaBriefcase, FaBook } from 'react-icons/fa';
import { GiCardPlay } from 'react-icons/gi';
import Section from '../Section';
import { futurePlans } from '../../data/content';
import './FuturePlans.css';

const ICONS = {
  work: FaBriefcase,
  cards: GiCardPlay,
  books: FaBook,
};

export default function FuturePlans() {
  return (
    <Section id="future">
      <div className="future-intro">
        <div className="future-intro-label">{futurePlans.introLabel}</div>
        <p className="future-intro-text">{futurePlans.intro}</p>
      </div>

      <div className="future-list">
        {futurePlans.items.map((item) => {
          const Icon = ICONS[item.icon];
          return (
            <div className="future-item" key={item.title}>
              <div className="future-header">
                {Icon && <Icon className="future-icon" aria-hidden="true" />}
                <div className="future-title">{item.title}</div>
              </div>
              <p className="future-text">{item.text}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
