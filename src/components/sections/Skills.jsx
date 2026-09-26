import Section from '../Section';
import { skills } from '../../data/content';
import './Skills.css';

export default function Skills() {
  return (
    <Section id="skills">
      <div className="skills-groups">
        {skills.groups.map((group) => (
          <div className="skill-group" key={group.label}>
            <div className="skill-group-label">{group.label}</div>
            <div className="skill-tags">
              {group.items.map((item) => (
                <span className="skill-tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
