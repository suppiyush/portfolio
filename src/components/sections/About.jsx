import Section from '../Section';
import { about } from '../../data/content';
import './About.css';

export default function About() {
  return (
    <Section id="about">
      <p className="about-bio">
        <span className="about-greeting">{about.greeting}</span>
        {about.bio}
      </p>
      <p className="about-joke">{about.joke}</p>
    </Section>
  );
}
