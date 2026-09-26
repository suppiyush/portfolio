import Section from '../Section';
import { experience } from '../../data/content';
import './Experience.css';

export default function Experience() {
  return (
    <Section id="experience">
      {experience.jobs.map((job) => (
        <div className="job" key={job.title}>
          <div className="job-header">
            <div className="job-title">{job.title}</div>
            <div className="job-period">{job.period}</div>
          </div>
          <div className="job-company">
            <a href={job.companyLink} className="job-company-link">
              {job.company}
            </a>
            {job.location && <> · {job.location}</>}
          </div>
          <ul className="job-points">
            {job.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </Section>
  );
}
