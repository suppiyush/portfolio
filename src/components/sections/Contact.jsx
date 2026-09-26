import { HiOutlineMail } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord } from 'react-icons/fa';
import Section from '../Section';
import { contact } from '../../data/content';
import './Contact.css';

const ICONS = {
  email: HiOutlineMail,
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  discord: FaDiscord,
};

export default function Contact() {
  return (
    <Section id="contact" bordered={false}>
      <p className="contact-intro">{contact.intro}</p>
      <div className="contact-links">
        {contact.links.map((link) => {
          const Icon = ICONS[link.icon];
          const Tag = link.href ? 'a' : 'div';
          return (
            <Tag
              href={link.href || undefined}
              className="contact-link"
              key={link.label}
              aria-label={link.label}
            >
              {Icon && <Icon className="contact-link-icon" aria-hidden="true" />}
              <span className="contact-link-value">{link.value}</span>
            </Tag>
          );
        })}
      </div>
    </Section>
  );
}
