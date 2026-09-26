import Section from '../Section';
import { education } from '../../data/content';
import './Education.css';

export default function Education() {
  return (
    <Section id="education">
      <div className="education-timeline">
        {education.items.map((item, index) => (
          <div className="timeline-item" key={item.institution + item.degree}>
            <div className="timeline-rail">
              <span className="timeline-dot" />
              {index < education.items.length - 1 && <span className="timeline-line" />}
            </div>
            <div className="timeline-content">
              <div className="education-institution">{item.institution}</div>
              <div className="education-degree">{item.degree}</div>
              <div className="education-duration">{item.duration}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
