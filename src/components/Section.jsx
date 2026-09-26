import './Section.css';

export default function Section({ id, bordered = true, children }) {
  return (
    <section id={id} className={`section${bordered ? '' : ' section--no-border'}`}>
      {children}
    </section>
  );
}
