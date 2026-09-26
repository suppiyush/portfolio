import { HiOutlineDocumentText } from 'react-icons/hi';
import './ResumeLink.css';

export default function ResumeLink() {
  return (
    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-link">
      <HiOutlineDocumentText className="resume-link-icon" aria-hidden="true" />
      Resume
    </a>
  );
}
